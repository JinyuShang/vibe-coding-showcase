// US-05: 详细技能栈清单
const skills = [
  {
    id: 1,
    number: "01",
    icon: "🧠",
    title: "两大思维",
    description: "产品思维+工程思维",
  },
  {
    id: 2,
    number: "02",
    icon: "🧩",
    title: "产品的构成",
    description: "产品由触达、分发、形态、服务、数据五个维度组成",
  },
  {
    id: 3,
    number: "03",
    icon: "🤖",
    title: "百炼智能体",
    description: "使用百炼平台开发AI智能体的能力",
  },
  {
    id: 4,
    number: "04",
    icon: "📝",
    title: "编写PRD文档",
    description: "系统性梳理需求并撰写PRD文档的技能",
  },
  {
    id: 5,
    number: "05",
    icon: "⭐",
    title: "技能Skills",
    description: "为Claude Code开发自定义技能扩展的能力",
  },
  {
    id: 6,
    number: "06",
    icon: "🛠️",
    title: "工具清单",
    description: "熟练使用Enter、Cursor、Claude Code等开发工具",
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
  },
];

export default function SkillsDetail() {
  return (
    <section id="skills-detail" className="py-16 px-8 md:px-10 lg:px-40 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
          技能栈详解
        </h2>
        <p className="text-base md:text-lg mb-12 text-center" style={{ color: "#546E7A" }}>
          我的技术能力成长历程
        </p>

        {/* 技能列表 */}
        <div className="space-y-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <div className="flex gap-4">
                {/* 编号 */}
                <div className="text-2xl font-bold pt-1" style={{ color: "#2C3E50" }}>
                  {skill.number}
                </div>

                {/* 内容 */}
                <div className="flex-1">
                  {/* 图标 + 标题 */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{skill.icon}</span>
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "#2C3E50" }}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  {/* 描述 */}
                  <p className="text-base" style={{ color: "#546E7A" }}>
                    {skill.description}
                  </p>

                  {/* 工具列表（仅工具清单显示） */}
                  {skill.tools && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skill.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50"
                        >
                          <span className="text-xl">{tool.icon}</span>
                          <div>
                            <div className="font-semibold text-sm" style={{ color: "#2C3E50" }}>
                              {tool.name}
                            </div>
                            <div className="text-xs" style={{ color: "#78909C" }}>
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
      </div>
    </section>
  );
}
