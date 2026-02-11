"use client";

// US-08: 项目详情模态框 - 编辑式杂志风格
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  demoUrl?: string | null;
  color?: string;
  tools?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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
  padding: '1rem 2rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: '500',
  fontSize: '1rem',
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  flex: 1,
} as const;

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

  const projectColor = project.color ? colorMap[project.color] : 'var(--caramel)';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(44, 36, 32, 0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          maxHeight: "calc(100vh - 40px)",
          background: '#FAF8F5',
          borderRadius: '1rem',
          border: '2px solid var(--deep-brown)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 装饰性内边框 */}
        <div style={{
          position: 'absolute',
          inset: '4px',
          border: '1px solid var(--muted-clay)',
          pointerEvents: 'none',
          borderRadius: 'calc(1rem - 4px)',
        }} />

        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border transition-all z-10 group"
          style={{
            borderColor: 'var(--soft-brown)',
            color: 'var(--deep-brown)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--cream)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
          }}
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* 封面图 */}
        <div className="relative w-full aspect-video overflow-hidden" style={{
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          background: `linear-gradient(135deg, ${projectColor}20, ${projectColor}10)`,
        }}>
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
            className="font-serif text-3xl md:text-4xl font-bold mb-6"
            style={{ color: 'var(--deep-brown)' }}
          >
            {project.title}
          </h2>

          {/* 状态标签（仅无演示链接的项目） */}
          {!project.demoUrl && (
            <div className="mb-8">
              <span className="tag-editorial">
                🔧 本地小工具
              </span>
            </div>
          )}

          {/* 工具标签 */}
          {project.tools && project.tools.length > 0 && (
            <div className="mb-8">
              <h3
                className="font-sans text-sm font-display uppercase tracking-widest mb-4"
                style={{ color: 'var(--muted-clay)' }}
              >
                使用工具
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider rounded"
                    style={{
                      background: 'var(--cream)',
                      color: 'var(--text-primary)',
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
              className="font-serif text-xl font-semibold mb-4"
              style={{ color: 'var(--deep-brown)' }}
            >
              项目简介
            </h3>
            <p
              className="font-sans text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
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
                style={{
                  ...buttonStyle,
                  color: '#FAF8F5',
                  background: 'var(--deep-brown)',
                  border: '2px solid var(--deep-brown)',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--caramel)';
                  e.currentTarget.style.borderColor = 'var(--caramel)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--deep-brown)';
                  e.currentTarget.style.borderColor = 'var(--deep-brown)';
                }}
              >
                <span>🚀 查看演示</span>
              </a>
            )}
            <button
              onClick={onClose}
              style={{
                ...buttonStyle,
                color: 'var(--deep-brown)',
                background: 'transparent',
                border: '2px solid var(--deep-brown)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--deep-brown)';
                e.currentTarget.style.color = '#FAF8F5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--deep-brown)';
              }}
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
