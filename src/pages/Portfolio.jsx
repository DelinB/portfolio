

import { useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getTranslation } from './i18n'; import TechStackSlider from './section/TechStackSlider';
import AboutSection from './section/AboutSection';
import HeroSection from './section/HeroSection';
import ProjectSection from './section/ProjectSection';
import SkillsSection from './section/SkillsSection';
import ContactSection from './section/ContactSection';
import Navbarnew from './section/Navbarnew';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio({ lang, setLang }) {


  const component = useRef();

  const t = getTranslation(lang);





  return (
    <div ref={component} className="font-['Space_Grotesk'] bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden ">
      
      <Navbarnew />
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