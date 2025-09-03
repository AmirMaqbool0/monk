import React from "react";
import images from "@/lib/images";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import SeoIllustration from "../ui/SeoIllustration";

const CoreServices = () => {
  return (
    <div className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-7 py-12 px-4 sm:px-6 md:py-24 md:px-8 lg:py-36 lg:px-24">
      {/* -----------------Header------------------ */}
      <div className="flex flex-col gap-4 md:gap-2 items-center justify-center text-center">
        <span className="text-[16px] md:text-[18px] text-secondary font-[00]">
          Our Core Services
        </span>
        <h2 className="font-[600] text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight">
          What We Build. How You Scale Smarter To Lead{" "}
          <span className="relative inline-block">
            The Next Digital
            <span className="absolute left-0 -bottom-1 md:-bottom-5">
              <AnimatedUnderline
                color="#412BE0"
                width={200}
                height={16}
                className="md:!w-[300px] md:!h-[20px]"
              />
            </span>
          </span>{" "}
          Frontier.
        </h2>
        <p className="text-[14px] md:text-[16px] text-[gray] font-[400] max-w-3xl leading-relaxed">
          We build intelligent, high-performance platforms for brands ready to
          scale — fusing automation, design, and engineering into real business
          impact.
        </p>
      </div>

      {/* -------------------Services------------------ */}

      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* --------------------------AI-------------------- */}
        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Image Section */}
          <div className="relative w-full flex items-end justify-center bg-gray h-[200px] sm:h-[220px] md:h-[240px] group-hover:h-[200px] md:group-hover:h-[220px] transition-all duration-500">
            {/* Circular Glow */}
            <div className="absolute bottom-[15px] md:bottom-[25px] left-1/2 -translate-x-1/2 w-32 h-[90px] md:w-40 md:h-[110px] rounded-full bg-secondary blur-xl md:blur-2xl opacity-60 transition-all duration-500 group-hover:scale-110 md:group-hover:scale-125 pointer-events-none" />
            <Image
              src={images.services.service1}
              alt="AI & Workflow Automation"
              width={300}
              height={220}
              className="relative z-10 object-contain w-[280px] md:w-[380px]"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              AI & Workflow Automation
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Replace repetitive processes with intelligent systems that save
              time, reduce error, and scale operations autonomously.
            </p>
            <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* -----------------------------SAS Software ---------------------- */}

        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Image Section with Glow */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden bg-gray-100">
            {/* Glow Effects */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-[#53E0F8] opacity-40 blur-2xl md:blur-3xl rounded-full top-[-30px] md:top-[-40px] left-[-30px] md:left-[-40px] transition-all duration-700 ease-in-out group-hover:top-[calc(100%-120px)] md:group-hover:top-[calc(100%-160px)]" />
            <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-secondary opacity-40 blur-2xl md:blur-3xl rounded-full bottom-[-30px] md:bottom-[-40px] right-[-30px] md:right-[-40px] transition-all duration-700 ease-in-out group-hover:bottom-[calc(100%-120px)] md:group-hover:bottom-[calc(100%-160px)]" />

            {/* Top Image Row */}
            <div className="w-[200%] h-1/2 flex transition-transform duration-700 ease-in-out group-hover:-translate-x-1/2">
              <Image
                src={images.services.service2}
                alt="SAS Software - Part 1"
                width={300}
                height={100}
                className="object-contain w-1/2 scale-125 md:scale-150"
              />
              <Image
                src={images.services.service2}
                alt="SAS Software - Part 2"
                width={300}
                height={100}
                className="object-contain w-1/2 scale-125 md:scale-150"
              />
            </div>

            {/* Bottom Image Row */}
            <div className="w-[200%] h-1/2 flex transition-transform duration-700 ease-in-out -translate-x-1/2 group-hover:translate-x-0">
              <Image
                src={images.services.service2_1}
                alt="SAS Software - Part 3"
                width={300}
                height={100}
                className="object-contain w-1/2 scale-125 md:scale-150"
              />
              <Image
                src={images.services.service2_1}
                alt="SAS Software - Part 4"
                width={300}
                height={100}
                className="object-contain w-1/2 scale-125 md:scale-150"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              SAS Software
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Replace repetitive processes with intelligent systems that save
              time, reduce error, and scale operations autonomously.
            </p>
            <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/*------------------------------ website Development---------------------------  */}

        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Image Section */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] flex overflow-hidden bg-gray">
            {/* Orange Glow */}
            <div className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] bg-orange-500 opacity-40 blur-2xl md:blur-3xl rounded-full bottom-[-100px] md:bottom-[-150px] left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-0" />

            {/* Fixed First Image */}
            <Image
              src={images.services.service3}
              alt="Main Static Image"
              width={80}
              height={130}
              className="absolute bottom-[-30px] md:bottom-[-50px] left-1/2 -translate-x-1/2 object-cover w-[220px] md:w-[300px] h-auto z-20"
            />

            {/* Sliding Second Image */}
            <Image
              src={images.services.service3_1}
              alt="Sliding Overlay Image"
              width={60}
              height={60}
              className="absolute bottom-[-100%] right-[-40px] md:right-[-60px] -translate-x-1/2 object-cover w-[100px] md:w-[150px] h-[400px] md:h-[600px] transition-all duration-1000 ease-in-out group-hover:bottom-0 z-10"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              Website Development
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Replace repetitive processes with intelligent systems that save
              time, reduce error, and scale operations autonomously.
            </p>
            <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* -------------------------------------Mobile App ---------------- */}
        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Image Section */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden bg-gray-100 flex justify-center items-center gap-1 md:gap-2">
            {/* Glow Effect */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 bg-secondary opacity-40 blur-2xl md:blur-3xl rounded-full bottom-[-40px] md:bottom-[-60px] left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-[calc(100%-100px)] md:group-hover:bottom-[calc(100%-160px)]" />

            {/* LEFT IMAGE - Scroll Up */}
            <div className="relative w-[30%] h-full overflow-hidden">
              <Image
                src={images.services.service4}
                alt="Left Image"
                width={200}
                height={360}
                className="object-contain w-full h-[200%] transition-transform duration-700 ease-in-out group-hover:-translate-y-1/2"
              />
            </div>

            {/* MIDDLE IMAGE - Start partially out from top */}
            <div className="relative w-[30%] h-full overflow-hidden">
              <Image
                src={images.services.service4_1}
                alt="Middle Image"
                width={200}
                height={360}
                className="object-contain w-full h-[200%] translate-y-[-50%] transition-transform duration-700 ease-in-out group-hover:translate-y-[2%]"
              />
            </div>

            {/* RIGHT IMAGE - Scroll Up */}
            <div className="relative w-[30%] h-full overflow-hidden">
              <Image
                src={images.services.service4_2}
                alt="Right Image"
                width={200}
                height={360}
                className="object-contain w-full h-[200%] transition-transform duration-700 ease-in-out group-hover:-translate-y-1/2"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              Mobile App Development
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Replace repetitive processes with intelligent systems that save
              time, reduce error, and scale operations autonomously.
            </p>
            <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* --------------------------------  UI / UX ---------------------- */}

        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Image Section */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] flex items-center justify-center overflow-hidden bg-gray-100">
            {/* Orange Glow */}
            <div className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] bg-[#ECC3FF] opacity-40 blur-2xl md:blur-3xl rounded-full bottom-[-100px] md:bottom-[-150px] left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-0" />

            {/* Single Image */}
            <Image
              src={images.services.service5_3}
              alt="UI/UX Design"
              width={150}
              height={300}
              className="object-contain w-[300px] md:w-[400px] h-[350px] md:h-[500px] relative z-10 mt-[80px] md:mt-[110px]"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              UI/UX Design
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Replace repetitive processes with intelligent systems that save
              time, reduce error, and scale operations autonomously.
            </p>
            <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
        {/* ------------------------SEO---------------------------- */}
        <div className="flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500 w-full h-[320px] sm:h-[350px] md:h-[350px]">
          {/* Visual Section */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] flex items-center justify-center overflow-hidden bg-gray-100">
            {/* Bottom Glow */}
            <div className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] bg-secondary opacity-40 blur-2xl md:blur-3xl rounded-full bottom-[-100px] md:bottom-[-150px] left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out group-hover:bottom-0" />
            {/* SVG illustration */}
            <SeoIllustration
              className="z-10 w-[50%] md:w-[65%] h-auto"
              rtlFill
            />
          </div>
          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h2 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              SEO Optimization
            </h2>
            <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
              Boost rankings with technical SEO, on-page fixes, and smart
              content strategy.
            </p>
              <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
              <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
                Explore More <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------Buttons-------------------------------------- */}
      <div className="flex flex-col mt-[20px] justify-center sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
        <button className="w-full sm:w-auto text-white py-2 px-6 bg-secondary cursor-pointer rounded-[37px] hover:bg-secondary/80 transition-colors text-[14px] sm:text-[14px] md:text-[14px]">
          Request Your Strategy Call
        </button>
        <button className="w-full sm:w-auto py-2 px-6 cursor-pointer rounded-[37px] hover:bg-white/20 transition-colors border-black text-[14px] sm:text-[14px] md:text-[14px] border-2">
          View Our Work
        </button>
      </div>
    </div>
  );
};

export default CoreServices;
