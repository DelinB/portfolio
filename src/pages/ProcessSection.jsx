import { useState } from "react";

export default function ProcessSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const steps = [
  {
    title: "Understanding Your Brand",
    description:
      "We start by understanding your goals, audience, and industry. This helps us define your personal brand voice and content direction clearly.",
  },
  {
    title: "Content Strategy & Planning",
    description:
      "We create a structured content plan for videos, podcasts, and social media that aligns with your brand and long-term growth goals.",
  },
  {
    title: "Professional Shoot & Recording",
    description:
      "Our team handles video shooting and podcast recording using professional equipment to ensure high-quality visuals and sound.",
  },
  {
    title: "Editing & Optimization",
    description:
      "We edit videos and podcasts with clean visuals, clear audio, subtitles, and formatting optimized for YouTube, Instagram, and Facebook.",
  },
  {
    title: "Publishing & Distribution",
    description:
      "We upload and schedule your content across platforms, ensuring proper titles, descriptions, and SEO-friendly formatting.",
  },
  {
    title: "Growth & Performance Tracking",
    description:
      "We monitor performance, analyze engagement, and refine content to continuously improve reach, authority, and audience trust.",
  },
];

  return (
<section className="
py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]
px-2 sm:px-3 md:px-5 lg:px-[50px]
">
      {/* ================= HEADING ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-12">

          <div className="bg-[#B9FF66] px-4 rounded-[7px]">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[51px] font-medium">
            </h2>
          </div>

          <p className="text-[16px] sm:text-[18px] max-w-md">
          </p>

        </div>
      </div>

      {/* ================= PROCESS CARDS ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">

        <div className="flex flex-col gap-6 lg:gap-[30px]">

          {steps.map((step, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  border border-[#191A23]
                  shadow-[0px_5px_0px_#191A23]
                  rounded-[30px] lg:rounded-[45px]
                  px-6 sm:px-10 lg:px-[60px]
                  py-6 lg:py-[41px]
                  transition-all duration-300
                  ${isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"}
                `}
              >

                {/* HEADER ROW */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >

                  {/* Left */}
                  <div className="flex items-center gap-4 lg:gap-[25px]">

                    <span className="
                      text-[36px]
                      sm:text-[48px]
                      lg:text-[60px]
                      leading-[77px]
                      font-medium
                    ">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="
                      text-[18px]
                      sm:text-[22px]
                      lg:text-[30px]
                      leading-[38px]
                      font-medium
                    ">
                      {step.title}
                    </h3>

                  </div>

                  {/* Plus / Minus Button */}
                  <div className="
                    w-[44px] h-[44px]
                    lg:w-[58px] lg:h-[58px]
                    flex items-center justify-center
                    rounded-full
                    border border-[#191A23]
                    bg-[#F3F3F3]
                    text-2xl
                  ">
                    {isOpen ? "−" : "+"}
                  </div>

                </div>

                {/* DESCRIPTION */}
                {isOpen && step.description && (
                  <div className="mt-6 pt-6 border-t border-black">
                    <p className="text-[16px] sm:text-[18px] leading-[23px] max-w-4xl">
                      {step.description}
                    </p>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
