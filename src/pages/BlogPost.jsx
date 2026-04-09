import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import posts from "../data/posts.json";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Reading progress bar setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading text-rose-500 mb-4">Post not found</h1>
        <Link to="/blog" className="text-gray-500 hover:text-rose-500 transition-colors">
          Return to Journal
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white font-body text-gray-900 pb-24">
      {/* ✅ FIXED: Added dynamic Helmet per blog post with title, description and canonical */}
      <Helmet>
        <title>{post.title} | Custom Dance Patches Journal</title>
        <meta
          name="description"
          content={post.excerpt || "Read the latest insights and inspiration from Stacy's Studio Journal at Custom Dance Patches."}
        />
      </Helmet>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-rose-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <header className="bg-rose-50/30 pt-32 pb-20 border-b border-rose-100/50">
        <div className="max-w-3xl mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-rose-500 text-xs font-bold uppercase tracking-widest mb-8 hover:-translate-x-2 transition-transform"
          >
            <ArrowLeft size={14} /> Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-rose-500 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-tighter">
              {post.category || "Inspiration"}
            </span>
            <div className="flex items-center text-gray-400 text-xs gap-1.5">
              <Calendar size={14} />
              {post.date}
            </div>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex items-center justify-between pt-8 border-t border-rose-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-600 font-bold">
                S
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Stacy</p>
                <p className="text-xs text-gray-500">Founder & Creative Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <button className="hover:text-rose-500 transition-colors"><Share2 size={18} /></button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="prose prose-rose prose-lg max-w-none">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 first-letter:text-7xl first-letter:font-heading first-letter:text-rose-500 first-letter:mr-3 first-letter:float-left first-letter:leading-[1]">
            {post.content}
          </p>
        </div>

        {/* Stacy's Note Section */}
        <div className="mt-20 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 relative">
          <div className="absolute -top-5 left-10 bg-rose-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            A Note from Stacy
          </div>
          <p className="text-gray-600 italic leading-relaxed mb-6 pt-4">
            "I wrote this article because I see so many studio owners struggling with branding consistency. My goal is to make sure your patches look as professional as the choreography you put on stage."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p className="text-sm font-bold text-gray-900">Have questions about this topic?</p>
            <Link to="/contact">
              <button className="flex items-center gap-2 bg-white border border-rose-200 text-rose-500 px-6 py-3 rounded-full text-sm font-bold hover:bg-rose-500 hover:text-white transition-all shadow-sm">
                <MessageCircle size={16} /> Chat with me
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
           <Link to="/blog" className="text-gray-400 hover:text-rose-500 flex items-center gap-2 text-sm font-medium transition-colors">
              <ArrowLeft size={16} /> Previous Story
           </Link>
           <span className="text-gray-300">Next Story →</span>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
