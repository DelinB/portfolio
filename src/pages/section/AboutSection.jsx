
import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Coffee, Code, Sparkles, Zap } from 'lucide-react';
import TechStackSlider from './TechStackSlider';

const AboutSection = () => {
  return (
    <>
    <section id="about" className="relative py-20 md:py-32 bg-[#050505] text-white overflow-x-hidden scroll-mt-20">      {/* Background Typography Watermark */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        DELIN
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: THE STORY */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B9FF66]/10 border border-[#B9FF66]/20 text-[#B9FF66] text-xs font-mono"
            >
              <User size={14} />
              <span>THE ENGINEER BEHIND THE CODE</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]"
            >
              Bridging the gap between <br />
              <span className="text-slate-500">Complex Logic</span> and <br />
              <span className="italic">Human Experience.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-400 font-light max-w-2xl"
            >
              <p>
                Based in <span className="text-white font-medium">Tamil Nadu, India</span>, I am a Frontend Engineer driven by the challenge of building 
                <span className="text-white font-medium"> production-grade applications</span> that don't just work—they perform.
              </p>
              <p>
                My journey began as a trainee at <span className="text-[#B9FF66] font-mono">Spangless Infotech</span>, where I mastered the foundations of React and REST APIs while building hospital management systems. Today, at <span className="text-[#B9FF66] font-mono">Dhina Technologies</span>, I architect scalable interfaces and real-time systems using Redux Toolkit and WebSockets.
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-8 pt-6">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Experience</p>
                <p className="text-2xl font-bold">1+ Years </p>
              </div>
              <div className="h-12 w-px bg-white/10 hidden sm:block" />
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Education</p>
                <p className="text-2xl font-bold italic">B.E. ECE </p>
              </div>
            </div>
          </div>

          {/* RIGHT: THE VISUAL BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
              <div className="absolute inset-0 bg-[#0A0A0A] rounded-[38px]" />
              
              {/* Decorative "Status" UI inside the box */}
              <div className="relative h-full w-full p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-[#B9FF66]">LOCATION_SYNC</p>
                    <p className="text-sm flex items-center gap-2"><MapPin size={12}/> India</p>
                  </div>
                  <Sparkles size={20} className="text-slate-600" />
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={16} className="text-[#B9FF66]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Philosophy</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "Clean code is not just written; it's engineered for scale and speed." 
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-1 p-4 rounded-2xl border border-white/5 bg-white/5 text-center">
                      <p className="text-xs text-slate-500 mb-1">Status</p>
                      <p className="text-[10px] font-bold text-[#B9FF66]">ACTIVE_DEV</p>
                    </div>
                    <div className="flex-1 p-4 rounded-2xl border border-white/5 bg-white/5 text-center">
                      <p className="text-xs text-slate-500 mb-1">Coffee</p>
                      <p className="text-[10px] font-bold">RECURSIVE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Label */}
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 px-6 py-3 bg-white text-black rounded-full font-black text-xs rotate-6"
            >
              FRONTEND_ENGINEER
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
       <TechStackSlider />

    </>

    
  );
};

export default AboutSection;