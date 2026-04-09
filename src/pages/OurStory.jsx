import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import {
  Heart,
  Star,
  MessageCircle,
  Eye,
  Shield,
  Layers,
  Sparkles,
  Truck,
  ShieldCheck,
  Zap,
  CheckCircle
} from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = { 
  hidden: { opacity: 0, y: 20 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } } 
};

const values = [
  {
    icon: Heart,
    title: "Designed with dancers in mind",
    desc: "We understand movement, fabric, and the rigorous demands of competition wear.",
  },
  {
    icon: Layers,
    title: "Performance Grade",
    desc: "Premium threads and backing that withstand wash, wear, and endless applause.",
  },
  {
    icon: MessageCircle,
    title: "Stacy's Personal Touch",
    desc: "No bot replies. I keep you updated from the first stitch to the final delivery.",
  },
  {
    icon: Eye,
    title: "Attention to detail",
    desc: "I personally inspect every design. If it's not perfect, it doesn't leave the studio.",
  },
  {
    icon: Star,
    title: "Respect for your Studio Logo",
    desc: "Your logo is your identity. We treat it with the professional dignity it deserves.",
  },
  {
    icon: Shield,
    title: "Long-lasting materials",
    desc: "Patches that look as good at Nationals as they did on day one.",
  },
];

const OurStory = () => {
  return (
    <div className="bg-white overflow-hidden font-body text-gray-900">
      <Helmet>
        <title>Our Story | 15 Years of Excellence in Custom Dance Patches</title>
        <meta name="description" content="Meet Stacy, the dance veteran behind Custom Dance Patches. 15+ years of industry experience creating premium patches for studios worldwide." />
        {/* ✅ FIXED: Added missing canonical tag pointing to /our-story */}
      </Helmet>

      {/* HERO - Focused on the "Why" */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('/images/about/about-hero.webp')" }}
        />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 text-center">
          <motion.div initial="hidden" animate="show" variants={container} className="space-y-6">
            <motion.span variants={fadeUp} className="font-script text-4xl text-rose-400 mb-2 block">
              The Story Behind the Stitch
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-4xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
            >
              A Legacy of Dance, A Passion for <span className="text-rose-400">Detail</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="font-body text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We don't just manufacture patches. We understand the movement, the sweat, and the magic of the stage.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <Link to="/custom-order">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-12 py-6 text-xl shadow-2xl transition-all font-bold">
                  Work With Stacy
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STORY - Section 1: The Expert Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="absolute -inset-4 bg-rose-50 rounded-3xl -rotate-2" />
              <motion.img
                alt="Stacy working with premium embroidery threads"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[650px]"
                src="/images/about/stacy-craft.webp"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl border border-rose-100 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase mb-2">
                   <CheckCircle size={14} /> Stacy's Promise
                </div>
                <p className="font-script text-2xl text-gray-900 mb-1 leading-tight">"If I wouldn't wear it, I won't ship it."</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                15 Years of Dance Industry Experience
              </h2>

              <div className="prose prose-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  Born from a deep love for the dance community, my team brings over <strong>15 years of hands-on experience</strong> to every order. I know that a dance patch has to be more than just pretty—it has to be durable enough for a world-class competition and flexible enough for a hip-hop routine.
                </p>
                <p>
                  I spent years in the dance world—first as a student taping my toes, then as an instructor choreographing routines until the early morning. I lived for the energy of recital week and the nervous excitement of Nationals.
                </p>
                <p className="bg-rose-50 p-6 rounded-xl border-l-4 border-rose-500 text-gray-800 italic">
                  "I remember the disappointment of seeing our expensive team jackets lose their luster because of poor-quality patches. That's why I founded this studio—to create patches that match the quality of the dancers wearing them."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY - Section 2: Our Global Mission */}
      <section className="py-24 bg-rose-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              A Global Mission for Better Branding
            </h2>
            <p className="text-gray-700 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
              Based on a foundation of quality, we've expanded to support dance academies across the globe. By offering <strong>Free Express Shipping to the USA, Canada, UK, and Australia</strong>, we ensure that every studio has access to elite branding.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="grid md:grid-cols-2 gap-8 text-left"
          >
            {[
              "Give studios a tangible identity that students are proud to wear.",
              "Replace generic, low-quality merchandise with heirlooms that last.",
              "Celebrate competition achievements with badges of honor.",
              "Provide total pricing clarity with no hidden 'digitizing' fees."
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-rose-100 flex gap-4 items-start"
                variants={fadeUp}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stacy's Guides Bridge */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h3 className="font-heading text-2xl font-bold mb-10">Stacy's Technical Guides</h3>
           <div className="grid md:grid-cols-3 gap-10">
              <Link to="/pricing" className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-rose-200 transition-all">
                <Zap className="mx-auto mb-4 text-rose-500" />
                <h4 className="font-bold mb-2">Pricing Transparency</h4>
                <p className="text-sm text-gray-500">How we calculate your custom quote.</p>
              </Link>
              <Link to="/backing-guide" className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-rose-200 transition-all">
                <ShieldCheck className="mx-auto mb-4 text-rose-500" />
                <h4 className="font-bold mb-2">Backing Guide</h4>
                <p className="text-sm text-gray-500">Choosing between Iron-on and Sew-on.</p>
              </Link>
              <Link to="/size-guide" className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-rose-200 transition-all">
                <Sparkles className="mx-auto mb-4 text-rose-500" />
                <h4 className="font-bold mb-2">Size Guide</h4>
                <p className="text-sm text-gray-500">Pick the perfect dimensions for your gear.</p>
              </Link>
           </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-16 text-center tracking-tight">
            Our Commitment to You
          </motion.h2>

          <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3">{val.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="space-y-8">
            <Sparkles className="w-12 h-12 text-rose-400 mx-auto" />
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Let's Bring Your Studio Vision to Life
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              You've built a world-class academy. Let's make sure your merchandise matches that standard. <strong>Free worldwide express shipping included.</strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/custom-order">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-12 py-8 text-2xl shadow-2xl transition-all font-bold w-full sm:w-auto uppercase tracking-wider">
                  Get My Free Mockup
                </Button>
              </Link>
            </div>

            <div className="pt-10 flex items-center justify-center gap-6 text-gray-400 text-sm">
               <span className="flex items-center gap-2"><Truck size={16} className="text-rose-400" /> Express Delivery</span>
               <span className="flex items-center gap-2"><Shield size={16} className="text-rose-400" /> Stacy's Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
