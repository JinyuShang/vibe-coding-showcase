// US-02: 核心技能标签（概览）- 编辑式杂志风格
const skills = [
  {
    id: 1,
    icon: "🧠",
    title: "两大思维",
    subtitle: "产品思维与工具思维的双轨驱动",
    color: "caramel",
  },
  {
    id: 2,
    icon: "🧩",
    title: "产品的构成",
    subtitle: "触达·分发·形态·服务·数据",
    color: "terracotta",
  },
  {
    id: 3,
    icon: "🛠️",
    title: "工具清单",
    subtitle: "Enter · Cursor · Claude · GitHub",
    color: "forest",
  },
  {
    id: 4,
    icon: "🤖",
    title: "百炼智能体",
    subtitle: "AI智能体开发与平台集成",
    color: "caramel",
  },
  {
    id: 5,
    icon: "⭐",
    title: "技能Skills",
    subtitle: "技能开发与应用实践",
    color: "terracotta",
  },
  {
    id: 6,
    icon: "📝",
    title: "编写PRD文档",
    subtitle: "需求梳理与结构化文档",
    color: "sage",
  },
  {
    id: 7,
    icon: "🚀",
    title: "Web部署",
    subtitle: "Vercel · GitHub · 公网访问",
    color: "forest",
  },
];

const colorMap: Record<string, string> = {
  caramel: 'var(--caramel)',
  terracotta: 'var(--terracotta)',
  forest: 'var(--forest)',
  sage: 'var(--sage)',
};

export default function SkillsOverview() {
  return (
    <div className="space-y-12">
      {/* 技能卡片网格 - 不对称布局 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className="reveal-on-scroll group"
            style={{
              animationDelay: `${index * 100}ms`,
              background: 'var(--warm-white)',
              border: '1px solid rgba(107, 93, 82, 0.15)',
              borderRadius: '0.5rem',
              padding: '2rem',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* 顶部编号装饰 */}
            <div className="flex justify-between items-start mb-6">
              <span className="font-display text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: 'var(--deep-brown)' }}
              >
                0{skill.id}
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colorMap[skill.color] }} />
            </div>

            {/* 图标 */}
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
              {skill.icon}
            </div>

            {/* 标题 */}
            <h3 className="font-serif text-xl font-bold mb-3" style={{ color: 'var(--deep-brown)' }}>
              {skill.title}
            </h3>

            {/* 副标题 */}
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {skill.subtitle}
            </p>

            {/* 装饰线 */}
            <div className="mt-6 h-px w-12 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: colorMap[skill.color] }} />
          </div>
        ))}
      </div>

      {/* 引导链接 - 编辑风格 */}
      <div className="text-center pt-8 reveal-on-scroll">
        <a
          href="#skills-detail"
          className="inline-flex items-center gap-3 px-8 py-4 btn-outline group"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: '500',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: 'var(--deep-brown)',
            background: 'transparent',
            border: '2px solid var(--deep-brown)',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--deep-brown)';
            e.currentTarget.style.color = 'var(--warm-white)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--deep-brown)';
          }}
        >
          <span>查看完整技能清单</span>
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
