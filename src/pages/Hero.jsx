import React from "react";
import { motion } from "framer-motion";
import { default as BaseButton } from "../components/ui/Button";
import { Sparkles } from "lucide-react";

const MotionButton = motion(BaseButton);

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("custom-order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 opacity-90" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">Custom Patches for Dancers</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Your Dance Story,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500">
                Beautifully Stitched
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Premium custom embroidered patches designed for dance teams, academies, and studios.
              Transform your vision into wearable art that celebrates every leap, turn, and performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <MotionButton
                onClick={scrollToForm}
                size="lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
              >
                Start Your Custom Order
              </MotionButton>

              <BaseButton
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                size="lg"
                variant="outline"
                className="border-2 border-rose-300 text-gray-700 hover:bg-rose-50 transition-all duration-300"
              >
                View Gallery
              </BaseButton>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-[500px] object-cover"
                alt="Dancers performing with custom patches on their costumes"
                src="https://images.unsplash.com/photo-1692783333593-e84b2eb6e1ee"
                loading="lazy"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg"
              >
                <p className="text-sm font-semibold text-gray-700">Premium Quality</p>
                <p className="text-xs text-gray-500">Trusted by 500+ Studios</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;