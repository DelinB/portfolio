// import { useState, useEffect } from "react";
// import { Menu, X, ArrowUpRight } from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import resume from "../../public/DelinB.pdf"
// import { getTranslation } from "../pages/i18n";
// import DelinLogo from "../assets/DelinLogo";
// const navItems = [
//   { name: "About Us", id: "about" },
//   { name: "Projects", id: "projects" },
//   { name: "Skills", id: "skills" },
//   { name: "Blog", path: "/blog" },
//   // { name: "Gallery", path: "/gallery" },
// ];

// export default function Navbar({lang, setLang}) {

//   const t = getTranslation(lang);
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle scroll effect for glassmorphism
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleNavClick = (item) => {
//     setOpen(false);
//     if (item.path) {
//       navigate(item.path);
//       return;
//     }

//     if (item.id) {
//       if (location.pathname !== "/") {
//         navigate("/");
//         setTimeout(() => {
//           document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
//         }, 300);
//       } else {
//         document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
    
//     <nav 
//       className={`fixed top-0 w-full z-[100] transition-all duration-500 font-['Space_Grotesk']  ${
//         scrolled 
//           ? " bg-white/80 backdrop-blur-lg border-b border-black/5 shadow-sm" 
//           : " bg-white/80 backdrop-blur-lg border-b border-black/5 shadow-sm"
//       }`}
//     >
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex items-center justify-between">
          
//           {/* --- LOGO --- */}
//           <div
//             onClick={() => navigate("/")}
//             className="group cursor-pointer text-2xl lg:text-[28px] font-black flex items-center gap-2 tracking-tighter"
//           >
//           <DelinLogo/>
//           </div>

//           {/* --- DESKTOP NAV --- */}
//           <div className="hidden lg:flex items-center gap-10">
//             <div className="flex items-center gap-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item)}
//                   className="relative text-[18px] font-medium transition-colors hover:text-black group py-1"
//                 >
//                   {item.name}
//                   {/* Underline Animation */}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B9FF66] transition-all duration-300 group-hover:w-full" />
//                 </button>
//               ))}
//             </div>
// <a href={resume} download="DelinB.pdf">
//   <button className="flex items-center gap-2 px-7 py-2 bg-white border-2 border-black rounded-2xl text-[18px] font-bold hover:bg-[#B9FF66] transition-all hover:shadow-[4px_4px_0px_#000] active:scale-95">
//     Download Resume <ArrowUpRight size={18} />
//   </button>
// </a>
// <div className="flex gap-2">
//   <button
//     onClick={() => setLang("en")}
//     className={`px-3 py-1 border-2 border-black rounded-lg font-bold ${
//       lang === "en" ? "bg-[#B9FF66]" : "bg-white"
//     }`}
//   >
//     EN
//   </button>

//   <button
//     onClick={() => setLang("ar")}
//     className={`px-3 py-1 border-2 border-black rounded-lg font-bold ${
//       lang === "ar" ? "bg-[#B9FF66]" : "bg-white"
//     }`}
//   >
//     AR
//   </button>
// </div>
//           </div>

//           {/* --- MOBILE TOGGLE --- */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setOpen(!open)}
//               className={`p-2 rounded-xl transition-all ${open ? 'bg-black text-white' : 'bg-[#B9FF66] text-black'}`}
//             >
//               {open ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- MOBILE OVERLAY MENU --- */}
//       <div 
//         className={`lg:hidden fixed inset-0 top-[80px] bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
//           open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
//         }`}
//       >
//         <div className="flex flex-col p-8 gap-8 bg-white/95">
//           {navItems.map((item, idx) => (
//             <button
//               key={item.name}
//               onClick={() => handleNavClick(item)}
//               style={{ transitionDelay: `${idx * 50}ms` }}
//               className={`text-4xl font-black text-left tracking-tighter transition-all ${
//                 open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//               }`}
//             >
//               {item.name}
//             </button>
//           ))}
          
//           <hr className="border-black/10" />
          
//           <button className="w-full px-8 py-5 bg-[#191A23] text-[#B9FF66] rounded-2xl font-black text-xl flex items-center justify-between group shadow-xl">
//             Download Resume
//             <div className="bg-[#B9FF66] text-black p-1 rounded-full group-hover:rotate-45 transition-transform">
//               <ArrowUpRight size={24} />
//             </div>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    </div>
  )
}

export default Navbar
