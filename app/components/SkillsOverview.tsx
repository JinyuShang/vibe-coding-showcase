// US-02: 核心技能标签（概览）- 科技未来感升级版
const skills = [
  {
    id: 1,
    icon: "🧠",
    title: "两大思维",
    subtitle: "产品思维 / 工具思维",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    icon: "🧩",
    title: "产品的构成",
    subtitle: "触达 · 分发 · 形态 · 服务 · 数据",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: "🛠️",
    title: "工具清单",
    subtitle: "Enter · Cursor · Claude · Github",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    icon: "🤖",
    title: "百炼智能体",
    subtitle: "AI智能体开发 · 百炼平台集成",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 5,
    icon: "⭐",
    title: "技能Skills",
    subtitle: "技能开发与应用",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    icon: "📝",
    title: "编写PRD文档",
    subtitle: "需求梳理与文档化",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 7,
    icon: "🚀",
    title: "Web部署",
    subtitle: "Vercel · GitHub · 公网访问",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function SkillsOverview() {
  return (
    <section id="skills" className="py-24 px-8 md:px-10 lg:px-40 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 区域标题 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            核心技能
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
            这些是我掌握的核心能力
          </p>
        </div>

        {/* 技能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="group relative glass rounded-2xl p-8 card-hover glow-border overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* 渐变背景装饰 */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${skill.gradient}`}
                style={{ opacity: 0.05 }}
              />

              {/* 图标 */}
              <div className="relative z-10 text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>

              {/* 标题 */}
              <h3
                className="relative z-10 text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300"
                style={{ color: "#E0E7FF" }}
              >
                {skill.title}
              </h3>

              {/* 副标题 */}
              <p
                className="relative z-10 text-sm group-hover:text-white transition-colors duration-300"
                style={{ color: "#94A3B8" }}
              >
                {skill.subtitle}
              </p>

              {/* 发光装饰 */}
              <div
                className={`absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-br ${skill.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        {/* 引导链接 */}
        <div className="text-center animate-fade-in">
          <a
            href="#skills-detail"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
              boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
            }}
          >
            查看完整技能清单
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
