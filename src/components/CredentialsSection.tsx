import { Award, BookOpen, ExternalLink, GraduationCap, Medal } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, Lang, WRITING } from '../data/profile';

interface CredentialsSectionProps {
  lang: Lang;
}

export function CredentialsSection({ lang }: CredentialsSectionProps) {
  return (
    <section id="credentials" className="scroll-mt-24 py-20 sm:py-24">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E] sm:text-sm dark:text-[#5EEAD4]">
          04 / WRITING, EDUCATION & CREDENTIALS
        </p>
        <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {lang === 'zh' ? '技术写作、教育与认证' : 'Technical Writing, Education & Certifications'}
        </h2>
      </div>

      <div className="mt-10 grid gap-7 lg:grid-cols-12">
        {/* CSDN Technical Writing Card */}
        <div className="flex flex-col justify-between rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-editorial sm:p-8 lg:col-span-7 dark:border-zinc-800/90 dark:bg-[#12161C]">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600/10 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 sm:text-xl dark:text-zinc-100">
                    {lang === 'zh' ? 'CSDN 个人技术博客' : 'CSDN Technical Blog'}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
                    ID: {WRITING.handle} · {lang === 'zh' ? WRITING.count : WRITING.countEn}
                  </p>
                </div>
              </div>

              <a
                href={WRITING.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3.5 py-2 font-mono text-xs font-medium text-zinc-700 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] sm:text-sm dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
              >
                <span>{lang === 'zh' ? '访问博客' : 'Read Blog'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Metrics */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {WRITING.metrics.map((m) => (
                <div
                  key={m.label.en}
                  className="rounded-xl border border-zinc-200/80 bg-[#FAF9F5] px-4 py-4 text-center dark:border-zinc-800 dark:bg-[#0D1015]"
                >
                  <div className="font-mono text-2xl font-bold text-[#0F766E] dark:text-[#5EEAD4]">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-zinc-500 sm:text-sm dark:text-zinc-400">
                    {m.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Representative Topics */}
            <div className="mt-6 space-y-3">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {lang === 'zh' ? '代表原创主题' : 'FEATURED TOPICS'}
              </p>
              {WRITING.topics.map((topic, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-200/70 bg-zinc-50/70 px-4 py-3.5 dark:border-zinc-800/80 dark:bg-zinc-900/50"
                >
                  <span className="text-[15px] font-semibold text-zinc-800 sm:text-base dark:text-zinc-200">
                    {topic.title[lang]}
                  </span>
                  <span className="rounded-md bg-[#0F766E]/10 px-2.5 py-1 font-mono text-xs font-semibold text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                    {topic.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Education + Certifications */}
        <div className="flex flex-col gap-7 lg:col-span-5">
          {/* Education Card */}
          <div className="rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-editorial dark:border-zinc-800/90 dark:bg-[#12161C]">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {EDUCATION.school[lang]}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {EDUCATION.major[lang]}
                  </p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs font-medium text-zinc-500 sm:text-sm dark:text-zinc-400">
                {EDUCATION.period}
              </span>
            </div>

            <ul className="mt-5 space-y-3 border-t border-zinc-200/70 pt-5 dark:border-zinc-800/80">
              {EDUCATION.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 sm:text-[15px] dark:text-zinc-300"
                >
                  <Medal className="mt-1 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications Card */}
          <div className="flex-1 rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-editorial dark:border-zinc-800/90 dark:bg-[#12161C]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {lang === 'zh' ? '专业技能证书' : 'Certifications'}
              </h3>
            </div>

            <div className="mt-5 space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name.en}
                  className="flex items-center justify-between gap-2 rounded-xl border border-zinc-200/80 bg-[#FAF9F5] px-4 py-3.5 dark:border-zinc-800 dark:bg-[#0D1015]"
                >
                  <span className="text-sm font-semibold text-zinc-800 sm:text-[15px] dark:text-zinc-200">
                    {cert.name[lang]}
                  </span>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
