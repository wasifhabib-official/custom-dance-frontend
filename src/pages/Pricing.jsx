import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { 
  Check, 
  Truck, 
  Sparkles, 
  ShieldCheck, 
  DollarSign, 
  HelpCircle, 
  ArrowRight,
  Zap,
  Percent,
  Scaling
} from "lucide-react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="bg-white text-gray-900 font-body overflow-hidden">
      <Helmet>
        <title>Pricing & Value | Transparent Custom Patch Quotes</title>
        <meta
          name="description"
          content="Learn how we calculate pricing for custom dance patches. 10pc minimums, free worldwide shipping, and free digital mockups for every studio."
        />
        {/* ✅ FIXED: Added missing canonical tag pointing to /pricing */}
        <link rel="canonical" href="https://customdancepatches.com/pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-rose-50/50 to-white text-center border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="max-w-4xl mx-auto px-4 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Studio-Direct Value
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-heading text-gray-900">
            Transparent <span className="text-rose-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Premium quality shouldn't come with hidden surprises. We offer low 10-piece minimums and all-inclusive quotes tailored to your studio's design.
          </p>
        </motion.div>
      </section>

      {/* The $0 Hidden Fees Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
              <Truck className="w-8 h-8 text-rose-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">$0 Shipping</h3>
            <p className="text-gray-400 leading-relaxed">Free Express Delivery to USA, UK, CA, & AU. No international freight bills.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
              <Sparkles className="w-8 h-8 text-rose-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">$0 Design Fees</h3>
            <p className="text-gray-400 leading-relaxed">Free professional digital mockups and unlimited revisions until it is perfect.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 transition-colors duration-300">
              <ShieldCheck className="w-8 h-8 text-rose-400 group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">$0 Setup Fees</h3>
            <p className="text-gray-400 leading-relaxed">No hidden digitizing or tooling costs. The price we quote is the final price.</p>
          </div>
        </div>
      </section>

      {/* How Pricing is Calculated Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-heading">How We Calculate Your Quote</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              We focus on fair, value-driven pricing. Since we are a boutique studio, we can offer the flexibility that large factories can't—starting with a <strong>minimum of just 10 pieces.</strong>
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Percent, title: "Order Quantity", desc: "Pricing scales with your team. Bulk discounts begin at 25 pieces." },
                { icon: Scaling, title: "Total Size", desc: "Calculated by (Width + Height) / 2 to give you the most honest area cost." },
                { icon: Zap, title: "Stitch Density", desc: "Complex, 100% thread coverage designs use more production time." },
                { icon: ShieldCheck, title: "Backing Type", desc: "Choose from Iron-on, Sew-on, or Velcro backings at standard rates." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="w-6 h-6 text-rose-500 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-inner sticky top-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-rose-600 font-bold uppercase tracking-widest text-xs mb-6">
                <DollarSign className="w-4 h-4" /> Sample Starting Estimates
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-rose-200 transition-all flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-900">Embroidered</h5>
                    <p className="text-xs text-gray-400">10-24 Pieces</p>
                  </div>
                  <span className="text-xl font-black text-rose-600">from $6.50</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-rose-200 transition-all flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-900">Embroidered</h5>
                    <p className="text-xs text-gray-400">50+ Pieces</p>
                  </div>
                  <span className="text-xl font-black text-rose-600">from $3.50</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-rose-200 transition-all flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-gray-900">Chenille Varsity</h5>
                    <p className="text-xs text-gray-400">10+ Pieces</p>
                  </div>
                  <span className="text-xl font-black text-rose-600">from $5.50</span>
                </div>
                <div className="bg-rose-600 p-6 rounded-2xl shadow-lg text-white flex justify-between items-center">
                  <h5 className="font-bold">Large Volume</h5>
                  <Zap className="w-6 h-6" />
                </div>
              </div>
              <p className="mt-8 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                Includes Express Shipping to USA, UK, CA, AU
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 font-heading tracking-tight">Common Pricing Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-rose-500" /> Do you have a minimum order?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Yes, our minimum for custom patches is <strong>just 10 pieces</strong>. This is ideal for soloists, small groups, or testing a design before a full studio launch.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-rose-500" /> What if I need a larger volume?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                For orders over 200 pieces, we offer tiered volume pricing breaks. Stacy can provide a personalized quote for your entire academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Contained Boutique Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-rose-50/50 rounded-[3rem] p-12 md:p-16 text-center border border-rose-100 shadow-sm relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-50" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
                <Zap className="w-8 h-8 text-rose-500 fill-rose-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight text-gray-900">
                Get your exact quote <br /> in <span className="text-rose-600">24 hours.</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto leading-relaxed">
                Upload your studio logo and Stacy will personally review the detail to provide our most competitive value-driven quote.
              </p>
              <Link to="/custom-order">
                <Button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-5 rounded-full text-lg shadow-xl hover:scale-105 transition-all font-bold uppercase tracking-widest">
                  Get My Free Custom Quote <ArrowRight className="inline ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;