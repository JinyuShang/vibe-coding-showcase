// US-07: 作业展示列表
const homework = [
  {
    id: 1,
    icon: "💡",
    title: "AI趋势思考：个人定位与行动方向",
    course: "01 大势不可逆，得势者必胜",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/IGYmw5EG8imxrhkJD3jcP7T5nBh",
  },
  {
    id: 2,
    icon: "🎨",
    title: "产品构思：我的商业网站想法",
    course: "02 从网站开始构建一款商业产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/X6w1woRjliECw9k9j3KccLaxnEh",
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI应用实践：第一个AI应用原型",
    course: "03 与时俱进做出你的第一款 AI 应用",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/UYzRw2ERCiZEzWkjxaScORvVnFd",
  },
  {
    id: 4,
    icon: "⌨️",
    title: "编程练习：代码世界入门实战",
    course: "04 AI编程下一站：走入代码的世界",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/VPn9wJWkxigRfBk9lMccMwMenth",
  },
  {
    id: 5,
    icon: "🤝",
    title: "协作开发：与AI共建产品项目",
    course: "05 和AI一起vibe coding做产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/KmtVwys3Hi4g3ykufL4cWoHBn8f",
  },
  {
    id: 6,
    icon: "🚀",
    title: "部署实践：产品上线与发布记录",
    course: "06 把产品交付到真实世界：上线与发布",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/I1nPwGYagiuf52ksvAEcep9rnec",
  },
  {
    id: 7,
    icon: "📋",
    title: "产品复盘：从0到1的全流程总结",
    course: "07 一个产品是怎么做出来的",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/GSxtwJ0GHisIlzklvwZcrV2GnZb",
  },
  {
    id: 8,
    icon: "🎓",
    title: "毕业展示：学习成果与未来规划",
    course: "08 Demo Day：AI开发完整流程复习课",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/XxDqwdfU1ipKxOkFWbycH8gonRh",
  },
];

export default function HomeworkList() {
  return (
    <section className="py-16 px-8 md:px-10 lg:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
          作业展示
        </h2>
        <p className="text-base md:text-lg mb-12 text-center" style={{ color: "#546E7A" }}>
          我在课程中的实战练习成果
        </p>

        {/* 作业卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homework.map((hw) => (
            <div
              key={hw.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              {/* 图标 + 标题 */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">{hw.icon}</span>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#2C3E50" }}
                >
                  {hw.title}
                </h3>
              </div>

              {/* 对应课程 */}
              <p className="text-sm mb-4" style={{ color: "#78909C" }}>
                对应课程：{hw.course}
              </p>

              {/* 查看作业按钮 */}
              <a
                href={hw.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                style={{
                  color: "#E6A042",
                }}
              >
                ✍️ 查看作业 →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
