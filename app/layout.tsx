import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "尚瑾瑜 - Vibe Coding学习成果展示",
  description: "尚瑾瑜的Vibe Coding实战训练营学习成果展示页，记录从0到1的AI产品开发学习历程，包含项目作品、技能栈、学习笔记等内容",
  keywords: ["Vibe Coding", "AI开发", "产品开发", "学习成果", "尚瑾瑜", "Next.js", "AI应用"],
  authors: [{ name: "尚瑾瑜" }],
  creator: "尚瑾瑜",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.shangjinyu.de5.net",
    title: "尚瑾瑜 - Vibe Coding学习成果展示",
    description: "从0到1，探索AI时代的产品开发之旅。记录学习、分享成长、用代码构建未来。",
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
    title: "尚瑾瑜 - Vibe Coding学习成果展示",
    description: "从0到1，探索AI时代的产品开发之旅",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#0A0A0B] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
