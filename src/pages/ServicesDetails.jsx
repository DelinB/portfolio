import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "../data/servicesData";
import { ArrowLeft, CheckCircle2, Zap, ShieldCheck, TrendingUp, ArrowUpRight } from "lucide-react";

export default function ServicesDetails() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, [slug]);

  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center font-['Space_Grotesk']">
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-4">Service not found.</h2>
        <Link to="/" className="underline font-bold">Return Home</Link>
      </div>
    );
  }

  return (
    <section className="font-['Space_Grotesk'] py-8 md:p y-16 px-4 md:px-10 lg:px-[100px] max-w-[1440px] mx-auto min-h-screen selection:bg-[#B9FF66]">
      
      {/* --- NAVIGATION --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 md:mb-16 gap-6">
        <Link 
          to="/#services" 
          className="group flex items-center gap-2 font-bold text-sm uppercase tracking-widest transition-all"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Services
        </Link>
        <div className="bg-[#B9FF66] border-2 border-black px-4 py-1.5 rounded-lg font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_#000]">
          Service Overview
        </div>
      </div>

      {/* --- HERO CARD --- */}
      <div 
        data-aos="fade-up"
        className={`rounded-[30px] md:rounded-[60px] border-2 border-black shadow-[10px_10px_0px_#000] overflow-hidden ${service.bg} ${service.text}`}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-20 items-center">
          
          {/* Content (Left) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex flex-col gap-3 mb-8">
              {service.title.map((line, i) => (
                <span 
                  key={i} 
                  className={`${service.labelBg} text-black px-4 md:px-6 py-2 rounded-xl text-3xl md:text-5xl lg:text-7xl font-black w-fit border-2 border-black shadow-[4px_4px_0px_#000] leading-none`}
                >
                  {line}
                </span>
              ))}
            </div>
            
            <p className="text-lg md:text-2xl leading-relaxed font-medium opacity-90 mb-10 max-w-2xl">
              {service.description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features?.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl border border-black/5 backdrop-blur-md group hover:bg-white hover:text-black transition-all duration-300"
                >
                  <CheckCircle2 className="shrink-0 text-[#B9FF66] group-hover:text-black" size={24} />
                  <span className="font-bold text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <button className="group mt-12 w-full sm:w-auto px-10 py-5 bg-[#191A23] text-white text-lg rounded-2xl hover:bg-[#B9FF66] hover:text-black hover:scale-[1.02] transition-all font-black uppercase tracking-widest flex items-center justify-center gap-3 border-2 border-transparent hover:border-black">
              Start Project <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
            </button>
          </div>

          {/* Image (Right) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[300px] md:max-w-[450px]">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-[80px] animate-pulse"></div>
              <img 
                src={service.image} 
                alt={service.title.join(" ")} 
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl" 
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* --- TRUST & VALUE SECTION --- */}
      <div className="mt-24 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div data-aos="fade-up" data-aos-delay="100" className="p-8 border-2 border-black rounded-[40px] bg-white shadow-[6px_6px_0px_#000]">
            <Zap className="mb-4 text-[#B9FF66]" size={40} fill="black" />
            <h4 className="text-xl font-black uppercase mb-2">Fast Execution</h4>
            <p className="text-gray-600 font-medium">We deliver high-impact results without the traditional agency lag time.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className="p-8 border-2 border-black rounded-[40px] bg-white shadow-[6px_6px_0px_#000]">
            <ShieldCheck className="mb-4 text-[#B9FF66]" size={40} fill="black" />
            <h4 className="text-xl font-black uppercase mb-2">Market Authority</h4>
            <p className="text-gray-600 font-medium">Build a brand that isn't just seen, but respected as an industry leader.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className="p-8 border-2 border-black rounded-[40px] bg-white shadow-[6px_6px_0px_#000]">
            <TrendingUp className="mb-4 text-[#B9FF66]" size={40} fill="black" />
            <h4 className="text-xl font-black uppercase mb-2">Data Driven</h4>
            <p className="text-gray-600 font-medium">Every creative decision is backed by insights to ensure maximum ROI.</p>
        </div>
      </div>

      {/* --- FOOTER STATEMENT --- */}
      <div className="mt-32 text-center" data-aos="zoom-in">
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase">
          Dominating <span className="bg-[#B9FF66] px-2">Digital</span>
        </h3>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-medium">
          We combine Kanyakumari's unique business culture with global digital standards. 
          Ready to leave your competitors behind?
        </p>
      </div>

    </section>
  );
}