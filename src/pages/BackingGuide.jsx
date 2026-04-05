import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Flame, 
  Scissors, 
  Layers, 
  Backpack, 
  Star 
} from "lucide-react";
import { motion } from "framer-motion";

const BackingGuide = () => {
  const backings = [
    {
      id: "heat-seal",
      title: "Heat Seal (Iron-On)",
      bestFor: "Varsity Jackets, Hoodies, Cotton T-Shirts",
      icon: Flame,
      description: "Our most popular choice. A specialized adhesive is applied to the back of the patch that bonds permanently to the fabric when heat is applied with a heat press or home iron.",
      proTip: "Stacy's Tip: While the bond is permanent, we always recommend a 'tack stitch' on the corners for garments that undergo heavy athletic movement.",
    },
    {
      id: "sew-on",
      title: "Traditional Sew-On",
      bestFor: "Delicate Costumes, Mesh, Lycra, Performance Silks",
      icon: Scissors,
      description: "The cleanest finish for performance gear. Sew-on patches have no adhesive, making them soft and flexible so they don't 'stiffen' the garment during high-energy dance routines.",
      proTip: "Best for costumes that need to be washed frequently or fabrics that can't handle high heat.",
    },
    {
      id: "velcro",
      title: "Velcro (Hook & Loop)",
      bestFor: "Tactical Gear, Team Bags, Swappable Award Systems",
      icon: Layers,
      description: "Includes both the hook (on the patch) and the loop (to be sewn to the garment). Perfect for studios that want to swap out competition year patches or merit awards.",
      proTip: "Great for gear bags where you want to rotate different style patches throughout the season.",
    },
    {
      id: "peel-stick",
      title: "Peel & Stick (Self-Adhesive)",
      bestFor: "One-Day Events, Recitals, Temporary Awards",
      icon: Zap,
      description: "Works like a high-end sticker. Perfect for temporary placement. Note: This is not a permanent solution for laundry; it is designed for short-term flair.",
      proTip: "Ideal for student gift bags at recitals or summer intensives.",
    },
    {
      id: "keychain",
      title: "Keychain / Bag Tag",
      bestFor: "Dance Bags, Keyrings, Studio Merchandise",
      icon: Backpack,
      description: "We add a metal ring and grommet to your patch, turning your studio logo into a high-end accessory that students can hang on their bags.",
      proTip: "One of the highest-selling merchandise items for dance studios.",
    }
  ];

  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Patch Backing Guide | Choosing the Right Finish for Dance Gear</title>
        <meta
          name="description"
          content="Not sure which patch backing to choose? Our guide explains Iron-on, Sew-on, and Velcro options specifically for dance costumes, jackets, and bags."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-white overflow-hidden text-center border-b border-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <div className="flex justify-center mb-6">
            <span className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Expert Technical Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            The Ultimate <span className="text-rose-600">Backing Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Selecting the right backing is just as important as the design. Whether you are branding heavy jackets or delicate costumes, we have the perfect technical solution.
          </p>
        </motion.div>
      </section>

      {/* Backing Detail List */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="space-y-16">
          {backings.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 bg-gray-50 p-12 rounded-3xl border border-gray-100 relative group">
                <item.icon className="w-12 h-12 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-rose-600 font-bold text-sm uppercase tracking-wider mb-4">
                   Best For: {item.bestFor}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="bg-white p-4 rounded-xl border-l-4 border-rose-500 shadow-sm italic text-sm text-gray-700">
                  {item.proTip}
                </div>
              </div>
              <div className="flex-1 text-center">
                 {/* Placeholder for an instructional graphic/photo */}
                 <div className="bg-rose-50 rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-rose-100">
                    <p className="text-rose-300 font-bold uppercase tracking-widest text-xs">Technical Photo: {item.title}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application FAQ Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Application & Care</h2>
            <p className="text-gray-400">Everything you need to know about making your patches last.</p>
          </div>
          
          <div className="grid gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="text-rose-400 w-5 h-5" /> How do I apply Heat Seal (Iron-on) patches?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Set your heat press to 350°F (175°C) or your iron to the 'Cotton' setting. Apply firm pressure for 15-20 seconds on the front, then flip the garment and apply pressure for another 10-15 seconds on the back to ensure the adhesive melts deep into the fibers.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Star className="text-rose-400 w-5 h-5" /> Can I wash garments with patches?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Yes! We recommend washing inside out on a cold, gentle cycle. Air drying is always best to preserve the vibrancy of the threads and the integrity of the backing adhesive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Now that you know your backing, let's create your mockup. <strong>Free worldwide shipping included on all orders.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/custom-order">
              <Button className="w-full sm:w-auto px-12 py-6 text-xl rounded-full bg-rose-500 hover:bg-rose-600 text-white shadow-2xl transition-all font-bold">
                Start My Custom Quote <ArrowRight className="inline ml-2 w-6 h-6"/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BackingGuide;