import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const ConfirmationMessage = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 300 }}
          className="flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-16 h-16 text-rose-500" />
        </motion.div>

        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
          Thank You — Your Request Is Locked In
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We’ve received your details and our team is already reviewing them.
          Expect a response within the next few hours. If we need anything else, we’ll reach out directly.
        </p>
        <p className="text-gray-400 text-sm">
          In the meantime, feel free to explore more designs or get inspired.
        </p>
      </motion.div>
    </div>
  );
};

export default ConfirmationMessage;