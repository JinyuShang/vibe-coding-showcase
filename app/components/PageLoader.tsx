"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 模拟加载进度
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0B] transition-opacity duration-500">
      {/* 背景动画 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* 加载内容 */}
      <div className="relative z-10 text-center">
        {/* Logo/文字 */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
          尚瑾瑜
        </h1>

        {/* 进度条容器 */}
        <div className="w-64 md:w-80 h-1 mx-auto rounded-full overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
          <div
            className="h-full transition-all duration-100 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          />
        </div>

        {/* 加载文字 */}
        <p className="mt-6 text-sm" style={{ color: "#94A3B8" }}>
          正在加载精彩内容...
        </p>

        {/* 装饰性粒子 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-96 h-96 border border-purple-500/20 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-indigo-500/20 rounded-full animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-500/20 rounded-full animate-spin" style={{ animationDuration: "10s" }} />
        </div>
      </div>
    </div>
  );
}
