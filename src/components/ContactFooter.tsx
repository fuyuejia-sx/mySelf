import { Check, Copy, ExternalLink, Globe, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { useState } from 'react';
import { Lang, PROFILE } from '../data/profile';

interface ContactFooterProps {
  lang: Lang;
  onNotify: (msg: string) => void;
}

export function ContactFooter({ lang, onNotify }: ContactFooterProps) {
  const [copiedKey, setCopiedKey] = useState<'email' | 'phone' | null>(null);

  const copyValue = async (key: 'email' | 'phone', value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      onNotify(lang === 'zh' ? `已复制${label}：${value}` : `Copied ${label}: ${value}`);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      onNotify(value);
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24 pb-16 pt-14">
      <div className="overflow-hidden rounded-3xl border border-zinc-200/90 bg-white p-8 shadow-editorial sm:p-12 dark:border-zinc-800/90 dark:bg-[#12161C]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0F766E] sm:text-sm dark:text-[#5EEAD4]">
              05 / LET’S CONNECT
            </p>
            <h2 className="mt-2.5 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
              {lang === 'zh'
                ? '期待与您探讨 AI 应用与前端工程'
                : 'Let’s Build Something Meaningful Together'}
            </h2>
            <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-[17px] dark:text-zinc-400">
              {lang === 'zh'
                ? '欢迎联系交流前端架构、AI Agent、长期记忆系统或 2027 届技术岗位与实习机会。'
                : 'Open to conversations around Frontend Architecture, AI Agents, Long-Term Memory Systems, and 2027 engineering opportunities.'}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                {PROFILE.location[lang]}
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#0F766E] dark:text-[#5EEAD4]" />
                <a
                  href={PROFILE.links.legacySite}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-zinc-300 underline-offset-4 transition hover:text-[#0F766E] dark:decoration-zinc-700 dark:hover:text-[#5EEAD4]"
                >
                  personalfyj.netlify.app
                </a>
              </span>
            </div>
          </div>

          <div className="space-y-3.5 lg:col-span-5">
            {/* Email Copy Card */}
            <button
              type="button"
              onClick={() => copyValue('email', PROFILE.email, lang === 'zh' ? '邮箱' : 'Email')}
              className="group flex w-full items-center justify-between rounded-xl border border-zinc-200/90 bg-[#FAF9F5] px-5 py-4 text-left transition hover:border-[#0F766E]/50 dark:border-zinc-800 dark:bg-[#0D1015] dark:hover:border-[#2DD4BF]/50"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    EMAIL
                  </div>
                  <div className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {PROFILE.email}
                  </div>
                </div>
              </div>
              <span className="text-zinc-400 transition group-hover:text-[#0F766E] dark:group-hover:text-[#5EEAD4]">
                {copiedKey === 'email' ? (
                  <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </span>
            </button>

            {/* Phone Copy Card */}
            <button
              type="button"
              onClick={() => copyValue('phone', PROFILE.phone, lang === 'zh' ? '电话' : 'Phone')}
              className="group flex w-full items-center justify-between rounded-xl border border-zinc-200/90 bg-[#FAF9F5] px-5 py-4 text-left transition hover:border-[#0F766E]/50 dark:border-zinc-800 dark:bg-[#0D1015] dark:hover:border-[#2DD4BF]/50"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F766E]/10 text-[#0F766E] dark:bg-[#2DD4BF]/15 dark:text-[#5EEAD4]">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    PHONE
                  </div>
                  <div className="font-mono text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {PROFILE.phone}
                  </div>
                </div>
              </div>
              <span className="text-zinc-400 transition group-hover:text-[#0F766E] dark:group-hover:text-[#5EEAD4]">
                {copiedKey === 'phone' ? (
                  <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </span>
            </button>

            {/* Action Buttons */}
            <div className="no-print flex flex-wrap gap-2.5 pt-1">
              <a
                href={PROFILE.links.csdnUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
              >
                <span>CSDN</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.links.shortLinkDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-[#0F766E]/50 hover:text-[#0F766E] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-[#2DD4BF]/50 dark:hover:text-[#5EEAD4]"
              >
                <span>{lang === 'zh' ? '短链服务' : 'Short-Link'}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0F766E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#115E59] dark:bg-[#14B8A6] dark:text-[#0B0E11] dark:hover:bg-[#2DD4BF]"
              >
                <Printer className="h-4 w-4" />
                <span>{lang === 'zh' ? '打印/导出' : 'Print'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-9 flex flex-col items-center justify-between gap-2 text-sm text-zinc-500 sm:flex-row dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {PROFILE.name[lang]} · Built with React, TypeScript & Tailwind CSS.
        </p>
        <p className="font-mono text-xs">
          {PROFILE.location[lang]} · {PROFILE.email}
        </p>
      </div>
    </footer>
  );
}
