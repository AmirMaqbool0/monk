"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import images from "@/lib/images";

interface FeatureItem {
  number: number;
  title: string;
  description: string;
}

const WhyMonkmaze = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowsRef = useRef<HTMLDivElement[]>([]);

  // Add glow refs to our array
  const addToGlowsRef = (el: HTMLDivElement | null) => {
    if (el && !glowsRef.current.includes(el)) {
      glowsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current || glowsRef.current.length === 0) return;

    let animationFrameId: number;
    const glows = glowsRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    
    // Center positions relative to container
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    // Each glow will have its own angle and speed
    const angles = [0, Math.PI, Math.PI / 2];
    const speeds = [0.003, 0.004, 0.005];
    const radii = [
      { x: containerRect.width * 0.3, y: containerRect.height * 0.2 },
      { x: containerRect.width * 0.25, y: containerRect.height * 0.15 },
      { x: containerRect.width * 0.2, y: containerRect.height * 0.1 }
    ];

    const animateGlows = () => {
      angles.forEach((angle, index) => {
        angles[index] += speeds[index];
        
        const x = centerX + Math.cos(angles[index]) * radii[index].x - glows[index].offsetWidth / 2;
        const y = centerY + Math.sin(angles[index]) * radii[index].y - glows[index].offsetHeight / 2;
        
        glows[index].style.transform = `translate(${x}px, ${y}px)`;
      });

      animationFrameId = requestAnimationFrame(animateGlows);
    };

    // Initialize positions
    angles.forEach((angle, index) => {
      const x = centerX + Math.cos(angle) * radii[index].x - glows[index].offsetWidth / 2;
      const y = centerY + Math.sin(angle) * radii[index].y - glows[index].offsetHeight / 2;
      glows[index].style.transform = `translate(${x}px, ${y}px)`;
    });

    animationFrameId = requestAnimationFrame(animateGlows);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const features: FeatureItem[] = [
    {
      number: 1,
      title: "Strategy-First Engineering",
      description: "Every line of code aligns with business intent. We engineer with the outcome in mind."
    },
    {
      number: 2,
      title: "AI-Powered Systems",
      description: "From automation to predictive analytics — we embed intelligence into everything we build."
    },
    {
      number: 3,
      title: "Conversion-Driven Design",
      description: "UX isn't just beautiful — it's built to guide users to action and drive measurable results."
    },
    {
      number: 4,
      title: "Speed, Scale & Stability",
      description: "We deploy fast, build for scale, and deliver rock-solid performance under pressure."
    }
  ];

  return (
    <div className="w-full h-fit bg-[#FDFDFD] flex flex-col lg:flex-row gap-6 sm:gap-7 py-12 sm:py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-10 lg:px-24 overflow-hidden">
      {/* Image Container with Animated Glows */}
      <div 
        ref={containerRef}
        className="lg:w-[45%] w-full h-[320px] sm:h-[380px] md:h-[500px] lg:h-[600px] rounded-[8px] p-[6px] sm:p-[8px] bg-gradient-to-r from-[#DBE6FD] to-[#DBE6FD] overflow-hidden relative"
      >
        {/* Glowing Orbs */}
        <div
          ref={el => addToGlowsRef(el)}
          className="absolute w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] opacity-40 blur-2xl sm:blur-3xl rounded-full transition-transform duration-1000 ease-linear z-0"
          style={{
            background: "linear-gradient(180deg, #1A7ADE 0%, #53E0F8 100%)",
          }}
        />
        <div
          ref={el => addToGlowsRef(el)}
          className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px] opacity-70 blur-2xl sm:blur-3xl rounded-full transition-transform duration-1000 ease-linear z-0"
          style={{
            background: "linear-gradient(180deg, #4443E1 0%, #007AFF 100%)",
          }}
        />
        <div
          ref={el => addToGlowsRef(el)}
          className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] opacity-50 blur-2xl sm:blur-3xl rounded-full transition-transform duration-1000 ease-linear z-0"
          style={{
            background: "linear-gradient(180deg, #8A2BE2 0%, #00BFFF 100%)",
          }}
        />

        {/* Image */}
        <div className="w-full h-full bg-white rounded-[8px] overflow-hidden flex items-end">
          <Image
            src={images.why_MonkMaze.mockup }
            alt="Why Monkmaze"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="lg:w-[55%] w-full flex flex-col gap-4 sm:gap-5 mt-6 lg:mt-0">
        <h2 className="text-secondary text-[14px] sm:text-[16px] lg:text-[18px] font-[600]">
          WHY MONKMAZE
        </h2>
        <h3 className="text-[#2A2A2A] text-[22px] sm:text-[26px] md:text-[30px] lg:text-3xl font-semibold leading-tight">
          We Don't Just Build Projects. <br className="hidden sm:block" />
          We Engineer Legacies.
        </h3>
        <p className="text-[#6B6B6B] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px]">
          MonkMaze is a strategy-first technology partner, trusted by brands who
          value intelligent automation, lasting impact, and scalable outcomes
          over surface-level delivery.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.number} className="flex items-start gap-3 flex-col">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-[#5A5AF0] text-white rounded-[10px] font-bold">
                {feature.number}
              </div>
              <div>
                <h4 className="text-secondary text-[16px] md:text-[18px] font-semibold">
                  {feature.title}
                </h4>
                <p className="text-black text-[13px] md:text-sm font-[500]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          <button className="py-2.5 px-6 bg-secondary text-white rounded-[37px] hover:bg-secondary/80 transition-colors text-sm md:text-[16px]">
            Request Your Strategy Call
          </button>
          <button className="py-2 px-6 rounded-[37px] hover:bg-white/20 transition-colors text-sm md:text-[16px] border-2 border-black font-[500]">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyMonkmaze;