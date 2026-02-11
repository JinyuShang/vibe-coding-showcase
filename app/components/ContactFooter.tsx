"use client";

// US-09: 底部联系方式 - 编辑式杂志风格
import { useState } from "react";

export default function ContactFooter() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const email = "shangjinyu_2012@foxmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (error) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 3000);
    }
  };

  return (
    <footer className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden" style={{ backgroundColor: 'var(--deep-brown)' }}>
      {/* 装饰性背景 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="decorative-circle w-[500px] h-[500px] -top-48 -right-48" />
        <div className="decorative-circle w-[300px] h-[300px] bottom-0 -left-20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 标题 */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          联系方式
        </h2>

        {/* 装饰线 */}
        <div className="decorative-line mx-auto mb-8" style={{ backgroundColor: 'var(--caramel)' }} />

        {/* 说明 */}
        <p className="font-sans text-xl mb-10" style={{ color: 'var(--warm-white)', opacity: 0.8 }}>
          期待与您的交流
        </p>

        {/* 邮箱卡片 */}
        <div className="border-ornate p-8 md:p-12 bg-cream/5 backdrop-blur-sm max-w-2xl mx-auto mb-10">
          <div className="space-y-4">
            <p className="font-display text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--golden-sand)' }}>
              Email
            </p>
            <a
              href={`mailto:${email}`}
              className="font-serif text-2xl md:text-3xl hover:opacity-80 transition-opacity"
              style={{ color: 'var(--warm-white)' }}
            >
              {email}
            </a>
          </div>
        </div>

        {/* 复制按钮 */}
        <button
          onClick={handleCopyEmail}
          disabled={copyStatus === "copied"}
          className="px-10 py-4 font-semibold rounded transition-all hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed mb-16"
          style={
            copyStatus === "copied"
              ? {
                  background: "var(--sage)",
                  color: "white",
                }
              : copyStatus === "error"
                ? {
                    background: "transparent",
                    border: "2px solid var(--soft-brown)",
                    color: "var(--soft-brown)",
                  }
                : {
                    background: "var(--caramel)",
                    color: "white",
                  }
          }
        >
          {copyStatus === "copied"
            ? "已复制 ✓"
            : copyStatus === "error"
              ? "复制失败，请手动复制"
              : "复制邮箱地址"}
        </button>

        {/* 分隔线 */}
        <div className="w-full h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, var(--muted-clay), transparent)" }} />

        {/* 版权信息 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-sans text-sm" style={{ color: 'var(--warm-white)', opacity: 0.6 }}>
            © 2026 尚瑾瑜. Powered by Vibe Coding
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm hover:opacity-100 transition-opacity"
              style={{ color: 'var(--warm-white)', opacity: 0.6 }}
            >
              GitHub
            </a>
            <span style={{ color: 'var(--warm-white)', opacity: 0.3 }}>·</span>
            <a
              href={`mailto:${email}`}
              className="font-sans text-sm hover:opacity-100 transition-opacity"
              style={{ color: 'var(--warm-white)', opacity: 0.6 }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
