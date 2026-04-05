import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  const patches = [
    {
      title: "Ballet Academy Crest",
      description: "Elegant embroidered crest for classical ballet school",
      image: "https://images.unsplash.com/photo-1653996733460-b051f436615a",
    },
    {
      title: "Hip-Hop Crew Logo",
      description: "Bold street-style patch with vibrant colors",
      image: "https://images.unsplash.com/photo-1478442876791-deca00c8424b",
    },
    {
      title: "Contemporary Dance Studio",
      description: "Minimalist design with flowing movement",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
      title: "Competition Team Badge",
      description: "Championship-worthy team identification",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    },
    {
      title: "Dance Recital Commemorative",
      description: "Special event patches for memorable performances",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      title: "Studio Anniversary Patch",
      description: "Celebrating milestones with custom designs",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Patch Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of custom patches created for dance teams and academies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patches.map((patch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={patch.title}
                  src={patch.image}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{patch.title}</h3>
                <p className="text-gray-600">{patch.description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;