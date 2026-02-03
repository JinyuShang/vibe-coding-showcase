"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
}

export default function ParticleTextLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showComplete, setShowComplete] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 文字配置
    const fontSize = Math.min(window.innerWidth * 0.12, 180);
    const mainText = "Vibe Coding毕业展";

    // WayToAGI火焰文字配置
    const brandFontSize = Math.min(window.innerWidth * 0.18, 270);
    const brandText = "WayToAGI";

    // 创建离屏canvas来获取文字像素
    const offCanvas = document.createElement("canvas");
    offCanvas.width = canvas.width;
    offCanvas.height = canvas.height;
    const offCtx = offCanvas.getContext("2d");
    if (!offCtx) return;

    // 绘制WayToAGI（火焰效果）
    offCtx.font = `bold ${brandFontSize}px "Inter", sans-serif`;
    offCtx.fillStyle = "#ffffff";
    offCtx.textAlign = "center";
    offCtx.textBaseline = "middle";
    offCtx.fillText(brandText, canvas.width / 2, canvas.height / 2 - fontSize * 1.5);

    // 绘制主文字
    offCtx.font = `bold ${fontSize}px "Inter", sans-serif`;
    offCtx.fillStyle = "#ffffff";
    offCtx.fillText(mainText, canvas.width / 2, canvas.height / 2);

    // 获取文字像素点
    const imageData = offCtx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels: { x: number; y: number; type: "brand" | "main" }[] = [];

    // 采样像素点
    const skip = Math.max(6, Math.floor(window.innerWidth / 300));
    for (let y = 0; y < canvas.height; y += skip) {
      for (let x = 0; x < canvas.width; x += skip) {
        const index = (y * canvas.width + x) * 4;
        if (imageData.data[index + 3] > 128) {
          // 判断是WayToAGI还是主文字（根据y坐标）
          const type = y < canvas.height / 2 - fontSize * 0.5 ? "brand" : "main";
          pixels.push({ x, y, type });
        }
      }
    }

    // 创建粒子
    const particles: Particle[] = pixels.map((pixel) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 500 + 300;

      // WayToAGI使用红色火焰色，主文字使用紫色系
      const isBrand = pixel.type === "brand";
      const hue = isBrand ? Math.random() * 30 + 0 : Math.random() * 60 + 240; // 0-30红橙色, 240-300紫色
      const saturation = isBrand ? 100 : 70;

      return {
        x: pixel.x + Math.cos(angle) * distance,
        y: pixel.y + Math.sin(angle) * distance,
        targetX: pixel.x,
        targetY: pixel.y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2 + 1,
        color: `hsl(${hue}, ${saturation}%, 70%)`,
      };
    });

    // 动画参数
    let frame = 0;
    const totalFrames = 180; // 3秒 @ 60fps
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    // 动画循环
    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 11, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const progress = Math.min(frame / totalFrames, 1);
      const easedProgress = easeOutExpo(progress);

      // 绘制粒子
      particles.forEach((particle) => {
        // 计算当前位置
        const currentX =
          particle.x + (particle.targetX - particle.x) * easedProgress;
        const currentY =
          particle.y + (particle.targetY - particle.y) * easedProgress;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(currentX, currentY, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // 添加光晕效果
        ctx.beginPath();
        ctx.arc(currentX, currentY, particle.size * 2, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          particle.size * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      frame++;

      if (frame < totalFrames) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // 动画完成，显示"加载完成"文字
        setTimeout(() => {
          setShowComplete(true);
        }, 500);

        // 再等待2.5秒后淡出（原1.5秒 + 1秒额外停留）
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0A0B] transition-opacity duration-700"
      style={{ opacity: showComplete ? 0 : 1 }}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* 加载完成文字 */}
      {showComplete && (
        <div className="relative z-10 animate-fade-in">
          <p className="text-2xl md:text-3xl font-bold gradient-text">
            加载完成 ✨
          </p>
        </div>
      )}
    </div>
  );
}
