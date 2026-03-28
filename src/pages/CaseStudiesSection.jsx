import { Link } from "react-router-dom";
export default function CaseStudiesSection() {
const caseStudies = [
    {
      slug: "entrepreneur-branding",
      text: "We helped a local entrepreneur in Kanyakumari build a strong personal brand through authority videos and consistent social media content, increasing visibility and audience trust.",
    },
    {
      slug: "podcast-production-expert",
      text: "Our podcast production service enabled a business owner to share industry insights through high-quality audio and video podcasts, positioning them as an expert in their niche.",
    },
    {
      slug: "local-business-marketing",
      text: "By combining video content and digital marketing, we helped a local business reach the right audience and generate consistent engagement across Instagram, YouTube, and Facebook.",
    },
  ];

  return (
<section  id="case-studies" className="
  py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]
px-2 sm:px-3 md:px-5 lg:px-[50px]
">
      {/* ================= HEADING ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">

        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[40px] mb-12">

          {/* Green Label */}
          <div className="bg-[#B9FF66] px-4 rounded-[7px]">
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] leading-[51px] font-medium">
          Case Studies  </h2>
          </div>

          {/* Subheading */}
          <p className="text-[16px] sm:text-[18px] max-w-xl">  Real examples of how we help individuals and businesses in Kanyakumari build authority, grow their audience, and strengthen their personal brand.

          </p>

        </div>
      </div>

      {/* ================= DARK CARD BLOCK ================= */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">

        <div className="
          bg-[#191A23]
          rounded-[30px] lg:rounded-[45px]
          px-6 sm:px-10 lg:px-[60px]
          py-10 lg:py-[70px]
        ">

          {/* Grid */}
          <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
            lg:gap-[64px]
          ">

            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 text-white"
              >
                <p className="text-[16px] sm:text-[18px] leading-[23px]">
                  {study.text}
                </p>

              <Link
  to={`/case-study/${study.slug}`} 
  className="flex items-center gap-3 text-[#B9FF66] text-[18px] sm:text-[20px] hover:translate-x-2 transition-transform cursor-pointer"
>
  <span>Learn more</span>
  <span>→</span>
</Link>

                {/* Divider (Desktop Only) */}
                {index !== 2 && (
                  <div className="hidden lg:block absolute"></div>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
