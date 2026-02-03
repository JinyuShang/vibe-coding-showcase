// US-02: 核心技能标签（概览）
const skills = [
  {
    id: 1,
    icon: "🧠",
    title: "两大思维",
    subtitle: "产品思维/工具思维",
  },
  {
    id: 2,
    icon: "🧩",
    title: "产品的构成",
    subtitle: "触达·分发·形态·服务·数据",
  },
  {
    id: 3,
    icon: "🛠️",
    title: "工具清单",
    subtitle: "Enter·Cursor·Claude·Github",
  },
  {
    id: 4,
    icon: "🤖",
    title: "百炼智能体",
    subtitle: "AI智能体开发·百炼平台集成",
  },
  {
    id: 5,
    icon: "⭐",
    title: "技能Skills",
    subtitle: "技能开发与应用",
  },
  {
    id: 6,
    icon: "📝",
    title: "编写PRD文档",
    subtitle: "需求梳理与文档化",
  },
  {
    id: 7,
    icon: "🚀",
    title: "Web部署",
    subtitle: "Vercel·GitHub·公网访问与发布",
  },
];

export default function SkillsOverview() {
  return (
    <section className="py-16 px-8 md:px-10 lg:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
          核心技能
        </h2>
        <p className="text-base md:text-lg mb-12 text-center" style={{ color: "#546E7A" }}>
          这些是我掌握的核心能力
        </p>

        {/* 技能卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
            >
              {/* 图标 */}
              <div className="text-4xl mb-3">{skill.icon}</div>

              {/* 标题 */}
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "#2C3E50" }}
              >
                {skill.title}
              </h3>

              {/* 副标题 */}
              <p className="text-sm" style={{ color: "#546E7A" }}>
                {skill.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* 引导链接 */}
        <div className="text-center">
          <a
            href="#skills-detail"
            className="inline-block text-lg font-medium hover:underline"
            style={{ color: "#E6A042" }}
          >
            查看完整技能清单 →
          </a>
        </div>
      </div>
    </section>
  );
}
