"use client";
import React, { useEffect, useState } from "react";
import AnimatedUnderline from "../ui/AnimatedUnderline";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import images from "@/lib/images";

type Group = "left" | "center" | "right";

export const Technologies: React.FC = () => {
  const [active, setActive] = useState<Group>("left");

  useEffect(() => {
    const order: Group[] = ["left", "center", "right"];
    let i = 0;
    const id = setInterval(() => {
      setActive(order[i]);
      i = (i + 1) % order.length;
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // Smaller under 479px and 375px, positions preserved
  const boxBase =
    "w-12 h-12 " +
    "max-[479px]:w-10 max-[479px]:h-10 " +
    "max-[375px]:w-10 max-[375px]:h-10 " +
    "md:w-16 md:h-16 lg:w-[90px] lg:h-[90px] " +
    "rounded-[10px] lg:rounded-[15px] bg-white border flex flex-col items-center justify-center overflow-hidden text-center " +
    "p-1 md:p-1.5 lg:p-2";

  const TechBox = ({
    group,
    src,
    name,
    extraClass = "",
  }: {
    group: Group;
    src: string;
    name: string;
    extraClass?: string;
  }) => {
    const isActive = active === group;

    return (
      <div className={`relative ${extraClass}`}>
        <AnimatePresence mode="wait">
          <motion.div
            layout
            initial={{
              scale: 1,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              borderColor: "rgb(209, 213, 219)",
            }}
            animate={{
              scale: isActive ? 1.05 : 1,
              boxShadow: isActive
                ? "0 8px 25px rgba(0,0,0,0.08)"
                : "0 1px 3px rgba(0,0,0,0.05)",
              borderColor: isActive
                ? "rgb(229, 231, 235)"
                : "rgb(209, 213, 219)",
            }}
            exit={{
              scale: [1.04, 1.02, 1],
              boxShadow: [
                "0 6px 20px rgba(0,0,0,0.06)",
                "0 3px 10px rgba(0,0,0,0.05)",
                "0 1px 3px rgba(0,0,0,0.05)",
              ],
              borderColor: [
                "rgb(225, 227, 231)",
                "rgb(215, 217, 221)",
                "rgb(209, 213, 219)",
              ],
            }}
            transition={{
              duration: isActive ? 0.4 : 0.6,
              ease: "easeInOut",
            }}
            className={boxBase}
          >
            <motion.div
              initial={{ filter: "grayscale(70%) opacity(90%)" }}
              animate={{
                filter: isActive
                  ? "grayscale(0%) opacity(100%)"
                  : "grayscale(70%) opacity(90%)",
              }}
              exit={{
                filter: [
                  "grayscale(30%) opacity(95%)",
                  "grayscale(50%) opacity(92%)",
                  "grayscale(70%) opacity(90%)",
                ],
              }}
              transition={{ duration: isActive ? 0.4 : 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src={src}
                alt={name}
                width={45}
                height={45}
                className="object-contain w-6 h-6 max-[479px]:w-5 max-[479px]:h-5 max-[375px]:w-4 max-[375px]:h-4 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {isActive && (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: [0.8, 0.4, 0], y: [2, 4, 6] }}
                  transition={{ duration: 0.5, ease: "easeInOut", when: "afterChildren" }}
                  className="mt-1 text-[8px] max-[479px]:text-[7px] max-[375px]:text-[6.5px] md:text-[9px] lg:text-[10px] font-[400] text-black"
                >
                  {name}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div
      className="w-full h-fit bg-[#FDFDFD] flex flex-col gap-4 md:gap-5 lg:gap-7 py-16 md:py-24 lg:py-36 px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden"
      style={{
        backgroundImage: `url(${images.Technologies.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#FDFDFD",
      }}
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <span className="text-[16px] md:text-[18px] text-secondary font-[600]">
          Technologies
        </span>

        <h2 className="font-[600] text-center text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight">
          Our Technology Arsenal That Powers the{" "}
          <span className="relative inline-block">
            Smartest Brands
            <span className="absolute left-0 -bottom-1 md:-bottom-1.5 lg:-bottom-2 origin-left max-[479px]:scale-[0.85] max-[375px]:scale-[0.75]">
              <AnimatedUnderline width={290} height={20} color="#412BE0" />
            </span>
          </span>{" "}
          on the Planet
        </h2>

        <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[gray] font-[400] max-w-3xl text-center px-4 max-[375px]:text-[13px]">
          MonkMaze partners with bold, visionary organizations across industries
          — whether you're launching, scaling, or transforming.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-8 lg:gap-18 mt-4 md:mt-6 lg:mt-8 max-[479px]:gap-2 max-[375px]:gap-[6px]">
        {/* Left group */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 max-[479px]:gap-2 max-[375px]:gap-[6px]">
          <div className="flex items-center gap-3 md:gap-5 lg:gap-7 max-[479px]:gap-2 max-[375px]:gap-[6px]">
            <TechBox
              group="left"
              src={images.Technologies.html_orange}
              name="HTML5"
            />
            <TechBox
              group="left"
              src={images.Technologies.react_js}
              name="ReactJS"
              extraClass="mt-[-20px] md:mt-[-30px] lg:mt-[-40px] max-[479px]:mt-[-16px] max-[375px]:mt-[-14px]"
            />
            <TechBox
              group="left"
              src={images.Technologies.flutter}
              name="Flutter"
              extraClass="mt-[-40px] md:mt-[-60px] lg:mt-[-80px] max-[479px]:mt-[-32px] max-[375px]:mt-[-28px]"
            />
          </div>
          <div className="flex items-center gap-3 md:gap-5 lg:gap-7 max-[479px]:gap-2 max-[375px]:gap-[6px]">
            <TechBox
              group="left"
              src={images.Technologies.html_blue}
              name="CSS3"
            />
            <TechBox
              group="left"
              src={images.Technologies.tailwind}
              name="Tailwind CSS"
              extraClass="mb-[-20px] md:mb-[-30px] lg:mb-[-40px] max-[479px]:mb-[-16px] max-[375px]:mb-[-14px]"
            />
            <TechBox
              group="left"
              src={images.Technologies.javascript}
              name="JavaScript"
              extraClass="mb-[-40px] md:mb-[-60px] lg:mb-[-80px] max-[479px]:mb-[-32px] max-[375px]:mb-[-28px]"
            />
          </div>
        </div>

        {/* Center group */}
        <div className="flex items-center mr-[-15px] flex-col gap-3 md:gap-5 lg:gap-7 mx-2 md:mx-4 lg:mx-6 max-[479px]:gap-2 max-[375px]:gap-[6px]">
          <TechBox group="center" src={images.Technologies.rest} name="REST API" />
          <TechBox
            group="center"
            src={images.Technologies.graphql}
            name="GraphQL"
            extraClass="mr-[15px] md:mr-[20px] lg:mr-[30px] max-[479px]:mr-[12px] max-[375px]:mr-[10px]"
          />
          <TechBox
            group="center"
            src={images.Technologies.sanity}
            name="Sanity"
            extraClass="mr-[30px] md:mr-[40px] lg:mr-[60px] max-[479px]:mr-[20px] max-[375px]:mr-[16px]"
          />
          <TechBox
            group="center"
            src={images.Technologies.strapi}
            name="Strapi"
            extraClass="mr-[45px] md:mr-[60px] lg:mr-[90px] max-[479px]:mr-[30px] max-[375px]:mr-[24px]"
          />
          <TechBox
            group="center"
            src={images.Technologies.rest}
            name="REST API"
            extraClass="mr-[60px] md:mr-[80px] lg:mr-[120px] max-[479px]:mr-[40px] max-[375px]:mr-[32px]"
          />
          <TechBox
            group="center"
            src={images.Technologies.sanity}
            name="Sanity"
            extraClass="mr-[75px] md:mr-[100px] lg:mr-[150px] max-[479px]:mr-[50px] max-[375px]:mr-[40px]"
          />
        </div>

        {/* Right group */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-5 max-[479px]:gap-2 max-[375px]:gap-[6px]">
          <div className="flex items-center gap-3 md:gap-5 lg:gap-7 max-[479px]:gap-2 max-[375px]:gap-[6px]">
            <TechBox
              group="right"
              src={images.Technologies.node}
              name="Node.js"
              extraClass="mt-[-40px] md:mt-[-60px] lg:mt-[-80px] max-[479px]:mt-[-32px] max-[375px]:mt-[-28px]"
            />
            <TechBox
              group="right"
              src={images.Technologies.mongo}
              name="MongoDB"
              extraClass="mt-[-20px] md:mt-[-30px] lg:mt-[-40px] max-[479px]:mt-[-16px] max-[375px]:mt-[-14px]"
            />
            <TechBox group="right" src={images.Technologies.strapi} name="Strapi" />
          </div>
          <div className="flex items-center gap-3 md:gap-5 lg:gap-7 max-[479px]:gap-2 max-[375px]:gap-[6px]">
            <TechBox
              group="right"
              src={images.Technologies.openai}
              name="OpenAI"
              extraClass="mb-[-40px] md:mb-[-60px] lg:mb-[-80px] max-[479px]:mb-[-32px] max-[375px]:mb-[-28px]"
            />
            <TechBox
              group="right"
              src={images.Technologies.python}
              name="Python"
              extraClass="mb-[-20px] md:mb-[-30px] lg:mb-[-40px] max-[479px]:mb-[-16px] max-[375px]:mb-[-14px]"
            />
            <TechBox
              group="right"
              src={images.Technologies.mysql}
              name="MySQL"
            />
          </div>
        </div>
      </div>
    </div>
  );
};