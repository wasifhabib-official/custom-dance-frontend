import { motion } from "framer-motion";

const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const OrderButton = () => (
  <motion.button
    {...pulseAnimation}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-rose-700 transition"
  >
    Order Custom Patches
  </motion.button>
);

export default OrderButton;