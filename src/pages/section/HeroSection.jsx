import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, Github, Linkedin, Mail, 
  Zap, Cpu, Layers, Database, Sparkles, Activity, ShieldCheck 
} from 'lucide-react';

const DelinPremiumHero = ({ id }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // --- SLIDE LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Core Stack",
      subtitle: "System Status: Optimal",
      icon: <Cpu className="text-[#B9FF66]" size={24} />,
      items: [
        { label: "State", val: "RTK Query", icon: <Database size={18}/> },
        { label: "Motion", val: "Framer 12", icon: <Zap size={18}/> },
        { label: "Infrastructure", val: "Next.js 15", icon: <Layers size={18}/> }
      ]
    },
    {
      title: "Performance",
      subtitle: "Vitals: Healthy",
      icon: <Activity className="text-blue-400" size={24} />,
      items: [
        { label: "Lighthouse", val: "100/100", icon: <Sparkles size={18}/> },
        { label: "FCP", val: "0.8s", icon: <Zap size={18}/> },
        { label: "CLS", val: "0.001", icon: <Layers size={18}/> }
      ]
    },
    {
      title: "Security",
      subtitle: "Protocols: Active",
      icon: <ShieldCheck className="text-emerald-400" size={24} />,
      items: [
        { label: "Auth", val: "NextAuth", icon: <ShieldCheck size={18}/> },
        { label: "Encryption", val: "AES-256", icon: <Database size={18}/> },
        { label: "Headers", val: "HSTS", icon: <Layers size={18}/> }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="relative min-h-screen bg-[#050505] text-white selection:bg-[#B9FF66] selection:text-black overflow-hidden font-sans">
      
      {/* Background elements remain the same */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Method='overlay'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#B9FF66]/10 blur-[120px] rounded-full" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-20 sm:pt-24 lg:pt-32 pb-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <Sparkles size={14} className="text-[#B9FF66]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
                Available for 2026 Projects
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.85] mb-10"
            >
              ARCHITECTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white/20">DIGITAL</span> <br />
              POETRY<span className="text-[#B9FF66]">.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed mb-12 font-light"
            >
              Beyond pixels. I build <span className="text-white font-medium">high-performance frontend ecosystems</span> using React & TypeScript.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-6 items-center">
              <button className="group relative px-8 py-4 bg-[#B9FF66] text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  EXPLORE WORKS <ArrowUpRight size={20} />
                </span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
              
              <div className="flex gap-4">
                {[Github, Linkedin, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-[#B9FF66] hover:text-black transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT: THE SLIDING ENGINE */}
          <div className="w-full lg:col-span-5 relative">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B9FF66] to-blue-500 rounded-[40px] opacity-20 group-hover:opacity-40 transition duration-1000 blur" />
              
              <div className="relative bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-10 rounded-[40px] overflow-hidden min-h-[480px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="flex justify-between items-start mb-12">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{slides[currentSlide].title}</h3>
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-tighter">
                          {slides[currentSlide].subtitle}
                        </p>
                      </div>
                      <div className="h-12 w-12 bg-[#B9FF66]/10 rounded-2xl flex items-center justify-center border border-[#B9FF66]/20">
                        {slides[currentSlide].icon}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {slides[currentSlide].items.map((item, i) => (
                        <div 
                          key={i} 
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-slate-500">{item.icon}</span>
                            <span className="text-sm font-medium text-slate-300">{item.label}</span>
                          </div>
                          <span className="text-sm font-mono text-[#B9FF66]">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[10px] font-mono opacity-50">EST 2024</span>
                   <div className="flex gap-2">
                     {slides.map((_, idx) => (
                       <div 
                        key={idx}
                        className={`h-1.5 transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-4 bg-[#B9FF66]' : 'w-1.5 bg-white/20'}`} 
                       />
                     ))}
                   </div>
                   <span className="text-[10px] font-mono opacity-50">v4.0.2</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DelinPremiumHero;