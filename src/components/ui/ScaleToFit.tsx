"use client";

import { useLayoutEffect, useRef, useState } from "react";

export function ScaleToFit({
  designWidth = 828, // the natural width of your design
  maxScale = 1,     // never scale up beyond 1
  origin = "top left",
  className,
  children,
}: {
  designWidth?: number;
  maxScale?: number;
  origin?: React.CSSProperties["transformOrigin"];
  className?: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ scale: 1, height: 0 });

  useLayoutEffect(() => {
    const container = containerRef.current!;
    const content = contentRef.current!;
    const ro = new ResizeObserver(() => {
      const avail = container.clientWidth;
      const scale = Math.min(maxScale, avail / designWidth);
      const natural = content.scrollHeight;
      setStyle({ scale, height: natural * scale });
    });
    ro.observe(container);
    ro.observe(content);
    return () => ro.disconnect();
  }, [designWidth, maxScale]);

  return (
    <div ref={containerRef} className={className} style={{ height: style.height }}>
      <div
        ref={contentRef}
        style={{
          width: designWidth,
          transform: `scale(${style.scale})`,
          transformOrigin: origin,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}