"use client";

import React from "react";
import { motion, useInView, Variants } from "framer-motion";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import images from "@/lib/images";

type CardCfg = {
  value: string;
  label: string;
  pos: { top?: string; left?: string; right?: string; bottom?: string };
  tilt?: number; // degrees
};

const CARDS: CardCfg[] = [
  { value: "12+", label: "Countries Served", pos: { left: "4%", top: "18%" }, tilt: -10 },
  { value: "42+", label: "Projects Delivered", pos: { left: "6%", top: "70%" }, tilt: 10 },
  { value: "83%", label: "Faster Launch Speed", pos: { left: "74%", top: "14%" }, tilt: 10 },
  { value: "$10M+", label: "In Tech-Driven Client Impact", pos: { left: "71%", top: "70%" }, tilt: -8 },
];

// Use the size where your Spline view looks “perfectly framed”
const BASE_SPLINE_W = 1024;
const BASE_SPLINE_H = 700;

const ImpactStrip = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.45 });

  // Scale for the Spline iframe only (contain-fit, never upscale > 1)
  const [scale, setScale] = React.useState(1);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    const updateScale = () => {
      const cont = containerRef.current;
      if (!cont) return;
      const rect = cont.getBoundingClientRect();
      const s = Math.min(rect.width / BASE_SPLINE_W, rect.height / BASE_SPLINE_H, 1);
      setScale(Number(s.toFixed(4)));
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  // One ref per card
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const [offsets, setOffsets] = React.useState<{ x: number; y: number }[]>(
    Array(CARDS.length).fill({ x: 0, y: 0 })
  );

  // Compute offsets from container center -> each card center
  React.useLayoutEffect(() => {
    const calc = () => {
      const cont = containerRef.current;
      if (!cont) return;
      const crect = cont.getBoundingClientRect();
      const cx = crect.left + crect.width / 2;
      const cy = crect.top + crect.height / 2;

      const next = cardRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        const ex = r.left + r.width / 2;
        const ey = r.top + r.height / 2;
        return { x: cx - ex, y: cy - ey };
      });
      setOffsets(next);
    };

    calc();
    const onResize = () => calc();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []); // container center doesn't depend on `scale` (container isn't scaled)

  // Lift cards above the iframe mid-animation to fake “coming from behind”
  const [raised, setRaised] = React.useState(false);
  React.useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setRaised(true), 350);
    return () => clearTimeout(t);
  }, [inView]);

  const cardVariants: Variants = {
    hidden: (custom: { x: number; y: number; i: number }) => ({
      x: custom.x,
      y: custom.y,
      opacity: 0,
      scale: 0.94,
      filter: "blur(8px)",
    }),
    visible: (custom: { x: number; y: number; i: number }) => ({
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.15 + custom.i * 0.12,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div
      className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-7 py-12 px-4 sm:px-6 md:py-24 md:px-8 lg:py-36 lg:px-24"
      style={{
        backgroundImage: `url(${images.impact.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FDFDFD",
      }}
    >
      {/* -----------------Header------------------ */}
      <div className="flex flex-col gap-4 md:gap-2 items-center justify-center text-center">
        <span className="text-[16px] md:text-[18px] text-secondary font-[600]">
          STATS / IMPACT STRIP
        </span>
        <h2 className="font-[600] text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight">
          Trusted by Leaders. Proven by Outcomes.{" "}
          <span className="relative inline-block">
            Global by Nature.
            <span className="absolute left-0 -bottom-1 md:-bottom-[30px]">
              <AnimatedUnderline
                  width={280}
                  color="#412BE0"
                  className="hidden md:block"
              />
            </span>
          </span>
        </h2>
        <p className="text-[14px] md:text-[16px] text-[gray] font-[400] max-w-3xl leading-relaxed">
          We build intelligent, high-performance platforms for brands ready to
          scale — fusing automation, design, and engineering into real business impact.
        </p>
      </div>

      {/* -----------------Spline + Cards------------------ */}
      <div ref={sectionRef} className="relative w-full">
        <div
          ref={containerRef}
          className="relative h-[500px] md:h-[400px] lg:h-[700px]"
        >
          {/* Spline iframe (scaled, centered; always 100% visible via contain-fit) */}
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div
              className="absolute left-1/2 top-1/2"
              style={{
                width: BASE_SPLINE_W,
                height: BASE_SPLINE_H,
                transform: `translate(-50%, -50%) scale(${scale})`,
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <iframe
                src="https://my.spline.design/holographicearthwithdynamiclines-0FVLv7kD1nCK2MD7CuKYaxd9/"
                frameBorder="0"
                width="100%"
                height="100%"
                className="rounded-xl"
                allowFullScreen
              />
            </div>
          </div>

          {/* Cards layer (hidden on < md screens) */}
          <div className={`absolute inset-0 ${raised ? "z-30" : "z-0"} hidden md:block`}>
            {CARDS.map((c, i) => (
              <motion.div
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute pointer-events-auto"
                style={{ ...c.pos }}
                variants={cardVariants}
                custom={{ ...offsets[i], i }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div
                  className="w-[150px] h-[130px] sm:w-[180px] flex flex-col justify-center items-center md:w-[200px] rounded-xl bg-white shadow-2xl p-4 sm:p-5 border border-white/60 text-center"
                  style={{ transform: `rotate(${c.tilt ?? 0}deg)` }}
                >
                  <div className="text-secondary font-semibold text-2xl sm:text-3xl">
                    {c.value}
                  </div>
                  <div className="text-secondary text-xs sm:text-sm">{c.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStrip;