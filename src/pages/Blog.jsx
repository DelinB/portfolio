import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowUpRight, Clock, User } from "lucide-react";
import { blogPosts } from "../data/blogData"; // Ensure this path matches your file structure

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Personal Branding", "Podcasting", "Video Marketing", "Digital Strategy"];

  // 1. Filtering Logic: Search + Category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 2. Identify the Featured Post for the Hero Section
  const featuredPost = blogPosts.find((p) => p.featured);

  return (
    <div className="font-['Space_Grotesk'] bg-white min-h-screen pb-20 overflow-x-hidden">
      
      {/* ================= HEADER & SEARCH ================= */}
      <section className="pt-12 md:pt-20  max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="bg-[#B9FF66] inline-block px-4 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_#000] mb-4 font-bold text-lg">
              Our Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              The Branding Blog
            </h1>
          </div>
          
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search articles..."
              className="w-full border-2 border-black rounded-xl px-12 py-4 focus:bg-[#F3F3F3] outline-none shadow-[4px_4px_0px_#000] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Category Filter Bar */}
        <div className="flex overflow-x-auto gap-3 pb-6 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full border-2 border-black font-bold transition-all ${
                activeCategory === cat ? "bg-[#191A23] text-white" : "bg-white hover:bg-[#B9FF66]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= FEATURED POST (Hero) ================= */}
      {/* Only show the featured hero if no search/filter is active */}
      {activeCategory === "All" && searchQuery === "" && featuredPost && (
        <section className=" max-w-[1240px] mx-auto mb-16">
          <Link to={`/blog/${featuredPost.id}`} className="group">
            <div className="grid lg:grid-cols-2 bg-[#F3F3F3] rounded-[30px] lg:rounded-[45px] border-2 border-black overflow-hidden shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#B9FF66] transition-all">
              <div className="h-64 lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="bg-[#B9FF66] border border-black px-3 py-1 rounded-full text-xs font-bold w-fit mb-4 uppercase">
                  Featured Article
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:underline decoration-[#B9FF66] decoration-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
                  <span className="flex items-center gap-2"><User size={16}/> {featuredPost.author}</span>
                  <span className="flex items-center gap-2"><Clock size={16}/> {featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ================= POST GRID ================= */}
      <section className=" max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPosts
            // Avoid duplicating the featured post in the grid if we are on "All" view
            .filter(p => activeCategory !== "All" || searchQuery !== "" || !p.featured)
            .map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group">
              <div className="h-full border-2 border-black rounded-[30px] p-6 bg-white shadow-[6px_6px_0px_#000] hover:translate-y-[-8px] transition-all flex flex-col">
                <div className="h-52 rounded-2xl overflow-hidden mb-6 border-2 border-black/5">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-black uppercase text-[#191A23] bg-[#B9FF66] px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
                <h4 className="text-2xl font-bold mb-4 leading-tight group-hover:text-[#B9FF66] transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mt-auto pt-4 border-t border-dashed border-gray-200">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-gray-50 rounded-[30px] border-2 border-dashed border-gray-300">
            <h3 className="text-2xl font-bold text-gray-400">No articles found.</h3>
          </div>
        )}
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className=" max-w-[1240px] mx-auto mt-24">
        <div className="bg-[#191A23] rounded-[30px] md:rounded-[45px] p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B9FF66] -mr-16 -mt-16 rotate-45"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to Build Authority?
          </h2>
          <p className="text-[#B9FF66] text-xl mb-10 relative z-10">
            Subscribe to get branding strategies directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Email Address"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-white/20 bg-white/10 text-white placeholder:text-gray-500 outline-none focus:border-[#B9FF66]"
            />
            <button className="bg-[#B9FF66] text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors shadow-[0px_4px_0px_#77a33e]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}