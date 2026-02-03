import SkillsOverview from "./components/SkillsOverview";
import ProjectsShowcase from "./components/ProjectsShowcase";
import LearningTimeline from "./components/LearningTimeline";
import SkillsDetail from "./components/SkillsDetail";
import NotesList from "./components/NotesList";
import HomeworkList from "./components/HomeworkList";
import ContactFooter from "./components/ContactFooter";
import ScrollDownArrow from "./components/ScrollDownArrow";
import ReadingProgressBar from "./components/ReadingProgressBar";
import BackToTop from "./components/BackToTop";
import MouseGlow from "./components/MouseGlow";
import ParticleTextLoader from "./components/ParticleTextLoader";
import TypewriterText from "./components/TypewriterText";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <>
      {/* 全局UI组件（固定定位，不受滚动影响） */}
      <div className="min-h-screen flex flex-col">
        {/* 粒子文字加载动画 */}
        <ParticleTextLoader />

        {/* 阅读进度条 */}
        <ReadingProgressBar />

        {/* 鼠标跟随光晕 */}
        <MouseGlow />
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden animate-gradient"
        style={{
          background: "linear-gradient(135deg, #0A0A0B 0%, #1A1A2E 50%, #0F0F23 100%)",
          backgroundSize: "200% 200%",
        }}
      >
        {/* 背景光晕效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* 内容 */}
        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto animate-fade-in">
          {/* 问候语 */}
          <div className="mb-6 inline-block">
            <span
              className="px-8 py-3 rounded-full text-lg font-medium glass"
              style={{ color: "#A5B4FC" }}
            >
              👋 欢迎来到我的数字花园
            </span>
          </div>

          {/* 姓名 - 渐变文字 */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
            尚瑾瑜
          </h1>

          {/* 定位 */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8"
            style={{ color: "#94A3B8", lineHeight: "1.4" }}
          >
            一个小白的<span className="gradient-text font-semibold"> Vibe Coding</span> 心路历程
          </h2>

          {/* 装饰线 */}
          <div className="flex justify-center mb-10">
            <div
              className="h-1 w-32 animate-neon rounded-full"
              style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)" }}
            />
          </div>

          {/* 描述 - 打字机效果 */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{
              color: "#94A3B8",
              fontFamily: '"Microsoft YaHei", "PingFang SC", sans-serif',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            <TypewriterText text={"从0到1，探索AI时代的产品开发之旅，记录学习、分享成长、用代码构建未来。"} speed={50} delay={4000} />
          </p>

          {/* 邮箱 + CTA按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* 邮箱 */}
            <div className="flex items-center gap-3 px-6 py-3 glass rounded-xl">
              <span className="text-xl">✉️</span>
              <span className="text-base" style={{ color: "#E0E7FF" }}>
                shangjinyu_2012@foxmail.com
              </span>
            </div>

            {/* 滚动提示按钮 */}
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl font-semibold text-base overflow-hidden transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                探索我的作品
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* 滚动提示 - 可点击向下滑动 */}
        <ScrollDownArrow />
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

        {/* 回到顶部按钮 */}
        <BackToTop />
      </div>

      {/* AI聊天助手 - 独立于滚动容器 */}
      <ChatBot />
    </>
  );
}
