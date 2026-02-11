// US-04: 学习历程时间线 - 编辑式杂志风格
const courses = [
  {
    id: 1,
    number: "01",
    title: "大势不可逆，得势者必胜",
    teacher: "龙龙老师",
    date: "2026.1.9",
    keyword: "AI趋势、时代机遇",
    color: "caramel",
  },
  {
    id: 2,
    number: "02",
    title: "从网站开始构建一款商业产品",
    teacher: "龙龙老师",
    date: "2026.1.12",
    keyword: "产品思维、商业逻辑",
    color: "terracotta",
  },
  {
    id: 3,
    number: "03",
    title: "与时俱进做出你的第一款 AI 应用",
    teacher: "龙龙老师",
    date: "2026.1.15",
    keyword: "AI应用、实战入门",
    color: "sage",
  },
  {
    id: 4,
    number: "04",
    title: "AI编程下一站：走入代码的世界",
    teacher: "云舒老师",
    date: "2026.1.18",
    keyword: "编程基础、代码世界",
    color: "forest",
  },
  {
    id: 5,
    number: "05",
    title: "和AI一起vibe coding做产品",
    teacher: "云舒老师",
    date: "2026.1.21",
    keyword: "Vibe Coding、协作开发",
    color: "caramel",
  },
  {
    id: 6,
    number: "06",
    title: "把产品交付到真实世界：上线与发布",
    teacher: "云舒老师",
    date: "2026.1.24",
    keyword: "部署发布、产品交付",
    color: "terracotta",
  },
  {
    id: 7,
    number: "07",
    title: "一个产品是怎么做出来的",
    teacher: "云舒老师",
    date: "2026.1.27",
    keyword: "产品全流程、系统思维",
    color: "sage",
  },
  {
    id: 8,
    number: "08",
    title: "Demo Day：AI开发完整流程复习课",
    teacher: "云舒老师",
    date: "2026.1.31",
    keyword: "完整复习、毕业展示",
    color: "forest",
  },
];

const colorMap: Record<string, string> = {
  caramel: 'var(--caramel)',
  terracotta: 'var(--terracotta)',
  forest: 'var(--forest)',
  sage: 'var(--sage)',
};

export default function LearningTimeline() {
  return (
    <div className="timeline-organic pl-0 md:pl-12">
      {/* 课程卡片 */}
      <div className="space-y-8">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="relative flex gap-6 reveal-on-scroll"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* 时间点（桌面端） */}
            <div className="hidden md:block w-20 pt-2 text-right">
              <span
                className="font-display text-sm font-semibold uppercase tracking-wider"
                style={{ color: 'var(--text-secondary)' }}
              >
                {course.date.substring(5)}
              </span>
            </div>

            {/* 卡片 */}
            <div
              className="flex-1 relative"
              style={{
                background: 'var(--warm-white)',
                border: '1px solid rgba(107, 93, 82, 0.15)',
                borderRadius: '0.5rem',
                padding: '1.5rem',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* 课程编号 */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block px-4 py-2 font-display text-lg font-bold rounded text-white"
                  style={{ background: colorMap[course.color] }}
                >
                  {course.number}
                </span>
                <span className="font-sans text-sm" style={{ color: 'var(--text-secondary)' }}>
                  👤 {course.teacher} · 📅 {course.date}
                </span>
              </div>

              {/* 课程标题 */}
              <h3
                className="font-serif text-2xl font-semibold mb-3"
                style={{ color: 'var(--deep-brown)' }}
              >
                {course.title}
              </h3>

              {/* 关键词标签 */}
              <div>
                <span className="tag-editorial" style={{ background: `${colorMap[course.color]}20`, color: colorMap[course.color] }}>
                  🏷️ {course.keyword}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
