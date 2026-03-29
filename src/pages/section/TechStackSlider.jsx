import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiRedux, SiNodedotjs, SiFramer, SiPostgresql, 
  SiHtml5   
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

const TechStackSlider = () => {
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs />, color: "hover:text-white" },
    { name: "React", icon: <SiReact />, color: "hover:text-[#61DAFB]" },
    { name: "TypeScript", icon: <SiTypescript />, color: "hover:text-[#3178C6]" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "hover:text-[#06B6D4]" },
    { name: "Redux", icon: <SiRedux />, color: "hover:text-[#764ABC]" },
      // HTML + CSS
  { name: "HTML5", icon: <SiHtml5 />, color: "hover:text-[#E34F26]" },
  { name: "CSS3", icon: <FaCss3Alt    />, color: "hover:text-[#1572B6]" },

  // Zustand
  // { name: "Zustand", icon: <SiZustand />, color: "hover:text-[#443E38]" }
    
  ];

  // Duplicate the array to create the seamless loop effect
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-12 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="relative flex items-center">
        {/* Left & Right Fades for "Infinite" look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24"
          animate={{ x: [0, -1920] }} // Adjust based on content width
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 group cursor-default"
            >
              <span className={`text-3xl md:text-4xl text-slate-600 transition-all duration-500 ${tech.color} group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(185,255,102,0.3)]`}>
                {tech.icon}
              </span>
              <span className="text-sm md:text-lg font-mono font-bold tracking-[0.2em] text-slate-700 group-hover:text-white transition-colors duration-500">
                {tech.name.toUpperCase()}
              </span>
              {/* Decorative separator dot */}
              <div className="ml-12 md:ml-24 h-1 w-1 rounded-full bg-white/10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSlider;