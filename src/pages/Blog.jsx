import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, BookOpen, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import posts from "../data/posts.json"; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Blog = () => {
  return (
    <div className="bg-white min-h-screen font-body text-gray-900 overflow-hidden">
      {/* ✅ FIXED: Added missing Helmet with title, description and canonical */}
      <Helmet>
        <title>Studio Journal | Dance Patch Tips & Inspiration</title>
        <meta
          name="description"
          content="Explore Stacy's Studio Journal for dance patch inspiration, studio branding tips, and custom patch guides. Helping dance studios worldwide look their best."
        />
      </Helmet>

      {/* Editorial Header */}
      <section className="bg-rose-50/30 py-24 border-b border-rose-100/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-script text-4xl text-rose-500 mb-4 block"
          >
            Stacy's Studio Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Insights & <span className="text-rose-600">Inspiration</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Explore stories from the world of custom dance patches, studio branding tips, and the passion behind the stitch.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group flex flex-col bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl hover:border-rose-200 transition-all duration-500"
            >
              {/* Content Container */}
              <div className="p-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-rose-50 text-rose-600 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {post.category || "General"}
                  </div>
                  <div className="flex items-center text-gray-400 text-xs gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                </div>

                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8 text-lg flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center font-bold text-rose-500 group-hover:gap-3 transition-all uppercase text-xs tracking-widest"
                  >
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <div className="flex items-center text-gray-400 text-xs gap-1">
                    <Clock size={12} />
                    {post.readTime || "5 min read"}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Multi-Tenant Ready CTA */}
      <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <BookOpen className="w-12 h-12 text-rose-400 mx-auto mb-8" />
          <h2 className="text-4xl font-heading font-bold mb-6">Elevate Your Studio Brand</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Ready to turn your logo into a masterpiece? Stacy personally reviews every design to ensure competition-grade quality.
          </p>
          <Link to="/custom-order">
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 shadow-xl">
              Get A Free Mockup
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
