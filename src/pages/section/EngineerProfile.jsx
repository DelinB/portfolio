import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Box, BrainCircuit, CheckCircle2 } from 'lucide-react';

const ProfessionalProfile = () => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative py-12 md:py-32 px-4 md:px-6 bg-white overflow-hidden">
      {/* Background Glows - Adjusted for mobile performance */}
      <div className="absolute top-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#B9FF66]/15 blur-[80px] md:blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-300/15 blur-[80px] md:blur-[120px] rounded-full" />

      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="
            bg-white 
            border border-gray-100 
            shadow-[0_20px_50px_rgba(0,0,0,0.05)] 
            rounded-[32px] md:rounded-t-[80px] md:rounded-b-[32px] 
            px-6 py-12 md:px-16 lg:px-24 md:pt-20 md:pb-16 
            relative overflow-hidden
          "
        >
          {/* Top subtle gradient line */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
            
            {/* LEFT CONTENT */}
            <div className="space-y-6 md:space-y-8">
              <motion.div variants={item} className="inline-block px-3 py-1 rounded-md bg-[#B9FF66] text-black font-black text-[10px] tracking-[0.2em] uppercase">
                Engineer Profile
              </motion.div>

              <motion.h2 
                variants={item}
                className="text-gray-900 font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.95]"
              >
                Architecting <br />
                <span className="text-[#B9FF66]">Digital Speed</span>
              </motion.h2>

              <motion.p variants={item} className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                I specialize in building production-grade systems where{" "}
                <span className="text-gray-900 font-bold">Latency</span> isn't just a
                metric—it's the core focus.
              </motion.p>

              {/* Stats Grid - 2 cols on mobile too, but smaller padding */}
              <motion.div variants={item} className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-gray-50/50 border border-gray-100 p-4 md:p-6 rounded-2xl md:rounded-3xl hover:border-[#B9FF66] transition-colors group">
                  <Zap size={20} className="text-[#B9FF66] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-black text-gray-900">0.00s</div>
                  <div className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-widest font-bold">
                    Latency Target
                  </div>
                </div>

                <div className="bg-gray-50/50 border border-gray-200 p-4 md:p-6 rounded-2xl md:rounded-3xl hover:border-[#B9FF66] transition-colors group">
                  <Box size={20} className="text-[#B9FF66] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-black text-gray-900">Scale</div>
                  <div className="text-[9px] md:text-[10px] uppercase text-gray-400 tracking-widest font-bold">
                    Architecture
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT CONTENT - The Methodology "Pro" Card */}
            <motion.div 
              variants={item}
              className="bg-gray-900 p-8 md:p-12 rounded-[32px] md:rounded-[40px] text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BrainCircuit size={120} className="text-[#B9FF66]" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3 uppercase tracking-widest relative z-10">
                <BrainCircuit className="text-[#B9FF66]" size={20} /> Methodologies
              </h3>

              <ul className="space-y-4 md:space-y-6 relative z-10">
                {[
                  "Vertical Slice Architecture",
                  "Real-time Data via RTK Query",
                  "AI Workload Orchestration",
                  "Motion Design with Framer",
                ].map((text, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    className="flex gap-3 text-gray-400 font-medium group cursor-default"
                  >
                    <CheckCircle2 size={18} className="text-[#B9FF66] shrink-0 mt-0.5" />
                    <span className="group-hover:text-white transition-colors text-sm md:text-base leading-tight">
                      {text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;