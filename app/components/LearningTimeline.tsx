// US-04: 学习历程时间线 - 科技未来感升级版
const courses = [
  {
    id: 1,
    number: "01",
    title: "大势不可逆，得势者必胜",
    teacher: "龙龙老师",
    date: "2026.1.9",
    keyword: "AI趋势、时代机遇",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    number: "02",
    title: "从网站开始构建一款商业产品",
    teacher: "龙龙老师",
    date: "2026.1.12",
    keyword: "产品思维、商业逻辑",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    id: 3,
    number: "03",
    title: "与时俱进做出你的第一款 AI 应用",
    teacher: "龙龙老师",
    date: "2026.1.15",
    keyword: "AI应用、实战入门",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    number: "04",
    title: "AI编程下一站：走入代码的世界",
    teacher: "云舒老师",
    date: "2026.1.18",
    keyword: "编程基础、代码世界",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 5,
    number: "05",
    title: "和AI一起vibe coding做产品",
    teacher: "云舒老师",
    date: "2026.1.21",
    keyword: "Vibe Coding、协作开发",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    id: 6,
    number: "06",
    title: "把产品交付到真实世界：上线与发布",
    teacher: "云舒老师",
    date: "2026.1.24",
    keyword: "部署发布、产品交付",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    id: 7,
    number: "07",
    title: "一个产品是怎么做出来的",
    teacher: "云舒老师",
    date: "2026.1.27",
    keyword: "产品全流程、系统思维",
    gradient: "from-green-500 to-lime-500",
  },
  {
    id: 8,
    number: "08",
    title: "Demo Day：AI开发完整流程复习课",
    teacher: "云舒老师",
    date: "2026.1.31",
    keyword: "完整复习、毕业展示",
    gradient: "from-lime-500 to-yellow-500",
  },
];

export default function LearningTimeline() {
  return (
    <section className="py-24 px-8 md:px-10 lg:px-40 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* 区域标题 */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            学习历程
          </h2>
          <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
            我在Vibe Coding训练营的成长轨迹
          </p>
        </div>

        {/* 时间线 */}
        <div className="relative">
          {/* 垂直线（桌面端） */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"></div>

          {/* 课程卡片 */}
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="relative flex gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* 时间点（桌面端） */}
                <div className="hidden md:block w-20 pt-2 text-right">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#94A3B8" }}
                  >
                    {course.date.substring(5)}
                  </span>
                </div>

                {/* 卡片 */}
                <div className="flex-1 glass rounded-2xl card-hover glow-border p-6">
                  {/* 课程编号 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-block px-4 py-2 text-lg font-bold rounded-lg text-white bg-gradient-to-r ${course.gradient} shadow-lg`}
                    >
                      {course.number}
                    </span>
                    <span className="text-sm" style={{ color: "#94A3B8" }}>
                      👤 {course.teacher} · 📅 {course.date}
                    </span>
                  </div>

                  {/* 课程标题 */}
                  <h3
                    className="text-2xl font-semibold mb-3"
                    style={{ color: "#E0E7FF" }}
                  >
                    {course.title}
                  </h3>

                  {/* 关键词标签 */}
                  <div>
                    <span
                      className="inline-block px-4 py-2 text-sm rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${course.gradient.replace("to-", "%, ").replace("from-", "0%, ")}100%)`,
                        color: "white",
                      }}
                    >
                      🏷️ {course.keyword}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
