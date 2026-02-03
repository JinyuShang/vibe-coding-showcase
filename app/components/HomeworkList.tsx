// US-07: 作业展示列表 - 科技未来感升级版
const homework = [
  {
    id: 1,
    icon: "💡",
    title: "AI趋势思考：个人定位与行动方向",
    course: "01 大势不可逆，得势者必胜",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/IGYmw5EG8imxrhkJD3jcP7T5nBh",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    icon: "🎨",
    title: "产品构思：我的商业网站想法",
    course: "02 从网站开始构建一款商业产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/X6w1woRjliECw9k9j3KccLaxnEh",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    icon: "🤖",
    title: "AI应用实践：第一个AI应用原型",
    course: "03 与时俱进做出你的第一款 AI 应用",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/UYzRw2ERCiZEzWkjxaScORvVnFd",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    id: 4,
    icon: "⌨️",
    title: "编程练习：代码世界入门实战",
    course: "04 AI编程下一站：走入代码的世界",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/VPn9wJWkxigRfBk9lMccMwMenth",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 5,
    icon: "🤝",
    title: "协作开发：与AI共建产品项目",
    course: "05 和AI一起vibe coding做产品",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/KmtVwys3Hi4g3ykufL4cWoHBn8f",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 6,
    icon: "🚀",
    title: "部署实践：产品上线与发布记录",
    course: "06 把产品交付到真实世界：上线与发布",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/I1nPwGYagiuf52ksvAEcep9rnec",
    gradient: "from-green-500 to-lime-500",
  },
  {
    id: 7,
    icon: "📋",
    title: "产品复盘：从0到1的全流程总结",
    course: "07 一个产品是怎么做出来的",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/GSxtwJ0GHisIlzklvwZcrV2GnZb",
    gradient: "from-lime-500 to-yellow-500",
  },
  {
    id: 8,
    icon: "🎓",
    title: "毕业展示：学习成果与未来规划",
    course: "08 Demo Day：AI开发完整流程复习课",
    url: "https://scn4nzunkqiv.feishu.cn/wiki/XxDqwdfU1ipKxOkFWbycH8gonRh",
    gradient: "from-yellow-500 to-amber-500",
  },
];

export default function HomeworkList() {
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
            作业展示
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
            我在课程中的实战练习成果
          </p>
        </div>

        {/* 作业卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homework.map((hw, index) => (
            <div
              key={hw.id}
              className="glass rounded-2xl card-hover glow-border p-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* 图标 + 标题 */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{hw.icon}</span>
                <h3
                  className="text-xl font-semibold flex-1"
                  style={{ color: "#E0E7FF" }}
                >
                  {hw.title}
                </h3>
              </div>

              {/* 对应课程 */}
              <p className="text-sm mb-6" style={{ color: "#94A3B8" }}>
                对应课程：{hw.course}
              </p>

              {/* 查看作业按钮 */}
              <a
                href={hw.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-xl transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${hw.gradient.replace("to-", "%, ").replace("from-", "0%, ")}100%)`,
                  color: "white",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
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
