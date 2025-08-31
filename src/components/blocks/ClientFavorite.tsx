import React from "react";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Image from "next/image";
import images from "@/lib/images";
import { ArrowRight } from "lucide-react";

const ClientFavorite = () => {
  return (
    <div
      className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-7 py-12 px-4 sm:px-6 md:py-24 md:px-8 lg:py-36 lg:px-24 overflow-hidden"
      style={{
        backgroundImage: `url(${images.ClientFavorite.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FDFDFD",
      }}
    >
      {/* Header (matches CoreServices responsiveness) */}
      <div className="flex flex-col gap-4 md:gap-2 items-center justify-center text-center">
        <span className="text-[16px] md:text-[18px] text-secondary font-[600]">
          Client Favorite Package
        </span>
        <h2 className="font-[600] text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight text-center">
          Smart Growth Packages Built to Launch, Scale, & Win in{" "}
          <span className="relative inline-block">
            Competitive Markets
            <span className="absolute left-0 -bottom-1 md:-bottom-2">
              <AnimatedUnderline
                color="#412BE0"
                width={220}
                height={16}
                className="md:!w-[420px] md:!h-[20px]"
              />
            </span>
          </span>
        </h2>
        <p className="text-[14px] md:text-[16px] text-[gray] font-[400] max-w-3xl leading-relaxed">
          The ultimate launch bundle for lean teams, solo founders, and
          fast-moving startups — combining essential tools that drive real,
          measurable growth from day one.
        </p>
      </div>

      {/* Cards: grid on <lg (same pattern as CoreServices), original flex layout preserved on lg */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 lg:grid-cols-none lg:flex lg:items-stretch lg:justify-between">
        {/* Card 1 */}
     <div className="w-full lg:w-[330px] h-[320px] sm:h-[350px] md:h-[350px] lg:h-[350px] flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500">
  {/* Image Section */}
  <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[270px] flex items-end justify-center gap-0 overflow-hidden bg-gray-100">
    {/* Glow Effects */}
    <div className="pointer-events-none absolute w-32 h-32 md:w-40 md:h-40 bg-secondary/40 blur-2xl md:blur-3xl rounded-full top-[-30px] md:top-[-40px] left-[-30px] md:left-[-40px] transition-all duration-700 ease-in-out group-hover:top-[calc(100%-120px)] md:group-hover:top-[calc(100%-160px)] z-0" />
    <div className="pointer-events-none absolute w-32 h-32 md:w-40 md:h-40 bg-secondary/40 blur-2xl md:blur-3xl rounded-full bottom-[-30px] md:bottom-[-40px] right-[-30px] md:right-[-40px] transition-all duration-700 ease-in-out group-hover:bottom-[calc(100%-120px)] md:group-hover:bottom-[calc(100%-160px)] z-0" />

    <Image
      src={images.ClientFavorite.Ecom_1}
      alt="Left Image"
      width={150}
      height={250}
      className="object-cover w-[72px] sm:w-[84px] md:w-[90px] h-auto z-20 transition-all duration-700 ease-in-out group-hover:translate-y-3 group-hover:-rotate-6 group-hover:mb-[-30px]"
    />
    <Image
      src={images.ClientFavorite.Ecom_2}
      alt="Right Image"
      width={150}
      height={250}
      className="object-cover w-[82px] sm:w-[96px] md:w-[100px] h-auto z-10 transition-all duration-700 ease-in-out group-hover:translate-y-3 group-hover:rotate-6 group-hover:mb-[-30px]"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
    <h3 className="text-[16px] md:text-[18px] text-secondary font-[500]">
      AI & Workflow Automation
    </h3>
    <p className="text-[#576172] font-[400] text-[12px] md:text-[14px] leading-tight">
      Replace repetitive processes with intelligent systems that save time,
      reduce error, and scale operations autonomously.
    </p>
    <div className="flex items-center cursor-pointer opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-1">
      <span className="text-[12px] md:text-[14px] text-secondary flex items-center gap-1">
        Explore More <ArrowRight size={16} />
      </span>
    </div>
  </div>
</div>

        {/* Card 2 */}
        <div className="w-full lg:w-[330px] h-[320px] sm:h-[350px] md:h-[350px] lg:h-[350px] flex flex-col border-[3px] md:border-[5px] border-white shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden transition-all duration-500">
          {/* Image Section */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[270px] flex overflow-hidden bg-gray-50">
            {/* Fixed First Image */}
            <Image
              src={images.ClientFavorite.landing_page}
              alt="Main Static Image"
              width={200}
              height={170}
              className="absolute bottom-[-30px] md:bottom-[-50px] left-1/2 -translate-x-1/2 object-cover w-[160px] sm:w-[180px] md:w-[200px] h-auto z-20"
            />
            {/* Sliding Second Image */}
            <Image
              src={images.ClientFavorite.landing_page2}
              alt="Sliding Overlay Image"
              width={150}
              height={600}
              className="absolute bottom-[-100%] right-[-40px] md:right-[-60px] -translate-x-1/2 object-cover w-[120px] sm:w-[140px] md:w-[150px] h-[420px] sm:h-[520px] md:h-[600px] transition-all duration-1000 ease-in-out group-hover:bottom-0 z-10"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h3 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              AI & Workflow Automation
            </h3>
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

        {/* Card 3 */}
        <div className="w-full lg:w-[330px] h-[320px] sm:h-[350px] md:h-[350px] lg:h-[350px] flex flex-col shadow-[0px_4px_40px_4px_#412BE012] rounded-[8px] md:rounded-[10px] bg-white group overflow-hidden relative transition-all duration-500">
          {/* Image Section with Glows */}
          <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] lg:h-[270px] flex items-end justify-center overflow-hidden">
            {/* Top-right Glow */}
            <div
              className="absolute w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] opacity-40 blur-3xl rounded-full top-[-80px] sm:top-[-100px] right-[-80px] sm:right-[-100px] transition-all duration-700 ease-in-out group-hover:w-[200px] group-hover:h-[200px] group-hover:top-[-50px] group-hover:right-[-50px]"
              style={{
                background: "linear-gradient(180deg, #1A7ADE 0%, #53E0F8 100%)",
              }}
            />
            {/* Bottom-left Glow */}
            <div className="absolute w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] bg-[#4443E1] opacity-70 blur-3xl rounded-full bottom-[-50px] left-[-50px] transition-all duration-700 ease-in-out" />

            {/* Main Image */}
            <Image
              src={images.ClientFavorite.custom_AI}
              alt="Main Image"
              width={200}
              height={300}
              className="object-cover transition-all duration-700 ease-in-out transform group-hover:scale-90 group-hover:-translate-y-6"
              style={{ zIndex: 10 }}
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-1 p-3 transition-all duration-500 h-[120px] group-hover:h-[150px] md:group-hover:h-[170px] overflow-hidden">
            <h3 className="text-[16px] md:text-[18px] text-secondary font-[500]">
              AI & Workflow Automation
            </h3>
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
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 justify-center mt-8 sm:mt-10 lg:mt-[50px]">
        <button className="py-2.5 px-6 bg-secondary cursor-pointer text-white rounded-[37px] hover:bg-secondary/80 transition-colors text-sm md:text-[16px] w-full sm:w-auto">
          Request Your Strategy Call
        </button>
        <button className="py-2.5 px-6 cursor-pointer rounded-[37px] hover:bg-white/20 transition-colors text-sm md:text-[16px] border-2 border-black font-[500] w-full sm:w-auto">
          View Our Work
        </button>
      </div>
    </div>
  );
};

export default ClientFavorite;