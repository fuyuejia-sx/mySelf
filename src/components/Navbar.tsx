import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X, Languages } from 'lucide-react';
import { Lang, PROFILE } from '../data/profile';

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
  darkMode: boolean;
  onToggleDark: () => void;
}

const NAV_ITEMS = [
  { id: 'experience', zh: '实习经历', en: 'Experience' },
  { id: 'projects', zh: '精选项目', en: 'Projects' },
  { id: 'skills', zh: '技术矩阵', en: 'Skills' },
  { id: 'credentials', zh: '博客与教育', en: 'Writing & Edu' },
  { id: 'contact', zh: '联系我', en: 'Contact' },
];

export function Navbar({ lang, onToggleLang, darkMode, onToggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0);

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveId(NAV_ITEMS[i].id);
          return;
        }
      }
      setActiveId('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-zinc-200/80 bg-[#FAF9F5]/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-[#0B0E11]/85'
          : 'bg-transparent'
      }`}
    >
      {/* Reading progress bar */}
      <div
        className="h-[2px] bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#D97706] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-14">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F766E] font-mono text-xs font-semibold tracking-wider text-white shadow-sm transition-transform duration-200 group-hover:-rotate-3 dark:bg-[#14B8A6] dark:text-[#0B0E11]">
            {PROFILE.monogram}
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {PROFILE.name[lang]}
            </span>
            <span className="mt-1 font-mono text-[11px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              AI · Frontend
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1.5 md:flex" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-lg px-3.5 py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]'
                    : 'text-zinc-600 hover:bg-zinc-200/60 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-zinc-100'
                }`}
              >
                {item[lang]}
              </a>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleLang}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-zinc-200/90 bg-white/80 px-3 font-mono text-xs font-medium text-zinc-700 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] sm:text-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
            title={lang === 'zh' ? 'Switch to English' : '切换为中文'}
          >
            <Languages className="h-4 w-4" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleDark}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/90 bg-white/80 text-zinc-700 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
            aria-label="Toggle color theme"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200/90 bg-white/80 text-zinc-700 md:hidden dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="border-b border-zinc-200 bg-[#FAF9F5] px-4 pb-4 pt-2 md:hidden dark:border-zinc-800 dark:bg-[#0B0E11]">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200/60 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {item[lang]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
