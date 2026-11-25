import { useEffect, useState } from 'react';
import { ArrowDownRight, Check, Copy, Mail, MapPin, Sparkles } from 'lucide-react';
import { ContactFooter } from './components/ContactFooter';
import { CredentialsSection } from './components/CredentialsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MemoryPipelineCard } from './components/MemoryPipelineCard';
import { Navbar } from './components/Navbar';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Lang, PROFILE } from './data/profile';

export default function App() {
  const [lang, setLang] = useState<Lang>('zh');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem('fyj-theme');
    if (saved) return saved === 'dark';
    return false;
  });
  const [toast, setToast] = useState<string | null>(null);
  const [heroCopied, setHeroCopied] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      window.localStorage.setItem('fyj-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('fyj-theme', 'light');
    }
  }, [darkMode]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => {
      setToast((current) => (current === message ? null : current));
    }, 2400);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setHeroCopied(true);
      showToast(
        lang === 'zh'
          ? `已复制邮箱：${PROFILE.email}`
          : `Email copied: ${PROFILE.email}`
      );
      window.setTimeout(() => setHeroCopied(false), 2000);
    } catch {
      showToast(PROFILE.email);
    }
  };

  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      {/* Subtle Architectural Grid Backdrop */}
      <div
        aria-hidden="true"
        className="bg-editorial-grid pointer-events-none fixed inset-0 -z-10 opacity-80"
      />
      {/* Soft Radial Atmosphere Top-Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-[#0F766E]/[0.07] blur-3xl dark:bg-[#14B8A6]/[0.08]"
      />

      <Navbar
        lang={lang}
        onToggleLang={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))}
        darkMode={darkMode}
        onToggleDark={() => setDarkMode((d) => !d)}
      />

      <main className="mx-auto w-full max-w-[1440px] px-5 pt-24 sm:px-8 sm:pt-28 lg:px-12 xl:px-14">
        {/* HERO SECTION */}
        <section className="pb-16 pt-6 sm:pb-24 sm:pt-10">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
            {/* Left Identity & Narrative */}
            <div className="lg:col-span-6">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0F766E]/25 bg-[#0F766E]/[0.06] px-4 py-1.5 text-sm font-semibold text-[#0F766E] dark:border-[#2DD4BF]/30 dark:bg-[#2DD4BF]/10 dark:text-[#5EEAD4]">
                <span className="h-2 w-2 rounded-full bg-[#0F766E] animate-pulse-soft dark:bg-[#2DD4BF]" />
                <span>{PROFILE.statusBadge[lang]}</span>
              </div>

              {/* Name & Identity */}
              <div className="mt-6 flex flex-wrap items-baseline gap-4">
                <h1 className="text-5xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl dark:text-white">
                  {PROFILE.name[lang]}
                </h1>
                <span className="font-mono text-base font-medium text-zinc-400 sm:text-lg dark:text-zinc-500">
                  {lang === 'zh' ? PROFILE.name.en : PROFILE.name.zh}
                </span>
              </div>

              <p className="mt-4 text-xl font-semibold text-[#0F766E] sm:text-2xl dark:text-[#5EEAD4]">
                {PROFILE.headline[lang]}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-[17px] sm:leading-[1.8] dark:text-zinc-300">
                {PROFILE.tagline[lang]}
              </p>

              {/* Quick Meta Row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                  {PROFILE.location[lang]}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  {lang === 'zh' ? '西安邮电大学 · 物联网工程' : 'XUPT · IoT Engineering'}
                </span>
              </div>

              {/* Primary CTAs */}
              <div className="no-print mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0F766E] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#115E59] dark:bg-[#14B8A6] dark:text-[#0B0E11] dark:hover:bg-[#2DD4BF]"
                >
                  <span>{lang === 'zh' ? '浏览工程经历' : 'Explore Experience'}</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/90 bg-white px-5 py-3 text-base font-semibold text-zinc-800 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] dark:border-zinc-700 dark:bg-[#12161C] dark:text-zinc-200 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
                >
                  {heroCopied ? (
                    <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Mail className="h-4 w-4" />
                  )}
                  <span>{lang === 'zh' ? '复制联系邮箱' : 'Copy Email'}</span>
                  {!heroCopied && <Copy className="h-4 w-4 opacity-60" />}
                </button>
              </div>
            </div>

            {/* Right Interactive Architecture Spotlight */}
            <div className="lg:col-span-6">
              <MemoryPipelineCard lang={lang} />
            </div>
          </div>

          {/* Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-5 lg:grid-cols-4">
            {PROFILE.stats.map((stat) => (
              <div
                key={stat.label.en}
                className="rounded-2xl border border-zinc-200/80 bg-white/90 px-5 py-5 shadow-sm backdrop-blur-sm sm:px-6 dark:border-zinc-800/80 dark:bg-[#12161C]/90"
              >
                <div className="font-mono text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                  {lang === 'zh' ? stat.value : stat.valueEn}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-zinc-700 sm:text-[15px] dark:text-zinc-300">
                  {stat.label[lang]}
                </div>
                <div className="mt-1 text-xs text-zinc-500 sm:text-sm dark:text-zinc-400">
                  {stat.sub[lang]}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent dark:via-zinc-800" />

        <ExperienceSection lang={lang} />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent dark:via-zinc-800" />

        <ProjectsSection lang={lang} />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent dark:via-zinc-800" />

        <SkillsSection lang={lang} />

        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-300/80 to-transparent dark:via-zinc-800" />

        <CredentialsSection lang={lang} />

        <ContactFooter lang={lang} onNotify={showToast} />
      </main>

      {/* Toast Notification */}
      {toast && (
        <div
          role="status"
          className="no-print fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-fade-up rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 font-mono text-xs font-medium text-white shadow-lg dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-900"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
