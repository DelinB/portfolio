import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

export default function AboutUs() {
  const servicesList = [
    "Personal branding strategy",
    "Authority-building videos",
    "Podcast production (audio & video)",
    "Professional video shooting & editing",
    "Social Media management",
    "Digital marketing for growth",
  ];

  const processSteps = [
    { title: "Understand", desc: "Your goals and target audience" },
    { title: "Plan", desc: "Content that aligns with your brand" },
    { title: "Shoot", desc: "Professional recording and filming" },
    { title: "Edit", desc: "Optimization for every platform" },
    { title: "Publish", desc: "Strategic promotion and tracking" },
  ];

  return (
    <div className="font-['Space_Grotesk'] text-[#191A23] overflow-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-[1240px] mx-auto text-center md:text-left">
          <div className="inline-block bg-[#B9FF66] px-4 py-1 rounded-md border border-black shadow-[2px_2px_0px_#000] mb-6">
            <span className="font-bold text-xl">About Us</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
            We Help People Build <br className="hidden md:block" />
            <span className="underline decoration-[#B9FF66] decoration-8">Authority</span> Through Content
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            We are a creative branding and digital marketing team based in **Kanyakumari District**, focused on helping individuals and businesses build a strong personal brand.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE (Card Style) ================= */}
      <section className="py-12 px-6">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-10 items-center bg-[#191A23] text-white p-8 md:p-16 rounded-[45px] border-2 border-black shadow-[8px_8px_0px_#B9FF66]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#B9FF66]">Who We Are</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
              Led by **Johny Babish**, our studio is centered around authority building. We believe every person has a story worth sharing, and visibility alone is not enough.
            </p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic">
              "What truly matters is trust, authority, and consistency — and that’s exactly what we help you build."
            </div>
          </div>
          <div className="flex justify-center">
             {/* Placeholder for Johny Babish Image or Studio Photo */}
             <div className="w-full aspect-video md:aspect-square bg-gray-800 rounded-[30px] border-2 border-[#B9FF66] flex items-center justify-center">
                <span className="text-[#B9FF66] font-bold">Studio Visual / Team Photo</span>
             </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO & WHY (Grid) ================= */}
      <section className="py-20 px-6 max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* What We Do */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Zap className="text-[#B9FF66]" fill="currentColor" /> What We Do
            </h2>
            <div className="grid gap-4">
              {servicesList.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-[#F3F3F3] border-2 border-black rounded-xl hover:bg-[#B9FF66] transition-colors group">
                  <CheckCircle size={24} className="group-hover:text-black" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#B9FF66] p-8 md:p-12 rounded-[40px] border-2 border-black shadow-[8px_8px_0px_#000]">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Target /> Why Choose Us
            </h2>
            <ul className="space-y-6">
              {[
                "Local expertise in Kanyakumari District",
                "Strong focus on personal branding",
                "Complete shoot → edit → publish solution",
                "Professional quality with clear strategy",
                "Honest communication and long-term vision"
              ].map((text, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="bg-black text-white rounded-full p-1 mt-1">
                    <CheckCircle size={16} />
                  </div>
                  <span className="font-bold text-lg">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH (Steps) ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Purpose-Driven Approach</h2>
          
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-6 border-2 border-black rounded-2xl bg-white hover:shadow-[4px_4px_0px_#000] transition-all text-center">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B9FF66] border-2 border-black px-3 py-1 rounded-full font-black">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE WORK WITH ================= */}
      <section className="py-20 px-6">
        <div className="max-w-[1240px] mx-auto bg-[#F3F3F3] rounded-[45px] p-10 md:p-20 border-2 border-black text-center">
          <Users className="mx-auto mb-6 text-[#191A23]" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Who We Work With</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Entrepreneurs", "Coaches", "Consultants", "Local Businesses", "Startups"].map((tag) => (
              <span key={tag} className="bg-white border-2 border-black px-8 py-3 rounded-full font-bold text-lg shadow-[4px_4px_0px_#000]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Your story matters.</h2>
          <p className="text-xl mb-12 text-gray-600">
            Based in Kanyakumari District, helping brands grow locally and globally.
            If you’re ready to grow your visibility, we’d love to work with you.
          </p>
          <Link to="/contact">
            <button className="bg-[#191A23] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#B9FF66] hover:text-black transition-all shadow-xl active:scale-95">
              Let's Build Your Brand
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}