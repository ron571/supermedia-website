"use client";

import { useState } from "react";
import { websites, socialPlatforms } from "@/data/nz-digital-audiences";
import type { AgeGroup, Gender } from "@/data/nz-digital-audiences";

// Compute "all adults / all genders" baseline rank order for rank-change display
const baselineWebsiteOrder = [...websites]
  .sort((a, b) => b.ageIndex["all"] * b.genderIndex["all"] * b.monthlyVisits - a.ageIndex["all"] * a.genderIndex["all"] * a.monthlyVisits)
  .map((s) => s.domain);

const baselineSocialOrder = [...socialPlatforms]
  .sort((a, b) => b.ageIndex["all"] * b.genderIndex["all"] * b.users - a.ageIndex["all"] * a.genderIndex["all"] * a.users)
  .map((s) => s.platform);

function RankChange({ current, baseline }: { current: number; baseline: number }) {
  const delta = baseline - current; // positive = moved up
  if (delta === 0) return <span className="text-xs text-grey-dark/40 w-8 inline-block text-center">—</span>;
  if (delta > 0) return <span className="text-xs font-bold text-emerald-600 w-8 inline-block text-center">▲{delta}</span>;
  return <span className="text-xs font-bold text-red-500 w-8 inline-block text-center">▼{Math.abs(delta)}</span>;
}

function IndexBadge({ index }: { index: number }) {
  if (index >= 130) return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">Strong ↑ {index}</span>;
  if (index >= 115) return <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 rounded px-1.5 py-0.5">↑ {index}</span>;
  if (index <= 60) return <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded px-1.5 py-0.5">Low ↓ {index}</span>;
  if (index <= 80) return <span className="text-xs font-semibold text-amber-700 bg-amber-50 rounded px-1.5 py-0.5">↓ {index}</span>;
  return <span className="text-xs text-grey-dark bg-grey-light rounded px-1.5 py-0.5">Avg {index}</span>;
}

function formatReach(n: number): string {
  if (n >= 1) return `${n.toFixed(1)}M`;
  return `${Math.round(n * 1000)}K`;
}

const ageLabels: Record<AgeGroup, string> = { all: "All adults", "18-29": "18–29", "30-54": "30–54", "55plus": "55+" };
const genderLabels: Record<Gender, string> = { all: "All genders", female: "Female", male: "Male" };

export default function AudienceFilters() {
  const [ageFilter, setAgeFilter] = useState<AgeGroup>("all");
  const [genderFilter, setGenderFilter] = useState<Gender>("all");

  const isFiltered = ageFilter !== "all" || genderFilter !== "all";

  const filteredWebsites = [...websites].sort((a, b) => {
    const scoreA = a.ageIndex[ageFilter] * a.genderIndex[genderFilter] * a.monthlyVisits;
    const scoreB = b.ageIndex[ageFilter] * b.genderIndex[genderFilter] * b.monthlyVisits;
    return scoreB - scoreA;
  });

  const filteredSocial = [...socialPlatforms].sort((a, b) => {
    const scoreA = a.ageIndex[ageFilter] * a.genderIndex[genderFilter] * a.users;
    const scoreB = b.ageIndex[ageFilter] * b.genderIndex[genderFilter] * b.users;
    return scoreB - scoreA;
  });

  const FilterControls = () => (
    <div className="flex flex-wrap gap-6 mb-8">
      <div>
        <label className="text-xs font-semibold text-navy uppercase tracking-wide block mb-2">Age group</label>
        <div className="flex gap-2">
          {(["all", "18-29", "30-54", "55plus"] as AgeGroup[]).map((age) => (
            <button key={age} onClick={() => setAgeFilter(age)} className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${ageFilter === age ? "bg-navy text-white" : "bg-white text-navy border border-grey-mid hover:border-navy"}`}>
              {ageLabels[age]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-navy uppercase tracking-wide block mb-2">Gender</label>
        <div className="flex gap-2">
          {(["all", "female", "male"] as Gender[]).map((g) => (
            <button key={g} onClick={() => setGenderFilter(g)} className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${genderFilter === g ? "bg-navy text-white" : "bg-white text-navy border border-grey-mid hover:border-navy"}`}>
              {genderLabels[g]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Top 10 Websites Filtered */}
      <section className="bg-grey-light py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Top 10 NZ websites — by audience demographic</h2>
          <p className="text-grey-dark mb-6 max-w-2xl">Ranked by estimated audience affinity for your selected demographic. Based on SemRush monthly visit data (April 2026) adjusted by Nielsen audience index for each group.</p>
          <FilterControls />

          {isFiltered && (
            <div className="bg-navy/5 border border-navy/20 rounded p-3 mb-4 text-xs text-navy">
              <strong>How to read this:</strong> "Est. reach" shows estimated monthly visits from your selected demographic (total visits × audience index). Rank change (▲▼) vs All adults baseline. Sites with high indexes but small total audiences can rank very differently vs the overall list.
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-2 text-navy font-semibold w-6">#</th>
                  {isFiltered && <th className="text-left py-3 pr-3 text-navy font-semibold w-12">Move</th>}
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Website</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Category</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">
                    {isFiltered ? "Est. demographic reach" : "Monthly visits (total NZ)"}
                  </th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Audience index</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredWebsites.map((site, i) => {
                  const ageIdx = site.ageIndex[ageFilter];
                  const genIdx = site.genderIndex[genderFilter];
                  const combinedIdx = Math.round((ageIdx + genIdx) / 2);
                  const estReach = site.monthlyVisits * (ageIdx / 100) * (genIdx / 100);
                  const baselineRank = baselineWebsiteOrder.indexOf(site.domain) + 1;
                  return (
                    <tr key={site.domain} className="border-b border-grey-mid hover:bg-white transition-colors">
                      <td className="py-3 pr-2 text-grey-dark font-mono font-bold text-sm">{i + 1}</td>
                      {isFiltered && (
                        <td className="py-3 pr-3">
                          <RankChange current={i + 1} baseline={baselineRank} />
                        </td>
                      )}
                      <td className="py-3 pr-4 font-semibold text-navy">{site.domain}</td>
                      <td className="py-3 pr-4">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-grey-light text-grey-dark">{site.category}</span>
                      </td>
                      <td className="py-3 pr-4 text-grey-dark">
                        {isFiltered ? (
                          <span>
                            <span className="font-semibold text-navy">{formatReach(estReach)}</span>
                            <span className="text-grey-dark/50 text-xs ml-1">(of {site.monthlyVisits}M total)</span>
                          </span>
                        ) : (
                          <span>{site.monthlyVisits}M</span>
                        )}
                      </td>
                      <td className="py-3 pr-4"><IndexBadge index={combinedIdx} /></td>
                      <td className="py-3 text-grey-dark text-xs">{site.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">
            {isFiltered
              ? "Est. demographic reach = total NZ monthly visits × age index × gender index. Index 100 = average. Rank change shown vs All adults baseline."
              : "Index based on publicly available Nielsen Digital Ratings demographic composition data. Select a demographic above to see how rankings shift. 100 = average NZ internet user."}
          </p>
        </div>
      </section>

      {/* Top 5 Social Media Filtered */}
      <section className="bg-white py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-navy text-2xl font-bold mb-2">Top 5 social media platforms — by demographic</h2>
          <p className="text-grey-dark mb-6 max-w-2xl">Ranked by estimated relevance for selected demographic. Total NZ users from NapoleonCat December 2025 data, adjusted by age/gender index.</p>
          <FilterControls />

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-navy">
                  <th className="text-left py-3 pr-2 text-navy font-semibold w-6">#</th>
                  {isFiltered && <th className="text-left py-3 pr-3 text-navy font-semibold w-12">Move</th>}
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Platform</th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">
                    {isFiltered ? "Est. demographic users" : "Total NZ users"}
                  </th>
                  <th className="text-left py-3 pr-4 text-navy font-semibold">Audience index</th>
                  <th className="text-left py-3 text-navy font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredSocial.map((p, i) => {
                  const ageIdx = p.ageIndex[ageFilter];
                  const genIdx = p.genderIndex[genderFilter];
                  const combinedIdx = Math.round((ageIdx + genIdx) / 2);
                  const estUsers = Math.round(p.users * (ageIdx / 100) * (genIdx / 100));
                  const baselineRank = baselineSocialOrder.indexOf(p.platform) + 1;
                  return (
                    <tr key={p.platform} className="border-b border-grey-mid hover:bg-white transition-colors">
                      <td className="py-3 pr-2 text-grey-dark font-mono font-bold text-sm">{i + 1}</td>
                      {isFiltered && (
                        <td className="py-3 pr-3">
                          <RankChange current={i + 1} baseline={baselineRank} />
                        </td>
                      )}
                      <td className="py-3 pr-4 font-semibold text-navy">{p.platform}</td>
                      <td className="py-3 pr-4 text-grey-dark">
                        {isFiltered ? (
                          <span>
                            <span className="font-semibold text-navy">{estUsers.toLocaleString()}</span>
                            <span className="text-grey-dark/50 text-xs ml-1">(of {p.users.toLocaleString()} total)</span>
                          </span>
                        ) : (
                          <span>{p.users.toLocaleString()}</span>
                        )}
                      </td>
                      <td className="py-3 pr-4"><IndexBadge index={combinedIdx} /></td>
                      <td className="py-3 text-grey-dark text-xs">{p.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-grey-dark mt-4">
            {isFiltered
              ? "Est. demographic users = total NZ users × age index × gender index. Rank change shown vs All adults baseline."
              : "Index 100 = platform-average NZ user. Strong = 130+. Select a demographic above — TikTok and Reddit move dramatically for younger groups."}
          </p>
        </div>
      </section>
    </>
  );
}
