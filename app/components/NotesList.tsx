// US-06: 学习笔记列表
const notes = [
  {
    id: 1,
    icon: "📚",
    title: "AI时代：不可逆的趋势与机遇",
    course: "01 大势不可逆，得势者必胜",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/C8Y2wSLyCiaatWkRgSgcKqvpnDb",
  },
  {
    id: 2,
    icon: "🛠️",
    title: "从0到1：构建商业级网站产品",
    course: "02 从网站开始构建一款商业产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/JuKBweiWOiAF27kGCYAc8AIkneg",
  },
  {
    id: 3,
    icon: "🤖",
    title: "实战入门：开发你的第一个AI应用",
    course: "03 与时俱进做出你的第一款 AI 应用",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/HfRpwdiZai32O6kfgSXcFykRn3J",
  },
  {
    id: 4,
    icon: "💻",
    title: "编程基础：踏入AI代码世界",
    course: "04 AI编程下一站：走入代码的世界",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/Otvyw6Xemia7XIkDHokcDsc0noc",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Vibe Coding：与AI协作开发产品",
    course: "05 和AI一起vibe coding做产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/GOoIw9wIci2kshkCDkkc08hin5b",
  },
  {
    id: 6,
    icon: "🚀",
    title: "部署实践：产品上线与发布记录",
    course: "06 把产品交付到真实世界：上线与发布",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/Bgf1w4S3Ji0u6wkqMOnc6Otcnlx",
  },
  {
    id: 7,
    icon: "📋",
    title: "产品复盘：从0到1的全流程总结",
    course: "07 一个产品是怎么做出来的",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/OHSJwPwS8irjXTkm57Pc0wXVn9b",
  },
  {
    id: 8,
    icon: "🎓",
    title: "Demo Day：AI开发完整流程复习",
    course: "08 Demo Day：AI开发完整流程复习课",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/WTdkwShEyiEKrjkA2UycwdoxnUX",
  },
];

export default function NotesList() {
  return (
    <section className="py-16 px-8 md:px-10 lg:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
          学习笔记
        </h2>
        <p className="text-base md:text-lg mb-12 text-center" style={{ color: "#546E7A" }}>
          我在课程中的学习心得与思考
        </p>

        {/* 笔记卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              {/* 图标 + 标题 */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{note.icon}</span>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#2C3E50" }}
                >
                  {note.title}
                </h3>
              </div>

              {/* 对应课程 */}
              <p className="text-sm mb-4" style={{ color: "#78909C" }}>
                对应课程：{note.course}
              </p>

              {/* 查看笔记按钮 */}
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: "#E6A042",
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
