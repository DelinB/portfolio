

import {  useRef, useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dazele from "../assets/dazele.png";
import { getTranslation } from './i18n';import TechStackSlider from './section/TechStackSlider';
import AboutSection from './section/AboutSection';
import HeroSection from './section/HeroSection';
import ProjectSection from './section/ProjectSection';
import SkillsSection from './section/SkillsSection';
import ContactSection from './section/ContactSection';
import Navbarnew from './section/Navbarnew';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio({ lang, setLang }) {
  const [activeCard, setActiveCard] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const component = useRef();
  const marqueeRef = useRef(null);
  const [index, setIndex] = useState(0);
  const t = getTranslation(lang);

  const skills = [
    { name: "React.js", img: dazele },
    { name: "TypeScript", img: dazele },
    { name: "Redux Toolkit", img: dazele },
    { name: "RTK Query", img: dazele },
    { name: "Tailwind CSS", img: dazele },
    { name: "Node.js", img: dazele },
    { name: "REST APIs", img: dazele },
    { name: "WebSockets", img: dazele },
    { name: "MongoDB", img: dazele },
    { name: "Vite", img: dazele },
    { name: "GSAP", img: dazele },
    { name: "Framer Motion", img: dazele }
  ];

  const skillGroups = [
    { name: "Frontend", items: ["React 19", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "GSAP"] },
    { name: "Backend & ML", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "TensorFlow.js", "REST APIs"] },
    { name: "Tools", items: ["Vite", "Docker", "AWS", "Git", "Framer Motion", "WebSockets"] }
  ];

  const taglines = t.hero.taglines || [
    "SCALABLE ARCHITECTURES",
    "PRODUCTION-GRADE REACT",
    "AI/ML INTEGRATIONS",
    "MODULAR DESIGN SYSTEMS"
  ];

  return (
    <div ref={component} className="font-['Space_Grotesk'] bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden ">
<Navbarnew/>
     <section id="home"><HeroSection /></section>
  <section id="about" className="scroll-mt-[10px]">
    <AboutSection />
  </section>
{/*  */}
<section id="stack">  <SkillsSection /></section>
<section className='!scroll-mt-[120px]' id="projects">
  <ProjectSection /></section>

<section id="contact"><ContactSection /></section>
   
     
    </div>
  );
}