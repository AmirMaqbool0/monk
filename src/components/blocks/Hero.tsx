import React from "react";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Image from "next/image";
import images from "@/lib/images";
import Marquee from "react-fast-marquee";
import Dashboard from "./Dashboard";

const Trusted_Logs = [
  images.trusted_logos.trusted_logo1,
  images.trusted_logos.trusted_logo2,
  images.trusted_logos.trusted_logo3,
  images.trusted_logos.trusted_logo4,
  images.trusted_logos.trusted_logo5,
  images.trusted_logos.trusted_logo6,
  images.trusted_logos.trusted_logo7,
];

const Hero = () => {
  const [play, setPlay] = React.useState(true);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    let playing = true;

    interval = setInterval(() => {
      playing = !playing;
      setPlay(playing);
    }, 2000); // every 2 seconds toggle play/pause

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit bg-gradiant py-20 sm:py-28 md:py-36 flex flex-col justify-center gap-8 sm:gap-12">
      {/* ------------------------------Text Content------------------------ */}
      <div className="text-white flex flex-col gap-6 sm:gap-8 items-center justify-center text-center w-full px-4 sm:px-0">
        <h1 className="font-semibold text-white text-[38px] leading-[1.2] max-w-[90%] sm:text-[40px] sm:max-w-[600px] md:text-[60px] md:max-w-3xl 2xl:text-[90px] 2xl:max-w-[1350px]">
          Elite Systems. Engineered <span className="text-[#B3B3B3]">with</span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10">AI Precision.</span>
            <span className="absolute left-0 right-0 bottom-[-8px] sm:bottom-[-30px] z-0 flex justify-center pointer-events-none">
              {/* Class controls size */}
              <AnimatedUnderline className="w-[380px] h-auto 2xl:w-[550px]" />
            </span>
          </span>
        </h1>

        <p className="text-white font-[400] text-[14px] max-w-[90%] sm:max-w-[600px] sm:text-[16px] md:max-w-2xl 2xl:text-[19px] ">
          We build intelligent, high-performance platforms for brands ready to
          scale — fusing automation, design, and engineering into real business
          impact.
        </p>

        {/* ------------------------Buttons-------------------------------------- */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto py-2 px-6 bg-secondary cursor-pointer rounded-[37px] hover:bg-secondary/80 transition-colors text-[14px] sm:text-[14px] md:text-[14px] 2xl:text-[16px]">
            Request Your Strategy Call
          </button>
          <button className="w-full sm:w-auto py-[6px] px-6 cursor-pointer rounded-[37px] hover:bg-white/20 transition-colors border-white text-[14px] sm:text-[14px] md:text-[14px] border-[2px] 2xl:text-[16px]">
            View Our Work
          </button>
        </div>
        <div className="max-w-[900px] p-[2px] bg-white/10 rounded-2xl border-[3px] border-[#797890] 2xl:max-w-[1100px]">
          <Dashboard />
        </div>
      </div>

      {/* -----------------------------------Trusted Clients----------------------------------- */}
      <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center px-4 sm:px-0">
        <p className="text-white font-[400] text-[16px] sm:text-[18px] lg:max-w-3xl text-center 2xl:text-[18px]">
          Trusted by 30+ industries worldwide
        </p>

        {/* -------------------------Company LOGO----------------- */}
        <div className="w-full flex items-center h-[70px] sm:h-[120px] relative overflow-hidden 2xl:h-[160px]">
          <Marquee speed={40} play={play}>
            {[...Trusted_Logs, ...Trusted_Logs].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Trusted Logo ${index + 1}`}
                width={90}
                height={50}
                className="mx-6 sm:mx-12 2xl:w-[300px] 2xl:h-[80px] object-contain"
              />
            ))}
          </Marquee>

          {/* Left fade */}
          <div className="absolute left-0 top-0 w-[80px] sm:w-[200px] h-full bg-sides_gradiant to-transparent backdrop-blur-sm pointer-events-none"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 w-[80px] sm:w-[200px] h-full bg-sides_gradiant to-transparent backdrop-blur-sm pointer-events-none transform rotate-180"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
