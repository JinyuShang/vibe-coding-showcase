'use client';

import { useEffect, useRef } from 'react';
import SkillsOverview from "./components/SkillsOverview";
import ProjectsShowcase from "./components/ProjectsShowcase";
import LearningTimeline from "./components/LearningTimeline";
import SkillsDetail from "./components/SkillsDetail";
import NotesList from "./components/NotesList";
import HomeworkList from "./components/HomeworkList";
import ContactFooter from "./components/ContactFooter";
import BackToTop from "./components/BackToTop";
import ChatBot from "./components/ChatBot";

// 滚动动画Hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <main className="min-h-screen paper-texture">
      {/* ==========================================
          HERO SECTION - 编辑式杂志风格
          ========================================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 装饰性背景元素 */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* 大号装饰圆 */}
          <div className="decorative-circle w-[600px] h-[600px] -top-48 -right-48 opacity-20 animate-drift" />
          <div className="decorative-circle w-[400px] h-[400px] bottom-20 -left-20 opacity-15 animate-drift" style={{ animationDelay: '2s' }} />

          {/* 小装饰圆 */}
          <div className="decorative-circle w-24 h-24 top-1/4 left-1/4 opacity-10" />
          <div className="decorative-circle w-16 h-16 bottom-1/3 right-1/4 opacity-10" />
        </div>

        {/* 主内容 */}
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            {/* 不对称网格布局 */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* 左侧 - 主要内容 */}
              <div className="lg:col-span-8 space-y-8">
                {/* 顶部标签 */}
                <div className="reveal-on-scroll animate-reveal-up">
                  <span className="tag-editorial inline-flex items-center gap-2">
                    <span className="decorative-dot" />
                    WayToAGI · Vibe Coding 实战训练营
                  </span>
                </div>

                {/* 主标题 */}
                <div className="space-y-4">
                  <h1 className="text-display-hero text-balance reveal-on-scroll animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                    尚瑾瑜
                  </h1>
                  <div className="flex items-center gap-6 reveal-on-scroll animate-reveal-up" style={{ animationDelay: '0.2s' }}>
                    <div className="decorative-line" />
                    <p className="font-sans text-lg md:text-xl text-balance" style={{ color: 'var(--text-secondary)' }}>
                      一个小白的 <span className="font-serif italic font-semibold" style={{ color: 'var(--caramel)' }}>Vibe Coding</span> 心路历程
                    </p>
                  </div>
                </div>

                {/* 描述文字 */}
                <p className="text-body-large max-w-2xl text-balance reveal-on-scroll animate-reveal-up" style={{ animationDelay: '0.3s' }}>
                  从0到1，探索AI时代的产品开发之旅。在这里，我记录学习、分享成长、用代码构建未来。
                  这不仅是技术的积累，更是一场关于创造与发现的个人实验。
                </p>

                {/* CTA按钮组 */}
                <div className="flex flex-wrap items-center gap-4 pt-4 reveal-on-scroll animate-reveal-up" style={{ animationDelay: '0.4s' }}>
                  <a
                    href="#projects"
                    className="btn-editorial group"
                  >
                    <span>探索我的作品</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>

                  <a
                    href="#skills"
                    className="btn-outline"
                  >
                    查看技能栈
                  </a>
                </div>
              </div>

              {/* 右侧 - 装饰性卡片 */}
              <div className="lg:col-span-4 reveal-on-scroll animate-reveal-scale" style={{ animationDelay: '0.5s' }}>
                <div className="relative">
                  {/* 边框装饰 */}
                  <div className="border-ornate p-8 bg-cream/50 backdrop-blur-sm">
                    <div className="space-y-6">
                      {/* 邮箱 */}
                      <div className="space-y-2">
                        <p className="font-display text-xs uppercase tracking-widest" style={{ color: 'var(--muted-clay)' }}>
                          Contact
                        </p>
                        <a
                          href="mailto:shangjinyu_2012@foxmail.com"
                          className="font-serif text-lg hover:text-terracotta transition-colors"
                          style={{ color: 'var(--deep-brown)' }}
                        >
                          shangjinyu_2012@foxmail.com
                        </a>
                      </div>

                      {/* 分隔线 */}
                      <div className="h-px bg-gradient-to-r from-transparent via-text-secondary/20 to-transparent" />

                      {/* 统计信息 */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-baseline">
                          <span className="font-display text-4xl font-bold" style={{ color: 'var(--caramel)' }}>
                            8
                          </span>
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>课程模块</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-display text-4xl font-bold" style={{ color: 'var(--terracotta)' }}>
                            4
                          </span>
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>实战项目</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="font-display text-4xl font-bold" style={{ color: 'var(--sage)' }}>
                            7
                          </span>
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>核心技能</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 装饰角标 */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 gradient-warm rounded-full flex items-center justify-center text-white font-serif font-bold text-sm animate-float-organic">
                    2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal-on-scroll" style={{ animationDelay: '0.8s' }}>
          <span className="font-display text-xs uppercase tracking-widest" style={{ color: 'var(--muted-clay)' }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-text-secondary/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ==========================================
        SKILLS OVERVIEW - 编辑风格展示
        ========================================== */}
      <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* 区域标题 */}
          <div className="mb-16 md:mb-24 reveal-on-scroll">
            <div className="flex items-center gap-6 mb-6">
              <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-caramel" />
              <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                Expertise
              </span>
            </div>
            <h2 className="text-heading-large text-balance">
              核心技能
            </h2>
            <p className="text-body-large mt-6 max-w-2xl">
              在Vibe Coding训练营中，我从产品思维到AI编程，系统性地掌握了现代产品开发的完整技能树。
            </p>
          </div>

          <SkillsOverview />
        </div>
      </section>

      {/* ==========================================
        PROJECTS SHOWCASE - 杂志网格风格
        ========================================== */}
      <section id="projects" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-cream/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* 区域标题 */}
          <div className="mb-16 md:mb-24 reveal-on-scroll">
            <div className="flex items-center gap-6 mb-6">
              <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-terracotta" />
              <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                Portfolio
              </span>
            </div>
            <h2 className="text-heading-large text-balance">
              我的项目
            </h2>
            <p className="text-body-large mt-6 max-w-2xl">
              每一个项目都是一次学习和成长的见证，从想法到实现，记录着我的编程进阶之路。
            </p>
          </div>

          <ProjectsShowcase />
        </div>
      </section>

      {/* ==========================================
        LEARNING TIMELINE - 有机时间轴
        ========================================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto">
          {/* 区域标题 */}
          <div className="mb-16 md:mb-24 reveal-on-scroll">
            <div className="flex items-center gap-6 mb-6">
              <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-forest" />
              <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                Journey
              </span>
            </div>
            <h2 className="text-heading-large text-balance">
              学习历程
            </h2>
            <p className="text-body-large mt-6 max-w-2xl">
              从认识AI趋势到完成完整的Web应用部署，这是一段充满发现与突破的学习旅程。
            </p>
          </div>

          <LearningTimeline />
        </div>
      </section>

      {/* ==========================================
        SKILLS DETAIL - 清单式展示
        ========================================== */}
      <section id="skills-detail" className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative bg-gradient-to-b from-transparent to-sage/10">
        <div className="max-w-7xl mx-auto">
          {/* 区域标题 */}
          <div className="mb-16 md:mb-24 reveal-on-scroll">
            <div className="flex items-center gap-6 mb-6">
              <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-golden-sand" />
              <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                Deep Dive
              </span>
            </div>
            <h2 className="text-heading-large text-balance">
              技能栈详解
            </h2>
            <p className="text-body-large mt-6 max-w-2xl">
              深入了解每一项技能的具体内容和应用场景。
            </p>
          </div>

          <SkillsDetail />
        </div>
      </section>

      {/* ==========================================
        NOTES & HOMEWORK - 对称布局
        ========================================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* 学习笔记 */}
          <div>
            <div className="mb-16 md:mb-20 reveal-on-scroll">
              <div className="flex items-center gap-6 mb-6">
                <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-caramel" />
                <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                  Knowledge Base
                </span>
              </div>
              <h2 className="text-heading-large text-balance">
                学习笔记
              </h2>
              <p className="text-body-large mt-6 max-w-2xl">
                记录课程中的核心知识点和个人思考，形成系统化的知识体系。
              </p>
            </div>
            <NotesList />
          </div>

          {/* 作业展示 */}
          <div>
            <div className="mb-16 md:mb-20 reveal-on-scroll">
              <div className="flex items-center gap-6 mb-6">
                <div className="decorative-line h-px w-16 bg-gradient-to-r from-transparent to-terracotta" />
                <span className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-clay)' }}>
                  Practice Work
                </span>
              </div>
              <h2 className="text-heading-large text-balance">
                作业展示
              </h2>
              <p className="text-body-large mt-6 max-w-2xl">
                将所学知识转化为实践，每一次作业都是对理解程度的检验和深化。
              </p>
            </div>
            <HomeworkList />
          </div>
        </div>
      </section>

      {/* ==========================================
        CONTACT FOOTER
        ========================================== */}
      <ContactFooter />

      {/* ==========================================
        FLOATING ELEMENTS
        ========================================== */}
      <BackToTop />
      <ChatBot />
    </main>
  );
}
