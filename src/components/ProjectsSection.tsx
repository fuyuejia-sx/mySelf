import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Database,
  Link2,
  Play,
  RotateCcw,
  Terminal,
  Wrench,
  Sparkles,
  Search,
} from 'lucide-react';
import { AGENT_REPLAY_EVENTS, Lang, PROJECTS } from '../data/profile';

interface ProjectsSectionProps {
  lang: Lang;
}

function AgentReplayWidget({ lang }: { lang: Lang }) {
  const [visibleCount, setVisibleCount] = useState(AGENT_REPLAY_EVENTS.length);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    if (visibleCount >= AGENT_REPLAY_EVENTS.length) {
      setIsPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisibleCount((c) => c + 1);
    }, 850);
    return () => window.clearTimeout(timer);
  }, [isPlaying, visibleCount]);

  const handleReplay = () => {
    setVisibleCount(1);
    setIsPlaying(true);
  };

  const getEventBadge = (type: (typeof AGENT_REPLAY_EVENTS)[number]['type']) => {
    switch (type) {
      case 'thought':
        return {
          icon: Sparkles,
          label: 'SSE · THOUGHT',
          cls: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
        };
      case 'tool_call':
        return {
          icon: Wrench,
          label: 'TOOL CALL',
          cls: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
        };
      case 'rag':
        return {
          icon: Search,
          label: 'JACCARD RAG',
          cls: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
        };
      default:
        return {
          icon: Database,
          label: 'REDIS LOG',
          cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
        };
    }
  };

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#0D1117] text-zinc-200 shadow-inner">
      {/* Terminal Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 bg-[#141922] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-500" />
          </div>
          <Terminal className="ml-1 h-4 w-4 text-teal-400" />
          <span className="font-mono text-xs text-zinc-300 sm:text-sm">
            SSE Replay · <span className="text-teal-400">agent:run:8f3a92</span>
          </span>
        </div>

        <button
          type="button"
          onClick={handleReplay}
          className="inline-flex items-center gap-1.5 rounded-lg border border-teal-500/40 bg-teal-500/15 px-3 py-1.5 font-mono text-xs font-medium text-teal-300 transition hover:bg-teal-500/25"
        >
          {isPlaying ? (
            <>
              <RotateCcw className="h-3.5 w-3.5 animate-spin" />
              <span>{lang === 'zh' ? '流式回放中...' : 'Streaming...'}</span>
            </>
          ) : (
            <>
              <Play className="h-3.5 w-3.5 fill-current" />
              <span>{lang === 'zh' ? '模拟 SSE 回放' : 'Replay SSE Stream'}</span>
            </>
          )}
        </button>
      </div>

      {/* Events Stream */}
      <div className="space-y-3 p-5 font-mono text-xs sm:text-[13px]">
        {AGENT_REPLAY_EVENTS.slice(0, visibleCount).map((ev) => {
          const meta = getEventBadge(ev.type);
          const Icon = meta.icon;
          return (
            <div
              key={ev.id}
              className="animate-fade-up rounded-lg border border-zinc-800/90 bg-zinc-900/70 p-3.5 sm:p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`inline-flex items-center gap-1 rounded border px-2 py-0.5 text-[11px] font-semibold ${meta.cls}`}
                  >
                    <Icon className="h-3 w-3" />
                    {meta.label}
                  </span>
                  <span className="font-sans text-sm font-medium text-zinc-100">
                    {ev.title[lang]}
                  </span>
                </div>
                <span className="text-xs text-zinc-500">+{ev.timestamp}s</span>
              </div>
              <pre className="mt-2.5 overflow-x-auto whitespace-pre-wrap text-xs leading-relaxed text-zinc-300/90 sm:text-[13px]">
                {ev.payload}
              </pre>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E] sm:text-sm dark:text-[#5EEAD4]">
          02 / SELECTED PROJECTS
        </p>
        <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          {lang === 'zh' ? '代表性个人项目' : 'Featured Engineering Projects'}
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 sm:text-[17px] dark:text-zinc-400">
          {lang === 'zh'
            ? '从自主决策的 AI Agent 系统到容器化上线的全栈服务，注重架构简洁、零冗余依赖与工程可回放性。'
            : 'From autonomous LLM Agent workflows to live containerized full-stack services — engineered for clarity, reliability, and inspectability.'}
        </p>
      </div>

      <div className="mt-10 space-y-9">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-editorial transition duration-300 hover:shadow-editorial-hover sm:p-9 dark:border-zinc-800/90 dark:bg-[#12161C]"
          >
            {/* Top Row */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F766E]/10 px-3 py-0.5 font-mono text-xs font-semibold text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E] dark:bg-[#5EEAD4]" />
                    {project.status[lang]}
                  </span>
                  <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-[26px] dark:text-zinc-100">
                  {project.title[lang]}
                </h3>
                <p className="mt-1.5 text-base font-medium text-zinc-500 dark:text-zinc-400">
                  {project.subtitle[lang]}
                </p>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#115E59] dark:bg-[#14B8A6] dark:text-[#0B0E11] dark:hover:bg-[#2DD4BF]"
                >
                  <Link2 className="h-4 w-4" />
                  <span>{lang === 'zh' ? '访问线上服务' : 'Visit Live Demo'}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            {/* Summary */}
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-700 sm:text-base sm:leading-[1.8] dark:text-zinc-300">
              {project.summary[lang]}
            </p>

            {/* Architecture Pillars */}
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {project.architecture.map((arch, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200/80 bg-[#FAF9F5] p-5 sm:p-6 dark:border-zinc-800 dark:bg-[#0D1015]"
                >
                  <div className="font-mono text-xs font-semibold text-[#0F766E] dark:text-[#5EEAD4]">
                    0{i + 1}
                  </div>
                  <h4 className="mt-1.5 text-base font-bold text-zinc-900 dark:text-zinc-100">
                    {arch.label[lang]}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-[15px] dark:text-zinc-400">
                    {arch.detail[lang]}
                  </p>
                </div>
              ))}

              {/* Extra system flow box for 2-pillar short link project */}
              {project.architecture.length === 2 && (
                <div className="flex flex-col justify-between rounded-xl border border-dashed border-[#0F766E]/40 bg-[#0F766E]/[0.04] p-5 sm:p-6 dark:border-[#2DD4BF]/35 dark:bg-[#2DD4BF]/[0.06]">
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0F766E] dark:text-[#5EEAD4]">
                      {lang === 'zh' ? '在线访问地址' : 'LIVE ENDPOINT'}
                    </span>
                    <p className="mt-2 break-all font-mono text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {project.liveUrl}
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {lang === 'zh'
                      ? 'React 前端 → Express REST API → Redis Mapping & EXPIRE → Podman 容器化运行'
                      : 'React UI → Express API → Redis Mapping & EXPIRE → Podman Container'}
                  </p>
                </div>
              )}
            </div>

            {/* Interactive SSE Replay for AI Agent Project */}
            {project.hasInteractiveReplay && <AgentReplayWidget lang={lang} />}

            {/* Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-200/70 pt-5 dark:border-zinc-800/80">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1 font-mono text-xs font-medium text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
