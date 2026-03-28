import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code2, MessageSquare, Plus } from "lucide-react";

const Navbarnew = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  // --- Mouse tilt ---
  const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = navRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-y * 0.05);
    rotateY.set(x * 0.02);
  };

  const navItems = [
    { id: "home", icon: <Home size={18} />, label: "Index" },
    { id: "about", icon: <User size={18} />, label: "Profile" },
    { id: "stack", icon: <Code2 size={18} />, label: "Engine" },
    { id: "projects", icon: <Briefcase size={18} />, label: "Vault" },
    { id: "contact", icon: <MessageSquare size={18} />, label: "Signal" },
  ];

  // ✅ Smooth scroll with offset
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ✅ Detect scroll position (active section)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      for (let item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <nav className="fixed top-0 left-0 w-full z-[100] hidden md:flex items-center justify-center p-8 pointer-events-none">
        <motion.div
          ref={navRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { rotateX.set(0); rotateY.set(0); }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className={`pointer-events-auto flex items-center gap-2 p-2 rounded-[28px] border transition-all duration-700
            ${isScrolled 
              ? "bg-[#0A0A0A]/60 backdrop-blur-3xl border-white/10 scale-95" 
              : "bg-white/5 backdrop-blur-md border-white/5"}
          `}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-6 py-3 rounded-[20px] text-[10px] font-bold uppercase tracking-wide flex items-center gap-2
                ${active === item.id ? "text-black" : "text-white/50 hover:text-white"}
              `}
            >
              {active === item.id && (
                <motion.div
                  layoutId="desktop-pill"
                  className="absolute inset-0 bg-[#B9FF66] rounded-[20px]"
                />
              )}

              <span className="relative z-10 flex items-center gap-2">
                {item.icon}
                {item.label}
              </span>
            </button>
          ))}
        </motion.div>
      </nav>

      {/* ================= MOBILE ================= */}
      <div className="fixed bottom-6 left-0 w-full z-[100] px-4 md:hidden">
        <motion.div 
          layout
          className="mx-auto max-w-sm bg-[#0A0A0A]/90 backdrop-blur-3xl border border-white/10 rounded-[30px] p-2 flex items-center shadow-xl"
        >
          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative flex-1 flex flex-col items-center justify-center py-3"
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="mobile-pill"
                      className="absolute inset-0 bg-white/5 rounded-[20px]"
                    />
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{ 
                    y: isActive ? -3 : 0,
                    color: isActive ? "#B9FF66" : "#64748b"
                  }}
                  className="z-10"
                >
                  {item.icon}
                </motion.div>

                {isActive && (
                  <motion.div 
                    layoutId="dot"
                    className="absolute bottom-1 w-1 h-1 bg-[#B9FF66] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Navbarnew;