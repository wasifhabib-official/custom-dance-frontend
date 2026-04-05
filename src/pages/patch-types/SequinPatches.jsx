import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, Sparkles, Check, Truck, ShieldCheck, Zap, Ruler } from "lucide-react";
import { motion } from "framer-motion";

const SequinPatches = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Sequin Performance Patches | High-Impact Custom Dance Patches</title>
        <meta
          name="description"
          content="Custom sequin patches designed to catch stage lighting. High-impact sparkle for dance competitions, recitals, and costumes. Free worldwide shipping."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/sequin-patches"
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
              <Sparkles className="w-10 h-10 text-rose-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Shine on Stage: <span className="text-rose-600">Sequin Performance Patches</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Designed to catch every spotlight. Our custom sequin patches bring maximum visual impact to competition costumes and performance gear with a high-end, glamorous finish.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-lg rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all font-bold">
                Order Sequin Patches <ArrowRight className="inline ml-2 w-5 h-5"/>
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
            <Zap className="text-rose-400 w-5 h-5" /> Stage-Ready Sparkle
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <ShieldCheck className="text-rose-400 w-5 h-5" /> Performance Durability
          </div>
        </div>
      </section>

      {/* Results Driven: Technical Trust Bridge */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 font-heading tracking-tight">Stage-Tested Application</h3>
          <p className="text-gray-600 mb-8 text-lg">
            High-movement routines require specialized attachment. Whether you need <strong>Sew-On</strong> flexibility for costumes or <strong>Heat-Seal</strong> for team gear, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/backing-guide" className="text-rose-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <ShieldCheck className="w-5 h-5" /> View Performance Backing Guide →
            </Link>
            <Link to="/size-guide" className="text-gray-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Ruler className="w-5 h-5 text-rose-400" /> View Costume Sizing Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Engineered for the Spotlight</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">Why top choreographers choose our sequin patches for the big stage.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Maximum Refraction", desc: "Meticulously placed sequins designed to refract stage lights at every angle." },
            { title: "Performance-Flex", desc: "Specialized backings that move with the dancer, preventing stiff or bulky costumes." },
            { title: "Secure Stitching", desc: "Double-reinforced edges ensure no loose sequins during high-energy routines." },
            { title: "Costume Ready", desc: "Easy to apply to lycra, mesh, and other delicate performance fabrics." },
            { title: "Vibrant Color Range", desc: "Available in hundreds of shades, including holographic and metallic finishes." },
            { title: "Lightweight Design", desc: "Premium sparkle without adding unnecessary weight to the garment." }
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
              Why use sequin patches for your performance?
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Will they stay secure during a routine?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes.</strong> We use industrial-grade adhesives and reinforced border stitching. Whether you are leaping, turning, or doing floor work, these patches are <strong>dance-tested</strong> to stay exactly where you put them.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Can they be applied to delicate costume fabrics?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our sequin patches are designed with performance fabrics in mind. We offer <strong>heat-seal backings</strong> that bond at lower temperatures to protect delicate mesh or spandex, as well as sew-on options for maximum security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">Bring the Sparkle to Your Next Competition</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Get your free digital mockup and see how your logo looks in sequins. <strong>Free worldwide shipping included.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-xl rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition-transform font-bold">
                Get My Free Quote <ArrowRight className="inline ml-2 w-6 h-6"/>
              </Button>
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-500 italic">
            * We serve dance studios in the USA, UK, Canada, and Australia with Free Express Shipping.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SequinPatches;