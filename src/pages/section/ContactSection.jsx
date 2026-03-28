import React from 'react';
import { motion } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, 
  MessageSquare, User, Sparkles, ArrowRight 
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section  className="relative py-10 bg-[#050505] text-white overflow-hidden  scroll-mt-20 ">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B9FF66]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFO PANEL (3/12) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                GET IN <span className="text-slate-500 italic">TOUCH.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                Have a specialized project or a frontend architecture challenge? 
                Let’s engineer something exceptional together.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#B9FF66]/50 transition-colors">
                  <Mail size={24} className="text-[#B9FF66]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">delin.b.23@gmail.com</p> {/*  */}
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#B9FF66]/50 transition-colors">
                  <Phone size={24} className="text-[#B9FF66]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-medium">+91 7200240311</p> {/*  */}
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#B9FF66]/50 transition-colors">
                  <MapPin size={24} className="text-[#B9FF66]" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium">Tamil Nadu, India</p> {/*  */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: THE INTERACTIVE FORM (7/12) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative group p-[1px] rounded-[40px] bg-gradient-to-b from-white/20 to-transparent">
              <div className="relative bg-[#0A0A0A] p-8 md:p-12 rounded-[40px] overflow-hidden">
                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                        <User size={12} /> Full Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B9FF66]/50 transition-all text-sm placeholder:text-slate-700"
                      />
                    </div>
                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                        <Mail size={12} /> Work Email
                      </label>
                      <input 
                        type="email" 
                        placeholder="john@company.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B9FF66]/50 transition-all text-sm placeholder:text-slate-700"
                      />
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                      <Sparkles size={12} /> Subject
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B9FF66]/50 transition-all text-sm text-slate-400">
                      <option className="bg-[#0A0A0A]">Frontend Project</option>
                      <option className="bg-[#0A0A0A]">Architecture Consultation</option>
                      <option className="bg-[#0A0A0A]">Hiring Inquiry</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-2">
                      <MessageSquare size={12} /> Message
                    </label>
                    <textarea 
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[#B9FF66]/50 transition-all text-sm placeholder:text-slate-700 resize-none"
                    />
                  </div>

                  <button className="w-full group relative py-5 bg-[#B9FF66] text-black font-black rounded-2xl overflow-hidden transition-transform active:scale-[0.98]">
                    <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-tighter">
                      Initialize Transmission <Send size={18} />
                    </span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </button>
                </form>

                {/* Decorative Bottom Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B9FF66] to-transparent opacity-20" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;