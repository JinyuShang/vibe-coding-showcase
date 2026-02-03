"use client";

// US-09: 底部联系方式 - 科技未来感升级版
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
    <footer
      className="relative py-24 px-8 md:px-10 lg:px-40 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0A0B 0%, #1A1A2E 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 标题 */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text"
        >
          联系方式
        </h2>

        {/* 装饰线 */}
        <div
          className="w-24 h-1 mx-auto mb-8 animate-neon rounded-full"
          style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)" }}
        />

        {/* 说明 */}
        <p className="text-xl mb-10" style={{ color: "#94A3B8" }}>
          期待与您的交流
        </p>

        {/* 邮箱 */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl">✉️</span>
          <span className="text-xl" style={{ color: "#E0E7FF" }}>
            {email}
          </span>
        </div>

        {/* 复制按钮 */}
        <button
          onClick={handleCopyEmail}
          disabled={copyStatus === "copied"}
          className="px-10 py-4 text-lg font-semibold rounded-2xl transition-all hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed mb-16"
          style={
            copyStatus === "copied"
              ? {
                  background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                  color: "white",
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)",
                }
              : copyStatus === "error"
                ? {
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#94A3B8",
                  }
                : {
                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                    color: "white",
                    boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                  }
          }
        >
          {copyStatus === "copied"
            ? "📋 已复制 ✓"
            : copyStatus === "error"
              ? "复制失败，请手动复制"
              : "📋 复制邮箱地址"}
        </button>

        {/* 分隔线 */}
        <div className="w-full h-px mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)" }} />

        {/* 版权信息 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-sm" style={{ color: "#64748B" }}>
            © 2026 尚瑾瑜. Powered by Vibe Coding
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
              style={{ color: "#94A3B8" }}
            >
              GitHub
            </a>
            <span style={{ color: "#475569" }}>·</span>
            <a
              href="mailto:shangjinyu_2012@foxmail.com"
              className="text-sm hover:text-white transition-colors"
              style={{ color: "#94A3B8" }}
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
