import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Play, X, ArrowUpRight } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ["All", "Video", "Branding", "Social Media"];

  const works = [
    { 
        id: 1, 
        category: "Video", 
        title: "Authority Vlog", 
        img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Example URL
    },
    { id: 2, category: "Branding", title: "Identity Design", img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80" },
    { id: 3, category: "Social Media", title: "Insta Strategy", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
    { 
        id: 4, 
        category: "Video", 
        title: "Cinematic Reel", 
        img: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?auto=format&fit=crop&w=800&q=80",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
    },
    { id: 5, category: "Branding", title: "Logo Concept", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" },
    { id: 6, category: "Social Media", title: "Campaign Hub", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80" },
  ];

  const filteredWorks = filter === "All" ? works : works.filter(w => w.category === filter);

  return (
    <section className="py-10 md:py-24 px-6 max-w-[1240px] mx-auto min-h-screen font-['Space_Grotesk']">
      
      {/* HEADER & FILTER */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b-2 border-black pb-12">
        <div className="max-w-xl">
          <span className="bg-[#B9FF66] px-4 py-1.5 rounded-lg font-black uppercase text-[10px] tracking-widest border-2 border-black shadow-[3px_3px_0px_#000]">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-6">Case Gallery</h1>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl border-2 border-black font-bold text-sm transition-all shadow-[4px_4px_0px_#000] active:translate-y-1 active:shadow-none ${
                filter === cat ? "bg-black text-white" : "bg-white text-black hover:bg-[#B9FF66]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredWorks.map((work) => (
          <div 
            key={work.id}
            onClick={() => work.videoUrl && setSelectedVideo(work.videoUrl)}
            className="group relative bg-white border-2 border-black rounded-[40px] overflow-hidden shadow-[10px_10px_0px_#000] hover:shadow-[15px_15px_0px_#B9FF66] transition-all cursor-pointer"
          >
            {/* Image & Video Play Overlay */}
            <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-black">
              <img 
                src={work.img} 
                alt={work.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Show Play Icon if it's a video */}
              {work.category === "Video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 bg-[#B9FF66] border-2 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:scale-110 transition-transform">
                    <Play fill="black" size={24} />
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="p-8 flex justify-between items-center bg-white">
              <div>
                <p className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em] mb-1">{work.category}</p>
                <h3 className="text-2xl font-bold tracking-tight">{work.title}</h3>
              </div>
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-[#B9FF66] group-hover:bg-[#B9FF66] group-hover:text-black transition-colors">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="mt-32 relative p-12 md:p-20 bg-[#191A23] rounded-[60px] overflow-hidden text-center group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#B9FF66] rounded-full blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <h2 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-10 relative z-10">
          Want to see your brand <br/> <span className="text-[#B9FF66]">in this gallery?</span>
        </h2>
        <Link to="/contact" className="relative z-10 inline-flex items-center gap-3 bg-[#B9FF66] text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-colors shadow-[0px_8px_0px_#77a33e] active:translate-y-2 active:shadow-none">
          Start Project <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#B9FF66] transition-colors"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={40} />
          </button>
          
          <div 
            className="relative w-full max-w-[1000px] aspect-video border-4 border-black rounded-[20px] overflow-hidden shadow-[20px_20px_0px_#B9FF66]"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}