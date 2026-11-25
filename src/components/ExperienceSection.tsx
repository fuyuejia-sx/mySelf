import { useState } from 'react';
import { Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import { EXPERIENCES, Lang } from '../data/profile';

interface ExperienceSectionProps {
  lang: Lang;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const [selectedCompany, setSelectedCompany] = useState<string>('all');

  const filtered =
    selectedCompany === 'all'
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.id === selectedCompany);

  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E] sm:text-sm dark:text-[#5EEAD4]">
            01 / EXPERIENCE
          </p>
          <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            {lang === 'zh' ? '实习经历与工程实践' : 'Internship Experience'}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-[17px] dark:text-zinc-400">
            {lang === 'zh'
              ? '横跨 AI 游戏客户端研发与海外内容平台前端工程，专注高复杂度检索、数据一致性、首屏性能与安全防线。'
              : 'Spanning AI game client engineering and international streaming web architecture — focused on retrieval pipelines, data consistency, Web Vitals, and security.'}
          </p>
        </div>

        {/* Company Filter */}
        <div className="inline-flex self-start rounded-xl border border-zinc-200/90 bg-white p-1.5 dark:border-zinc-800 dark:bg-[#12161C]">
          {[
            { id: 'all', zh: '全部 (2)', en: 'All (2)' },
            { id: 'giant-network', zh: '巨人网络', en: 'Giant Network' },
            { id: 'iqiyi', zh: '爱奇艺', en: 'iQIYI' },
          ].map((tab) => {
            const active = selectedCompany === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCompany(tab.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-[#0F766E] text-white shadow-sm dark:bg-[#14B8A6] dark:text-[#0B0E11]'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100'
                }`}
              >
                {tab[lang]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Experience Cards */}
      <div className="mt-10 space-y-10">
        {filtered.map((exp) => {
          const isPine = exp.accent === 'pine';
          return (
            <article
              key={exp.id}
              className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white shadow-editorial dark:border-zinc-800/90 dark:bg-[#12161C]"
            >
              {/* Company Header */}
              <div className="border-b border-zinc-200/80 bg-zinc-50/70 px-6 py-6 sm:px-9 sm:py-7 dark:border-zinc-800/80 dark:bg-zinc-900/40">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-4">
                    <div
                      className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        isPine
                          ? 'bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]'
                          : 'bg-amber-600/10 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300'
                      }`}
                    >
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-zinc-100">
                          {exp.company[lang]}
                        </h3>
                        <span
                          className={`rounded-full px-3 py-0.5 font-mono text-xs font-medium ${
                            isPine
                              ? 'bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]'
                              : 'bg-amber-600/10 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300'
                          }`}
                        >
                          {exp.badge[lang]}
                        </span>
                      </div>
                      <p className="mt-1 text-base font-medium text-zinc-700 dark:text-zinc-300">
                        {exp.role[lang]}
                      </p>
                    </div>
                  </div>
                  <div className="font-mono text-sm font-medium text-zinc-500 sm:text-right dark:text-zinc-400">
                    {exp.period[lang]}
                  </div>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-400">
                  {exp.overview[lang]}
                </p>
              </div>

              {/* Sub-projects / Highlights Grid */}
              <div className="grid gap-6 p-6 sm:p-9 lg:grid-cols-2 lg:gap-7">
                {exp.highlights.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between rounded-xl border border-zinc-200/80 bg-[#FAF9F5]/80 p-6 transition duration-200 hover:border-[#0F766E]/40 hover:shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-[#0D1015]/80 dark:hover:border-[#2DD4BF]/40"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4]">
                          {item.category[lang]}
                        </span>
                        <span className="rounded-md bg-zinc-200/70 px-2.5 py-0.5 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="mt-2.5 text-lg font-bold text-zinc-900 sm:text-[19px] dark:text-zinc-100">
                        {item.title[lang]}
                      </h4>

                      {item.problem && (
                        <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {item.problem[lang]}
                        </p>
                      )}

                      <ul className="mt-4 space-y-3">
                        {item.points.map((pt, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 sm:text-[15px] sm:leading-[1.7] dark:text-zinc-300"
                          >
                            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#0F766E] dark:text-[#5EEAD4]" />
                            <span>{pt[lang]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 space-y-3.5 border-t border-zinc-200/70 pt-4 dark:border-zinc-800/80">
                      {item.impact && (
                        <div className="flex items-start gap-2 rounded-lg bg-[#0F766E]/[0.06] px-3.5 py-2.5 text-sm font-medium text-[#0F766E] dark:bg-[#2DD4BF]/10 dark:text-[#5EEAD4]">
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{item.impact[lang]}</span>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-zinc-200/90 bg-white px-2.5 py-1 font-mono text-xs text-zinc-600 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
