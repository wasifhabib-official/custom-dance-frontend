import { motion } from "framer-motion";

const AnnouncementBanner = () => {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-rose-600 text-white text-sm py-2 px-4 text-center font-medium shadow-md"
    >
      🎉 Get <strong>FREE shipping</strong> on orders over $30!
    </motion.div>
  );
};

export default AnnouncementBanner;