'use client'
import { useEffect, useState, useRef } from "react";

interface CounterNumberProps {
  from?: number;
  to: number;
  duration?: number;
}
const ConterNumber = ({ from = 0, to, duration = 2 }: CounterNumberProps) => {
  const [count, setCount] = useState(from);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;
    let start: number | null = null;
    let animationFrameId: number;

    const animate = (timeStamp: number) => {
      if (!start) start = timeStamp;
      const progress = timeStamp - start;
      const increment = (to - from) / (duration * 1000);

      const currentCount = Math.min(from + increment * progress, to);
      setCount(Math.floor(currentCount));

      if (currentCount < to) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start = null;
          animationFrameId = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [from, to, duration]);
  return (
    <span ref={counterRef}>
      {count.toLocaleString()}
    </span>
  );
};

export default ConterNumber;
