import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, Check, Layers, Truck, ShieldCheck, Sparkles, Ruler, Zap } from "lucide-react";
import { motion } from "framer-motion";

const EmbroideredPatches = () => {
  return (
    <div className="bg-white font-body text-gray-900 overflow-hidden">
      <Helmet>
        <title>Custom Embroidered Patches | High-Detail Studio Logo Embroidery</title>
        <meta
          name="description"
          content="Elevate your studio branding with high-detail custom embroidered patches. Perfect for dance logos, merit awards, and varsity gear. Free worldwide shipping & mockups."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/embroidered-patches"
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
            <div className="bg-white p-3 rounded-full shadow-lg">
              <Layers className="w-10 h-10 text-rose-500" />
            </div>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            High-Detail Precision: Custom <span className="text-rose-600">Embroidered Patches</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Showcase your studio identity with premium <strong>logo embroidery</strong>. 
            Our patches feature high stitch counts and professional-grade threads—built to withstand the rigors of competition season while keeping your brand sharp.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-lg rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all font-bold">
                Get Your Free Quote <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Truck className="text-rose-400 w-5 h-5" /> Free Express Shipping
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="text-rose-400 w-5 h-5" /> Unlimited Design Revisions
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="text-rose-400 w-5 h-5" /> Performance Tested
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight font-heading">Engineered for Performance</h2>
          <p className="text-gray-600">The industry standard for durable, high-impact studio branding.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "High Stitch Density", desc: "Captures sharp lines and complex studio logos with photographic clarity." },
            { title: "Colorfast Threads", desc: "Premium Madeira threads that stay vibrant and won't bleed in the wash." },
            { title: "Performance Backing", desc: "Flex-tested backings that move with your dancers’ jackets and hoodies." },
            { title: "Merit Award Ready", desc: "The perfect format for student milestone awards and competition achievements." },
            { title: "Custom Borders", desc: "Choose from classic merrowed edges or precision laser-cut shapes." },
            { title: "Heat-Seal & Sew-On", desc: "Multiple application options to suit bags, costumes, or uniforms." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <Check className="w-6 h-6 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Driven: Backing & Sizing Bridge */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading tracking-tight">How should you apply your logo?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            From industrial <strong>Heat-Seal</strong> for team gear bags to <strong>Sew-On</strong> flexibility for competition costumes, we help you choose the finish that lasts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/backing-guide" className="text-rose-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <ShieldCheck className="w-5 h-5" /> View the Full Backing Guide →
            </Link>
            <Link to="/size-guide" className="text-gray-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Ruler className="w-5 h-5 text-rose-400" /> Check Sizing for Embroidery →
            </Link>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-heading">
              Common Questions About Embroidered Patches
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Can you match our studio colors exactly?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes.</strong> We use a vast palette of premium threads and can match your branding colors with high precision. We provide a <strong>free digital mockup</strong> with every quote to ensure the colors look perfect before we start production.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">What is the minimum order quantity?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We specialize in serving dance studios of all sizes. While we handle large national competition orders, we also offer low minimums to help smaller studios grow their brand professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 font-heading">Ready to Upgrade Your Look?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Join hundreds of dance academies worldwide. Get your professional mockup and <strong>free worldwide shipping</strong> quote today.
          </p>
          <Link to="/custom-order">
            <Button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-8 rounded-full text-xl shadow-2xl hover:scale-105 transition-transform font-bold">
              Start Your Quote <ArrowRight className="inline ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EmbroideredPatches;