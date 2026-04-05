import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from "../components/ui/Button";
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Scissors,
  Palette,
  Layers,
  Award,
  Globe,
  Truck,
  Ruler, 
} from 'lucide-react';
import { motion } from 'framer-motion';

const PatchTypes = () => {
  const patchTypes = [
    {
      id: 'chenille',
      slug: '/patch-types/chenille-patches',
      title: 'Custom Chenille Patches',
      tagline: 'The classic, "fuzzy" 3D look',
      description:
        "These are the gold standard for dance team varsity jackets and warm-up hoodies. They offer a vintage, high-end texture that stands out on any heavy garment.",
      benefits: [
        'Iconic "Letterman" aesthetic for dance teams',
        'Soft, vaulted yarn creates premium 3D dimension',
        'High-end texture that defines spirit wear',
      ],
      cta: 'Explore Chenille Style',
      imageSrc: '/images/home/patch-types/type-chenille.webp',
      imageAlt: 'Close-up of a fuzzy 3D Chenille dance team patch.',
      icon: Scissors,
    },
    {
      id: 'embroidered',
      slug: '/patch-types/embroidered-patches',
      title: 'Custom Embroidered Patches',
      tagline: 'High-detail studio logos & merit awards',
      description:
        "Our embroidery uses premium thread with a high stitch count to capture fine lines and vibrant colors that won't fade. Perfect for professional branding.",
      benefits: [
        'High stitch count for crisp, clean details',
        'Vibrant, colorfast threads that won\'t fade',
        'Durable enough for every rehearsal and tour',
      ],
      cta: 'Explore Embroidered Style',
      imageSrc: '/images/home/patch-types/type-embroidered.webp',
      imageAlt: 'Highly detailed embroidered studio logo patch.',
      icon: Layers,
    },
    {
      id: 'woven',
      slug: '/patch-types/woven-patches',
      title: 'Custom Woven Patches',
      tagline: 'Clean and thin for intricate detail',
      description:
        "When your design is incredibly intricate or you need a thinner, flatter finish for lightweight costumes, woven patches provide the cleanest detail without the bulk.",
      benefits: [
        'Photographic resolution for complex logos',
        'Flat, low-profile finish for performance gear',
        'Ideal for lightweight dance costume fabrics',
      ],
      cta: 'Explore Woven Style',
      imageSrc: '/images/home/patch-types/type-woven.webp',
      imageAlt: 'Clean and thin woven patch for dance costumes.',
      icon: Palette,
    },
    {
      id: 'sequin',
      slug: '/patch-types/sequin-patches',
      title: 'Sequin Performance Patches',
      tagline: 'Sparkle on stage—made to catch the lights',
      description:
        'Dancers live for the spotlight. Our custom sequin patches add instant glam to competition costumes, meticulously crafted to catch every spotlight during your routine.',
      benefits: [
        'Maximum visual impact for international recitals',
        "Available in reversible 'flip' sequin styles",
        'High-end sparkle delivered free to your door',
      ],
      cta: 'Explore Sequin Style',
      imageSrc: '/images/home/patch-types/type-sequin.webp',
      imageAlt: 'Sparkling sequin dance patch catching the light',
      icon: Sparkles,
    },
    {
      id: 'glossy',
      slug: '/patch-types/glossy-sticker-patches',
      title: 'Glossy Studio Stickers',
      tagline: 'Shiny, eye-catching, and versatile',
      description:
        'The perfect addition to your studio welcome packs. These vibrant stickers are a hit with students globally for laptops, water bottles, and gear bags.',
      benefits: [
        'Vibrant finish that makes your brand pop',
        'Perfect for rewards and student branding',
        'Premium quality with no international shipping fees',
      ],
      cta: 'Explore Glossy Stickers',
      imageSrc: '/images/home/patch-types/type-sticker-glossy.webp',
      imageAlt: 'Custom glossy sticker with dance logo',
      icon: Award,
    },
    {
      id: 'vinyl',
      slug: '/patch-types/vinyl-sticker-patches',
      title: 'Vinyl Gear Stickers',
      tagline: 'Affordable, versatile, and waterproof',
      description:
        "Tough enough for the most active dancers. Our waterproof vinyl stickers last through every rehearsal, competition, and tour—wherever your team travels.",
      benefits: [
        'Waterproof and dishwasher safe for gear',
        'Ideal for affordable studio merchandise',
        'Custom shapes and colors shipped worldwide for free',
      ],
      cta: 'Explore Vinyl Stickers',
      imageSrc: '/images/home/patch-types/type-sticker-vinyl.webp',
      imageAlt: 'Die-cut vinyl dance sticker on a water bottle',
      icon: ShieldCheck,
    },
  ];

  const comparisonData = [
    { type: 'Chenille', bestFor: 'Varsity Jackets', impact: 'Bold & Fuzzy', durability: 'High', shipping: 'FREE Worldwide' },
    { type: 'Embroidered', bestFor: 'Studio Logos', impact: 'Classic & Detailed', durability: 'High', shipping: 'FREE Worldwide' },
    { type: 'Woven', bestFor: 'Complex Logos', impact: 'Detailed & Flat', durability: 'High', shipping: 'FREE Worldwide' },
    { type: 'Sequin', bestFor: 'Costumes', impact: 'High Sparkle', durability: 'Medium', shipping: 'FREE Worldwide' },
    { type: 'Glossy Stickers', bestFor: 'Giveaways', impact: 'Vibrant & Shiny', durability: 'Medium', shipping: 'FREE Worldwide' },
    { type: 'Vinyl Stickers', bestFor: 'Gear', impact: 'Vibrant Print', durability: 'Medium', shipping: 'FREE Worldwide' },
  ];

  return (
    <div className="bg-white font-body text-gray-900">
      <Helmet>
        <title>Custom Chenille, Embroidered & Woven Patches for Dance</title>
        <meta
          name="description"
          content="Explore our professional patch styles. From fuzzy 3D Chenille for varsity jackets to high-detail Embroidery for studio logos. Free shipping to USA, UK, CA, & AU."
        />
        {/* ✅ FIXED: Added missing canonical tag pointing to /patch-types */}
        <link rel="canonical" href="https://customdancepatches.com/patch-types" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-rose-50 to-white overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/home/patch-types/patch-types-hero.webp')" }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
               <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-sm">
                 <Truck className="w-4 h-4" /> 100% Free Worldwide Shipping
               </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Premium Patch Styles for <span className="text-rose-600">Every Performance</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light italic">
              We use specialized backers and high-thread counts to ensure your patches look stunning on stage and last through every rehearsal.
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Serving studios in the USA, UK, Canada, and Australia. Stacy and our design team provide free digital mockups and <strong>free express shipping</strong> to your door.
            </p>
            <Link to="/size-guide" className="inline-flex items-center gap-2 text-rose-500 font-bold hover:text-rose-600 transition-colors border-b-2 border-rose-100 hover:border-rose-500 pb-1">
              <Ruler className="w-4 h-4" /> Not sure on dimensions? View our Official Size Guide
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Patch Type Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {patchTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:ring-2 hover:ring-rose-200"
              >
                <Link to={type.slug} className="h-64 overflow-hidden bg-gray-50 relative group rounded-t-3xl block">
                  <img
                    alt={type.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={type.imageSrc}
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-sm">
                    <type.icon className="w-6 h-6 text-rose-500" />
                  </div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl font-extrabold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-rose-600 font-medium text-sm mb-4 italic">{type.tagline}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm md:text-base">
                    {type.description}
                  </p>

                  <div className="bg-gray-50/90 p-5 rounded-xl mb-8 shadow-inner border border-rose-50">
                    <h4 className="font-bold text-gray-900 text-sm mb-3 uppercase tracking-wider">Why You'll Love It:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to={type.slug} className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
                      {type.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Which patch type is right for your studio?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
              Choose Chenille for a bold, vintage 3D look on heavy garments. Choose Embroidered for classic team logos with medium detail. Choose Woven for complex designs.
            </p>
            <Link to="/size-guide" className="text-sm font-bold text-gray-500 hover:text-rose-500 transition-all uppercase tracking-widest flex items-center justify-center gap-2">
              <Ruler className="w-4 h-4" /> Compare sizes for these styles here
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900 to-gray-700 text-white">
                  <th className="p-6 font-heading font-semibold text-lg">Patch Type</th>
                  <th className="p-6 font-heading font-semibold text-lg">Best For</th>
                  <th className="p-6 font-heading font-semibold text-lg">Visual Impact</th>
                  <th className="p-6 font-heading font-semibold text-lg">Durability</th>
                  <th className="p-6 font-heading font-semibold text-lg">Shipping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-rose-50/50 transition-colors">
                    <td className="p-6 font-bold text-gray-900">{row.type}</td>
                    <td className="p-6 text-gray-600">{row.bestFor}</td>
                    <td className="p-6 text-gray-600">{row.impact}</td>
                    <td className="p-6 text-gray-600">{row.durability}</td>
                    <td className="p-6">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                        {row.shipping}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Shipping & Style FAQs
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                question: "Is shipping really free worldwide?",
                answer: "Yes! We offer 100% Free Express Shipping to the USA, UK, Canada, and Australia on every custom patch order."
              },
              {
                question: "How long does international delivery take?",
                answer: "Once production is complete, international shipping typically takes 7-12 business days via premium carriers."
              },
              {
                question: "Can I see a design before I pay?",
                answer: "Absolutely. Stacy provides free digital mockups for all studios before we start stitching."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white/90 p-6 rounded-2xl shadow-inner border border-rose-100">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Ready to Pick Your Style?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Get premium patches for your team with <strong>$0 shipping fees</strong>. Worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/custom-order">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full px-12 py-6 text-xl shadow-2xl hover:shadow-3xl transition-all"
              >
                Start Your Order
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatchTypes;