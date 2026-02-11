"use client";

// US-03: 项目作品集（概览）- 编辑式杂志风格
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
    color: "forest",
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
    color: "sage",
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
    color: "caramel",
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
    color: "terracotta",
    status: "local-tool",
    tools: ["Cursor", "Claude Code"],
  },
];

const colorMap: Record<string, string> = {
  caramel: 'var(--caramel)',
  terracotta: 'var(--terracotta)',
  forest: 'var(--forest)',
  sage: 'var(--sage)',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.75rem 1.5rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: '500',
  fontSize: '0.875rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'var(--deep-brown)',
  background: 'transparent',
  border: '2px solid var(--deep-brown)',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
} as const;

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="reveal-on-scroll overflow-hidden group"
            style={{
              animationDelay: `${index * 100}ms`,
              background: 'var(--warm-white)',
              border: '1px solid rgba(107, 93, 82, 0.15)',
              borderRadius: '0.5rem',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* 封面图容器 */}
            <div className="relative w-full aspect-video overflow-hidden">
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
                className="font-serif text-xl font-bold mb-3"
                style={{ color: 'var(--deep-brown)' }}
              >
                {project.title}
              </h3>

              {/* 项目简介 */}
              <p
                className="font-sans text-base mb-4 line-clamp-2"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.shortDesc}
              </p>

              {/* 工具标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-wider rounded"
                    style={{
                      background: 'var(--cream)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* 状态标签 */}
              <div className="mb-6">
                {project.status === "has-demo" ? (
                  <span className="tag-editorial tag-warm">
                    🚀 有演示
                  </span>
                ) : (
                  <span className="tag-editorial">
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
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--deep-brown)';
                      e.currentTarget.style.color = 'var(--warm-white)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--deep-brown)';
                    }}
                  >
                    查看演示
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    ...buttonStyle,
                    display: 'inline-flex',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--deep-brown)';
                    e.currentTarget.style.color = 'var(--warm-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--deep-brown)';
                  }}
                >
                  查看详情
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 项目详情模态框 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
