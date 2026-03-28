import Frame19 from "../assets/Frame19.png"; // your illustration

export default function CTASection() {
  return (
<section className="
 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-[50px]
px-2 sm:px-3 md:px-5 lg:px-[50px]
">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[100px]">

        {/* CARD */}
        <div className="
          bg-[#F3F3F3]
          rounded-[30px] lg:rounded-[45px]
          px-6 sm:px-10 lg:px-[60px]
          py-10 lg:py-0
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          gap-10
          lg:gap-[275px]
          lg:h-[347px]
        ">

          {/* LEFT CONTENT */}
          <div className="
            flex
            flex-col
            gap-6
            max-w-xl
            text-center
            lg:text-left
          ">

            <h3 className="
              text-[24px]
              sm:text-[26px]
              lg:text-[30px]
              leading-[38px]
              font-medium
            ">
  Ready to build your personal brand?
            </h3>

            <p className="
              text-[16px]
              sm:text-[18px]
              leading-[23px]
            ">
             We help individuals and businesses in Kanyakumari create powerful authority through videos, podcasts, and digital marketing.
  From planning and shooting to editing and publishing — we handle everything.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button className="
                bg-[#191A23]
                text-white
                px-6 sm:px-8 lg:px-[35px]
                py-3 sm:py-4 lg:py-[20px]
                rounded-[14px]
                text-[16px]
                sm:text-[18px]
                lg:text-[20px]
              ">
                  Get started today
              </button>
            </div>

          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="relative w-full max-w-[360px] lg:max-w-[494px]">

            <img
              src={Frame19}
              alt="CTA Illustration"
              className="w-full h-auto object-contain"
            />

            {/* Decorative Elements - Desktop Only */}

            <div className="hidden lg:block absolute top-1/3 left-0 w-[338px] h-[71px] border border-black rounded-full"></div>

            <div className="hidden lg:block absolute top-[50%] left-0 w-[338px] h-[71px] border border-black rounded-full"></div>

            <div className="hidden lg:block absolute top-[65%] left-0 w-[338px] h-[71px] border border-black rounded-full"></div>

            <div className="hidden lg:block absolute top-0 right-10 w-[125px] h-[125px] bg-black rounded-full"></div>

          </div>

        </div>
      </div>
    </section>
  );
}
