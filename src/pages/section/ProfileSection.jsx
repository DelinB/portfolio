import React from 'react';
import { Zap, Box, BrainCircuit, CheckCircle2 } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-white">
      {/* 1. DARK TO LIGHT GRADIENT BACKGROUND */}
      {/* This creates the transition from your theme dark to the page white */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#191a23] via-[#191a23] to-white h-[70%]" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#B9FF66]/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-[1440px] mx-auto relative group">
        
        {/* 2. INFINITE MOVING BORDER BEAM */}
        <div className="absolute inset-0 rounded-t-[40px] lg:rounded-t-[80px] rounded-b-[20px] p-[2px] overflow-hidden">
          <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_25%,#B9FF66_50%,transparent_75%,transparent_100%)]" />
        </div>

        {/* 3. MAIN CONTENT CARD */}
        <div className="
            relative
            bg-[#1c1d26]/95
            backdrop-blur-3xl
            rounded-t-[40px] lg:rounded-t-[80px] 
            rounded-b-[20px]
            px-6 sm:px-12 lg:px-24 
            pt-16 pb-12 md:pt-24 md:pb-20 
            z-10
            shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]
          ">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Left Column: Branding & Stats */}
            <div className="space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B9FF66] text-black font-black text-[10px] tracking-[0.2em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
                </span>
                Engineer Profile
              </div>
              
              <h2 className="text-white font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.85]">
                Architecting <br />
                <span className="text-[#B9FF66]">Digital Speed</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
                {/* I specialize in building production-grade systems where <span className="text-white font-bold">Latency</span> isn't just a metric, but a challenge to be conquered. Based in Jaipur, working globally. */}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="group/card bg-white/5 border border-white/10 p-6 rounded-[32px] hover:bg-white/10 transition-all duration-500">
                  <Zap className="text-[#B9FF66] mb-4 group-hover/card:scale-110 transition-transform" size={28} />
                  <div className="text-3xl md:text-4xl font-black text-white">0.00s</div>
                  <div className="text-[10px] uppercase text-gray-500 tracking-widest font-black mt-1">UI Latency Target</div>
                </div>
                <div className="group/card bg-white/5 border border-white/10 p-6 rounded-[32px] hover:bg-white/10 transition-all duration-500">
                  <Box className="text-[#B9FF66] mb-4 group-hover/card:scale-110 transition-transform" size={28} />
                  <div className="text-3xl md:text-4xl font-black text-white">Scale</div>
                  <div className="text-[10px] uppercase text-gray-500 tracking-widest font-black mt-1">Modular Architecture</div>
                </div>
              </div>
            </div>

            {/* Right Column: Methodology Box */}
            <div className="relative">
              <div className="absolute -inset-4 bg-[#B9FF66]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative bg-black/40 border border-white/10 p-8 md:p-12 rounded-[40px] md:rounded-[60px] backdrop-blur-xl shadow-2xl">
                <h3 className="text-xl md:text-2xl font-black text-white mb-8 md:mb-10 flex items-center gap-4 uppercase tracking-wider">
                  <BrainCircuit className="text-[#B9FF66] animate-pulse" size={32} /> 
                  Methodologies
                </h3>
                <ul className="space-y-6 md:space-y-8">
                  {[
                    "Vertical Slice Architecture for Scale",
                    "Real-time Data via RTK Query",
                    "AI Workload Orchestration",
                    "Motion Design with GSAP & Framer"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-5 text-gray-300 text-base md:text-lg font-bold group/item cursor-default">
                      <CheckCircle2 className="text-[#B9FF66] shrink-0 group-hover/item:rotate-12 transition-transform" size={24} />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;