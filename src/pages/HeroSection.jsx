import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { Linkedin, Github, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const widgetRef = useRef(null);
  const taglineRef = useRef(null);
  
  const [index, setIndex] = useState(0);
  const words = ["SCALABLE SYSTEMS", "AI INTEGRATIONS", "MODULAR ARCHITECTURE", "HIGH PERFORMANCE"];

  // 1. Dynamic Text Update Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (index + 1) % words.length;
      
      // GSAP Out animation
      gsap.to(".tagline-text", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setIndex(nextIndex);
          // GSAP In animation
          gsap.fromTo(".tagline-text", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        }
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  // 2. Entrance & Parallax Interaction
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, delay: 0.2 })
        .from(".hero-p", { x: -50, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-cta", { scale: 0.8, opacity: 0, stagger: 0.1 }, "-=0.4")
        .from(widgetRef.current, { x: 50, opacity: 0, duration: 1 }, "-=0.8");

      // Mouse Follow Parallax for Widget
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(widgetRef.current, {
          x: xPos,
          y: yPos,
          rotateX: -yPos / 2,
          rotateY: xPos / 2,
          duration: 0.8,
          ease: "power2.out"
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-16 px-6 lg:px-[100px] max-w-[1440px] mx-auto overflow-hidden perspective-1000">
      {/* Dynamic Background Blur */}
      <div className="absolute top-20 right-[-5%] w-[600px] h-[600px] bg-[#B9FF66]/20 rounded-full blur-[120px] -z-10" />
      
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="hero-badge flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B9FF66] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B9FF66]"></span>
            </span>
            <span className="font-bold uppercase tracking-widest text-sm text-gray-500">Available for Opportunities</span>
          </div>
          
          <h1 className="hero-title text-7xl lg:text-[110px] font-black leading-[0.85] mb-8 tracking-tighter uppercase">
            DELIN B<span className="text-[#B9FF66]">.</span>
          </h1>
          
          <div className="hero-p mb-10 overflow-hidden h-[40px] lg:h-[50px]">
            <p className="text-2xl lg:text-3xl font-medium text-gray-700 leading-tight">
              Crafting <span className="tagline-text inline-block bg-[#B9FF66] px-2 border-2 border-black shadow-[4px_4px_0px_#000] font-black italic">
                {words[index]}
              </span>
            </p>
          </div>

          <p className="hero-p text-xl text-gray-500 max-w-xl mb-10 font-medium">
            Full-stack developer focused on architectural integrity and production-grade React systems.
          </p>

          <div className="hero-cta flex flex-wrap gap-6 items-center">
            <button className="group relative px-10 py-5 bg-[#191A23] text-white rounded-2xl font-black text-xl overflow-hidden transition-all hover:pr-14 hover:shadow-[8px_8px_0px_#B9FF66]">
              <span className="relative z-10">Get in Touch</span>
              <ArrowUpRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
            
            <div className="flex gap-4">
              {[Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="hero-cta w-16 h-16 border-2 border-black rounded-2xl flex items-center justify-center hover:bg-[#B9FF66] hover:-rotate-6 transition-all shadow-[4px_4px_0px_#000] active:translate-x-[2px]">
                  <Icon size={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Stats Widget */}
        <div ref={widgetRef} className="hero-widget lg:col-span-5 relative transition-transform duration-75 ease-out">
           <div className="bg-white border-4 border-black p-8 rounded-[40px] shadow-[12px_12px_0px_#000] relative z-10">
              <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                      <p className="text-5xl font-black mb-1">1+</p>
                      <p className="text-sm font-bold uppercase text-gray-500">Years Exp.</p>
                  </div>
                  <div>
                      <p className="text-5xl font-black mb-1">12+</p>
                      <p className="text-sm font-bold uppercase text-gray-500">Projects</p>
                  </div>
              </div>
              <div className="mt-8 pt-8 border-t-2 border-black/10 space-y-4">
                  <div className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-[#B9FF66] fill-black" />
                    <span>Production-Grade React</span>
                  </div>
                  <div className="flex items-center gap-3 font-bold">
                    <CheckCircle2 className="text-[#B9FF66] fill-black" />
                    <span>TypeScript Architecture</span>
                  </div>
              </div>
           </div>
           {/* Decorative Offset Box */}
           <div className="absolute top-6 left-6 w-full h-full bg-[#B9FF66] border-4 border-black rounded-[40px] -z-10" />
        </div>
      </div>
    </section>
  );
}