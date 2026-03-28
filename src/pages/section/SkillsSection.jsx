import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Globe, Cpu, 
  Layers, Database, Box, CheckCircle2 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Core",
      icon: <Code2 className="text-[#B9FF66]" />,
      items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5/CSS3"]
    },
    {
      category: "State & Data",
      icon: <Database className="text-blue-400" />,
      items: ["Redux Toolkit", "RTK Query", "Context API", "WebSocket"]
    },
    {
      category: "Architecture",
      icon: <Layers className="text-purple-400" />,
      items: ["Modular Design", "REST API Integration", "Vite/Webpack", "CI/CD"]
    },
    {
      category: "Performance & UX",
      icon: <Cpu className="text-orange-400" />,
      items: ["Lazy Loading", "Code Splitting", "WCAG Accessibility", "UX Principles"]
    }
  ];

  return (
    <section className="relative pt-20 pb-10 bg-[#050505] text-white overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic opacity-20 absolute -top-10 left-0 select-none">
              Capabilities
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight relative z-10">
              TECHNICAL <span className="text-[#B9FF66]">ARSENAL</span>
            </h3>
          </motion.div>
          
          <div className="flex items-center gap-4 text-slate-500 font-mono text-xs border-l border-white/10 pl-6">
            <Terminal size={14} />
            <span>SYSTEM_READY: 2026_STABLE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-[24px] group-hover:from-[#B9FF66]/20 transition-all duration-500" />
              
              <div className="relative bg-[#0A0A0A] border border-white/5 p-8 rounded-[24px] h-full overflow-hidden">
                {/* Background Icon Watermark */}
                <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  {React.cloneElement(skill.icon, { size: 120 })}
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-[#B9FF66]/50 transition-colors">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold tracking-tight">{skill.category}</h4>
                </div>

                <ul className="space-y-4 relative z-10">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                      <CheckCircle2 size={14} className="text-[#B9FF66] opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom "Skill Level" Ticker */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-sm flex flex-wrap justify-center md:justify-between items-center gap-8"
        >
          <div className="flex items-center gap-8 overflow-hidden whitespace-nowrap">
            {["STORYBOOK", "JEST", "VITEST", "LIGNTHOUSE", "POSTMAN", "GITLAB"].map((tool, i) => (
              <span key={i} className="text-[10px] font-mono tracking-[0.3em] text-slate-600 uppercase">
                {tool}
              </span>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#B9FF66] rounded-full text-black font-bold text-[10px] uppercase tracking-widest">
            <Globe size={12} className="animate-spin-slow" />
            Global Standards [cite: 15]
          </div>
        </motion.div> */}
      </div>
      <div className="mt-16 overflow-hidden py-4 border-y border-white/5 relative">
          <div className="flex animate-marquee whitespace-nowrap gap-12 text-slate-600 font-mono text-[10px] uppercase tracking-[0.3em]">
            <span>Problem Solving</span>
            <span>Scalable Architecture</span>
            <span>Performance Optimization</span>
            <span>UI/UX Implementation</span>
            <span>Agile Workflow</span>
            <span>Code Review</span>
            <span>Clean Code Architecture</span>
            {/* Duplicate for seamless loop */}
            <span>Problem Solving</span>
            <span>Scalable Architecture</span>
            <span>Performance Optimization</span>
            <span>UI/UX Implementation</span>
          </div>
        </div>
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;