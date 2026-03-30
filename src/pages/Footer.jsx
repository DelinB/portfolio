import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowUpRight, Github, Linkedin, 
  Terminal, Globe, ShieldCheck, Zap, 
  Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OmniZenithFooter = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  // Scroll-based parallax for the background text (Desktop only effect)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, -400]);
const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/invoice");
  };
  return (
    <footer 
      ref={footerRef}
      className="relative bg-[#020202] text-white  pt-16 md:pt-32 pb-8 overflow-hidden border-t border-white/5 font-sans"
    >
      {/* 1. ADAPTIVE KINETIC STRIP (Hidden on smallest screens for clarity) */}
      <div className="absolute top-10 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.02] hidden sm:block">
        <motion.div style={{ x: xTranslate }} className="flex whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <h2 key={i} className="text-[18vw] font-black tracking-tighter uppercase px-10">
              DELIN B • FRONTEND ARCHITECT • TAMIL NADU • 2026 • 
            </h2>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 md:mb-32">
          
          {/* LEFT: THE CTA AREA */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="h-px w-8 md:w-12 bg-[#B9FF66]/40" />
                <span className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-[#B9FF66] uppercase">Open for new ops</span>
              </div>
              
              <h2 className="text-[14vw] md:text-[10vw] lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter uppercase italic">
                LETS <span className="opacity-20 not-italic">START</span><br />
                <span className="text-[#B9FF66]">BUILDING</span>
              </h2>
            </motion.div>
<div className="inline-block">
 <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=delin.b.23@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 md:gap-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight hover:text-[#B9FF66] transition-all duration-500 break-all sm:break-normal"
>
  delin.b.23@gmail.com

  <div className="p-3 md:p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl group-hover:bg-[#B9FF66] group-hover:text-black transition-all">
    <ArrowUpRight className="w-5 h-5 md:w-8 md:h-8" />
  </div>
</a>
</div>
          </div>

          {/* RIGHT: DATA CHANNELS */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-12 lg:space-y-0">
             <div className="grid grid-cols-2 gap-8 lg:border-l lg:border-white/5 lg:pl-10">
                <div className="space-y-4 md:space-y-6">
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Social</p>
                  <ul className="space-y-2 md:space-y-3">
                    <li><a  target="_blank"
      rel="noopener noreferrer" href="https://github.com/DelinB" className="text-sm text-white/40 hover:text-white transition-colors">GitHub</a></li>
                    <li><a  target="_blank"
      rel="noopener noreferrer" href="www.linkedin.com/in/delin-b-dev" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</a></li>
                  </ul>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">Loc</p>
                  <div className="text-sm text-white/40 uppercase font-bold tracking-wider leading-relaxed">
                    Tamil Nadu <br /> India
                  </div>
                </div>
             </div>

             {/* SECURITY CARD: Adapts from full width to compact */}
             <motion.div 
               whileHover={{ x: 5 }}
               className="p-6 md:p-8 rounded-[32px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden"
             >
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <Zap size={14} className="text-[#B9FF66]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">System_Integrity</span>
                </div>
                <p className="text-[10px] md:text-[11px] font-mono text-white/40 leading-relaxed uppercase">
                    Optimizing payment pathways via <br className="hidden md:block" />
                    <span className="text-white">Razorpay & Encrypted RTK_Query</span>.
                </p>
                <ShieldCheck className="absolute top-4 right-4 opacity-5" size={24} />
             </motion.div>
          </div>
        </div>

        {/* --- BOTTOM UTILITY BAR --- */}
        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-10">
            <div className="flex items-center gap-2">
               <Terminal size={12} className="text-[#B9FF66]" />
               <span  onClick={handleNavigate}  className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Build_4.0.2</span>
            </div>
            <div className="flex items-center gap-2">
               <Cpu size={12} className="text-white/20" />
               <span className="text-[9px] font-mono text-white/20 tracking-[0.2em]">© {currentYear} DELIN_B</span>
            </div>
          </div>

          <div className="flex items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
               <div className="h-1.5 w-1.5 rounded-full bg-[#B9FF66] animate-pulse" />
               <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Active</span>
            </div>
            <div className="flex items-center gap-4 sm:border-l sm:border-white/10 sm:pl-8 h-6">
               <Globe size={14} className="text-white/20" />
               <span className="text-[9px] font-mono text-white/20">7200240311</span>
            </div>
          </div>

        </div>
      </div>

      {/* AMBIENT GLOW (Mobile Optimized) */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[300px] bg-[#B9FF66]/5 blur-[100px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default OmniZenithFooter;