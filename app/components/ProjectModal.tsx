"use client";

// US-08: 项目详情模态框
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl?: string | null;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESC键关闭
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.addEventListener("keydown", handleEscape);
      // 阻止背景滚动
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 40px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          style={{ color: "#2C3E50" }}
        >
          ✕
        </button>

        {/* 封面图 */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-t-2xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* 内容 */}
        <div className="p-8">
          {/* 项目名称 */}
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "#2C3E50" }}
          >
            {project.title}
          </h2>

          {/* 状态标签（仅无演示链接的项目） */}
          {!project.demoUrl && (
            <div className="mb-6">
              <span
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg"
                style={{
                  backgroundColor: "#F5F5F5",
                  color: "#9E9E9E",
                }}
              >
                本地小工具
              </span>
            </div>
          )}

          {/* 项目简介 */}
          <div className="mb-8">
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: "#2C3E50" }}
            >
              项目简介
            </h3>
            <p
              className="text-base leading-relaxed"
              style={{ color: "#546E7A" }}
            >
              {project.description}
            </p>
          </div>

          {/* 按钮组 */}
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 text-center text-base font-medium rounded-lg transition-colors"
                style={{
                  backgroundColor: "#E6A042",
                  color: "white",
                }}
              >
                🚀 查看演示
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 text-base font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              style={{ color: "#2C3E50" }}
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
