"use client";

import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({ text, speed = 100, delay = 0, className = "" }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const startTyping = () => {
      indexRef.current = 0;
      setDisplayText("");
      setIsTyping(true);

      intervalRef.current = setInterval(() => {
        const currentIndex = indexRef.current;
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          indexRef.current = currentIndex + 1;
        } else {
          setIsTyping(false);
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && (
        <span
          className="inline-block w-0.5 h-1.5 ml-0.5 align-middle animate-pulse"
          style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
        />
      )}
    </span>
  );
}
