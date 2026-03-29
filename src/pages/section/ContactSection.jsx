import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Mail, Phone, MapPin, 
  MessageSquare, User, Sparkles, Loader2, 
  CheckCircle2, AlertCircle, ChevronDown
} from 'lucide-react';

const ContactSection = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);
    setResult("INITIALIZING_TRANSMISSION...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("from_name", "Portfolio Contact");
    formData.append("subject", "New Portfolio Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setResult("Transmission Received Successfully");
        event.target.reset();
      } else {
        setStatus("error");
        setResult(data.message.toUpperCase());
      }
    } catch (error) {
      setStatus("error");
      setResult("NETWORK_CONNECTION_FAILURE");
    } finally {
      setLoading(false);
      setTimeout(() => { setStatus(null); setResult(""); }, 4000);
    }
  };

  // Reusable Input Style to ensure 100% consistency
  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 outline-none focus:border-[#B9FF66]/50 focus:bg-white/10 transition-all text-sm placeholder:text-white/10 text-white/80";
const contactItems = [
  {
    icon: Mail,
    label: "Channel",
    value: "delin.b.23@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=delin.b.23@gmail.com",
    external: true
  },
  {
    icon: Phone,
    label: "Secure_Line",
    value: "+91 7200240311",
    href: "https://wa.me/917200240311",
    external: true
  },
  {
    icon: MapPin,
    label: "Origin",
    value: "Tamil Nadu, India",
    href: "https://www.google.com/maps?q=Tamil+Nadu,+India",
    external: true
  }
];
  return (
    <section className="relative py-20 md:py-32 bg-[#050505] text-white overflow-hidden scroll-mt-20 font-sans">
      
      {/* MODAL SUCCESS/ERROR */}
      <AnimatePresence>
        {status && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 pointer-events-none">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="relative w-full max-w-sm pointer-events-auto rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl shadow-[#B9FF66]/10 text-center"
            >
              <div className={`mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-2xl ${status === 'success' ? 'bg-[#B9FF66]/10 text-[#B9FF66]' : 'bg-red-500/10 text-red-500'}`}>
                {status === 'success' ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">
                {status === 'success' ? 'Transmission Sent' : 'Link Failed'}
              </h3>
              <p className="font-mono text-[10px] tracking-widest text-white/40 uppercase mb-6">{result}</p>
              <button onClick={() => { setStatus(null); setResult(""); }} className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] transition-all">Dismiss</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#B9FF66]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* INFO SIDE */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-12 order-1 lg:order-2">
            <div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none uppercase italic">
                GET IN <br /><span className="text-white/10 not-italic">TOUCH_</span>
              </h2>
              <p className="text-white/30 text-base md:text-lg font-light leading-relaxed max-w-md">
                Ready to deploy high-performance frontend architectures? Initialize a connection below.
              </p>
            </div>
        <div className="space-y-6">
  {contactItems.map((item, i) => (
    <a
      key={i}
      href={item.href}
      target={item.external ? "_blank" : "_self"}
      rel={item.external ? "noopener noreferrer" : ""}
      className="group flex items-center gap-5 transition-all duration-300 hover:translate-x-1 active:scale-[0.98]"
    >
      {/* Icon */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 
        group-hover:border-[#B9FF66]/40 
        group-hover:bg-[#B9FF66]/10 
        transition-all duration-500 shadow-sm group-hover:shadow-[#B9FF66]/20"
      >
        <item.icon size={22} className="text-[#B9FF66]" />
      </div>

      {/* Text */}
      <div>
        <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
          {item.label}
        </p>

        <p className="text-lg font-bold tracking-tight 
          group-hover:text-[#B9FF66] 
          transition-colors duration-300"
        >
          {item.value}
        </p>
      </div>
    </a>
  ))}
</div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative p-[1px] rounded-[32px] md:rounded-[40px] bg-gradient-to-b from-white/10 to-transparent">
              <div className="relative bg-[#080808] p-6 md:p-12 rounded-[31px] md:rounded-[39px]">
                <form onSubmit={onSubmit} className="space-y-6 md:space-y-8 relative z-10">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-mono text-white/30 uppercase flex items-center gap-2 group-focus-within:text-[#B9FF66] transition-colors">
                        <User size={12} /> Full Name
                      </label>
                      <input name="name" required type="text" placeholder="John Doe" className={inputClasses} />
                    </div>
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-mono text-white/30 uppercase flex items-center gap-2 group-focus-within:text-[#B9FF66] transition-colors">
                        <Mail size={12} /> Work Email
                      </label>
                      <input name="email" required type="email" placeholder="john@company.com" className={inputClasses} />
                    </div>
                  </div>

                  {/* CUSTOMIZED DROPDOWN */}
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-white/30 uppercase flex items-center gap-2 group-focus-within:text-[#B9FF66] transition-colors">
                      <Sparkles size={12} /> Project_Type
                    </label>
                    <div className="relative">
                      <select 
                        name="subject_type" 
                        className={`${inputClasses} appearance-none cursor-pointer pr-12`}
                      >
                        <option className="bg-[#0A0A0A]">Frontend Architecture</option>
                        <option className="bg-[#0A0A0A]">System Consultation</option>
                        <option className="bg-[#0A0A0A]">Hiring Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-focus-within:text-[#B9FF66] transition-colors">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 group">
                    <label className="text-[10px] font-mono text-white/30 uppercase flex items-center gap-2 group-focus-within:text-[#B9FF66] transition-colors">
                      <MessageSquare size={12} /> Payload
                    </label>
                    <textarea 
                      name="message" required rows={4} placeholder="Brief your project objectives..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button 
                    disabled={loading}
                    className="w-full group relative py-5 bg-[#B9FF66] text-black font-black rounded-xl md:rounded-2xl overflow-hidden transition-all active:scale-[0.98] disabled:opacity-50"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-[11px]">
                      {loading ? "Encrypting..." : "Initialize Transmission"} <Send size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </button>
                </form>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B9FF66] to-transparent opacity-10" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;