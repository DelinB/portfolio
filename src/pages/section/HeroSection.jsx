import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Zap, Cpu, Layers, 
  Database, Sparkles, Activity, ShieldCheck, Download 
} from 'lucide-react';

// Static data outside to prevent recreation
const SLIDES = [
  {
    title: "Core Stack",
    heroText: { top: "ARCHITECTING", middle: "DIGITAL", bottom: "POETRY" },
    subtitle: "System Status: Optimal",
    icon: <Cpu className="text-[#B9FF66]" size={24} />,
    items: [
      { label: "State", val: "RTK Query", icon: <Database size={18} /> },
      { label: "Motion", val: "Framer 12", icon: <Zap size={18} /> },
      { label: "Infrastructure", val: "Next.js 15", icon: <Layers size={18} /> }
    ]
  },
  {
    title: "Performance",
    heroText: { top: "OPTIMIZING", middle: "ULTRA", bottom: "LATENCY" },
    subtitle: "Vitals: Healthy",
    icon: <Activity className="text-blue-400" size={24} />,
    items: [
      { label: "Lighthouse", val: "100/100", icon: <Sparkles size={18} /> },
      { label: "FCP", val: "0.8s", icon: <Zap size={18} /> },
      { label: "CLS", val: "0.001", icon: <Layers size={18} /> }
    ]
  },
  {
    title: "Security",
    heroText: { top: "ENCRYPTING", middle: "SILENT", bottom: "LAYERS" },
    subtitle: "Protocols: Active",
    icon: <ShieldCheck className="text-emerald-400" size={24} />,
    items: [
      { label: "Auth", val: "NextAuth", icon: <ShieldCheck size={18} /> },
      { label: "Encryption", val: "AES-256", icon: <Database size={18} /> },
      { label: "Headers", val: "HSTS", icon: <Layers size={18} /> }
    ]
  }
];

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/DelinB" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/delin-b-dev" },
  { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=delin.b.23@gmail.com" }
];

const TypewriterText = React.memo(({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const textIndex = useRef(0);

  useEffect(() => {
    let timeout;
    const tick = () => {
      if (!isDeleting && textIndex.current < text.length) {
        setDisplayText(text.substring(0, textIndex.current + 1));
        textIndex.current++;
        timeout = setTimeout(tick, delay);
      } else if (isDeleting && textIndex.current > 0) {
        setDisplayText(text.substring(0, textIndex.current - 1));
        textIndex.current--;
        timeout = setTimeout(tick, delay / 3);
      } else if (!isDeleting && textIndex.current === text.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    };
    timeout = setTimeout(tick, delay);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, delay]);

  useEffect(() => {
    setDisplayText("");
    setIsDeleting(false);
    textIndex.current = 0;
  }, [text]);

  return <span>{displayText}</span>;
});

const DelinPremiumHero = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id={id} className="relative min-h-screen bg-[#050505] text-white selection:bg-[#B9FF66] overflow-hidden font-sans">
      
      <motion.div style={{ y: y1 }} className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#B9FF66]/10 blur-[120px] rounded-full will-change-transform" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-500/10 blur-[120px] rounded-full will-change-transform" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-20 md:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT CONTENT: Centered on Mobile, Left on Desktop */}
          <div className="w-full lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <Sparkles size={14} className="text-[#B9FF66]" />
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Available for 2026 Projects</span>
            </motion.div>

            <div className="min-h-[280px] sm:min-h-[340px] md:min-h-[380px] flex flex-col justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1] md:leading-[0.9] mb-10 will-change-transform uppercase"
                >
                  <TypewriterText  text={SLIDES[currentSlide].heroText.top} /> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white/20">
                    <TypewriterText text={SLIDES[currentSlide].heroText.middle} />
                  </span> <br />
                  <TypewriterText text={SLIDES[currentSlide].heroText.bottom} />
                  <motion.span animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="text-[#B9FF66] inline-block ml-1 font-light">_</motion.span>
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-6 items-center justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-[#B9FF66] text-black font-bold rounded-full transition-transform hover:scale-105 active:scale-95">
                <a href="/DelinB.pdf" download className="relative z-10 flex items-center gap-2">Download CV <Download size={20} /></a>
              </button>

              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item, idx) => (
                  <a key={idx} href={item.href} target="_blank" className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-[#B9FF66] hover:text-black transition-all">
                    <item.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:col-span-5 relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 p-8 md:p-10 rounded-[40px] overflow-hidden min-h-[500px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight mb-1">{SLIDES[currentSlide].title}</h3>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute h-full w-full rounded-full bg-[#B9FF66] opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B9FF66]"></span>
                        </span>
                        {SLIDES[currentSlide].subtitle}
                      </div>
                    </div>
                    <div className="h-14 w-14 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
                      {SLIDES[currentSlide].icon}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {SLIDES[currentSlide].items.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center justify-between p-5 rounded-[24px] bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.07] transition-all group/item">
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-black/40 text-slate-400 group-hover/item:text-[#B9FF66] transition-colors">{item.icon}</div>
                          <span className="text-sm font-medium text-slate-300">{item.label}</span>
                        </div>
                        <span className="text-sm font-mono text-[#B9FF66] font-semibold">{item.val}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 tracking-[0.2em]">
                 <div className="flex items-center gap-4"><span>EST. 2024</span><span className="w-[1px] h-3 bg-white/10"></span><span>SYSTEM_v4</span></div>
                 <div className="flex gap-1.5">
                   {SLIDES.map((_, idx) => (
                     <div key={idx} className={`h-1 rounded-full transition-all duration-700 ${idx === currentSlide ? 'w-8 bg-[#B9FF66]' : 'w-2 bg-white/10'}`} />
                   ))}
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