// import { useParams, Link } from "react-router-dom";
// import { useEffect } from "react";
// import { ArrowLeft } from "lucide-react";

// // Mock Data - In a real app, move this to a separate file like /data/caseStudiesData.js
// const caseStudiesData = {
//   "entrepreneur-branding": {
//     title: "Entrepreneur Personal Branding",
//     client: "Local Tech Founder",
//     challenge: "The client had zero video presence and struggled to convert LinkedIn connections into leads.",
//     solution: "We implemented a 'Video First' strategy, producing 12 high-authority clips and managing daily community engagement.",
//     result: "Increased profile visibility by 300% and secured 4 high-ticket consulting clients in 3 months.",
//   },
//   "podcast-production-expert": {
//     title: "Expert Podcast Launch",
//     client: "Business Consultant",
//     challenge: "Struggled with technical barriers and audio quality, preventing them from launching their show.",
//     solution: "End-to-end production including professional recording, sound design, and viral 'short-form' video clips.",
//     result: "Ranked in the Top 50 Business Podcasts locally and generated 10k+ cross-platform views.",
//   },
//   "local-business-marketing": {
//     title: "Digital Growth for Local Retail",
//     client: "Kanyakumari Fashion Hub",
//     challenge: "Low foot traffic and poor engagement on Facebook and Instagram.",
//     solution: "A mix of targeted meta ads and cinematic product reels focusing on the local culture.",
//     result: "50% increase in store walk-ins and a 4.5x Return on Ad Spend (ROAS).",
//   }
// };

// export default function CaseStudyDetails() {
//   const { slug } = useParams();
//   const data = caseStudiesData[slug];

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   if (!data) return <div className="py-20 text-center font-bold">Case Study Not Found</div>;

//   return (
//     <main className="min-h-screen font-['Space_Grotesk']  py-16  px-6 lg:px-[100px]  max-w-[1440px] mx-auto">
//       <Link to="/" className="flex items-center gap-2 mb-10 font-bold hover:translate-x-[-5px] transition-transform">
//          <ArrowLeft size={20} />  Back to Home   

//       </Link>

//       <div className="space-y-12">
//         <header className="border-b-4 border-black pb-8">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">{data.title}</h1>
//           <span className="bg-[#B9FF66] px-4 py-1 rounded-md font-bold border border-black shadow-[2px_2px_0px_#000]">
//             Client: {data.client}
//           </span>
//         </header>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Challenge Section */}
//           <div className="p-8 bg-[#F3F3F3] rounded-[30px] border-2 border-black">
//             <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">The Challenge</h2>
//             <p className="text-lg leading-relaxed">{data.challenge}</p>
//           </div>

//           {/* Solution Section */}
//           <div className="p-8 bg-[#B9FF66] rounded-[30px] border-2 border-black">
//             <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">The Solution</h2>
//             <p className="text-lg leading-relaxed">{data.solution}</p>
//           </div>
//         </div>

//         {/* Big Result Box */}
//         <div className="bg-[#191A23] text-white p-10 md:p-16 rounded-[45px] text-center border-2 border-black shadow-[8px_8px_0px_#B9FF66]">
//           <h2 className="text-[#B9FF66] text-xl font-bold mb-4 uppercase">The Result</h2>
//           <p className="text-3xl md:text-5xl font-bold leading-tight italic">
//             "{data.result}"
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Target, Zap, BarChart3, Quote } from "lucide-react";

// Optimized Data Structure
const caseStudiesData = {
  "entrepreneur-branding": {
    title: "Entrepreneur Personal Branding",
    client: "Local Tech Founder",
    category: "Personal Brand Strategy",
    year: "2026",
    challenge: "The client had zero video presence and struggled to convert LinkedIn connections into leads.",
    solution: "We implemented a 'Video First' strategy, producing 12 high-authority clips and managing daily community engagement.",
    result: "Increased profile visibility by 300% and secured 4 high-ticket consulting clients in 3 months.",
    stats: ["300% Growth", "4 High-Ticket Leads", "Authority Status"]
  },
  "podcast-production-expert": {
    title: "Expert Podcast Launch",
    client: "Business Consultant",
    category: "Audio & Video Production",
    year: "2025",
    challenge: "Struggled with technical barriers and audio quality, preventing them from launching their show.",
    solution: "End-to-end production including professional recording, sound design, and viral 'short-form' video clips.",
    result: "Ranked in the Top 50 Business Podcasts locally and generated 10k+ cross-platform views.",
    stats: ["Top 50 Rank", "10k+ Views", "Zero Tech Hassle"]
  },
  "local-business-marketing": {
    title: "Digital Growth for Local Retail",
    client: "Kanyakumari Fashion Hub",
    category: "Performance Marketing",
    year: "2025",
    challenge: "Low foot traffic and poor engagement on Facebook and Instagram.",
    solution: "A mix of targeted meta ads and cinematic product reels focusing on the local culture.",
    result: "50% increase in store walk-ins and a 4.5x Return on Ad Spend (ROAS).",
    stats: ["50% Foot Traffic", "4.5x ROAS", "Local Authority"]
  }
};

export default function CaseStudyDetails() {
  const { slug } = useParams();
  const data = caseStudiesData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return (
    <div className="h-screen flex items-center justify-center font-['Space_Grotesk']">
      <h2 className="text-2xl font-bold uppercase tracking-tighter">Case Study Not Found</h2>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#191A23] font-['Space_Grotesk'] selection:bg-[#B9FF66]">
      
      {/* 1. MINIMAL NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 lg:px-[100px] py-4">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <Link to="/#case-studies" className="group flex items-center gap-2 font-bold text-xs uppercase tracking-[0.2em] transition-all">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Home
          </Link>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
             Success Story // {data.year}
          </div>
        </div>
      </nav>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 pt-16 md:pt-24 pb-24">
        
        {/* 2. DRAMATIC HERO HEADER */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 bg-[#B9FF66] border-2 border-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase mb-8 shadow-[4px_4px_0px_#000]">
            <Target size={14} /> {data.category}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-10 max-w-5xl">
            {data.title}
          </h1>
          <div className="flex flex-wrap gap-12 items-center border-t border-black/10 pt-10">
            <div>
              <span className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-2">Partner</span>
              <span className="text-xl font-bold">{data.client}</span>
            </div>
            <div className="h-10 w-[1px] bg-black/10 hidden md:block"></div>
            <div>
              <span className="block text-[10px] uppercase font-black text-gray-400 tracking-widest mb-2">Project Year</span>
              <span className="text-xl font-bold">{data.year}</span>
            </div>
          </div>
        </header>

        {/* 3. EDITORIAL GRID CONTENT */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-20">
            <section>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-black"></span> The Challenge
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-medium">
                {data.challenge}
              </p>
            </section>

            <section>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-[#B9FF66]"></span> The Strategy
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 font-medium">
                {data.solution}
              </p>
            </section>
          </div>

          {/* Sticky Results Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-[#191A23] rounded-[40px] p-10 text-white border-2 border-black shadow-[20px_20px_0px_#B9FF66]">
              <h4 className="text-[#B9FF66] font-black uppercase tracking-widest text-[10px] mb-10 border-b border-white/10 pb-6">
                Key Performance Indicators
              </h4>
              <div className="space-y-10">
                {data.stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B9FF66] group-hover:bg-[#B9FF66] group-hover:text-black transition-all">
                      {i === 0 ? <BarChart3 size={20}/> : i === 1 ? <Zap size={20}/> : <Target size={20}/>}
                    </div>
                    <span className="text-lg font-bold tracking-tight">{stat}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="block">
                <button className="w-full mt-12 bg-[#B9FF66] text-black py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:bg-white transition-all shadow-[0px_6px_0px_#77a33e] active:translate-y-1 active:shadow-none">
                  Start Your Growth <ArrowUpRight size={18}/>
                </button>
              </Link>
            </div>
            
            {/* Minimal testimonial snippet */}
            <div className="mt-8 bg-white border-2 border-black rounded-[30px] p-8 flex items-start gap-4 shadow-[8px_8px_0px_#000]">
              <Quote className="text-[#B9FF66] shrink-0" fill="currentColor" size={24} />
              <p className="text-sm font-bold italic leading-tight">
                "Their strategic approach completely redefined our brand visibility."
              </p>
            </div>
          </div>
        </div>

        {/* 4. FINAL IMPACT STATEMENT */}
        <section className="mt-32 pt-24 border-t-2 border-black">
          <div className="text-center max-w-4xl mx-auto">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12 block">The Bottom Line</span>
             <h2 className="text-4xl md:text-7xl font-bold tracking-tighter italic leading-tight">
               "{data.result}"
             </h2>
          </div>
        </section>
      </div>
    </main>
  );
}