"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GlowingLine from "../ui/GlowingLine";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    text: "Their automation systems changed everything. We saved time, improved retention, and finally scaled like we were meant to.",
    name: "Ananya G.",
    role: "5 Weeks to MVP, 2K Users",
    image: "/images/home/user.png",
  },
  {
    text: "Their automation systems changed everything. We saved time, improved retention, and finally scaled like we were meant to.",
    name: "Ananya G.",
    role: "5 Weeks to MVP, 2K Users",
    image: "/images/home/user.png",
  },
  {
    text: "Their automation systems changed everything. We saved time, improved retention, and finally scaled like we were meant to.",
    name: "Ananya G.",
    role: "5 Weeks to MVP, 2K Users",
    image: "/images/home/user.png",
  },
];

const Testimonials = () => {
  return (
    // Full-bleed section so the background lines can span the entire viewport
    <div className="relative p-[15px] w-screen mx-[calc(50%-50vw)] py-20 bg-[#FDFDFD] flex flex-col items-center justify-center gap-[70px] overflow-visible">
      {/* -----------------Header------------------ */}
      <div className="flex flex-col gap-2 items-center justify-center relative z-20">
        <span className="text-[18px] text-secondary font-[600]">
          Testimonials
        </span>
        <h2 className="font-[600] text-[25px] text-center text-[#070227] lg:text-[35px] max-w-[500px] p-0 m-0">
          They Came With Ambition. They Left With  <span> </span>
          <span className="relative inline-block">
            Results.
            <span className="absolute left-0 -bottom-2">
              <AnimatedUnderline    width={160}
                  color="#412BE0"
                  className="hidden md:block"  />
            </span>
          </span>
        </h2>
        <p className="text-[16px] text-[gray] font-[400] lg:max-w-3xl text-center ">
          The ultimate launch bundle for lean teams, solo founders, and
          fast-moving startups — combining essential tools that drive real,
          measurable growth from day one.
        </p>
      </div>

      {/* This wrapper keeps content centered and constrained while bg lines are full-width */}
      <div className="relative w-full ">
        {/* ----------------------Carousel Container---------------------- */}
        <div className="w-full max-w-6xl px-4 md:px-0 mx-auto relative z-20 ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides
            loop
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            // Breakpoints to keep alignment perfect at all sizes
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16, centeredSlides: true },
              640: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: true },
              1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: true },
            }}
            className="w-full testimonial-swiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="transition-all duration-500 pb-12">
                {/* Removed max-w to allow Swiper to size cards evenly */}
                <div className="testimonial-card bg-white rounded-2xl p-6 w-full text-center h-full flex flex-col">
                  {/* Quote */}
                  <p className="text-[#576172] italic leading-relaxed text-[16px] flex-grow">
                    "{t.text}"
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center mt-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span key={idx} className="text-yellow-400 text-xl">
                        <StarIcon fill="#FFD700" size={20} />
                      </span>
                    ))}
                  </div>

                  {/* Avatar */}
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center">
                      <h4 className="font-semibold text-gray-800">{t.name}</h4>
                      <span className="text-sm text-secondary font-medium">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation arrows */}
          <div className="swiper-button-prev-custom mt-[-50px] absolute -left-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </div>

          <div className="swiper-button-next-custom mt-[-50px] absolute -right-6 top-1/2 -translate-y-1/2 z-30 cursor-pointer bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          {/* Pagination */}
          <div className="testimonial-pagination flex justify-center mt-6 gap-2"></div>
        </div>

        {/* ------------------Background Lines (full-bleed)------------------ */}
        {/* This absolute layer spans the viewport width regardless of the content width */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen h-full z-0">
          <div className="w-full h-full flex flex-col">
            {/* Top lines */}
            <div>
            <GlowingLine flipped  delay={1}/>
            </div>
            <div className="mt-[-90px]">
              <GlowingLine flipped  delay={2}/>
            </div>
            <div className="mt-[-90px]">
              <GlowingLine flipped  delay={3}/>
            </div>

            <div className="mt-[-90px]">
              <GlowingLine flipped  delay={1}/>
            </div>

            {/* Bottom lines */}
            <div className="mt-[-80px]">
              <GlowingLine  delay={2}/>
            </div>
            <div className="mt-[-90px]">
              <GlowingLine  delay={3}/>
            </div>
            <div className="mt-[-90px]">
              <GlowingLine  delay={4}/>
            </div>
            <div className="mt-[-90px]">
              <GlowingLine delay={1} />
            </div>
          </div>
        </div>
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
      {/* ------------------Custom Styles------------------ */}
      <style jsx global>{`
        .testimonial-swiper {
          perspective: 1200px;
          padding: 20px 0;
        }
        .testimonial-swiper .swiper-slide {
          transform: scale(0.85);
          opacity: 0.6;
          transition: all 0.6s ease;
          filter: blur(1px);
        }
        .testimonial-swiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          filter: none;
        }
        .testimonial-swiper .swiper-slide-prev {
          transform: scale(0.9) translateX(20px) rotateY(35deg);
          opacity: 0.8;
          filter: blur(0.5px);
        }
        .testimonial-swiper .swiper-slide-next {
          transform: scale(0.9) translateX(-20px) rotateY(-35deg);
          opacity: 0.8;
          filter: blur(0.5px);
        }
        .testimonial-swiper .testimonial-card {
          border-radius: 1rem;
          box-shadow: none;
          transition: all 0.4s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .testimonial-swiper .swiper-slide-active .testimonial-card {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
          border-color: transparent;
        }
        .testimonial-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          margin: 0 5px;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background: #412be0;
          width: 24px;
          border-radius: 10px;
        }
        @media (max-width: 1024px) {
          .testimonial-swiper {
            padding: 10px 0;
          }
          .testimonial-swiper .swiper-slide {
            transform: scale(0.8);
          }
          .testimonial-swiper .swiper-slide-active {
            transform: scale(0.95);
          }
          .testimonial-swiper .swiper-slide-prev {
            transform: scale(0.85) translateX(15px);
          }
          .testimonial-swiper .swiper-slide-next {
            transform: scale(0.85) translateX(-15px);
          }
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            transform: translateY(-50%) scale(0.8);
          }
        }
        @media (max-width: 768px) {
          .testimonial-swiper .swiper-slide {
            transform: scale(0.7);
          }
          .testimonial-swiper .swiper-slide-active {
            transform: scale(0.9);
          }
          .testimonial-swiper .swiper-slide-prev,
          .testimonial-swiper .swiper-slide-next {
            transform: scale(0.75);
            opacity: 0.5;
          }
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;