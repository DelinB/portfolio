import React from 'react';
import { motion } from 'framer-motion';

const DelinLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-transparent group">
      {/* Container with responsive sizing */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[500px]"
      >
        <svg 
          viewBox="0 0 600 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="silk" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#AF9461" />
              <stop offset="50%" stop-color="#E9D7B3" />
              <stop offset="100%" stop-color="#8C7345" />
            </linearGradient>

            <mask id="revealMask">
              <rect x="0" y="0" width="600" height="200" fill="black" />
              <motion.rect 
                initial={{ width: 0 }}
                whileInView={{ width: 400 }}
                transition={{ delay: 0.5, duration: 2.5, ease: [0.65, 0, 0.35, 1] }}
                x="100" y="50" height="100" fill="white" 
              />
            </mask>
          </defs>

          {/* Horizon Line with staggered drawing */}
          <motion.line 
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 2, ease: "easeInOut" }}
            x1="150" y1="135" x2="450" y2="135" 
            stroke="url(#silk)" 
            strokeWidth="0.5" 
          />

          {/* Main Kinetic Typography */}
          <text 
            x="53%" y="110" 
            textAnchor="middle" 
            mask="url(#revealMask)"
            className="text-[65px] tracking-[35px] fill-[url(#silk)] font-serif"
            style={{ fontFamily: "'Tenor Sans', sans-serif" }}
          >
            DELIN
          </text>

          {/* Subtext Detail */}
          <motion.text 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            transition={{ delay: 2.8, duration: 1.5 }}
            x="50%" y="160" 
            textAnchor="middle"
            className="text-[10px] tracking-[15px] fill-[#AF9461] font-sans uppercase"
          >
            Creative Engineer
          </motion.text>
        </svg>

        {/* Hover interaction: Subtle glow expansion */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default DelinLogo;