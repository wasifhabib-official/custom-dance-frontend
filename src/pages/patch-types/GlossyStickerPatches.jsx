import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import { ArrowRight, Award, Check, Truck, Sparkles, Star, Ruler, Zap } from "lucide-react";
import { motion } from "framer-motion";

const GlossyStickerPatches = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Glossy Studio Stickers | Custom Dance Studio Giveaways</title>
        <meta
          name="description"
          content="Premium glossy custom stickers for dance studios. Vibrant, shiny finish perfect for welcome kits, water bottles, and laptop branding. Free worldwide shipping."
        />
        <link
          rel="canonical"
          href="https://customdancepatches.com/patch-types/glossy-sticker-patches"
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
              <Award className="w-10 h-10 text-rose-500" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Vibrant & Shiny: <span className="text-rose-600">Glossy Studio Stickers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The ultimate "Student Favorite." Our premium glossy stickers bring your studio logo to life with vibrant colors and a high-shine finish—perfect for laptops, water bottles, and gear.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-lg rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-xl transition-all font-bold">
                Order Your Stickers <ArrowRight className="inline ml-2 w-5 h-5"/>
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
            <Sparkles className="text-rose-400 w-5 h-5" /> High-Gloss UV Finish
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Star className="text-rose-400 w-5 h-5" /> Student-Approved Quality
          </div>
        </div>
      </section>

      {/* Results Driven: Studio Growth Section */}
      <section className="py-16 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 font-heading tracking-tight">Boost Enrollment with "Welcome Stickers"</h3>
          <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
            Top-tier studios include these glossy stickers in every new student registration pack. They are a low-cost way to create instant "studio pride" and get your logo seen all over town.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/size-guide" className="text-rose-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Ruler className="w-5 h-5" /> View Sticker Size Guide →
            </Link>
            <Link to="/custom-order" className="text-gray-600 font-extrabold hover:underline underline-offset-8 flex items-center justify-center gap-2 transition-all">
              <Zap className="w-5 h-5 text-yellow-500" /> Request a Bulk Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Built for Maximum Branding Impact</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">Why glossy stickers are the top choice for dance studio welcome kits.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Eye-Catching Shine", desc: "A premium glossy top-coat that makes your studio colors pop and grab attention." },
            { title: "Perfect for Giveaways", desc: "Low-cost, high-value items that boost student morale and brand loyalty." },
            { title: "Gear-Friendly Adhesive", desc: "Stays secure on water bottles and laptop cases but peels off without gunk." },
            { title: "Precision Die-Cut", desc: "We can cut your stickers into any custom shape—even intricate studio logos." },
            { title: "Scratch Resistant", desc: "Protective UV layer prevents scuffing and fading during daily dance bag use." },
            { title: "Vibrant Ink Tech", desc: "We use high-definition printers to ensure even the smallest text is perfectly legible." }
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
              Why use glossy stickers for your dance studio?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Are they durable enough for water bottles?</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Yes.</strong> Our glossy stickers feature a water-resistant finish and a strong adhesive, making them perfect for hydro-flasks and dance water bottles. While they are scratch-resistant, we recommend hand-washing to keep the colors vibrant for years.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">What is the best use for these stickers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Most successful studios use these as <strong>"Welcome Kit" essentials</strong>. Including a custom glossy sticker with your studio logo in every new student registration pack is an affordable way to turn your students into walking brand ambassadors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-heading">Ready to Spark Some Studio Pride?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Order your custom glossy stickers today and get <strong>Free Worldwide Shipping</strong> to the USA, UK, Canada, or Australia.
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

export default GlossyStickerPatches;