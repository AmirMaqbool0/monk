import React from "react";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Image from "next/image";
import images from "@/lib/images";

const InsightsBlog = () => {
  return (
    <div className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-6 sm:gap-7 py-12 sm:py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-8 lg:px-24 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col gap-2 items-center justify-center relative z-20 text-center">
        <span className="text-[14px] sm:text-[16px] md:text-[18px] text-secondary font-[600]">
          INSIGHTS / BLOG
        </span>
        <h2 className="font-[600] text-center text-[#070227] text-[22px] sm:text-[26px] md:text-[30px] lg:text-[35px] max-w-[568px] p-0 m-0 leading-tight">
          Ideas That Build Trust. Frameworks That{" "}
          <span className="relative inline-block">
            Drive Action.
            <span className="absolute left-0 -bottom-1 sm:-bottom-[20px] origin-left scale-90 md:scale-100">
              <AnimatedUnderline    width={260}
                  color="#412BE0"
                  className="hidden md:block" />
            </span>
          </span>
        </h2>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[gray] font-[400] lg:max-w-3xl text-center px-4 sm:px-0">
          Real strategies. Real case-backed frameworks. From AI automation to UX
          optimization — we share exactly how we deliver outcomes, not fluff.
        </p>
      </div>

      {/* Blogs */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:grid-cols-none lg:flex lg:items-center lg:justify-between">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="w-full lg:w-[345px] h-auto lg:h-[400px] rounded-[10px] bg-white shadow-sm p-2 sm:p-2 flex flex-col gap-3 cursor-pointer"
            >
              {/* Top Image Section */}
              <div className="relative w-full h-[200px] sm:h-[230px] md:h-[250px] lg:h-[270px] rounded-xl bg-[#F6F6F6] overflow-hidden">
                <Image
                  src={images.blog_insight.blog_insight}
                  alt="PPC Tools"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Title */}
              <h2 className="text-[15px] sm:text-[16px] font-semibold text-[#3D3AFE] leading-6">
                The 7 Best PPC Analysis Tools You Need in 2025
              </h2>

              {/* Description */}
              <p className="text-[13px] sm:text-sm text-gray-500 leading-[18px]">
                From fully automated bid management to campaign optimisation...
                these PPC tools are some ...
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-gray-400 pt-2">
                <span className="bg-[#F5F5F5] text-[#576172] px-3 py-1 rounded-full text-xs">
                  Digital Marketing
                </span>
                <span className="text-[#576172] text-xs sm:text-sm">June 21,2022</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InsightsBlog;