import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button"; // ✅ correct path if in components/sections

const CallToAction = () => {
  return (
    <section className="bg-rose-600 py-16 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-4">
          Let’s Turn Your Ideas Into Reality
        </h2>
        <p className="text-lg mb-8">
          Whether you’re a dance academy, a team, or an individual performer —
          we’ll help you design custom patches that shine on stage.
        </p>
        <Link to="/custom-order" aria-label="Start your custom order">
          <Button className="bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-rose-100 transition">
            Start Your Order
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;