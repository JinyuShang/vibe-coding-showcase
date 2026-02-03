// US-06: 学习笔记列表 - 科技未来感升级版
const notes = [
  {
    id: 1,
    icon: "📚",
    title: "AI时代：不可逆的趋势与机遇",
    course: "01 大势不可逆，得势者必胜",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/JuKBweiWOiAF27kGCYAc8AIkneg?from=from_copylink",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    icon: "🛠️",
    title: "从0到1：构建商业级网站产品",
    course: "02 从网站开始构建一款商业产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/HfRpwdiZai32O6kfgSXcFykRn3J?from=from_copylink",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: "🤖",
    title: "实战入门：开发你的第一个AI应用",
    course: "03 与时俱进做出你的第一款 AI 应用",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/Otvyw6Xemia7XIkDHokcDsc0noc?from=from_copylink",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    icon: "💻",
    title: "编程基础：踏入AI代码世界",
    course: "04 AI编程下一站：走入代码的世界",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/GOoIw9wIci2kshkCDkkc08hin5b?from=from_copylink",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Vibe Coding：与AI协作开发产品",
    course: "05 和AI一起vibe coding做产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/Bgf1w4S3Ji0u6wkqMOnc6Otcnlx?from=from_copylink",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 6,
    icon: "🚀",
    title: "部署实践：产品上线与发布记录",
    course: "06 把产品交付到真实世界：上线与发布",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/OHSJwPwS8irjXTkm57Pc0wXVn9b?from=from_copylink",
    gradient: "from-green-500 to-lime-500",
  },
  {
    id: 7,
    icon: "📋",
    title: "产品复盘：从0到1的全流程总结",
    course: "07 一个产品是怎么做出来的",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/WTdkwShEyiEKrjkA2UycwdoxnUX?from=from_copylink",
    gradient: "from-lime-500 to-yellow-500",
  },
  {
    id: 8,
    icon: "🎓",
    title: "Demo Day：AI开发完整流程复习",
    course: "08 Demo Day：AI开发完整流程复习课",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/PUTSwz0zli5RqPkmaNXcbuU8nzw?from=from_copylink",
    gradient: "from-yellow-500 to-amber-500",
  },
];

export default function NotesList() {
  return (
    <section className="py-24 px-8 md:px-10 lg:px-40 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* 区域标题 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            学习笔记
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
            我在课程中的学习心得与思考
          </p>
        </div>

        {/* 笔记卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <div
              key={note.id}
              className="glass rounded-2xl card-hover glow-border p-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 图标 + 标题 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{note.icon}</span>
                <h3
                  className="text-xl font-semibold flex-1"
                  style={{ color: "#E0E7FF" }}
                >
                  {note.title}
                </h3>
              </div>

              {/* 对应课程 */}
              <p className="text-sm mb-6" style={{ color: "#94A3B8" }}>
                对应课程：{note.course}
              </p>

              {/* 查看笔记按钮 */}
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${note.gradient.replace("to-", "%, ").replace("from-", "0%, ")}100%)`,
                  color: "white",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                📖 查看笔记 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
