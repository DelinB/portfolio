import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Assets
import react from "./assets/react.svg";
import dazele from "./assets/dazele.png";
import home from "./assets/home.svg";

// Components
import ServicesSection from "./pages/ServicesSection";
import CTASection from "./pages/CTASection";
import CaseStudiesSection from "./pages/CaseStudiesSection";
import ProcessSection from "./pages/ProcessSection";
import TeamSection from "./pages/TeamSection";
import TestimonialsSection from "./pages/TestimonialsSection";
import ContactBlock from "./pages/ContactBlock";
import Footer from "./pages/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="font-['Space_Grotesk'] overflow-x-hidden text-[#191A23]">

      {/* HERO */}
      <section className="pt-10 lg:pt-[70px] pb-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div
              className="w-full lg:w-[531px] flex flex-col gap-6 lg:gap-[35px] text-center lg:text-left"
              data-aos="fade-right"
            >
              <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-tight">
                Navigating the digital landscape for success
              </h1>

              <p className="text-[18px] lg:text-[20px] text-gray-700">
                Our digital marketing agency helps businesses grow and succeed
                online through SEO, PPC, social media marketing, and content creation.
              </p>

              <button className="px-[35px] py-[20px] bg-[#191A23] text-white rounded-[14px] text-[20px] font-bold hover:bg-[#B9FF66] hover:text-black transition-all">
                Book a consultation
              </button>
            </div>

            <div
              className="w-full lg:w-[600px]"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img src={home} alt="Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 grayscale opacity-70">
            <img src={dazele} className="h-8 mx-auto" />
            <img src={react} className="h-8 mx-auto" />
            <img src={react} className="h-8 mx-auto" />
            <img src={react} className="h-8 mx-auto" />
            <img src={react} className="h-8 mx-auto" />
            <img src={react} className="h-8 mx-auto" />
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <div id="services"><ServicesSection /></div>
      <CTASection />
      <div id="cases"><CaseStudiesSection /></div>
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <div id="contact"><ContactBlock /></div>
    </div>
  );
}