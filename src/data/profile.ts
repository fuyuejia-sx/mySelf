export type Lang = 'zh' | 'en';

export interface BilingualText {
  zh: string;
  en: string;
}

export interface MemoryPipelineStage {
  id: string;
  step: string;
  label: BilingualText;
  tech: string;
  summary: BilingualText;
  detail: BilingualText;
  metric: BilingualText;
}

export interface ExperienceItem {
  id: string;
  company: BilingualText;
  role: BilingualText;
  period: BilingualText;
  location?: BilingualText;
  badge: BilingualText;
  accent: 'pine' | 'amber';
  overview: BilingualText;
  highlights: {
    id: string;
    category: BilingualText;
    tag: string;
    title: BilingualText;
    problem?: BilingualText;
    points: BilingualText[];
    impact?: BilingualText;
    stack: string[];
  }[];
}

export interface AgentReplayEvent {
  id: string;
  type: 'thought' | 'tool_call' | 'rag' | 'result' | 'redis';
  timestamp: string;
  title: BilingualText;
  payload: string;
}

export interface ProjectItem {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  period: string;
  status: BilingualText;
  liveUrl?: string;
  summary: BilingualText;
  stack: string[];
  architecture: {
    label: BilingualText;
    detail: BilingualText;
  }[];
  hasInteractiveReplay?: boolean;
}

export interface SkillGroup {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  icon: 'layout' | 'brain' | 'server' | 'shield';
  items: { name: string; highlight?: boolean }[];
}

export const PROFILE = {
  name: { zh: '付越佳', en: 'Yuejia Fu' },
  monogram: 'FYJ',
  age: 21,
  location: { zh: '陕西省西安市', en: 'Xi’an, Shaanxi, China' },
  email: '2298594536@qq.com',
  phone: '19591175362',
  statusBadge: {
    zh: '巨人网络在职实习 · 2027 届本科',
    en: 'Interning @ Giant Network · Class of 2027',
  },
  headline: {
    zh: 'AI 应用开发 & 全栈前端工程师',
    en: 'AI Application & Frontend Engineer',
  },
  tagline: {
    zh: '聚焦 AI Agent 工程、角色长期记忆检索架构与高性能 Web 体验。兼具大厂海外前端与 AI 游戏客户端双段实战经验，擅长将 LLM / 检索系统与可靠工程落地深度结合。',
    en: 'Building at the intersection of AI Agents, long-term memory retrieval architecture, and high-performance Web engineering. Experienced across iQIYI Overseas Frontend and Giant Network AI Game Client.',
  },
  links: {
    legacySite: 'https://personalfyj.netlify.app/',
    shortLinkDemo: 'http://8.141.96.245/',
    csdnId: 'hdbuwbxgbwj',
    csdnUrl: 'https://blog.csdn.net/hdbuwbxgbwj',
  },
  stats: [
    {
      value: '2 段',
      valueEn: '2',
      label: { zh: '大厂核心实习', en: 'Core Internships' },
      sub: { zh: '巨人网络 · 爱奇艺', en: 'Giant Network · iQIYI' },
    },
    {
      value: '15–25%',
      valueEn: '15–25%',
      label: { zh: '首屏 LCP 降幅', en: 'LCP Reduction' },
      sub: { zh: 'Preload + DNS Prefetch', en: 'Critical Path Optimization' },
    },
    {
      value: '10 篇',
      valueEn: '10+',
      label: { zh: 'CSDN 原创博客', en: 'Technical Articles' },
      sub: { zh: '篇均阅读 500+ · 收藏 20+', en: '500+ Avg Views · Agent / MCP' },
    },
    {
      value: 'Full-Stack',
      valueEn: 'Full-Stack',
      label: { zh: 'TS · React · Rust · AI', en: 'TS · React · Rust · AI' },
      sub: { zh: '客户端 / Web / Agent 闭环', en: 'Client · Web · Agent Systems' },
    },
  ],
};

export const MEMORY_PIPELINE_STAGES: MemoryPipelineStage[] = [
  {
    id: 'prefetch',
    step: '01',
    label: { zh: 'JS 层向量预取复用', en: 'JS Embedding Pre-fetch' },
    tech: 'TypeScript · BGE-M3',
    summary: {
      zh: '统一计算并共享 Embedding，消除重复推理开销',
      en: 'Compute once in JS layer and share across memory & lore stores',
    },
    detail: {
      zh: '在 JS 层统一预取玩家输入与设定文本的 BGE-M3 Embedding，协调记忆库与自定义世界观知识库双路检索，避免底层模块重复执行向量计算。',
      en: 'Pre-fetches BGE-M3 embeddings centrally in the JS layer, coordinating both episodic memory and custom world-lore retrieval to eliminate redundant vector computation.',
    },
    metric: { zh: '零重复 Embedding 计算', en: 'Zero Redundant Embedding' },
  },
  {
    id: 'retrieve',
    step: '02',
    label: { zh: 'Rust 多阶段图检索', en: 'Rust KNN + BFS Retrieval' },
    tech: 'Rust · KNN · BFS Graph',
    summary: {
      zh: '语义近邻召回 + 图遍历扩展关联情节记忆',
      en: 'Semantic KNN recall expanded with BFS associative graph walk',
    },
    detail: {
      zh: '基于 Rust 构建多阶段检索链路：先经 KNN 召回高语义相关候选，再通过 BFS 图遍历扩展人物关系与事件上下文，保留跨轮故事连续性。',
      en: 'Multi-stage Rust retrieval pipeline combining KNN semantic search with BFS graph traversal to surface connected characters, events, and narrative arcs.',
    },
    metric: { zh: '语义 + 关系图双路召回', en: 'Hybrid Vector + Graph' },
  },
  {
    id: 'rank',
    step: '03',
    label: { zh: '多因子上下文重排', en: 'Multi-Factor Re-Ranking' },
    tech: 'Similarity · Recency · Importance',
    summary: {
      zh: '融合相似度、时间新鲜度与重要性的动态排序',
      en: 'Weighted scoring across semantic fit, freshness & importance',
    },
    detail: {
      zh: '综合语义相似度、记忆时间衰减（新鲜度）及核心剧情重要性进行联合打分，为游戏 AI 角色对话拼装高信噪比的长期记忆上下文。',
      en: 'Combines semantic similarity, temporal recency decay, and narrative importance scores to assemble high-signal long-term context for character dialogue.',
    },
    metric: { zh: '三维联合上下文打分', en: '3-Factor Context Ranker' },
  },
  {
    id: 'sync',
    step: '04',
    label: { zh: '本地持久化 & OSS 同步', en: 'Local Store & OSS Sync' },
    tech: 'Version · MD5 · Concurrency',
    summary: {
      zh: '版本号 + MD5 增量差异同步与异常恢复',
      en: 'Version & MD5 delta sync with integrity checks & recovery',
    },
    detail: {
      zh: '基于 TypeScript 实现本地记忆持久化及 OSS 云端同步，利用版本号与 MD5 精准识别变更，结合并发上传、完整性校验与异常恢复保障端云一致。',
      en: 'TypeScript persistence & OSS sync engine using version numbers and MD5 checksums for delta detection, concurrent upload, integrity validation, and crash recovery.',
    },
    metric: { zh: '端云强一致 & 断电可恢复', en: 'End-to-Cloud Consistency' },
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'giant-network',
    company: { zh: '巨人网络', en: 'Giant Network' },
    role: { zh: 'AI 游戏客户端开发实习生', en: 'AI Game Client Developer Intern' },
    period: { zh: '2026/09 - 至今', en: 'Sep 2026 – Present' },
    badge: { zh: 'AI 客户端 & 记忆架构', en: 'AI Client & Memory' },
    accent: 'pine',
    overview: {
      zh: '深度参与 AI 互动游戏核心客户端研发，主导/核心参与「AI 角色长期记忆模块」与「UGC 角色创作桌面客户端」两大系统，横跨 TypeScript、Rust 检索链路、离线存储与 OSS 云端同步。',
      en: 'Core contributor to the AI Character Long-Term Memory module and UGC Character Creation Desktop Client, spanning TypeScript, Rust retrieval pipelines, offline-first storage, and OSS synchronization.',
    },
    highlights: [
      {
        id: 'ai-memory',
        category: { zh: 'AI 记忆检索', en: 'AI Memory' },
        tag: 'AI Memory',
        title: {
          zh: '游戏 AI 角色长期记忆模块',
          en: 'Game AI Character Long-Term Memory Module',
        },
        problem: {
          zh: '实现玩家对话记忆的提取、存储与精准召回，并支持自定义世界观/角色设定知识库，保障 AI 角色连续性故事交互。',
          en: 'Extract, persist, and accurately recall player dialogue memories alongside custom world-lore knowledge bases for coherent multi-session storytelling.',
        },
        points: [
          {
            zh: '多阶段记忆检索：参与基于 Rust 的检索链路开发，结合 BGE-M3 Embedding、KNN 语义检索与 BFS 图遍历扩展关联记忆，综合语义相似度、时间新鲜度与重要性排序构建上下文。',
            en: 'Multi-stage retrieval in Rust: combined BGE-M3 embeddings, KNN semantic search, and BFS graph traversal, ranking by semantic similarity, temporal recency, and memory importance.',
          },
          {
            zh: '检索性能优化：在 JS 层统一预取并复用 Embedding，协调记忆库与知识库检索流程，共享向量计算结果，减少底层重复执行 Embedding 的计算开销。',
            en: 'Retrieval optimization: unified embedding pre-fetching and reuse in the JS layer across memory and knowledge-base pipelines, cutting redundant vector inference.',
          },
          {
            zh: '本地持久化与云端同步：基于 TypeScript 实现本地持久化及 OSS 云端同步，通过版本号与 MD5 校验识别增量变更，结合并发上传、完整性校验与异常恢复保障一致性。',
            en: 'Local persistence & OSS sync: built TypeScript delta sync using version tracking and MD5 checksums, with concurrent uploads, integrity checks, and crash recovery.',
          },
        ],
        impact: {
          zh: '实现连续性故事记忆召回与端云一致同步，兼顾低计算开销与高相关性。',
          en: 'Delivered coherent narrative recall with low compute overhead and resilient cloud sync.',
        },
        stack: ['Rust', 'TypeScript', 'BGE-M3', 'KNN', 'BFS Graph', 'OSS Sync', 'MD5'],
      },
      {
        id: 'ugc-desktop',
        category: { zh: '桌面客户端工程', en: 'Desktop Engineering' },
        tag: 'Desktop / Storage',
        title: {
          zh: 'UGC 角色创作桌面客户端',
          en: 'UGC Character Creation Desktop Client',
        },
        problem: {
          zh: '解决创作者大体积角色素材上传带宽压力、人设接口提交一致性以及离线草稿箱存储容量瓶颈。',
          en: 'Solved heavy media upload bandwidth, persona-asset transactional consistency, and local offline draft capacity limits.',
        },
        points: [
          {
            zh: 'OSS 客户端直传：基于预签名 URL 实现素材由客户端直传 OSS，显著降低服务端中转带宽压力。',
            en: 'Direct OSS upload via pre-signed URLs to offload media bandwidth from backend servers.',
          },
          {
            zh: '两阶段提交与幂等语义：设计「清单暂存 → commit/discard」两阶段提交流程，绑定人设接口结果确保素材与人设一致，整包清单语义天然幂等。',
            en: 'Designed a two-phase "manifest staging → commit/discard" protocol tied to persona API responses, achieving atomic consistency and natural idempotency.',
          },
          {
            zh: '失败重试与启动补交：实现 commit 失败自动重试，并将未完成任务持久化至本地，客户端重启后自动补交保证最终一致。',
            en: 'Implemented commit retry queues persisted locally so unfinished jobs auto-reconcile on client startup for eventual consistency.',
          },
          {
            zh: '分层离线草稿箱：正文与图片分离存储（localStorage + IndexedDB），突破浏览器单存储容量限制，支持离线编辑与重启无损恢复。',
            en: 'Split draft storage (text in localStorage, images in IndexedDB) to bypass quota limits and enable seamless offline editing & recovery.',
          },
        ],
        impact: {
          zh: '保障创作素材零丢失、高可靠提交与离线无缝恢复体验。',
          en: 'Guaranteed zero-loss offline authoring, idempotent asset commits, and reduced server bandwidth.',
        },
        stack: ['Electron', 'TypeScript', 'OSS Pre-signed URL', '2PC', 'IndexedDB', 'localStorage'],
      },
    ],
  },
  {
    id: 'iqiyi',
    company: { zh: '爱奇艺青春中心', en: 'iQIYI Youth Center' },
    role: { zh: '海外事业部前端实习生', en: 'Frontend Engineer Intern (Overseas Dept.)' },
    period: { zh: '2026/01 - 2026/07', en: 'Jan 2026 – Jul 2026' },
    badge: { zh: '国际化 Web · 性能 · 安全', en: 'Global Web · Perf · Security' },
    accent: 'amber',
    overview: {
      zh: '负责爱奇艺海外（iQIYI International）内容平台核心业务前端研发，落地登录安全防注入、广告落地页首屏性能优化、巴西合规全局路由拦截及 Pingback 数据埋点准确性治理。',
      en: 'Built core frontend features for iQIYI International, delivering login redirect security hardening, landing-page LCP optimization, Brazil compliance routing interception, and Pingback telemetry accuracy fixes.',
    },
    highlights: [
      {
        id: 'iqiyi-security',
        category: { zh: '前端安全', en: 'Security' },
        tag: 'Security',
        title: {
          zh: '登录跳转安全加固 · 协议注入防护',
          en: 'Login Redirect Hardening & Protocol Injection Defense',
        },
        points: [
          {
            zh: '风险识别：定位登录参数 from_url 缺乏协议校验隐患，防范攻击者构造 javascript: 伪协议或第三方钓鱼域名劫持登录后跳转。',
            en: 'Identified missing protocol validation on from_url that exposed users to javascript: XSS injection and open-redirect phishing.',
          },
          {
            zh: '双重白名单校验：基于原生 URL 构造函数解析参数，严格校验协议白名单（仅 http:/https:）与域名白名单（限定 iQ 域名），异常参数统一 catch 兜底至安全默认页。',
            en: 'Enforced native URL parsing with strict protocol (http:/https:) and iQ domain whitelists, catching malformed or missing inputs safely to a fallback page.',
          },
        ],
        impact: {
          zh: '完整覆盖参数缺失、格式畸形与伪协议注入等边界 case，阻断登录跳转跳板攻击。',
          en: 'Closed open-redirect and script-injection vectors across all malformed URL edge cases.',
        },
        stack: ['Web Security', 'URL API', 'Whitelist Validation', 'TypeScript'],
      },
      {
        id: 'iqiyi-perf',
        category: { zh: '性能 & 埋点', en: 'Perf & Metrics' },
        tag: 'Performance',
        title: {
          zh: '内容平台首屏体验优化 · 曝光埋点双轨校准',
          en: 'First-Screen LCP Optimization & Dual-Track Impression Telemetry',
        },
        points: [
          {
            zh: '首屏加速：针对广告落地页加载瓶颈，采用 Preload 预加载核心海报图 + DNS Prefetch 提前解析商城域名，优化关键渲染链路。',
            en: 'Accelerated ad landing pages via Preload for hero posters and DNS Prefetch for store domains along the critical resource path.',
          },
          {
            zh: '双轨曝光检测：结合 Performance API 与 React ref 设计图片加载双轨检测机制，修复强缓存命中导致 onLoad 不触发及组件加载时序引发的曝光漏报。',
            en: 'Engineered a Performance API + React ref dual-track detection mechanism to fix missed image impressions under strong browser cache and hydration races.',
          },
        ],
        impact: {
          zh: '首屏 LCP 显著降低 15%–25%，修复点击率（CTR）数据失真，为运营迭代提供可靠依据。',
          en: 'Reduced first-screen LCP by 15%–25% and restored accurate CTR telemetry for growth ops.',
        },
        stack: ['LCP Optimization', 'Preload', 'DNS Prefetch', 'Performance API', 'React Ref'],
      },
      {
        id: 'iqiyi-brlogin',
        category: { zh: 'SSR / 路由鉴权', en: 'SSR / Auth' },
        tag: 'SSR / Auth',
        title: {
          zh: '巴西合规登录拦截页开发 · 全局路由级拦截',
          en: 'Brazil Compliance Login Gate & Global Route Interception',
        },
        points: [
          {
            zh: '合规页改造：基于现有下载页重构 /brLogin 合规引导页，实现多语言文案、图片动态替换与 Header 适配。',
            en: 'Built /brLogin compliance gate with i18n copy, dynamic localized assets, and responsive header adaptation.',
          },
          {
            zh: '动态路由拦截：在 Next.js 页面生命周期 Header 初始化阶段解析 pathname，实时比对后端特征开关与白名单 i18n_login_path，精准拦截 /play、/drama 等核心路径。',
            en: 'Parsed pathname during Next.js header lifecycle against backend feature flags and i18n_login_path whitelists covering /play and /drama.',
          },
          {
            zh: 'SSR/CSR 双端一致：基于 Cookie + Token 鉴权机制，SSR 服务端返回 302 重定向，CSR 客户端监听鉴权状态触发跳转。',
            en: 'Unified Cookie + Token auth gating: HTTP 302 redirects on SSR and reactive router interception on CSR.',
          },
        ],
        impact: {
          zh: '确保巴西区域合规策略在 SSR 与 CSR 渲染模式下无缝一致生效。',
          en: 'Ensured seamless regional compliance across both SSR and CSR navigation flows.',
        },
        stack: ['Next.js', 'SSR / CSR', 'Cookie + Token', 'i18n', '302 Redirect'],
      },
      {
        id: 'iqiyi-pingback',
        category: { zh: '数据治理', en: 'Analytics' },
        tag: 'Analytics',
        title: {
          zh: 'Pingback 埋点接入 · 特辑模块曝光/点击去重治理',
          en: 'Pingback SDK Integration & Impression Deduplication',
        },
        points: [
          {
            zh: '业务打点接入：基于公司内部 Pingback SDK，为专辑页「特辑」模块接入 t=21（曝光）与 t=20（点击）事件，完整上报 position、rseat、来源等字段。',
            en: 'Integrated internal Pingback SDK for album feature modules (t=21 impression, t=20 click) with position, rseat, and attribution metadata.',
          },
          {
            zh: '准确性与去重保障：排查修复 prop 命名不规范导致的字段丢失问题，并引入去重 flag 避免组件重复渲染引起的曝光重复上报。',
            en: 'Fixed prop-naming mismatches causing dropped fields and introduced dedup flags to prevent duplicate impressions across re-renders.',
          },
        ],
        impact: {
          zh: '保障同一元素单次曝光精准上报，提升中后台来源归因准确度。',
          en: 'Guaranteed once-per-element impression fidelity for downstream attribution pipelines.',
        },
        stack: ['Pingback SDK', 'React Lifecycle', 'Event Deduplication'],
      },
    ],
  },
];

export const AGENT_REPLAY_EVENTS: AgentReplayEvent[] = [
  {
    id: 'ev-1',
    type: 'thought',
    timestamp: '00:00.12',
    title: { zh: 'ReAct 思考 · 解析目标源码路径', en: 'ReAct Thought · Inspect target workspace' },
    payload: 'Analyzing target JS/TS module `src/utils/urlGuard.ts`. Step 1: discover sibling test conventions via list_files.',
  },
  {
    id: 'ev-2',
    type: 'tool_call',
    timestamp: '00:00.38',
    title: { zh: 'Tool Call · list_files & read_file', en: 'Tool Call · list_files & read_file' },
    payload: '→ list_files("src/utils") => ["urlGuard.ts", "urlGuard.test.ts.example"]\n→ read_file("src/utils/urlGuard.ts") // 48 lines, 3 exported functions',
  },
  {
    id: 'ev-3',
    type: 'rag',
    timestamp: '00:00.41',
    title: { zh: '零依赖 Jaccard RAG · 毫秒级检索标杆示例', en: 'Zero-Dep Jaccard RAG · Benchmark Retrieval' },
    payload: 'Identifiers extracted: {URL, protocol, hostname, whitelist, fallback}\nTop-1 match: seed/security-url.spec.ts (jaccard=0.68 + 0.10 seed_boost => 0.78) in 2.4ms',
  },
  {
    id: 'ev-4',
    type: 'tool_call',
    timestamp: '00:01.85',
    title: { zh: 'Tool Call · write_file 生成 Vitest 用例', en: 'Tool Call · write_file Vitest Suite' },
    payload: '→ write_file("src/utils/__tests__/urlGuard.test.ts")\nGenerated 6 Vitest cases: http/https pass, javascript: blocked, external host fallback, malformed URL catch.',
  },
  {
    id: 'ev-5',
    type: 'redis',
    timestamp: '00:01.92',
    title: { zh: 'Redis 持久化 · 事件链实时落盘', en: 'Redis Persistence · Event Log Committed' },
    payload: 'HSET agent:run:8f3a92 status "completed" events_count 5\nLPUSH agent:runs:index 8f3a92 (LTRIM 0 199) · SSE stream closed safely',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'ai-unit-test-agent',
    title: { zh: 'AI 单元测试自动生成 Agent', en: 'AI Unit Test Generation Agent' },
    subtitle: { zh: '个人项目 · ReAct 智能体 + SSE 实时流式回放', en: 'Personal Project · ReAct Agent + SSE Streaming Replay' },
    period: '2026/06 - 2026/07',
    status: { zh: '完整闭环系统', en: 'Full-Stack System' },
    summary: {
      zh: '基于 LLM 构建的自动化单元测试生成智能体系统。上传或指定 JS/TS 源文件后，Agent 通过多轮工具调用自主读取文件、分析逻辑并生成符合项目既有风格的 Vitest 单测；全过程经 SSE 实时流式推送，并支持历史任务分页查询与任意流程完整回放。',
      en: 'An LLM-powered autonomous unit-test generation agent for JS/TS codebases. Uses multi-turn Tool Calling to inspect files, retrieve style-aligned examples, and emit Vitest suites with real-time SSE streaming and full Redis-backed replay.',
    },
    stack: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js / Express',
      'Python / Flask',
      'OpenAI SDK (OpenRouter)',
      'Redis',
      'SSE',
      'Vitest',
    ],
    architecture: [
      {
        label: { zh: 'ReAct 多轮工具调用闭环', en: 'ReAct Tool-Calling Loop' },
        detail: {
          zh: '封装 read_file、write_file、list_files 三类文件工具，模型自主决策调用并接收反馈直至产出合格用例，思考、调用与结果全程经 SSE 实时推送前端。',
          en: 'Encapsulates read_file, write_file, and list_files tools in an iterative ReAct loop, streaming thoughts, tool calls, and outputs live over SSE.',
        },
      },
      {
        label: { zh: 'Redis Hash + List 事件级持久化', en: 'Redis Hash + List Persistence' },
        detail: {
          zh: '每条运行记录以 agent:run:{id} Hash 存储完整事件链并保留最近 200 条，事件级实时写入避免 SSE 中断丢数据，支持分页列表与完整回放 API。',
          en: 'Stores event-level timelines in agent:run:{id} Hashes indexed by List (retaining latest 200 runs), surviving SSE disconnects with full pagination & replay.',
        },
      },
      {
        label: { zh: '零依赖 Jaccard 代码示例检索', en: 'Zero-Dep Jaccard RAG' },
        detail: {
          zh: '提取 JS/TS 标识符集合计算 Jaccard 相似度替代重型向量嵌入，毫秒级响应；手写标杆测试作为种子数据叠加 +0.1 boost，保障项目冷启动命中规范示例。',
          en: 'Computes identifier-set Jaccard similarity for millisecond retrieval without embedding overhead, boosting curated benchmark seed tests by +0.1 for cold-start quality.',
        },
      },
    ],
    hasInteractiveReplay: true,
  },
  {
    id: 'short-link-service',
    title: { zh: '短链接服务系统', en: 'Short-Link Service Platform' },
    subtitle: { zh: '已部署可访问 · 高性能短链生成与访问统计', en: 'Deployed Live · Short URL Engine & Analytics' },
    period: '2026/05 - 2026/06',
    status: { zh: '已上线可访问', en: 'Live Deployed' },
    liveUrl: 'http://8.141.96.245/',
    summary: {
      zh: '独立设计与部署上线的全栈短链接服务，支持长链接转短链接、高速自动跳转、实时访问次数统计与链接过期自动清理，采用 Podman 容器化部署。',
      en: 'End-to-end short-link platform featuring instant URL shortening, automatic redirects, real-time click analytics, and TTL-based expiration, deployed in containers with Podman.',
    },
    stack: ['Node.js', 'Express', 'Redis', 'React', 'Podman'],
    architecture: [
      {
        label: { zh: 'Redis 映射存储 & EXPIRE 自动过期', en: 'Redis Mapping & TTL Expiration' },
        detail: {
          zh: '使用 Redis 高效存储短链映射关系与实时访问计数，借助原生 EXPIRE 机制自动淘汰过期链接，零定时清理负担。',
          en: 'Persists URL mappings and click counters in Redis, leveraging native EXPIRE TTL for automatic lifecycle cleanup.',
        },
      },
      {
        label: { zh: '实时统计交互与容器化上线', en: 'Real-Time Dashboard & Podman Ops' },
        detail: {
          zh: '前端实时可视化展示短链访问次数与剩余过期时间，支持即时交互管理，通过 Podman 打包并稳定部署于线上服务器。',
          en: 'Interactive React UI displaying live hit counts and expiration countdowns, containerized and deployed via Podman.',
        },
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: { zh: '前端与客户端工程', en: 'Frontend & Client' },
    subtitle: { zh: 'Web SSR/CSR · 桌面客户端 · 交互体验', en: 'SSR/CSR · Desktop · UI Systems' },
    icon: 'layout',
    items: [
      { name: 'TypeScript', highlight: true },
      { name: 'React / Hooks', highlight: true },
      { name: 'Next.js (SSR/CSR)', highlight: true },
      { name: 'Electron', highlight: true },
      { name: 'JavaScript (ES6+)' },
      { name: 'Tailwind CSS' },
      { name: 'Ant Design' },
      { name: 'HTML5 / CSS3' },
      { name: 'Vite / Webpack' },
    ],
  },
  {
    id: 'ai',
    title: { zh: 'AI 应用与检索架构', en: 'AI Agents & Retrieval' },
    subtitle: { zh: 'Agent 闭环 · 长期记忆 · 混合检索', en: 'ReAct · Memory · Hybrid RAG' },
    icon: 'brain',
    items: [
      { name: 'LLM Agent / ReAct', highlight: true },
      { name: 'Tool Calling', highlight: true },
      { name: 'AI Long-Term Memory', highlight: true },
      { name: 'BGE-M3 Embedding', highlight: true },
      { name: 'KNN + BFS 图检索', highlight: true },
      { name: 'RAG / Jaccard 检索' },
      { name: '上下文多因子排序' },
      { name: 'OpenAI SDK' },
    ],
  },
  {
    id: 'backend',
    title: { zh: '后端与数据同步', en: 'Backend & Persistence' },
    subtitle: { zh: '流式服务 · 缓存持久 · 多语言实践', en: 'Streaming · Storage · Systems' },
    icon: 'server',
    items: [
      { name: 'Node.js / Express', highlight: true },
      { name: 'Redis (Hash/List/TTL)', highlight: true },
      { name: 'Rust (检索链路开发)', highlight: true },
      { name: 'Python / Flask' },
      { name: 'SSE 流式传输' },
      { name: 'OSS 同步 & 预签名直传' },
      { name: 'IndexedDB / 离线存储' },
      { name: 'MySQL / Go' },
      { name: 'Podman' },
    ],
  },
  {
    id: 'perf',
    title: { zh: '性能、安全与工程化', en: 'Performance & Security' },
    subtitle: { zh: '核心指标优化 · 安全防注入 · 数据治理', en: 'Web Vitals · Hardening · Telemetry' },
    icon: 'shield',
    items: [
      { name: 'LCP 优化 (Preload/DNS)', highlight: true },
      { name: 'URL 协议/域名安全防护', highlight: true },
      { name: 'Performance API 双轨埋点', highlight: true },
      { name: 'Cookie + Token 双端鉴权' },
      { name: '两阶段提交 / 幂等设计' },
      { name: 'MD5 校验与增量同步' },
      { name: 'Git / 工程规范' },
    ],
  },
];

export const AI_TOOLCHAIN = [
  'Claude Code',
  'Cursor',
  'Gemini',
  'Codex',
  'MCP',
  'Harness Engineering',
];

export const WRITING = {
  platform: 'CSDN',
  handle: 'hdbuwbxgbwj',
  url: 'https://blog.csdn.net/hdbuwbxgbwj',
  count: '10 篇原创',
  countEn: '10 Original Posts',
  metrics: [
    { label: { zh: '篇均阅读', en: 'Avg Views' }, value: '500+' },
    { label: { zh: '篇均点赞', en: 'Avg Likes' }, value: '10+' },
    { label: { zh: '篇均收藏', en: 'Avg Saves' }, value: '20+' },
  ],
  topics: [
    {
      title: { zh: 'Agent 原理解读', en: 'Deep Dive into AI Agent Architecture' },
      tag: 'ReAct / Tool Calling',
    },
    {
      title: { zh: '通过 MCP 规范代码工程实践', en: 'Standardizing Code Workflows with MCP' },
      tag: 'Model Context Protocol',
    },
    {
      title: { zh: '通过 Harness Engineering 构建代码规范体系', en: 'Code Quality Systems via Harness Engineering' },
      tag: 'AI Engineering',
    },
  ],
};

export const EDUCATION = {
  school: { zh: '西安邮电大学', en: 'Xi’an University of Posts & Telecommunications' },
  major: { zh: '物联网工程 · 本科', en: 'B.Eng. in Internet of Things Engineering' },
  period: '2023/08 - 2027/07',
  highlights: [
    {
      zh: '全国大学生数据分析理论大赛 · 优秀奖',
      en: 'Excellence Award, National College Data Analysis Theory Competition',
    },
    {
      zh: '参与校级「智能车」实验室研发项目',
      en: 'Member of University-Level Intelligent Vehicle Laboratory Project',
    },
  ],
};

export const CERTIFICATIONS = [
  {
    name: { zh: 'HarmonyOS 应用开发者认证', en: 'HarmonyOS Application Developer Certification' },
    issuer: 'Huawei',
  },
  {
    name: { zh: 'Google 数据分析师证书', en: 'Google Data Analytics Certificate' },
    issuer: 'Google',
  },
  {
    name: { zh: '全国大学英语四级（CET-4）', en: 'College English Test Band 4 (CET-4)' },
    issuer: 'MOE',
  },
];
