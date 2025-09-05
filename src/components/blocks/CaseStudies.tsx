"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/lib/images";
import AnimatedUnderline from "../ui/AnimatedUnderline";

const caseStudies = [
  {
    from: "March 2024",
    title: "AI Workflow Automation For Logistics Startup",
    description:
      "MonkMaze designed and built a fully-automated logistics dashboard powered by AI — cutting down 400+ hours/month in manual operations.",
    tags: ["Logistics", "Automation", "SaaS", "Artificial Intelligence"],
    cost: "$8000–$15,000",
    duration: "1–2 months",
    image: images.caseStudies.caseStudy1,
  },
  {
    from: "January 2024",
    title: "E-commerce Platform for Sustainable Fashion",
    description:
      "Developed a custom e-commerce solution with integrated sustainability metrics, increasing customer engagement by 65%.",
    tags: ["E-commerce", "Sustainability", "Web Development"],
    cost: "$10,000–$20,000",
    duration: "2–3 months",
    image: images.caseStudies.caseStudy2,
  },
  {
    from: "November 2023",
    title: "Healthcare Data Analytics Dashboard",
    description:
      "Created an interactive dashboard for healthcare providers to track patient outcomes and optimize treatment plans.",
    tags: ["Healthcare", "Data Analytics", "Dashboard"],
    cost: "$15,000–$25,000",
    duration: "3–4 months",
    image: images.caseStudies.caseStudy3,
  },
];

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  // Auto-rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, [current]);

  const study = caseStudies[current];

  // Animation
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-6 sm:gap-7 py-12 sm:py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-10 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${images.caseStudies.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FDFDFD",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-1.5 sm:gap-2 items-center justify-center relative z-20 text-center">
          <span className="text-secondary font-[600] text-sm sm:text-base md:text-lg">
            Who We Empower
          </span>

          <h2 className="font-[600] text-center text-[#070227] leading-tight text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] max-w-3xl">
            Real Results. Real Brands.
            <span className="hidden sm:block" />
            <span className="relative inline-block">
              Real Impact.
              <span className="absolute left-0 -bottom-1 sm:-bottom-4 origin-left scale-75 sm:scale-90 md:scale-100">
                <AnimatedUnderline width={220} color="#412BE0" />
              </span>
            </span>
          </h2>

          <p className="text-[#777] font-[400] text-sm sm:text-base md:text-[16px] max-w-3xl text-center px-2 sm:px-4">
            MonkMaze partners with bold, visionary organizations across
            industries — whether you're launching, scaling, or transforming.
          </p>
          <div className="absolute top-[-100px] ">
         <Image
           src={images.caseStudies.curve}
           alt="Background"
           width={500}
           height={500}
           className="object-cover"
           priority
         />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-8 sm:mt-10 md:mt-12 w-full mx-auto flex items-center justify-center">
          {/* Left arrow */}
          <button
            onClick={prev}
            className="
              absolute top-1/2 -translate-y-1/2 z-20 
              bg-white shadow-[0px_4px_40px_4px_#412BE012] rounded-full p-2 sm:p-3 hover:bg-gray-100 transition
              left-2 xs:-left-6 sm:-left-8 md:-left-10 lg:-left-12
            "
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Card container */}
          <div
            className="
              w-full 
              max-w-full xs:max-w-2xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 
              mx-2 sm:mx-10
            "
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-[0px_4px_40px_4px_#412BE012] 
                           flex flex-col lg:flex-row items-stretch lg:items-center gap-4 sm:gap-2 lg:gap-8 p-2 sm:p-5 lg:p-2 w-full"
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    priority={current === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col text-left gap-3 sm:gap-4 lg:w-1/2 px-1 sm:px-2 lg:px-4">
                  <span className="text-secondary font-[600] text-sm sm:text-base md:text-lg">
                    From: {study.from}
                  </span>

                  <h3 className="text-[#070227] font-[600] leading-snug text-xl sm:text-2xl md:text-3xl lg:text-[28px]">
                    {study.title}
                  </h3>

                  <p className="text-[#576172] text-sm sm:text-base md:text-[16px]">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full text-[#576172] border border-[#C2C2C2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Cost + Duration */}
                  <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 mt-3 sm:mt-4">
                    <div>
                      <p className="text-xs sm:text-sm text-[#576172]">Project Cost:</p>
                      <p className="text-secondary font-semibold text-sm sm:text-base">
                        {study.cost}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#576172]">Project Duration:</p>
                      <p className="text-secondary font-semibold text-sm sm:text-base">
                        {study.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="
              absolute top-1/2 -translate-y-1/2 z-20 
              bg-white shadow-[0px_4px_40px_4px_#412BE012] rounded-full p-2 sm:p-3 hover:bg-gray-100 transition
              right-2 xs:-right-6 sm:-right-8 md:-right-10 lg:-right-12
            "
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 sm:mt-8 gap-1.5 sm:gap-2">
          {caseStudies.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all ${
                i === current ? "bg-secondary sm:w-6 w-5" : "bg-[#C2C2C2]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
