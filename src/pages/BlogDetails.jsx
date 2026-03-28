import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin, Bookmark, Calendar, Clock } from "lucide-react";
import { blogPosts } from "../data/blogData"; // Import your data

export default function BlogDetails() {
  const { id } = useParams();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Find the specific post by ID
  const post = blogPosts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top on page load
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(`${(totalScroll / windowHeight) * 100}%`);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  if (!post) return <div className="py-20 text-center font-bold">Post not found.</div>;

  return (
    <div className="font-['Space_Grotesk'] bg-white min-h-screen">
      <div className="fixed top-0 left-0 h-1.5 bg-[#B9FF66] z-[100]" style={{ width: scrollProgress }}></div>

      <header className="pt-12 md:pt-20 px-6 lg:px-[100px] max-w-[1440px] mx-auto">
        <Link to="/blog" className="flex items-center gap-2 font-bold mb-8 hover:translate-x-[-5px] transition-transform w-fit">
          <ArrowLeft size={20} /> Back to Insights
        </Link>
        <span className="bg-[#B9FF66] border-2 border-black px-4 py-1 rounded-md font-bold text-sm shadow-[3px_3px_0px_#000]">
          {post.category}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-8 leading-[1.1]">{post.title}</h1>
        
        <div className="flex flex-wrap items-center justify-between gap-6 py-8 border-y-2 border-black/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-full border-2 border-[#B9FF66] flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-lg">{post.author}</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Expert Writer</p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 max-w-[1440px] px-6 lg:px-[100px] mx-auto my-12">
        <div className="rounded-[30px] md:rounded-[60px] overflow-hidden border-2 border-black shadow-[12px_12px_0px_#191A23]">
          <img src={post.image} alt={post.title} className="w-full h-[300px] md:h-[600px] object-cover" />
        </div>
      </section>

      <section className="px-6 lg:px-[100px]  max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16 pb-24">
        <article className="lg:col-span-8">
          <div 
            className="prose prose-xl max-w-none prose-h3:font-bold prose-blockquote:border-[#B9FF66] prose-blockquote:bg-[#F3F3F3] prose-blockquote:rounded-r-3xl"
            dangerouslySetInnerHTML={{ __html: post.fullContent }} 
          />
          <div className="mt-16 pt-10 border-t-2 border-black/5 flex flex-wrap gap-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#B9FF66] transition-colors">#{tag}</span>
            ))}
          </div>
        </article>

        {/* SIDEBAR CTA */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 p-8 border-2 border-black rounded-[35px] bg-[#191A23] text-white">
            <h4 className="text-2xl font-bold mb-4">Grow Your Brand</h4>
            <p className="text-gray-400 mb-6">Want to implement what you just read? We help local businesses dominate through video.</p>
            <Link to="/contact">
              <button className="w-full py-4 bg-[#B9FF66] text-black font-bold rounded-2xl hover:scale-105 transition-transform">
                Book Consultation
              </button>
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}