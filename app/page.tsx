import SkillsOverview from "./components/SkillsOverview";
import ProjectsShowcase from "./components/ProjectsShowcase";
import LearningTimeline from "./components/LearningTimeline";
import SkillsDetail from "./components/SkillsDetail";
import NotesList from "./components/NotesList";
import HomeworkList from "./components/HomeworkList";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* US-01: 个人简介区域 */}
      <section
        className="py-16 px-8 md:py-20 md:px-10 lg:py-24 lg:px-40"
        style={{
          background: "linear-gradient(135deg, #FFF8F0 0%, #FFEFD5 100%)",
        }}
      >
        <div className="max-w-4xl">
          {/* 姓名 */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#2C3E50" }}
          >
            尚瑾瑜
          </h1>

          {/* 装饰线 */}
          <div
            className="w-24 h-1 mb-6"
            style={{ backgroundColor: "#E6A042" }}
          />

          {/* 定位 */}
          <h2
            className="text-xl md:text-2xl mb-8"
            style={{ color: "#546E7A" }}
          >
            一个小白的Vibe Coding心路历程
          </h2>

          {/* 邮箱 */}
          <div className="flex items-center gap-2 text-base md:text-lg" style={{ color: "#607D8B" }}>
            <span className="text-xl">✉️</span>
            <span>shangjinyu_2012@foxmail.com</span>
          </div>
        </div>
      </section>

      {/* US-02: 核心技能标签（概览） */}
      <SkillsOverview />

      {/* US-03: 项目作品集（概览） */}
      <ProjectsShowcase />

      {/* US-04: 学习历程时间线 */}
      <LearningTimeline />

      {/* US-05: 详细技能栈清单 */}
      <SkillsDetail />

      {/* US-06: 学习笔记列表 */}
      <NotesList />

      {/* US-07: 作业展示列表 */}
      <HomeworkList />

      {/* US-09: 底部联系方式 */}
      <ContactFooter />
    </div>
  );
}
