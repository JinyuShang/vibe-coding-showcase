"use client";

// US-03: 项目作品集（概览）- 科技未来感升级版
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "家庭食材管理系统",
    shortDesc: "管理家庭食材的库存与保质期，减少浪费",
    fullDesc: "管理家庭食材的库存与保质期，减少浪费，让厨房更井井有条。一款帮助家庭管理食材库存的Web应用。通过记录食材的购买日期、保质期等信息，智能提醒即将过期的食材，减少食物浪费，让家庭厨房管理更加高效有序。支持食材分类管理、保质期预警、消费记录追踪等核心功能。",
    image: "/projects/1.png",
    demoUrl: "http://www.familypantry.de5.net",
    gradient: "from-emerald-500 to-teal-500",
    status: "has-demo",
    tools: ["Enter", "Supabase"],
  },
  {
    id: 2,
    title: "Markdown文件浏览器",
    shortDesc: "本地Markdown文件的便捷浏览与预览工具",
    fullDesc: "本地Markdown文件的便捷浏览与预览工具，支持实时渲染。本地Markdown文件的便捷浏览工具。支持实时预览Markdown文件渲染效果，无需联网即可在浏览器中查看文档。界面简洁，专注于阅读体验，是日常查看技术文档和笔记的实用小工具。",
    image: "/projects/2.PNG",
    demoUrl: null,
    gradient: "from-blue-500 to-cyan-500",
    status: "local-tool",
    tools: ["Cursor", "Claude Code"],
  },
  {
    id: 3,
    title: "尚瑾瑜的AI工具箱",
    shortDesc: "集成多种AI实用工具的个人工具箱",
    fullDesc: "集成多种AI实用工具的个人工具箱，提升日常工作效率。集成多种AI实用工具的个人工具箱。整合了百炼智能体等AI能力，提供文本处理、智能问答等功能。通过统一的界面访问多个AI工具，提升日常工作和学习效率，是AI时代的个人生产力助手。",
    image: "/projects/3.png",
    demoUrl: "https://test06-zeta.vercel.app/",
    gradient: "from-violet-500 to-purple-500",
    status: "has-demo",
    tools: ["Cursor", "Claude Code", "Github", "Vercel"],
  },
  {
    id: 4,
    title: "三维模型标注平台",
    shortDesc: "在线三维模型标注工具，支持多角度查看",
    fullDesc: "在线三维模型标注工具，支持多角度查看与精准标注。在线三维模型标注工具。支持在3D空间中对模型进行精准标注，可多角度旋转查看模型细节。适用于3D模型审查、设计反馈标注等场景，为三维协作提供便捷的在线解决方案。",
    image: "/projects/4.png",
    demoUrl: null,
    gradient: "from-pink-500 to-rose-500",
    status: "local-tool",
    tools: ["Cursor", "Claude Code"],
  },
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-24 px-8 md:px-10 lg:px-40 relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 区域标题 */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
              我的项目
            </h2>
            <p className="text-lg md:text-xl" style={{ color: "#94A3B8" }}>
              这些是我在课程期间完成的实战项目
            </p>
          </div>

          {/* 项目卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group glass rounded-3xl overflow-hidden card-hover glow-border"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* 封面图容器 */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  />
                </div>

                {/* 项目信息 */}
                <div className="p-8">
                  {/* 项目名称 */}
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300"
                    style={{ color: "#E0E7FF" }}
                  >
                    {project.title}
                  </h3>

                  {/* 项目简介 */}
                  <p
                    className="text-base mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300"
                    style={{ color: "#94A3B8" }}
                  >
                    {project.shortDesc}
                  </p>

                  {/* 工具标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg"
                        style={{
                          background: "rgba(255, 255, 255, 0.08)",
                          color: "#E0E7FF",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* 状态标签 */}
                  <div className="mb-6">
                    {project.status === "has-demo" ? (
                      <span
                        className="inline-block px-4 py-2 text-sm font-semibold rounded-full"
                        style={{
                          background: "linear-gradient(135deg, #10B981 0%, #14B8A6 100%)",
                          color: "white",
                          boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
                        }}
                      >
                        🚀 有演示
                      </span>
                    ) : (
                      <span
                        className="inline-block px-4 py-2 text-sm font-semibold rounded-full glass"
                        style={{ color: "#94A3B8" }}
                      >
                        🔧 本地小工具
                      </span>
                    )}
                  </div>

                  {/* 按钮组 */}
                  <div className="flex gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 text-base font-semibold rounded-xl transition-all hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${project.gradient.replace("to-", "%, ").replace("from-", "0%, ")}100%)`,
                          color: "white",
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        查看演示
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-6 py-3 text-base font-semibold rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
                      style={{ color: "#E0E7FF" }}
                    >
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 项目详情模态框 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
