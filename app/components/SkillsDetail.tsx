// US-05: 详细技能栈清单 - 编辑式杂志风格
import CountUpNumber from "./CountUpNumber";

const skills = [
  {
    id: 1,
    number: "01",
    icon: "🧠",
    title: "两大思维",
    description: "产品思维 + 工程思维",
    color: "caramel",
  },
  {
    id: 2,
    number: "02",
    icon: "🧩",
    title: "产品的构成",
    description: "产品由触达、分发、形态、服务、数据五个维度组成",
    color: "terracotta",
  },
  {
    id: 3,
    number: "03",
    icon: "🤖",
    title: "百炼智能体",
    description: "使用百炼平台开发AI智能体的能力",
    color: "sage",
  },
  {
    id: 4,
    number: "04",
    icon: "📝",
    title: "编写PRD文档",
    description: "系统性梳理需求并撰写PRD文档的技能",
    color: "forest",
  },
  {
    id: 5,
    number: "05",
    icon: "⭐",
    title: "技能Skills",
    description: "为Claude Code开发自定义技能扩展的能力",
    color: "caramel",
  },
  {
    id: 6,
    number: "06",
    icon: "🛠️",
    title: "工具清单",
    description: "熟练使用Enter、Cursor、Claude Code等开发工具",
    color: "terracotta",
    tools: [
      { icon: "💡", name: "Enter", desc: "云端自动化开发" },
      { icon: "⚡", name: "Cursor", desc: "AI IDE" },
      { icon: "🔧", name: "Claude Code", desc: "AI CLI" },
      { icon: "📦", name: "Github", desc: "版本管理" },
      { icon: "🗄️", name: "Supabase", desc: "数据库" },
      { icon: "🚀", name: "Vercel", desc: "部署" },
      { icon: "📊", name: "PostHog", desc: "数据埋点" },
    ],
  },
  {
    id: 7,
    number: "07",
    icon: "🌐",
    title: "Web部署",
    description: "使用Vercel、GitHub等平台进行Web应用部署",
    color: "sage",
  },
];

const colorMap: Record<string, string> = {
  caramel: 'var(--caramel)',
  terracotta: 'var(--terracotta)',
  forest: 'var(--forest)',
  sage: 'var(--sage)',
};

export default function SkillsDetail() {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          className="reveal-on-scroll"
          style={{
            animationDelay: `${index * 100}ms`,
            background: 'var(--warm-white)',
            border: '1px solid rgba(107, 93, 82, 0.15)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex gap-6">
            {/* 编号 - 计数动画 */}
            <div className="font-display text-3xl font-bold pt-1 opacity-10" style={{ color: 'var(--deep-brown)' }}>
              <CountUpNumber end={skill.id} duration={1500} />
            </div>

            {/* 内容 */}
            <div className="flex-1">
              {/* 图标 + 标题 */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{skill.icon}</span>
                <h3
                  className="font-serif text-2xl font-semibold"
                  style={{ color: 'var(--deep-brown)' }}
                >
                  {skill.title}
                </h3>
              </div>

              {/* 描述 */}
              <p className="font-sans text-base mb-4" style={{ color: 'var(--text-secondary)' }}>
                {skill.description}
              </p>

              {/* 工具列表（仅工具清单显示） */}
              {skill.tools && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {skill.tools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded border"
                      style={{
                        background: 'var(--cream)',
                        borderColor: 'var(--muted-clay)',
                      }}
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <div
                          className="font-semibold text-sm"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {tool.name}
                        </div>
                        <div className="font-sans text-xs" style={{ color: 'var(--text-secondary)' }}>
                          {tool.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
