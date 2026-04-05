import React from "react";
import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Made with Passion",
      description:
        "Every patch is crafted with care and attention to detail, celebrating the artistry of dance.",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We use only the finest materials and embroidery techniques for patches that last.",
    },
    {
      icon: Users,
      title: "Trusted by Studios",
      description:
        "Over 500 dance academies and teams worldwide trust us with their custom patches.",
    },
    {
      icon: Sparkles,
      title: "Fully Customizable",
      description:
        "From concept to creation, we work with you to bring your unique vision to life.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stitching Dreams into Reality
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Custom Dance Patches, we understand that dance is more than
              movement—it's expression, passion, and identity. That's why we
              pour our hearts into creating custom embroidered patches that
              capture the spirit of your team, academy, or studio.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Whether you're commemorating a special performance, building team
              unity, or celebrating a milestone, our patches become cherished
              keepsakes that dancers wear with pride.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of customization and the importance of
              trust. Every order is handled with professionalism, transparency,
              and a genuine commitment to exceeding your expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[500px] object-cover"
                alt="Close-up of custom embroidered dance patches being created"
                src="https://images.unsplash.com/photo-1653996733460-b051f436615a"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6"
                aria-hidden="true"
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;