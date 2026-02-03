"use client";

export default function ScrollDownArrow() {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={handleScroll}
      className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
      aria-label="向下滚动"
    >
      <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform" style={{ color: "#64748B" }}>
        <span className="text-sm group-hover:text-white transition-colors">向下滚动</span>
        <svg
          className="w-6 h-6 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </button>
  );
}
