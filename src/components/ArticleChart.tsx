'use client';

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

function formatVal(val: number, unit: string): string {
  if (unit === 'k') return `${Math.round(val / 1000)}k`;
  if (unit === '%') return `${val}%`;
  return String(val);
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
  const hasLegend = datasets.length > 1;
  const allValues = datasets.flatMap((d) => d.data.filter((v): v is number => v !== null));
  const dataMax = allValues.length ? Math.max(...allValues) : 100;
  const axisMax = max ?? Math.ceil(dataMax * 1.15);

  if (horizontal) {
    return <HorizontalChart title={title} source={source} labels={labels} datasets={datasets} unit={unit} axisMax={axisMax} hasLegend={hasLegend} />;
  }
  return <VerticalChart title={title} source={source} labels={labels} datasets={datasets} unit={unit} axisMax={axisMax} hasLegend={hasLegend} />;
}

function VerticalChart({ title, source, labels, datasets, unit, axisMax, hasLegend }: {
  title: string; source: string; labels: string[]; datasets: ArticleChartDataset[];
  unit: string; axisMax: number; hasLegend: boolean;
}) {
  const W = 600;
  const H = 260;
  const padL = 44;
  const padR = 12;
  const padT = 12;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const numGroups = labels.length;
  const numDatasets = datasets.length;
  const groupW = chartW / numGroups;
  const barW = Math.min((groupW / numDatasets) * 0.75, 32);
  const groupGap = (groupW - barW * numDatasets) / 2;
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (axisMax / tickCount) * i);

  return (
    <div className="my-8 border border-grey-mid rounded p-5">
      <p className="text-navy font-semibold text-sm mb-3">{title}</p>
      {hasLegend && (
        <div className="flex flex-wrap gap-4 mb-4">
          {datasets.map((d) => (
            <span key={d.label} className="flex items-center gap-1.5 text-xs text-grey-dark">
              <span className="inline-block flex-shrink-0 rounded-sm" style={{ width: 10, height: 10, backgroundColor: d.color }} />
              {d.label}
            </span>
          ))}
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: 300 }} aria-label={title}>
          {ticks.map((tick) => {
            const y = padT + chartH - (tick / axisMax) * chartH;
            return (
              <g key={tick}>
                <line x1={padL} x2={W - padR} y1={y} y2={y} stroke="#e5e4df" strokeWidth={1} />
                <text x={padL - 6} y={y + 4} textAnchor="end" fontSize={10} fill="#9e9d97">
                  {formatVal(tick, unit)}
                </text>
              </g>
            );
          })}
          {labels.map((label, gi) => {
            const groupX = padL + gi * groupW;
            return (
              <g key={label}>
                {datasets.map((ds, di) => {
                  const val = ds.data[gi];
                  if (val === null || val === undefined) return null;
                  const barH = (val / axisMax) * chartH;
                  const x = groupX + groupGap + di * barW;
                  const y = padT + chartH - barH;
                  return <rect key={ds.label} x={x} y={y} width={barW - 2} height={barH} fill={ds.color} rx={2} />;
                })}
                <text x={groupX + groupW / 2} y={padT + chartH + 14} textAnchor="middle" fontSize={10} fill="#6b6a64">
                  {label.length > 10 ? label.slice(0, 9) + '…' : label}
                </text>
              </g>
            );
          })}
          <line x1={padL} x2={padL} y1={padT} y2={padT + chartH} stroke="#d1d0cb" strokeWidth={1} />
          <line x1={padL} x2={W - padR} y1={padT + chartH} y2={padT + chartH} stroke="#d1d0cb" strokeWidth={1} />
        </svg>
      </div>
      <p className="text-xs text-grey-dark mt-3">{source}</p>
    </div>
  );
}

function HorizontalChart({ title, source, labels, datasets, unit, axisMax, hasLegend }: {
  title: string; source: string; labels: string[]; datasets: ArticleChartDataset[];
  unit: string; axisMax: number; hasLegend: boolean;
}) {
  const numDatasets = datasets.length;
  const rowH = 28;
  const groupH = rowH * numDatasets + (numDatasets - 1) * 2;
  const rowGap = 12;
  const labelW = 130;
  const padT = 8;
  const padB = 28;
  const padR = 48;
  const W = 600;
  const chartW = W - labelW - padR;
  const H = padT + labels.length * (groupH + rowGap) + padB;
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) => (axisMax / tickCount) * i);

  return (
    <div className="my-8 border border-grey-mid rounded p-5">
      <p className="text-navy font-semibold text-sm mb-3">{title}</p>
      {hasLegend && (
        <div className="flex flex-wrap gap-4 mb-4">
          {datasets.map((d) => (
            <span key={d.label} className="flex items-center gap-1.5 text-xs text-grey-dark">
              <span className="inline-block flex-shrink-0 rounded-sm" style={{ width: 10, height: 10, backgroundColor: d.color }} />
              {d.label}
            </span>
          ))}
        </div>
      )}
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ minWidth: 300 }} aria-label={title}>
          {ticks.map((tick) => {
            const x = labelW + (tick / axisMax) * chartW;
            return (
              <g key={tick}>
                <line x1={x} x2={x} y1={padT} y2={H - padB} stroke="#e5e4df" strokeWidth={1} />
                <text x={x} y={H - padB + 14} textAnchor="middle" fontSize={10} fill="#9e9d97">
                  {formatVal(tick, unit)}
                </text>
              </g>
            );
          })}
          {labels.map((label, gi) => {
            const groupY = padT + gi * (groupH + rowGap);
            return (
              <g key={label}>
                <text x={labelW - 8} y={groupY + groupH / 2 + 4} textAnchor="end" fontSize={10} fill="#6b6a64">
                  {label.length > 18 ? label.slice(0, 17) + '…' : label}
                </text>
                {datasets.map((ds, di) => {
                  const val = ds.data[gi];
                  if (val === null || val === undefined) return null;
                  const barW = (val / axisMax) * chartW;
                  const y = groupY + di * (rowH + 2);
                  return (
                    <g key={ds.label}>
                      <rect x={labelW} y={y} width={barW} height={rowH - 4} fill={ds.color} rx={2} />
                      <text x={labelW + barW + 4} y={y + (rowH - 4) / 2 + 4} fontSize={10} fill="#6b6a64">
                        {formatVal(val, unit)}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
          <line x1={labelW} x2={labelW} y1={padT} y2={H - padB} stroke="#d1d0cb" strokeWidth={1} />
          <line x1={labelW} x2={W - padR} y1={H - padB} y2={H - padB} stroke="#d1d0cb" strokeWidth={1} />
        </svg>
      </div>
      <p className="text-xs text-grey-dark mt-3">{source}</p>
    </div>
  );
}
