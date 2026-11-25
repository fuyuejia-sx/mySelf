import { BrainCircuit, Layout, Server, ShieldCheck, Wand2 } from 'lucide-react';
import { AI_TOOLCHAIN, Lang, SKILL_GROUPS } from '../data/profile';

interface SkillsSectionProps {
  lang: Lang;
}

const ICON_MAP = {
  layout: Layout,
  brain: BrainCircuit,
  server: Server,
  shield: ShieldCheck,
};

export function SkillsSection({ lang }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E] sm:text-sm dark:text-[#5EEAD4]">
          03 / TECHNICAL MATRIX
        </p>
        <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {lang === 'zh' ? '专业技能与工程栈' : 'Skills & Engineering Stack'}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-[17px] dark:text-zinc-400">
          {lang === 'zh'
            ? '以 TypeScript / React / Next.js 与 AI Agent / 检索工程为核心双引擎，兼备 Node.js、Python、Rust 与 Redis 数据持久化实践。'
            : 'Dual-track strength across TypeScript/React/Next.js frontend architecture and AI Agent/memory retrieval engineering, supported by Node.js, Python, Rust, and Redis.'}
        </p>
      </div>

      {/* 4-Pillar Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => {
          const Icon = ICON_MAP[group.icon];
          return (
            <div
              key={group.id}
              className="rounded-2xl border border-zinc-200/90 bg-white p-7 shadow-editorial transition hover:border-[#0F766E]/40 dark:border-zinc-800/90 dark:bg-[#12161C] dark:hover:border-[#2DD4BF]/40"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {group.title[lang]}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs text-zinc-500 sm:text-[13px] dark:text-zinc-400">
                    {group.subtitle[lang]}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className={`rounded-lg px-3 py-1.5 font-mono text-xs transition sm:text-sm ${
                      item.highlight
                        ? 'border border-[#0F766E]/30 bg-[#0F766E]/[0.08] font-semibold text-[#0F766E] dark:border-[#2DD4BF]/35 dark:bg-[#2DD4BF]/12 dark:text-[#5EEAD4]'
                        : 'border border-zinc-200/90 bg-[#FAF9F5] text-zinc-700 dark:border-zinc-800 dark:bg-[#0D1015] dark:text-zinc-300'
                    }`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* AI-Native Toolchain Banner */}
      <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-zinc-200/90 bg-gradient-to-r from-white via-[#F0FDF9]/70 to-white p-6 sm:flex-row sm:items-center sm:px-8 dark:border-zinc-800 dark:from-[#12161C] dark:via-[#0F2422]/60 dark:to-[#12161C]">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F766E] text-white dark:bg-[#14B8A6] dark:text-[#0B0E11]">
            <Wand2 className="h-5 w-5" />
          </span>
          <div>
            <p className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              {lang === 'zh' ? 'AI 原生研发工作流' : 'AI-Native Engineering Workflow'}
            </p>
            <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
              {lang === 'zh'
                ? '熟练结合大模型与工程规范工具链提升交付效率与代码质量'
                : 'Daily practitioner of AI coding agents, MCP workflows, and Harness Engineering standards'}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {AI_TOOLCHAIN.map((tool) => (
            <span
              key={tool}
              className="rounded-lg border border-[#0F766E]/25 bg-white px-3 py-1.5 font-mono text-xs font-semibold text-zinc-800 shadow-sm sm:text-sm dark:border-[#2DD4BF]/30 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
