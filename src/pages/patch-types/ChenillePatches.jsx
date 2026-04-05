import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, Check, Scissors, Truck, Sparkles, ShieldCheck, Ruler, Zap } from "lucide-react";
import { motion } from "framer-motion";

const ChenillePatches = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Custom Chenille Patches for Dance Teams | 3D Varsity Style</title>
        <meta
          name="description"
          content="Get high-quality custom chenille patches for your dance team. Iconic 3D fuzzy look for varsity jackets and hoodies. FREE worldwide shipping and digital mockups."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/chenille-patches"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center relative z-10"
        >
          <div className="flex justify-center mb-6">
            <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-2">
              <Scissors className="w-4 h-4" /> Premium Craftsmanship
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight font-heading">
            Bold 3D Style: Custom <span className="text-rose-600">Chenille Patches</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            The iconic "fuzzy" look for dance varsity jackets, team warm-ups, and spirit wear. 
            Chenille patches bring unmatched texture, depth, and classic "Letterman" energy to your studio’s brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-10 py-6 text-xl rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all font-bold">
                Get a Free Quote <ArrowRight className="inline ml-2 w-5 h-5"/>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Truck className="text-rose-400 w-5 h-5" /> Free Worldwide Shipping
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="text-rose-400 w-5 h-5" /> Free Digital Mockups
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="text-rose-400 w-5 h-5" /> Dance-Tested Durability
          </div>
        </div>
      </section>

      {/* Results Driven: Technical Trust Bridge */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading tracking-tight">Varsity Jacket Specialists</h3>
          <p className="text-gray-600 mb-8 text-lg">
            Chenille is a specialized 3D style. Because of its vaulted yarn, we recommend <strong>Heat-Seal (Iron-on)</strong> for heavy jackets and <strong>Sew-on</strong> for hoodies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/backing-guide" className="text-rose-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <ShieldCheck className="w-5 h-5" /> View Chenille Backing Guide →
            </Link>
            <Link to="/size-guide" className="text-gray-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Ruler className="w-5 h-5 text-rose-400" /> View Varsity Sizing Chart →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Why Choose Chenille for Your Team?</h2>
          <p className="text-gray-600 mt-4">Elevate your studio spirit with premium, high-density 3D threadwork.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Vintage Aesthetic", desc: "The classic letterman-style appearance for high-end spirit wear." },
            { title: "Vaulted Yarn", desc: "Soft raised yarn that creates incredible 3D depth and shadows." },
            { title: "Heavy Garment Ready", desc: "Specifically designed to sit perfectly on heavy jackets and hoodies." },
            { title: "Stage Visibility", desc: "Highly visible from the back of the auditorium and the judging stands." },
            { title: "Premium Durability", desc: "High-density stitching ensures your patches last through every tour." },
            { title: "Full Customization", desc: "Available in any studio color palette and custom die-cut shape." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-rose-500 w-6 h-6"/>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AEO Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-100">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading">
              Are chenille patches good for dance teams?
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p className="mb-4">
                <strong>Yes, absolutely.</strong> Chenille patches are the industry standard for elite dance academies. They are ideal for team apparel where bold visibility and durability are non-negotiable.
              </p>
              <p className="mb-4">
                Unlike standard flat embroidery, the "vaulted" yarn of chenille is specifically designed for <strong>warm-up gear and varsity jackets</strong>. They provide a high-end, professional look that represents the prestige of your studio, whether your dancers are backstage or traveling to Nationals.
              </p>
              <p>
                Our chenille is manufactured to withstand rigorous use. We use specialized scrim backings to ensure the patch remains stiff and doesn't buckle, even after repeated wears and travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-heading tracking-tight">Ready to Elevate Your Studio Brand?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join 500+ studios worldwide. Get your free mockup and quote today with zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-xl rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition-transform font-bold">
                Order Chenille Patches <ArrowRight className="inline ml-2 w-6 h-6"/>
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">
            * Every order includes Free Express Shipping to USA, UK, Canada, and Australia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ChenillePatches;