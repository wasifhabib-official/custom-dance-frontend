import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, Check, Palette, Truck, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const WovenPatches = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Custom Woven Patches | High-Detail Flat Finish for Dance</title>
        <meta
          name="description"
          content="Custom woven patches for intricate studio logos and thin performance fabrics. Clean, flat, and lightweight. Ideal for dance costumes with Free Worldwide Shipping."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/woven-patches"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-white overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white p-3 rounded-full shadow-lg">
              <Palette className="w-10 h-10 text-rose-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Clean & Precise: <span className="text-rose-600">Custom Woven Patches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When standard embroidery is too bulky, woven patches deliver unmatched resolution with a smooth, lightweight finish. Perfect for intricate logos and delicate performance costumes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-lg rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all">
                Order Woven Patches <ArrowRight className="inline ml-2 w-5 h-5"/>
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Truck className="text-rose-400 w-5 h-5" /> Free Global Delivery
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Sparkles className="text-rose-400 w-5 h-5" /> High-Resolution Detail
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="text-rose-400 w-5 h-5" /> Low-Profile Finish
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Professional’s Choice for Detail</h2>
          <p className="text-gray-600 mt-4">Why high-end dance labels and intricate designs prefer a woven finish.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Fine Thread Resolution", desc: "Uses thinner threads to capture tiny text and complex details embroidery can't reach." },
            { title: "Low-Profile Profile", desc: "A thin, flat finish that sits close to the fabric, ideal for lightweight performance gear." },
            { title: "Costume Comfort", desc: "Soft and flexible, these patches won't chafe or feel heavy on delicate competition wear." },
            { title: "Sharp Photographic Detail", desc: "Produces the cleanest lines and gradients for modern studio branding." },
            { title: "Durable Edge Options", desc: "Choose between classic merrowed borders or heat-cut edges for a seamless look." },
            { title: "Smooth Texture", desc: "A high-end, woven-in feel that mimics premium retail apparel labels." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <Check className="w-6 h-6 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Driven: Technical Comparison Bridge */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Woven vs. Embroidered: Which one?</h3>
          <p className="text-gray-600 mb-8 text-lg">
            If your studio logo has very small text or complex gradients, <strong>Woven</strong> is your best friend. If you want a textured, 3D stitched look, choose <strong>Embroidered</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/backing-guide" className="text-rose-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <ShieldCheck className="w-5 h-5" /> View Costume-Safe Backings →
            </Link>
            <Link to="/size-guide" className="text-gray-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Zap className="w-5 h-5 text-yellow-500" /> See Sizing Options →
            </Link>
          </div>
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Why use woven patches for your dance uniforms?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Are they better than embroidered patches?</h3>
                <p className="text-gray-700 leading-relaxed">
                  It depends on your goal. While embroidery offers 3D texture, <strong>woven patches</strong> are better for intricate details. If your studio logo has small text or complex shapes, a woven finish ensures every element remains sharp and legible without adding bulk.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Can they be used on lightweight costumes?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes.</strong> Because woven patches are significantly thinner and lighter than embroidery or chenille, they are the best option for <strong>competition costumes and performance fabrics</strong> like lycra or mesh. They won't weigh down the garment or restrict movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">Ready for Precision Detail?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Get your free digital mockup today and see your intricate logo in high-res woven detail. <strong>Free worldwide shipping to USA, UK, CA, and AU.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-xl rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition-transform font-bold">
                Get My Free Quote <ArrowRight className="inline ml-2 w-6 h-6"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WovenPatches;