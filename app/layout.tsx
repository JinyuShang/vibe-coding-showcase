import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "尚瑾瑜 | Vibe Coding 学习历程",
  description: "从0到1，探索AI时代的产品开发之旅。记录学习、分享成长、用代码构建未来。一个关于创造与发现的个人实验。",
  keywords: ["Vibe Coding", "AI开发", "产品开发", "学习成果", "尚瑾瑜", "Next.js", "AI应用", "WayToAGI"],
  authors: [{ name: "尚瑾瑜" }],
  creator: "尚瑾瑜",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.shangjinyu.de5.net",
    title: "尚瑾瑜 | Vibe Coding 学习历程",
    description: "从0到1，探索AI时代的产品开发之旅。在这里，我记录学习、分享成长、用代码构建未来。",
    siteName: "尚瑾瑜的数字花园",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "尚瑾瑜 - Vibe Coding学习成果展示",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "尚瑾瑜 | Vibe Coding 学习历程",
    description: "从0到1，探索AI时代的产品开发之旅",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
