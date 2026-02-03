// US-04: 学习历程时间线
const courses = [
  {
    id: 1,
    number: "01",
    title: "大势不可逆，得势者必胜",
    teacher: "龙龙老师",
    date: "2026.1.9",
    keyword: "AI趋势、时代机遇",
    gradient: "from-[#FFB300]",
  },
  {
    id: 2,
    number: "02",
    title: "从网站开始构建一款商业产品",
    teacher: "龙龙老师",
    date: "2026.1.12",
    keyword: "产品思维、商业逻辑",
    gradient: "from-[#FFC107]",
  },
  {
    id: 3,
    number: "03",
    title: "与时俱进做出你的第一款 AI 应用",
    teacher: "龙龙老师",
    date: "2026.1.15",
    keyword: "AI应用、实战入门",
    gradient: "from-[#FFCA28]",
  },
  {
    id: 4,
    number: "04",
    title: "AI编程下一站：走入代码的世界",
    teacher: "云舒老师",
    date: "2026.1.18",
    keyword: "编程基础、代码世界",
    gradient: "from-[#AED581]",
  },
  {
    id: 5,
    number: "05",
    title: "和AI一起vibe coding做产品",
    teacher: "云舒老师",
    date: "2026.1.21",
    keyword: "Vibe Coding、协作开发",
    gradient: "from-[#9CCC65]",
  },
  {
    id: 6,
    number: "06",
    title: "把产品交付到真实世界：上线与发布",
    teacher: "云舒老师",
    date: "2026.1.24",
    keyword: "部署发布、产品交付",
    gradient: "from-[#7CB342]",
  },
  {
    id: 7,
    number: "07",
    title: "一个产品是怎么做出来的",
    teacher: "云舒老师",
    date: "2026.1.27",
    keyword: "产品全流程、系统思维",
    gradient: "from-[#689F38]",
  },
  {
    id: 8,
    number: "08",
    title: "Demo Day：AI开发完整流程复习课",
    teacher: "云舒老师",
    date: "2026.1.31",
    keyword: "完整复习、毕业展示",
    gradient: "from-[#558B2F]",
  },
];

export default function LearningTimeline() {
  return (
    <section className="py-16 px-8 md:px-10 lg:px-40 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
          学习历程
        </h2>
        <p className="text-base md:text-lg mb-12 text-center" style={{ color: "#546E7A" }}>
          我在Vibe Coding训练营的成长轨迹
        </p>

        {/* 时间线 */}
        <div className="relative">
          {/* 垂直线（桌面端） */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          {/* 课程卡片 */}
          <div className="space-y-6">
            {courses.map((course, index) => (
              <div key={course.id} className="relative flex gap-6">
                {/* 时间点（桌面端） */}
                <div className="hidden md:block w-16 pt-2 text-right">
                  <span className="text-sm font-medium" style={{ color: "#78909C" }}>
                    {course.date.substring(5)}
                  </span>
                </div>

                {/* 卡片 */}
                <div className="flex-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                  {/* 课程编号 */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block px-3 py-1 text-lg font-bold rounded-lg text-white bg-gradient-to-r ${course.gradient}`}
                    >
                      {course.number}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "#78909C" }}
                    >
                      👤 {course.teacher} 📅 {course.date}
                    </span>
                  </div>

                  {/* 课程标题 */}
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#2C3E50" }}
                  >
                    {course.title}
                  </h3>

                  {/* 关键词标签 */}
                  <div>
                    <span
                      className="inline-block px-3 py-1 text-sm rounded-lg"
                      style={{
                        backgroundColor: "#FFF3E0",
                        color: "#E6A042",
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
