'use client';

import { useEffect, useRef } from 'react';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

export interface ArticleChartDataset {
  label: string;
  data: (number | null)[];
  color: string;
}

export interface ArticleChartProps {
  title: string;
  source: string;
  labels: string[];
  datasets: ArticleChartDataset[];
  unit: string;
  max?: number;
  horizontal?: boolean;
}

export default function ArticleChart({
  title,
  source,
  labels,
  datasets,
  unit,
  max,
  horizontal = false,
}: ArticleChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)';
    const labelColor = isDark ? '#9E9D97' : '#6B6A64';

    const formatTick = (v: number | string) => {
      const n = Number(v);
      if (unit === 'k') return `${Math.round(n / 1000)}k`;
      if (unit === '%') return `${n}%`;
      return String(v);
    };

    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels,
        datasets: datasets.map((d) => ({
          label: d.label,
          data: d.data,
          backgroundColor: d.color,
          borderRadius: 3,
          borderSkipped: false,
          skipNull: true,
        })),
      },
      options: {
        indexAxis: horizontal ? 'y' : 'x',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                if (ctx.raw === null || ctx.raw === undefined) return '';
                const val = ctx.raw as number;
                if (unit === 'k') return ` ${Math.round(val / 1000)}k viewers`;
                return ` ${val}${unit}`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: {
              color: labelColor,
              font: { size: 11 },
              callback: horizontal ? formatTick : undefined,
            },
            max: horizontal ? max : undefined,
            min: 0,
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: labelColor,
              font: { size: 11 },
              callback: !horizontal ? formatTick : undefined,
            },
            max: !horizontal ? max : undefined,
            min: 0,
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, datasets, unit, max, horizontal]);

  const hasLegend = datasets.length > 1;
  const height = horizontal ? `${labels.length * 52 + 40}px` : '220px';

  return (
    <div className="my-8 border border-grey-mid rounded p-5">
      <p className="text-navy font-semibold text-sm mb-3">{title}</p>
      {hasLegend && (
        <div className="flex flex-wrap gap-4 mb-4">
          {datasets.map((d) => (
            <span key={d.label} className="flex items-center gap-1.5 text-xs text-grey-dark">
              <span
                className="inline-block flex-shrink-0 rounded-sm"
                style={{ width: 10, height: 10, backgroundColor: d.color }}
              />
              {d.label}
            </span>
          ))}
        </div>
      )}
      <div style={{ position: 'relative', height }}>
        <canvas ref={canvasRef} role="img" aria-label={title} />
      </div>
      <p className="text-xs text-grey-dark mt-3">{source}</p>
    </div>
  );
}
