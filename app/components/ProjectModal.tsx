"use client";

// US-08: 项目详情模态框 - 科技未来感升级版
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  demoUrl?: string | null;
  gradient?: string;
  tools?: string[];
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-[#0A0A0B] rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
        style={{ maxHeight: "calc(100vh - 40px)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/20 transition-all z-10 group"
          style={{ color: "#E0E7FF" }}
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 封面图 */}
        <div className="relative w-full aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-t-3xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* 内容 */}
        <div className="p-8 md:p-12">
          {/* 项目名称 */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            {project.title}
          </h2>

          {/* 状态标签（仅无演示链接的项目） */}
          {!project.demoUrl && (
            <div className="mb-8">
              <span
                className="inline-block px-6 py-3 text-sm font-semibold rounded-full glass"
                style={{ color: "#94A3B8" }}
              >
                🔧 本地小工具
              </span>
            </div>
          )}

          {/* 工具标签 */}
          {project.tools && project.tools.length > 0 && (
            <div className="mb-8">
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#E0E7FF" }}
              >
                使用工具
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 text-sm font-semibold rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${project.gradient?.replace("to-", "%, ").replace("from-", "0%, ")}100%)`,
                      color: "white",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 项目简介 */}
          <div className="mb-8">
            <h3
              className="text-xl font-semibold mb-4"
              style={{ color: "#E0E7FF" }}
            >
              项目简介
            </h3>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              {project.fullDesc}
            </p>
          </div>

          {/* 按钮组 */}
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 text-center text-base font-semibold rounded-2xl transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                  color: "white",
                  boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                }}
              >
                🚀 查看演示
              </a>
            )}
            <button
              onClick={onClose}
              className="flex-1 px-8 py-4 text-base font-semibold rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all"
              style={{ color: "#E0E7FF" }}
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
