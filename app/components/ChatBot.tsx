"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
}

// 简单的Markdown渲染器
const renderMarkdown = (text: string): string => {
  if (!text) return "";

  // 转义HTML特殊字符（防止XSS）
  const escapeHtml = (str: string) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  let html = escapeHtml(text);

  // 处理代码块 (```code```)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 12px; overflow-x: auto; margin: 8px 0;"><code style="background: transparent; padding: 0; border: none; color: #E0E7FF; font-family: 'Courier New', monospace; font-size: 0.9em;">${code}</code></pre>`;
  });

  // 处理行内代码 (`code`)
  html = html.replace(/`([^`\n]+)`/g, '<code style="background: rgba(99, 102, 241, 0.2); padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: #E0E7FF;">$1</code>');

  // 处理粗体 (**text**)
  html = html.replace(/\*\*([^*\n]+)\*\*/g, '<strong style="color: #FFFFFF; font-weight: 600;">$1</strong>');

  // 处理斜体 (*text*)
  html = html.replace(/\*([^*\n]+)\*/g, '<em style="color: #E0E7FF;">$1</em>');

  // 处理无序列表 (- item 或 * item)
  html = html.replace(/^[\-\*]\s+(.+)$/gm, '<li style="margin: 4px 0; color: #E0E7FF;">$1</li>');

  // 处理有序列表
  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li style="margin: 4px 0; color: #E0E7FF;">$1</li>');

  // 处理标题 (# heading)
  html = html.replace(/^#{1,6}\s+(.+)$/gm, (match, heading) => {
    const level = match.match(/^#/g)?.length || 1;
    const fontSize = [24, 20, 18, 16, 14, 12][level - 1];
    return `<h${level} style="font-size: ${fontSize}px; font-weight: 600; color: #FFFFFF; margin: 12px 0 8px 0;">${heading}</h${level}>`;
  });

  // 处理换行（但不在pre标签内）
  html = html.replace(/\n(?!<\/pre)/g, '<br />');

  return html;
};

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  type: "bot",
  content: "你好！👋 我是尚瑾瑜的AI助手。我可以帮你了解他的项目经历、技能栈、学习历程，或者回答技术问题。有什么想问的吗？",
  timestamp: new Date(),
};

const QUICK_QUESTIONS = [
  "介绍一下尚瑾瑜",
  "他做过哪些项目？",
  "他掌握哪些技能？",
  "如何联系他？",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 发送消息
  const handleSend = async (content: string) => {
    if (!content.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // 显示加载状态
    const botMessageId = (Date.now() + 1).toString();
    const loadingMessage: Message = {
      id: botMessageId,
      type: "bot",
      content: "正在思考中...",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      // 调用API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) {
        throw new Error("API调用失败");
      }

      const data = await response.json();

      // 更新为真实回复
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? { ...msg, content: data.reply || "抱歉，我没有理解您的问题。" }
            : msg
        )
      );
    } catch (error) {
      console.error("发送消息失败", error);

      // 出错时使用兜底回复
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMessageId
            ? {
                ...msg,
                content: "抱歉，AI服务暂时不可用。请稍后再试，或直接联系尚瑾瑜：shangjinyu_2012@foxmail.com",
              }
            : msg
        )
      );
    }
  };

  // 快捷问题点击
  const handleQuickQuestion = (question: string) => {
    handleSend(question);
  };

  return (
    <>
      {/* 浮动按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="z-[60] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce"
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
          }}
          aria-label="打开AI助手"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {/* 聊天窗口 */}
      {isOpen && (
        <div
          className="z-[60] flex flex-col rounded-2xl overflow-hidden shadow-2xl animate-fade-in glass glow-border"
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            width: "24rem",
            maxWidth: "calc(100vw - 4rem)",
            height: "37.5rem",
            maxHeight: "70vh",
          }}
        >
          {/* 头部 */}
          <div
            className="flex items-center justify-between p-4"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-base">AI助手</h3>
                <p className="text-white/80 text-xs">在线 · 随时为你服务</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-white/20 transition-colors"
              aria-label="关闭"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ background: "rgba(10, 10, 11, 0.95)" }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.type === "user"
                      ? "rounded-br-sm"
                      : "rounded-bl-sm"
                  }`}
                  style={{
                    background:
                      message.type === "user"
                        ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                        : "rgba(255, 255, 255, 0.08)",
                    color: message.type === "user" ? "white" : "#E0E7FF",
                    border: message.type === "bot" ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                  }}
                >
                  {message.type === "bot" ? (
                    <div
                      className="text-sm leading-relaxed prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: renderMarkdown(message.content),
                      }}
                    />
                  ) : (
                    <p className="text-sm leading-relaxed">
                      {message.content}
                    </p>
                  )}
                  <span
                    className={`text-xs mt-1 block ${
                      message.type === "user" ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString("zh-CN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* 快捷问题 */}
          {messages.length === 1 && (
            <div className="px-4 py-3 border-t border-white/10" style={{ background: "rgba(10, 10, 11, 0.95)" }}>
              <p className="text-xs mb-2" style={{ color: "#94A3B8" }}>
                你可能想问：
              </p>
              <div className="flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((question) => (
                  <button
                    key={question}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-1.5 text-xs rounded-lg transition-all hover:scale-105"
                    style={{
                      background: "rgba(99, 102, 241, 0.1)",
                      color: "#A5B4FC",
                      border: "1px solid rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 输入区域 */}
          <div
            className="p-4 border-t border-white/10"
            style={{ background: "rgba(10, 10, 11, 0.95)" }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(inputValue);
                  }
                }}
                placeholder="输入你的问题..."
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim()}
                className="px-4 py-3 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                }}
                aria-label="发送"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
