import { useEffect, useState } from 'react';
import { Cpu, Database, GitBranch, Layers, Sparkles } from 'lucide-react';
import { Lang, MEMORY_PIPELINE_STAGES } from '../data/profile';

interface MemoryPipelineCardProps {
  lang: Lang;
}

const STAGE_ICONS = [Sparkles, GitBranch, Layers, Database];

export function MemoryPipelineCard({ lang }: MemoryPipelineCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MEMORY_PIPELINE_STAGES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [autoPlay]);

  const activeStage = MEMORY_PIPELINE_STAGES[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-editorial sm:p-7 dark:border-zinc-800/90 dark:bg-[#12161C]">
      {/* Top subtle accent hairline */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#D97706]" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
            <Cpu className="h-5 w-5" />
          </span>
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4]">
              {lang === 'zh' ? '当前核心架构 · 巨人网络' : 'NOW ARCHITECTING · GIANT NETWORK'}
            </p>
            <h2 className="mt-0.5 text-base font-bold text-zinc-900 sm:text-lg dark:text-zinc-100">
              {lang === 'zh'
                ? '游戏 AI 角色长期记忆检索链路'
                : 'Game AI Character Long-Term Memory Pipeline'}
            </h2>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setAutoPlay((v) => !v)}
          className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs font-medium text-zinc-500 transition hover:border-[#0F766E]/40 hover:text-[#0F766E] dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-[#5EEAD4]"
        >
          {autoPlay
            ? lang === 'zh'
              ? '自动演示中'
              : 'Auto'
            : lang === 'zh'
              ? '手动查看'
              : 'Manual'}
        </button>
      </div>

      {/* Interactive Stage Selector */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {MEMORY_PIPELINE_STAGES.map((stage, idx) => {
          const Icon = STAGE_ICONS[idx];
          const isActive = idx === activeIndex;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => {
                setAutoPlay(false);
                setActiveIndex(idx);
              }}
              className={`group relative flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                isActive
                  ? 'border-[#0F766E] bg-[#0F766E]/[0.06] dark:border-[#2DD4BF]/70 dark:bg-[#2DD4BF]/10'
                  : 'border-zinc-200/80 bg-zinc-50/70 hover:border-zinc-300 hover:bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700'
              }`}
            >
              <div className="flex w-full items-center justify-between">
                <span
                  className={`font-mono text-xs font-semibold ${
                    isActive
                      ? 'text-[#0F766E] dark:text-[#5EEAD4]'
                      : 'text-zinc-400 dark:text-zinc-500'
                  }`}
                >
                  {stage.step}
                </span>
                <Icon
                  className={`h-4 w-4 transition-colors ${
                    isActive
                      ? 'text-[#0F766E] dark:text-[#5EEAD4]'
                      : 'text-zinc-400 group-hover:text-zinc-600 dark:text-zinc-500'
                  }`}
                />
              </div>
              <span
                className={`mt-2.5 line-clamp-2 text-[13px] font-semibold leading-snug sm:text-sm ${
                  isActive
                    ? 'text-zinc-900 dark:text-zinc-100'
                    : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {stage.label[lang]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Box */}
      <div
        key={activeStage.id}
        className="mt-5 animate-fade-up rounded-xl border border-zinc-200/80 bg-[#FAF9F5] p-5 dark:border-zinc-800 dark:bg-[#0D1015]"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-semibold text-[#0F766E] sm:text-[13px] dark:text-[#5EEAD4]">
            STAGE {activeStage.step} · {activeStage.tech}
          </span>
          <span className="rounded-md bg-amber-500/10 px-2.5 py-1 font-mono text-xs font-medium text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
            {activeStage.metric[lang]}
          </span>
        </div>
        <p className="mt-2.5 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {activeStage.summary[lang]}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
          {activeStage.detail[lang]}
        </p>
      </div>

      {/* Bottom hint */}
      <div className="mt-4 flex items-center justify-between font-mono text-xs text-zinc-400 dark:text-zinc-500">
        <span>
          {lang === 'zh' ? '点击上方任意节点查看实现细节' : 'Click any pipeline stage to inspect'}
        </span>
        <span>Rust · TS · BGE-M3 · OSS</span>
      </div>
    </div>
  );
}
