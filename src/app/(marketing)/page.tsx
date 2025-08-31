"use client";
import Hero from "@/components/blocks/Hero";
import images from "@/lib/images";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Data from "@/lib/data.json";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { Technologies } from "@/components/blocks/Technologies";
import CoreServices from "@/components/blocks/CoreServices";
import CaseStudies from "@/components/blocks/CaseStudies";
import ClientFavorite from "@/components/blocks/ClientFavorite";
import WhyMonkmaze from "@/components/blocks/WhyMonkmaze";
import Testimonials from "@/components/blocks/Testimonials";
import InsightsBlog from "@/components/blocks/InsightsBlog";
import MultiStepForm from "@/components/blocks/MultiStepForm";
import SuccessJourney from "@/components/blocks/SuccessJourney";
import ImpactStrip from "@/components/blocks/ImpactStrip";
export default function Home() {
  const handleSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    // Handle form submission logic here
  };
  return (
    <div className="overflow-hidden">
      <Hero />

      {/* ---------------Core Services--------------- */}

      <CoreServices />
      {/* -------------------------Who We Empower ----------------------- */}

      <div
        className="w-full h-fit bg-[#FDFDFD] bg-no-repeat bg-cover bg-center flex flex-col gap-7 py-12 px-4 sm:px-6 md:py-20 md:px-8 lg:py-36 lg:px-24"
        style={{
          backgroundImage: `url(${images.whoWeAre.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#FDFDFD",
        }}
      >
        {/* -----------------Header------------------ */}
        <div className="flex flex-col gap-4 md:gap-2 items-center justify-center text-center">
          <span className="text-[16px] md:text-[18px] text-secondary font-[600]">
            Who We Empower
          </span>
          <h2 className="font-[600] text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight">
            We Empower to Lead, Innovate, and Grow{" "}
            <span className="relative inline-block">
              Without
              <span className="absolute left-0 -bottom-1 md:-bottom-2">
                <AnimatedUnderline
                  width={100}
                  height={16}
                  color="#412BE0"
                  className="md:!w-[140px] md:!h-[20px]"
                />
              </span>
            </span>{" "}
            Limits
          </h2>
          <p className="text-[14px] md:text-[16px] text-[gray] font-[400] max-w-3xl leading-relaxed">
            MonkMaze partners with bold, visionary organizations across
            industries — whether you're launching, scaling, or transforming.
          </p>
        </div>

        {/* ---------------------Cards------------------ */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
          {Data?.home?.empower?.map((item, index) => (
            <div
              className="w-full h-[180px] sm:h-[200px] md:h-[200px] flex flex-col gap-2 md:gap-3 items-center justify-center p-4 md:p-5 rounded-[10px] md:rounded-[13px] bg-white 
        hover:shadow-[0px_4px_15px_rgba(0,0,0,0.15)] transition-all duration-300 ease-in-out"
              key={index}
            >
              <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[5px] bg-[#EAF5FD] flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                />
              </div>
              <span className="font-[500] text-[18px] md:text-[20px] lg:text-[24px] text-secondary text-center">
                {item.title}
              </span>
              <p className="text-black text-[12px] md:text-[14px] lg:text-[15px] font-[400] text-center leading-tight">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Technologies />
      <CaseStudies />
      <ClientFavorite />
      <WhyMonkmaze />
      <Testimonials />
      <ImpactStrip />
      <SuccessJourney />
      <InsightsBlog />
    </div>
  );
}
