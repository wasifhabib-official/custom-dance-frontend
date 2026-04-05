import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, ShieldCheck, Check, Truck, Droplets, Zap, Ruler, Star } from "lucide-react";
import { motion } from "framer-motion";

const VinylStickerPatches = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Vinyl Gear Stickers | Waterproof Custom Dance Stickers</title>
        <meta
          name="description"
          content="Ultra-durable, waterproof vinyl stickers for dance gear, water bottles, and laptop cases. Dishwasher safe and travel-ready. Free worldwide shipping."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/vinyl-sticker-patches"
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
              <ShieldCheck className="w-10 h-10 text-rose-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Built for Motion: <span className="text-rose-600">Waterproof Vinyl Stickers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The toughest stickers in the studio. Our premium vinyl is waterproof, weatherproof, and scratch-resistant—making them the perfect choice for active dancers and their gear.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-xl rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all font-bold">
                Order Vinyl Stickers <ArrowRight className="inline ml-2 w-5 h-5"/>
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
            <Droplets className="text-rose-400 w-5 h-5" /> 100% Waterproof
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Zap className="text-rose-400 w-5 h-5" /> UV & Scratch Resistant
          </div>
        </div>
      </section>

      {/* Results Driven: Gear Compatibility Bridge */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 font-heading">Performance Tested On:</h3>
            <p className="text-gray-600">Our vinyl is engineered to bond with the most common dance surfaces.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-rose-100">
              <Star className="w-5 h-5 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-sm">Hydro-Flasks</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-rose-100">
              <Star className="w-5 h-5 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-sm">Travel Trunks</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-rose-100">
              <Star className="w-5 h-5 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-sm">Laptop Cases</p>
            </div>
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-rose-100">
              <Star className="w-5 h-5 text-rose-500 mx-auto mb-2" />
              <p className="font-bold text-sm">Dance Bags</p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/size-guide" className="inline-flex items-center gap-2 text-rose-600 font-extrabold hover:underline underline-offset-8 transition-all">
              <Ruler className="w-5 h-5" /> View Sticker Sizing Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Merchandise That Lasts</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">High-performance stickers for studios that value quality and durability.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Dishwasher Safe", desc: "Tough enough to survive daily washes on water bottles without peeling or fading." },
            { title: "Travel Ready", desc: "Designed to handle the bumps and scrapes of competition trunks and tour gear." },
            { title: "No-Residue Removal", desc: "Strong adhesive that stays put, but comes off clean when you're ready to update your look." },
            { title: "Full Color Precision", desc: "We use high-definition vinyl printing to capture every detail of your studio logo." },
            { title: "Thick & Durable", desc: "Premium 6mil vinyl provides a sturdy, high-quality feel that students appreciate." },
            { title: "Custom Die-Cut", desc: "Available in any shape—we cut precisely around your logo for a professional finish." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-rose-100 hover:bg-white hover:shadow-xl transition-all"
            >
              <Check className="w-6 h-6 text-green-500 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AEO FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-100">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-heading">
              Why use vinyl stickers for your dance studio?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Can they be used on outdoor gear?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes.</strong> Our vinyl is UV-coated, meaning it can withstand direct sunlight and rain without fading or cracking. This makes them ideal for dance studio signage, car windows, or outdoor equipment trunks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">What makes them different from glossy stickers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  While glossy stickers are great for indoor items like notebooks, <strong>vinyl stickers</strong> are built for high-touch, high-impact use. If your students are putting stickers on water bottles or dance bags that get tossed around, vinyl is the professional choice for durability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">Ready to Brand Your Gear?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Get ultra-durable vinyl stickers for your studio today. <strong>Free worldwide shipping to the USA, UK, CA, and AU.</strong>
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

export default VinylStickerPatches;