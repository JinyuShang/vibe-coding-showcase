// US-05: 详细技能栈清单 - 科技未来感升级版
import CountUpNumber from "./CountUpNumber";

const skills = [
  {
    id: 1,
    number: "01",
    icon: "🧠",
    title: "两大思维",
    description: "产品思维 + 工程思维",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    number: "02",
    icon: "🧩",
    title: "产品的构成",
    description: "产品由触达、分发、形态、服务、数据五个维度组成",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    number: "03",
    icon: "🤖",
    title: "百炼智能体",
    description: "使用百炼平台开发AI智能体的能力",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    number: "04",
    icon: "📝",
    title: "编写PRD文档",
    description: "系统性梳理需求并撰写PRD文档的技能",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    number: "05",
    icon: "⭐",
    title: "技能Skills",
    description: "为Claude Code开发自定义技能扩展的能力",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 6,
    number: "06",
    icon: "🛠️",
    title: "工具清单",
    description: "熟练使用Enter、Cursor、Claude Code等开发工具",
    gradient: "from-emerald-500 to-teal-500",
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
    gradient: "from-indigo-500 to-blue-500",
  },
];

export default function SkillsDetail() {
  return (
    <section
      id="skills-detail"
      className="py-24 px-8 md:px-10 lg:px-40 relative"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 区域标题 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            技能栈详解
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
            我的技术能力成长历程
          </p>
        </div>

        {/* 技能列表 */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className="glass rounded-2xl card-hover glow-border p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-6">
                {/* 编号 - 计数动画 */}
                <div className="text-3xl font-bold pt-1" style={{ color: "#E0E7FF" }}>
                  <CountUpNumber end={skill.id} duration={1500} />
                </div>

                {/* 内容 */}
                <div className="flex-1">
                  {/* 图标 + 标题 */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{skill.icon}</span>
                    <h3
                      className="text-2xl font-semibold"
                      style={{ color: "#E0E7FF" }}
                    >
                      {skill.title}
                    </h3>
                  </div>

                  {/* 描述 */}
                  <p className="text-base mb-4" style={{ color: "#94A3B8" }}>
                    {skill.description}
                  </p>

                  {/* 工具列表（仅工具清单显示） */}
                  {skill.tools && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {skill.tools.map((tool, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-4 rounded-xl"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <span className="text-2xl">{tool.icon}</span>
                          <div>
                            <div
                              className="font-semibold text-sm"
                              style={{ color: "#FFFFFF" }}
                            >
                              {tool.name}
                            </div>
                            <div className="text-xs" style={{ color: "#CBD5E1" }}>
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
