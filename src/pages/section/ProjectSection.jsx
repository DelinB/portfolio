// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   ExternalLink, Github, ShoppingCart, 
//   Layout, ShieldCheck, Zap, BarChart3, 
//   FileJson, Smartphone 
// } from 'lucide-react';

// const ProjectSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
//   };

//   return (
//     <section className="relative  py-10 bg-[#050505] text-white overflow-hidden">
//       {/* Background Accent */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto px-6">
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
//             SELECTED <span className="text-slate-500 italic">WORKS</span>
//           </h2>
//           <div className="h-1 w-20 bg-[#B9FF66]" />
//         </motion.div>

//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-12 gap-6"
//         >
//           {/* PROJECT 1: Multi-Vendor Dashboard (Large Feature Card) */}
//           <motion.div 
//             variants={itemVariants}
//             className="md:col-span-8 group relative bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden hover:border-[#B9FF66]/30 transition-colors"
//           >
//             <div className="relative z-10 flex flex-col h-full">
//               <div className="flex justify-between items-start mb-8">
//                 <div className="p-3 bg-[#B9FF66]/10 rounded-2xl">
//                   <Layout className="text-[#B9FF66]" size={28} />
//                 </div>
//                 <div className="flex gap-3">
//                   <span className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full bg-white/5">React</span>
//                   <span className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full bg-white/5">RTK Query</span>
//                 </div>
//               </div>

//               <h3 className="text-3xl font-bold mb-4">Multi-Vendor eCommerce Admin </h3>
//               <p className="text-slate-400 max-w-xl mb-8 font-light leading-relaxed">
//                 Developed a CMS-style dashboard managing vendors, products, and automated PDF invoice generation[cite: 44, 50]. 
//                 Implemented role-based access control and high-performance server-side pagination[cite: 45, 48].
//               </p>

//               <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
//                   <ShieldCheck size={16} className="text-[#B9FF66] mb-2" />
//                   <p className="text-[10px] text-slate-500 uppercase">Auth</p>
//                   <p className="text-xs font-bold">Role-Based [cite: 45]</p>
//                 </div>
//                 <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
//                   <Zap size={16} className="text-[#B9FF66] mb-2" />
//                   <p className="text-[10px] text-slate-500 uppercase">Speed</p>
//                   <p className="text-xs font-bold">Lazy Loaded [cite: 51]</p>
//                 </div>
//               </div>
//             </div>
            
//             {/* Visual Decoration */}
//             <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#B9FF66]/5 blur-3xl rounded-full group-hover:bg-[#B9FF66]/10 transition-colors" />
//           </motion.div>

//           {/* PROJECT 2: Customer eCommerce (Vertical Card) */}
//           <motion.div 
//             variants={itemVariants}
//             className="md:col-span-4 group bg-gradient-to-b from-[#B9FF66]/10 to-transparent border border-white/10 rounded-[32px] p-8 flex flex-col"
//           >
//             <div className="p-3 bg-white text-black w-fit rounded-2xl mb-8">
//               <ShoppingCart size={24} />
//             </div>
//             <h3 className="text-2xl font-bold mb-4">Customer eCommerce [cite: 52]</h3>
//             <ul className="space-y-4 mb-8">
//               <li className="flex items-center gap-3 text-sm text-slate-300">
//                 <div className="h-1.5 w-1.5 rounded-full bg-[#B9FF66]" />
//                 Razorpay Integration 
//               </li>
//               <li className="flex items-center gap-3 text-sm text-slate-300">
//                 <div className="h-1.5 w-1.5 rounded-full bg-[#B9FF66]" />
//                 Custom SEO Hook [cite: 59]
//               </li>
//               <li className="flex items-center gap-3 text-sm text-slate-300">
//                 <div className="h-1.5 w-1.5 rounded-full bg-[#B9FF66]" />
//                 Dynamic Product Search [cite: 54]
//               </li>
//             </ul>
//             <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
//               <span className="text-[10px] font-mono text-[#B9FF66]">LIVE PROJECT</span>
//               <button className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform">
//                 <ExternalLink size={18} />
//               </button>
//             </div>
//           </motion.div>

//           {/* TECH STATS MINI-CARDS (2026 Detail) */}
//           <motion.div variants={itemVariants} className="md:col-span-3 p-8 bg-white/5 border border-white/10 rounded-[32px] flex flex-col justify-center items-center text-center">
//              <BarChart3 className="text-slate-500 mb-4" size={32} />
//              <p className="text-2xl font-bold">0.00s</p>
//              <p className="text-[10px] uppercase tracking-widest text-slate-500">Target Latency </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="md:col-span-9 p-8 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-between overflow-hidden relative">
//              <div className="relative z-10">
//                <h4 className="text-xl font-bold mb-2">Hospital Admin Panel [cite: 34]</h4>
//                <p className="text-sm text-slate-400">Developed at Spangless Infotech with server-side pagination[cite: 31, 35].</p>
//              </div>
//              <FileJson size={80} className="absolute -right-4 text-white/5 rotate-12" />
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ProjectSection;


import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, Github, ShoppingCart, 
  Layout, ShieldCheck, Zap, BarChart3, 
  FileJson, Smartphone, Database, Globe,
  Activity
} from 'lucide-react';

const ProjectSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative py-10 bg-[#050505] text-white overflow-hidden scroll-mt-[120px]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#B9FF66]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#B9FF66]" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#B9FF66] uppercase">Portfolio v4</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
            FEATURED <span className="text-slate-600 italic">SYSTEMS</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* 1. Multi-Vendor eCommerce Admin (The Flagship) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 group relative bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 overflow-hidden hover:border-[#B9FF66]/30 transition-all"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="p-4 bg-[#B9FF66]/10 rounded-2xl border border-[#B9FF66]/20">
                  <Layout className="text-[#B9FF66]" size={32} />
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">Architecture</p>
                  <div className="flex gap-2">
                    {["RTK Query", "TypeScript"].map(tag => (
                      <span key={tag} className="text-[9px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">Multi-Vendor eCommerce Admin</h3>
              <p className="text-slate-400 max-w-2xl mb-10 text-lg font-light leading-relaxed">
                Engineered a CMS dashboard managing vendor ecosystems. Optimized data handling with <span className="text-white font-medium">server-side pagination</span> and automated PDF invoicing, ensuring reliability for high-volume transactions.
              </p>

              <div className="mt-auto flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3">
                  <ShieldCheck size={16} className="text-[#B9FF66]" />
                  <span className="text-xs font-bold uppercase tracking-widest">RBAC Implemented</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-black/40 border border-white/5 flex items-center gap-3">
                  <Database size={16} className="text-blue-400" />
                  <span className="text-xs font-bold uppercase tracking-widest">State Caching</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B9FF66]/5 blur-3xl rounded-full group-hover:bg-[#B9FF66]/10 transition-colors" />
          </motion.div>

          {/* 2. Customer eCommerce Platform */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 group bg-gradient-to-br from-[#0A0A0A] to-[#111] border border-white/10 rounded-[40px] p-8 flex flex-col hover:border-blue-500/30 transition-all"
          >
            <div className="p-4 bg-white text-black w-fit rounded-2xl mb-8 group-hover:rotate-12 transition-transform">
              <ShoppingCart size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Customer Storefront</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
              High-performance platform with Razorpay integration and a custom SEO hook system.
            </p>
            <ul className="space-y-4 mb-10">
              {["Secure Checkout", "Persistent Cart", "Dynamic Filters"].map(item => (
                <li key={item} className="flex items-center gap-3 text-xs font-mono text-slate-300">
                  <Zap size={12} className="text-[#B9FF66]" /> {item}
                </li>
              ))}
            </ul>
            <button className="mt-auto w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all group/btn">
              <span className="text-xs font-bold uppercase tracking-widest">Live View</span>
              <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* 3. Performance Metric (Mini Card) */}
          <motion.div variants={itemVariants} className="md:col-span-3 p-8 bg-white/5 border border-white/10 rounded-[40px] flex flex-col justify-center items-center text-center group">
              <div className="relative mb-6">
                <BarChart3 className="text-slate-700 group-hover:text-[#B9FF66] transition-colors" size={48} />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 h-3 w-3 bg-[#B9FF66] rounded-full blur-[2px]" 
                />
              </div>
              <p className="text-4xl font-black mb-1 tracking-tighter italic">0.00<span className="text-lg font-light text-slate-500">s</span></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Latency Target</p>
          </motion.div>

          {/* 4. Hospital Admin Panel (Wide Detail Card) */}
          <motion.div 
            variants={itemVariants} 
            className="md:col-span-6 p-8 bg-white/5 border border-white/10 rounded-[40px] flex items-center justify-between overflow-hidden relative group"
          >
             <div className="relative z-10 space-y-4">
               <div className="flex items-center gap-2">
                 <Activity size={16} className="text-red-500" />
                 <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Healthcare Infrastructure</span>
               </div>
               <h4 className="text-2xl font-bold">Hospital Admin Panel</h4>
               <p className="text-sm text-slate-400 max-w-md font-light">
                 Developed at Spangless Infotech. Implemented robust data tables and server-side logic for patient records.
               </p>
             </div>
             <FileJson size={120} className="absolute -right-8 text-white/[0.02] group-hover:text-white/[0.05] transition-all -rotate-12" />
          </motion.div>

          {/* 5. API Logic & SEO (Mini Card) */}
          <motion.div variants={itemVariants} className="md:col-span-3 p-8 bg-gradient-to-t from-[#B9FF66]/10 to-white/5 border border-white/10 rounded-[40px] flex flex-col items-center justify-center text-center">
             <Globe className="text-[#B9FF66] mb-4" size={32} />
             <p className="text-xl font-bold mb-1">SEO Engine</p>
             <p className="text-[10px] text-slate-500 uppercase font-mono">Custom React Hooks</p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;