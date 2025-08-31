import React from 'react'
import AnimatedUnderline from '../ui/AnimatedUnderline'
import MultiStepForm from './MultiStepForm'

const SuccessJourney = () => {
  return (
    <div className='w-full h-fit bg-[#FDFDFD] flex flex-col gap-7 py-12 px-4 sm:px-6 md:py-24 md:px-8 lg:py-36 lg:px-24'>
      {/* -----------------Header------------------ */}
      <div className="flex flex-col gap-4 md:gap-2 items-center justify-center text-center">
        <span className="text-[16px] md:text-[18px] text-secondary font-[600]">
         Start Your Success Journey
        </span>
        <h2 className="font-[600] text-[#070227] text-[24px] md:text-[30px] lg:text-[35px] max-w-2xl leading-tight">
          Let’s Build the Platform Your Competitors  <span> </span>
          <span className="relative inline-block">
            Wished for
            <span className="absolute left-0 -bottom-1 md:-bottom-2">
              <AnimatedUnderline color="#412BE0" width={200} height={16} className="md:!w-[200px] md:!h-[20px]" />
            </span>
          </span>{" "}
       
        </h2>
        <p className="text-[14px] md:text-[16px] text-[gray] font-[400] max-w-3xl leading-relaxed">
          We build intelligent, high-performance platforms for brands ready to
          scale — fusing automation, design, and engineering into real
          business impact.
        </p>
      </div>

      {/* ----------------------Form------------------------ */}
      <MultiStepForm />
    </div>
  )
}

export default SuccessJourney