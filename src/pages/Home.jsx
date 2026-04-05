import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"; 
import Button from "../components/ui/Button";
import {
  Layers,
  Star,
  Globe,
  Truck,
  ShieldCheck,
  Ruler,
  Zap,
  Sparkles,
  Scissors,
  Palette,
} from "lucide-react";

const Home = () => {
  // ✅ UPDATED: Now pointing to /images/home/patch-types/
  const patchTeasers = [
    { title: "Embroidered", benefit: "Classic, durable, professional look.", img: "/images/home/patch-types/type-embroidered.webp" },
    { title: "Chenille", benefit: "Soft, fuzzy, varsity-style texture.", img: "/images/home/patch-types/type-chenille.webp" },
    { title: "Sequin", benefit: "Sparkle that catches the stage lights.", img: "/images/home/patch-types/type-sequin.webp" },
    { title: "Woven", benefit: "High detail for intricate logos.", img: "/images/home/patch-types/type-woven.webp" },
    { title: "Glossy Stickers", benefit: "Shiny, durable, and collectible.", img: "/images/home/patch-types/type-sticker-glossy.webp" },
    { title: "Vinyl Stickers", benefit: "Waterproof swag for bottles & laptops.", img: "/images/home/patch-types/type-sticker-vinyl.webp" },
  ];

  const testimonials = [
    { text: "The quality is unmatched. Stacy really understands what dancers need.", author: "Sarah M., Studio Owner" },
    { text: "Finally, patches that don't feel like cardboard! My students love them.", author: "Mike T., Competition Director" },
    { text: "Fast turnaround and the colors were perfectly matched to our costumes.", author: "Jessica L., Dance Mom" },
  ];

  return (
    <div className="overflow-hidden font-body text-gray-800">
      <Helmet>
        <title>Custom Chenille & Embroidered Patches for Dance Academies</title>
        <meta name="description" content="Premium custom patches designed specifically for dance studios. High-quality Chenille and Embroidery with FREE worldwide shipping to USA, Canada, UK, and Australia." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-rose-50/50">
        <div className="absolute inset-0 bg-[url('/images/home/hero-bg-texture.webp')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                 <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                   <Truck className="w-4 h-4" /> Free Express Worldwide Shipping
                 </span>
                 <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                   Stacy's 2026 Designs Now Open
                 </span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                Custom Patches Designed for <span className="text-rose-600">Dance Academies</span>
              </h1>
              <p className="font-body text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Your studio logo, beautifully stitched. From varsity chenille to intricate performance embroidery, we create patches that move with your dancers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/custom-order">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all font-bold uppercase tracking-wide"
                  >
                    Start My Custom Order
                  </Button>
                </Link>
                <Link to="/patch-types">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-rose-200 text-rose-700 hover:bg-rose-50 rounded-full px-8 py-6 text-lg font-bold"
                  >
                    Explore Styles
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Resource Bridge */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/size-guide" className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-rose-50 transition-colors">
              <div className="bg-rose-100 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <Ruler size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Expert Sizing Guide</h4>
                <p className="text-sm text-gray-500">Pick the perfect dimensions for jackets, bags, or sleeves.</p>
              </div>
            </Link>
            <Link to="/backing-guide" className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-rose-50 transition-colors">
              <div className="bg-rose-100 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Backing & Finishing</h4>
                <p className="text-sm text-gray-500">Iron-on, sew-on, or velcro? We make application simple.</p>
              </div>
            </Link>
            <Link to="/pricing" className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-rose-50 transition-colors">
              <div className="bg-rose-100 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Transparent Pricing</h4>
                <p className="text-sm text-gray-500">No setup fees. No digitizing fees. Just honest value.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-rose-100 rounded-full opacity-50 blur-3xl" />
              <img
                alt="Close-up of a premium custom Chenille letter patch"
                className="relative rounded-3xl shadow-2xl transform -rotate-1 scale-105 hover:rotate-0 hover:scale-105 transition-transform duration-500"
                src="/images/home/premium-chenille-feature.webp"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Global Specialists in Dance Branding
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We aren't a general "patch shop." We are dance industry veterans who understand the importance of vibrant colors, performance-grade threads, and <strong>Free Worldwide Shipping</strong>.
              </p>
              <div className="space-y-8 mb-10">
                {[
                  { icon: Layers, title: "Built for Performance", desc: "Lightweight backings that don't feel stiff on delicate performance costumes." },
                  { icon: Palette, title: "Precision Color Match", desc: "We match your specific studio palette for a seamless professional look." },
                  { icon: Scissors, title: "Dance-Tested Durability", desc: "Reinforced edges that stay secure through leaps, turns, and travel." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/custom-order">
                <Button className="bg-rose-500 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:bg-rose-600">
                  Get My Free Mockup
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Sparkles className="w-12 h-12 text-rose-400 mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
            Built With Dance in Mind — Always
          </h2>
          <blockquote className="font-body text-xl md:text-2xl text-rose-100 leading-relaxed italic mb-8">
            "I personally review every single design. If I wouldn't put it on my own competition jacket, it doesn't leave our studio."
          </blockquote>
          <div className="font-script text-3xl text-rose-400 mb-10">— Stacy, Founder</div>
          <Link to="/patch-types">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-rose-50 rounded-full px-10 py-6 text-lg font-bold shadow-2xl"
            >
              Explore Styles
            </Button>
          </Link>
        </div>
      </section>

      {/* Patch Types Teaser Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              A Style for Every Dancer
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">From classic varsity Chenille to modern waterproof Vinyl swag—delivered free worldwide.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {patchTeasers.map((type, i) => (
              <Link to="/patch-types" key={i} className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 flex items-center justify-center">
                  <img
                    alt={`${type.title} patch example`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={type.img}
                    onError={(e) => { e.target.src = '/vite.svg'; }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white font-bold text-2xl mb-1">{type.title}</h3>
                  <p className="text-rose-200 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 italic">
                    {type.benefit}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-16 tracking-tight">
            Trusted by 500+ Dance Academies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-rose-300 transition-all shadow-sm"
              >
                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                <p className="font-bold text-gray-900 uppercase text-xs tracking-widest">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <Link to="/custom-order">
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-12 py-8 text-xl shadow-xl font-bold uppercase tracking-wide"
            >
              Get My Custom Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-rose-500 to-purple-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Elevate Your Team's Identity?
          </h2>
          <p className="text-xl text-rose-100 mb-12 max-w-2xl mx-auto">
            Join the global dance community choosing premium quality and expert guidance. Stacy is waiting to help you design your next award-winning look.
          </p>
          <Link to="/custom-order">
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 rounded-full px-16 py-8 text-2xl shadow-2xl font-black uppercase tracking-widest transition-transform hover:scale-105"
            >
              Claim My Free Mockup
            </Button>
          </Link>
          <div className="mt-12 flex items-center justify-center gap-8 text-rose-200 text-sm font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Globe size={18} /> Worldwide</span>
            <span className="flex items-center gap-2"><Truck size={18} /> Express</span>
            <span className="flex items-center gap-2"><ShieldCheck size={18} /> Guaranteed</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;