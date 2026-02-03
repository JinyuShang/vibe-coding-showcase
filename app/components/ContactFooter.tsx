"use client";

// US-09: 底部联系方式
import { useState } from "react";

export default function ContactFooter() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const email = "shangjinyu_2012@foxmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 1000);
    } catch (error) {
      setCopyStatus("error");
      setTimeout(() => setCopyStatus("idle"), 2000);
    }
  };

  return (
    <footer
      className="py-16 px-8 md:px-10 lg:px-40"
      style={{ background: "#FFF8F0" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* 标题 */}
        <h2
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: "#2C3E50" }}
        >
          联系方式
        </h2>

        {/* 装饰线 */}
        <div
          className="w-20 h-1 mx-auto mb-6"
          style={{ backgroundColor: "#E6A042" }}
        />

        {/* 说明 */}
        <p className="text-lg mb-8" style={{ color: "#546E7A" }}>
          期待与您的交流
        </p>

        {/* 邮箱 */}
        <div className="flex items-center justify-center gap-2 mb-6 text-base" style={{ color: "#607D8B" }}>
          <span className="text-xl">✉️</span>
          <span>{email}</span>
        </div>

        {/* 复制按钮 */}
        <button
          onClick={handleCopyEmail}
          disabled={copyStatus === "copied"}
          className="px-6 py-3 text-base font-medium rounded-lg transition-all border-2 mb-12"
          style={
            copyStatus === "copied"
              ? {
                  backgroundColor: "#4CAF50",
                  borderColor: "#4CAF50",
                  color: "white",
                }
              : copyStatus === "error"
                ? {
                    backgroundColor: "#F5F5F5",
                    borderColor: "#F5F5F5",
                    color: "#757575",
                  }
                : {
                    backgroundColor: "white",
                    borderColor: "#E6A042",
                    color: "#E6A042",
                  }
          }
        >
          {copyStatus === "copied" ? "📋 已复制 ✓" : copyStatus === "error" ? "复制失败，请手动复制" : "📋 复制邮箱地址"}
        </button>

        {/* 分隔线 */}
        <div className="w-full h-px mb-6" style={{ backgroundColor: "#E0E0E0" }} />

        {/* 版权信息 */}
        <p className="text-xs" style={{ color: "#9E9E9E" }}>
          © 2026 尚瑾瑜. Powered by Vibe Coding
        </p>
      </div>
    </footer>
  );
}
