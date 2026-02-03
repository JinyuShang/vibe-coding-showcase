"use client";

// US-03: 项目作品集（概览）
import Image from "next/image";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: 1,
    title: "家庭食材管理系统",
    description: "管理家庭食材的库存与保质期，减少浪费，让厨房更井井有条。一款帮助家庭管理食材库存的Web应用。通过记录食材的购买日期、保质期等信息，智能提醒即将过期的食材，减少食物浪费，让家庭厨房管理更加高效有序。支持食材分类管理、保质期预警、消费记录追踪等核心功能。",
    image: "/projects/1.png",
    demoUrl: "http://www.familypantry.de5.net",
    status: "daily-tool", // daily-tool | has-demo
  },
  {
    id: 2,
    title: "Markdown文件浏览器",
    description: "本地Markdown文件的便捷浏览与预览工具，支持实时渲染。本地Markdown文件的便捷浏览工具。支持实时预览Markdown文件渲染效果，无需联网即可在浏览器中查看文档。界面简洁，专注于阅读体验，是日常查看技术文档和笔记的实用小工具。",
    image: "/projects/2.PNG",
    demoUrl: null,
    status: "daily-tool",
  },
  {
    id: 3,
    title: "尚瑾瑜的AI工具箱",
    description: "集成多种AI实用工具的个人工具箱，提升日常工作效率。集成多种AI实用工具的个人工具箱。整合了百炼智能体等AI能力，提供文本处理、智能问答等功能。通过统一的界面访问多个AI工具，提升日常工作和学习效率，是AI时代的个人生产力助手。",
    image: "/projects/3.png",
    demoUrl: "https://test06-zeta.vercel.app/",
    status: "has-demo",
  },
  {
    id: 4,
    title: "三维模型标注平台",
    description: "在线三维模型标注工具，支持多角度查看与精准标注。在线三维模型标注工具。支持在3D空间中对模型进行精准标注，可多角度旋转查看模型细节。适用于3D模型审查、设计反馈标注等场景，为三维协作提供便捷的在线解决方案。",
    image: "/projects/4.png",
    demoUrl: null,
    status: "daily-tool",
  },
];

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section className="py-16 px-8 md:px-10 lg:px-40 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* 区域标题 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center" style={{ color: "#2C3E50" }}>
            我的项目
          </h2>

          {/* 项目卡片网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                {/* 封面图 */}
                <div className="relative w-full aspect-video bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* 项目信息 */}
                <div className="p-4">
                  {/* 项目名称 */}
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2C3E50" }}
                  >
                    {project.title}
                  </h3>

                  {/* 项目简介 */}
                  <p
                    className="text-sm mb-3 line-clamp-2"
                    style={{ color: "#546E7A" }}
                  >
                    {project.description.substring(0, 50)}...
                  </p>

                  {/* 状态标签 */}
                  <div className="mb-3">
                    {project.status === "has-demo" ? (
                      <span
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: "#E3F2FD",
                          color: "#2196F3",
                        }}
                      >
                        有演示
                      </span>
                    ) : (
                      <span
                        className="inline-block px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: "#F5F5F5",
                          color: "#9E9E9E",
                        }}
                      >
                        日常小工具
                      </span>
                    )}
                  </div>

                  {/* 按钮组 */}
                  <div className="flex gap-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                        style={{
                          backgroundColor: "#E6A042",
                          color: "white",
                        }}
                      >
                        查看演示
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-3 py-2 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                      style={{ color: "#2C3E50" }}
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
