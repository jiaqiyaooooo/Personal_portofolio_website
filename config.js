/**
 * ============================================================
 *  SITE CONTENT CONFIGURATION
 *  网站内容配置文件
 * ============================================================
 *  
 *  How to edit / 如何编辑:
 *  - Each section below corresponds to a section on the website.
 *  - Every text field has an `en` (English) and `zh` (Chinese) version.
 *  - To update content, simply change the text strings.
 *  - To add/remove items in lists (storyline, projects, skills, etc.),
 *    add/remove objects from the arrays.
 *  - Save this file and refresh the page to see changes.
 *
 *  下方每个区块对应网页上的一个板块。
 *  每个文本字段都有 en（英文）和 zh（中文）两个版本。
 *  如需更新内容，只需修改对应的文字字符串即可。
 *  修改后保存文件，刷新页面即可看到变化。
 * ============================================================
 */

const SITE = {

  /* ==========================================================
     HERO — 首页主视觉
     ========================================================== */
  hero: {
    greeting:   { en: "Hello, I'm", zh: "你好，我是" },
    name:       { en: "Yao Jiaqi",  zh: "尧嘉琪" },
    desc: {
      en: "Strategic FP&A professional with 8+ years across Big Four and Tech, specializing in data-driven financial planning across 10+ markets. <br>Now exploring how AI can reshape the way finance operates.",
      zh: "拥有8年以上四大及科技公司经验的战略FP&A专家，专注于10+市场的数据驱动财务规划。正在探索AI如何重塑财务运营方式。"
    },
    tags: [
      { text: "CFA (I–III Passed)", accent: true },
      { text: "CPA",              accent: true },
      { text: "ACCA",               accent: true },
      { text: "NUS MTech",         accent: true },
      { text: "Singapore PR",      accent: true },
    ],
    contact: {
      phone: "+65 8906 3248",
      email: "Jiaqiyao1219@gmail.com",
      linkedin: "https://www.linkedin.com/in/jiaqiyao/",
    },
  },


  /* ==========================================================
     DATA STORYLINE — 数据成长之旅（时间线）
     ========================================================== */
  storyline: {
    label: { en: "My Journey at the Intersection of Finance, Data & AI",              zh: "我和数据的故事" },
    title: { en: "Growing with data and finance.<br>Evolving with AI.", zh: "与数据和财务共同成长。<br>因AI持续进化。" },

    steps: [
      {
        year: "2012 – 16",
        title:  { en: "The Finance and Numerical Foundation",  zh: "财务和数学根基" },
        desc:   { en: "GDUFS · ACCA Track · GPA 3.85 / 4.00 · Ranked 1st, high score in Math. <br>I was always drawn to numbers and logical thinking.", zh: "广东外语外贸大学 · ACCA方向 · GPA 3.85 · 专业第一，数学高分——奠定了对数字和结构化思维的深层直觉。" },
        active: false,
      },
      {
        year: "2016 – 21",
        title:  { en: "Measuring the Past",  zh: "衡量过去" },
        desc:   { en: "EY · Led full audit reports for IPOs with RMB 2B+ assets, NYSE-listed annual audits. <br>But I realized: most of my work was verifying what had already happened. That limitation became the catalyst for change.", zh: "安永 · 主导20亿+企业IPO全套审计报告、纽交所上市公司年度审计。<br>但意识到：审计的天职是合规，无法通过数据为企业创造商业价值。这一局限成为转变的催化剂。" },
        active: false,
      },
      {
        year: "2021 – 22",
        title:  { en: "Discovering What Data Could Do",  zh: "发现数据能做什么" },
        desc:   { en: "NUS MTech · Projected stock price forecasting and anime recommendation systems using LLM models. <br>I saw how data could uncover patterns, generate insights, and support decision-making at scale. And for the first time, I knew about LLM but did not expect how much it will change our life", zh: "NUS硕士 · 在文本分析课上用LLM模型构建股价预测和动漫推荐系统。<br>学习了如何运用数据创造商业价值,也是第一次接触LLM,但没有预见到此刻它对我们工作和生活的转变。" },
        active: false,
      },
      {
        year: "2023 – 25",
        title:  { en: "Turning Insights into Decisions",  zh: "数据转化成决策" },
        desc:   { en: "Shopee Cross Boarder Business Analyst to FP&A. Recovered $2–3M via escrow policy redesign · Pioneered the Marketplace FP&A team from zero · owned monthly P&L budgeting across 10+ markets · Proposed a $200M+ monetization strategy by uncovering hidden cost gaps competitors. <br> Data became a tool for understanding performance, evaluating opportunities, and supporting business decisions across markets.", zh: "Shopee · 从跨境运营到FP&A。通过托管政策重设计回收$2-3M · 从0到1组建MP FP&A团队 · 负责10+市场月度P&L预算 · 主导了跨市场涨佣标准(~$200mil收入提升)。<br>数据成为理解绩效、评估机会和跨市场支持业务决策的工具。" },
        active: false,
      },
      {
        year: "2026 – Now",
        title:  { en: "Exploring the Next Layer",  zh: "探索下一阶段" },
        desc:   { en: "Integrating AI into financial workflows · AI bots saving 0.5 FTE. <br>Today, my interest lies in a simple question: How can Finance, Data, and AI come together to help businesses make better decisions?", zh: "将AI融入财务工作流 · AI机器人节省0.5 FTE。<br>今天，我的目光聚焦于一个核心命题：财务、数据和人工智能如何有机结合，从而帮助企业做出更好的决策？" },
        active: true,   // ← highlighted with accent color
      },
    ],
  },


  /* ==========================================================
     NEXT PURSUIT — 下一步追求
     ========================================================== */
  pursuit: {
    title: { en: "What I'm pursuing next", zh: "我正在追求的下一步" },

    items: [
      {
        num: "01",
        head: { en: "Help shape the future of Finance in the AI era",                       zh: "参与塑造AI时代的财务未来" },
        body: { en: "Applying AI, automation, and advanced analytics to transform how finance teams forecast, operate, and make decisions at scale.",  zh: "运用AI、自动化和高级分析，变革财务团队在规模化运营中的预测、运营和决策方式。" },
      },
      {
        num: "02",
        head: { en: "Expand my impact through global and cross-functional collaboration",               zh: "通过跨部门协作持续放大业务影响力" },
        body: { en: "Partnering across Finance, Operations, Product, and Technology teams to solve complex business challenges and drive meaningful outcomes.",  zh: "深度联结财务、运营、产品与技术团队，共同攻克复杂的商业难题，驱动具有深远意义的业务成果。" },
      },
      {
        num: "03",
        head: { en: "Strengthen enterprise-level leadership and influence",                   zh: "增强企业级领导力与影响力" },
        body: { en: "Navigating complex stakeholder environments while aligning diverse teams around a common vision and measurable business outcomes.",  zh: "驾驭复杂的利益相关方环境，凝聚多元团队围绕共同愿景和可量化的业务成果。" },
      },
    ],
  },


  /* ==========================================================
     SELECTED PROJECTS — 精选项目 (Bento Grid)
     ==========================================================
     link 说明 / Link notes:
     - 每张卡片可以有多个链接 (links 数组)
     - url 设为 null 或 "TODO_填写你的链接" 表示待填入
     - hasLink: false 的卡片不会显示任何链接按钮
     ========================================================== */
  projects: {
    label: { en: "Selected Projects", zh: "精选项目" },
    title: { en: "Impact in action.",  zh: "实战中的影响力。" },

    cards: [

      /* ---- 1. AUDIT ---- */
      {
        tag:      "AUDIT",
        tagColor: "text-3",       // gray
        numValue: "RMB 2B+",
        numColor: "text",         // default text color
        numSub:   { en: "Enterprise assets", zh: "企业资产规模" },
        title:    { en: "Gaming Enterprise IPO", zh: "游戏企业IPO" },
        desc:     { en: "Led end-to-end audit report — financial due diligence, internal controls review, and financial statement preparation for a gaming enterprise IPO at EY.", zh: "在安永主导端到端审计报告——财务尽职调查、内部控制审核及财务报表编制。" },
        insight:  null,
        pills:    ["IPO", "Due Diligence", "Internal Controls"],
        hasLink:  true,
        links: [
          {
            label: { en: "First audit report in my career", zh: "职业生涯参与的第一份审计报告" },
            url:   "https://ir.fang.com/static-files/c538a8f4-e4d4-449e-b78f-d577fabdb3ac",
          },
        ],
      },

      /* ---- 2. OPS ---- */
      {
        tag:      "OPS",
        tagColor: "amber",
        numValue: "$2–3M",
        numColor: "amber",
        numSub:   { en: "Total recovered", zh: "总回收金额" },
        title:    { en: "Escrow Recovery & Policy Standardization", zh: "负托管回收与政策标准化" },
        desc:     { en: "Triggered by routine bad-debt review. Discovered fragmented collection policies across SEA markets. Unified invoice due dates and escrow deduction rules — ~$1M/quarter was at imminent bad-debt risk.", zh: "在例行坏账审查中触发。发现各东南亚市场回收政策不一。统一发票到期日和托管扣款规则——每季度约$1M面临坏账风险。" },
        insight:  null,
        pills:    ["SQL", "Cross-market", "Policy Design"],
        hasLink:  false,
        links:    [],
      },

      /* ---- 3. COMMISSION ---- */
      {
        tag:      "COMMISSION",
        tagColor: "accent",
        numValue: "$200M+",
        numColor: "accent",
        numSub:   { en: "Revenue uplift across SEA", zh: "东南亚收入增长" },
        title:    { en: "Monetization Strategy", zh: "变现策略设计" },
        desc:     { en: "Built multi-scenario CODB model benchmarking Shopee CB vs competitors. Key insight overturned management assumption: competitors' total seller cost was actually higher — unlocking room for commission increases across all SEA markets.", zh: "搭建多情景CODB模型对标竞对。核心洞察颠覆管理层认知：竞对卖家综合成本实际更高——为全东南亚涨佣打开空间。" },
        insight:  { en: "Each 1% commission increase ≈ 1% order decline, but net EBITDA positive.", zh: "每1%涨佣≈1%单量下降，但EBITDA净正。" },
        pills:    ["Financial Modelling", "EBITDA", "Cross-market"],
        hasLink:  true,
        links: [
          {
            label: { en: "Commission increase rates (all SEA)", zh: "所有东南亚市场佣金上涨比率" },
            url:   "https://shopee.cn/edu/article/26620",
          },
          {
            label: { en: "Tech service fee for ads", zh: "引进技术服务费收取广告金" },
            url:   "https://shopee.cn/edu/article/26628",
          },
          {
            label: { en: "New seller commission waivers", zh: "新卖家佣金减免政策" },
            url:   "https://shopee.cn/edu/article/25682",
          },
        ],
      },

      /* ---- 4. AI AUTOMATION ---- */
      {
        tag:      "AI AUTOMATION",
        tagColor: "green",
        numValue: "0.5 FTE",
        numColor: "green",
        numSub:   { en: "Saved", zh: "节省" },
        title:    { en: "3 Workflow Bots", zh: "3个工作流机器人" },
        desc:     null,   // uses sub-items instead
        insight:  null,
        pills:    ["App Script", "Smart Platform", "GPT", "Rule-based"],
        hasLink:  true,
        links: [
          {
            label: { en: "Process diagram (coming soon)", zh: "流程图解（即将推出）" },
            url:   "TODO_填写你的链接",
          },
        ],
        /* Sub-items unique to this card */
        subItems: [
          {
            name:      "Commission Bot",
            badge:     "V1→V2",
            badgeType: "accent",
            desc:      { en: "Eliminated CSV/offline. V2: auto-screenshot + group-chat push via AI Agent platform.", zh: "消除CSV/线下流程。V2：通过AI Agent平台自动截图+群聊推送。" },
          },
          {
            name:      { en: "Weekly Report", zh: "周报助手" },
            badge:     "Live",
            badgeType: "green",
            desc:      { en: "Auto-generates runrate commentary + flags anomalies for verification.", zh: "自动生成runrate评述+标记异常以待验证。" },
          },
          {
            name:      { en: "Budget Auto.", zh: "预算自动化" },
            badge:     "WIP",
            badgeType: "amber",
            desc:      { en: "Automated reminders; confirmation tracking in progress.", zh: "自动提醒已完成；确认跟踪进行中。" },
          },
        ],
      },

    ],
  },


  /* ==========================================================
     EXPERIENCE — 工作经历（精简版）
     ========================================================== */
  experience: {
    label: { en: "Experience",       zh: "工作经历" },
    title: { en: "Where I've built.", zh: "我的职业足迹。" },

    entries: [
      {
        company: "Shopee Pte. Ltd.",
        role:    { en: "Assistant Manager, Cross-Border FP&A", zh: "助理经理，跨境FP&A" },
        meta:    "Jul 2022 – Present · Singapore",
        badge:   { en: "Current", zh: "在职" },
        badgeType: "accent",
        points: [
          { en: "<strong>Monetization Strategy:</strong> Engineered $200M+ revenue uplift through competitive CODB analysis and multi-scenario financial modelling across all SEA markets.",                           zh: "<strong>变现策略：</strong>通过竞品CODB分析与多情景财务建模，在所有东南亚市场实现$200M+收入增长。" },
          { en: "<strong>FP&A Ownership:</strong> End-to-end monthly Topline & P&L budgeting for 10+ markets with rigorous variance analysis.",                                                                      zh: "<strong>FP&A管理：</strong>10+市场端到端月度Topline与P&L预算，严格差异分析。" },
          { en: "<strong>Team & AI:</strong> Pioneered FP&A team from zero; built 3 AI workflow bots saving 0.5 FTE weekly.",                                                                                        zh: "<strong>团队与AI：</strong>从零搭建FP&A团队；构建3个AI工作流机器人，每周节省0.5 FTE。" },
        ],
        chips: ["$200M+", "10+ Markets", "AI Bots", "Team Builder"],
        sub: {
          role:   { en: "Senior Associate, Cross-Border Ops (Payment)", zh: "高级分析师，跨境运营（支付）" },
          points: [
            { en: "Spearheaded Negative Escrow remediation — recovered $2–3M total, unified escrow policies across all SEA markets.", zh: "主导负托管修复项目——总回收$2-3M，统一所有东南亚市场托管政策。" },
          ],
        },
      },
      {
        company: "Ernst & Young (EY)",
        role:    { en: "Project Manager / Auditor", zh: "项目经理 / 审计师" },
        meta:    "Oct 2016 – May 2021 · China",
        badge:   { en: "Big Four", zh: "Big Four" },
        badgeType: "green",
        points: [
          { en: "<strong>Gaming IPO:</strong> Led full audit report — financial DD, internal controls, financial statement preparation.",                                                          zh: "<strong>游戏企业IPO：</strong>主导全套审计报告——财务DD、内控、财务报表编制。" },
          { en: "<strong>CertusNet IPO (NEEQ: 832800, RMB 2B):</strong> Presided over FDD on revenues, costs, R&D, tax; co-prepared prospectus.",                                                 zh: "<strong>赛特斯IPO (新三板: 832800, 20亿元)：</strong>主持收入、成本、研发、税务FDD；协作编制招股说明书。" },
          { en: "<strong>SFUN Annual Audit (NYSE, USD 0.9B rev):</strong> Cross-functional collaboration to resolve internal control deficiencies.",                                                zh: "<strong>搜房网年度审计 (NYSE, 9亿美元收入)：</strong>跨职能协作解决内控缺陷。" },
        ],
        chips: ["IPO Lead", "NYSE Client", "RMB 2B Assets"],
        sub: null,
      },
    ],
  },


  /* ==========================================================
     EDUCATION — 教育背景
     ========================================================== */
  education: {
    label: { en: "Education",           zh: "教育背景" },
    title: { en: "Where I've learned.", zh: "我的学术历程。" },

    schools: [
      {
        name:   { en: "National University of Singapore", zh: "新加坡国立大学" },
        degree: { en: "MTech in Enterprise Business Analytics", zh: "企业商务分析技术硕士" },
        meta:   "Jul 2021 – Jun 2022 · Singapore",
        detail: { en: "Data Analytics · Big Data · NLP · Python · R · SQL · Tableau", zh: "数据分析 · 大数据 · NLP · Python · R · SQL · Tableau" },
      },
      {
        name:   { en: "Guangdong University of Foreign Studies", zh: "广东外语外贸大学" },
        degree: { en: "B.A. in International Accounting (ACCA Track)", zh: "国际会计学士（ACCA方向）" },
        meta:   "Sep 2012 – Jun 2016 · China",
        detail: { en: "GPA: 3.85 / 4.00 — Ranked 1st in cohort", zh: "GPA: 3.85 / 4.00 — 专业排名第一" },
      },
    ],
  },


  /* ==========================================================
     SKILLS — 硬核技能（仅硬技能，无软技能）
     ========================================================== */
  skills: {
    label: { en: "Skills",           zh: "技能" },
    title: { en: "Hard skills.", zh: "硬核技能。" },

    categories: [
      {
        heading: { en: "Finance & Analytics", zh: "财务与分析" },
        color:   "",          // default blue
        bars: [
          { name: "FP&A / Forecasting",   level: "Expert",    width: 95 },
          { name: "P&L Management",       level: "Expert",    width: 95 },
          { name: "Variance Analysis",    level: "Expert",    width: 90 },
          { name: "Financial Modelling",  level: "Expert",  width: 90 },
          { name: "Dashboards",           level: "Expert",  width: 90 },
        ],
      },
      {
        heading: { en: "Technical", zh: "技术" },
        color:   "g",         // green
        bars: [
          { name: "Excel / Sheets",       level: "Expert",    width: 95 },
          { name: "SQL",                  level: "Advanced",  width: 82 },
          { name: "Python",               level: "Advanced",  width: 78 },
          { name: "Machine Learning",     level: "Proficient", width: 65 },
          { name: "Presentation / Deck",  level: "Advanced",    width: 85 },
        ],
      },
      {
        heading: { en: "AI & Automation", zh: "AI与自动化" },
        color:   "a",         // amber
        bars: [
          { name: "App Script",           level: "Advanced",  width: 78 },
          { name: "AI Workflow / Agents", level: "Proficient", width: 72 },
          { name: "LLM / GenAI",          level: "Proficient", width: 68 },
          { name: "Process Optimization", level: "Advanced",  width: 82 },
        ],
      },
    ],
  },


  /* ==========================================================
     CERTIFICATES — 证书
     ========================================================== */
  certs: {
    label: { en: "Certificates & Languages", zh: "证书与语言" },
    title: { en: "Credentials.",              zh: "资质认证。" },

    items: [
      { name: "CFA Program", sub: { en: "Levels I–III Passed", zh: "一至三级通过" }, color: "accent" },
      { name: "ACCA",        sub: { en: "Member",              zh: "会员" },          color: "green" },
      { name: "CPA",         sub: { en: "Certified Public Accountant", zh: "注册会计师" }, color: "amber" },
    ],
  },


  /* ==========================================================
     LANGUAGES — 语言
     ========================================================== */
  languages: [
    { name: "English",                          nameCn: null,          note: "IELTS 7.5" },
    { name: { en: "Mandarin", zh: "普通话" },   nameCn: true,         note: "Native" },
    { name: { en: "Cantonese", zh: "粤语" },    nameCn: true,         note: "Native" },
  ],


  /* ==========================================================
     FOOTER — 页脚
     ========================================================== */
  footer: {
    en: "Built with care in Singapore",
    zh: "用心构建于新加坡",
  },

};
