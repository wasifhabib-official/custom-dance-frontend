import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const SizeGuide = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 font-body text-gray-800">
      <Helmet>
        <title>Dance Patch Size Guide | Choose the Right Size for Your Uniforms</title>
        <meta name="description" content="Not sure what size patch to order? Our expert guide covers the best dimensions for dance varsity jackets, costumes, and studio bags. Free worldwide shipping." />
      </Helmet>

      {/* HEADER SECTION */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold text-rose-600 mb-4">
          Find Your Perfect Patch Size
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Whether it’s for the back of a team jacket or a sleeve detail, use our guide to ensure your studio branding looks balanced and professional.
        </p>
      </motion.div>

      {/* PATCH SIZE TABLE */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-rose-500 mb-4">
          Patch Size Guide
        </h2>

        <div className="overflow-x-auto shadow-lg rounded-2xl border border-rose-100">
          <table className="w-full text-sm bg-white rounded-lg">
            <thead className="bg-gradient-to-r from-rose-100 to-rose-200 text-rose-800">
              <tr>
                <th className="px-4 py-3 text-left">Size Label</th>
                <th className="px-4 py-3 text-left">Common Placements</th>
                <th className="px-4 py-3 text-left">Recommended Dimensions</th>
                <th className="px-4 py-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["3-Inch (Small)", "Sleeve logos, hats, wristbands", "2\" – 3\"", "Sleeve logos, studio bags, or chest placement on leotards."],
                ["5-Inch (Medium)", "Front-left chest, hoodies", "4\" – 5\"", "The standard size for the front-left chest of varsity jackets and hoodies."],
                ["8 to 12-Inch (Large)", "Back of jackets, center chest", "8\" – 12\"", "Designed for the back of competition jackets. This is the classic \"Statement\" size."],
                ["Custom", "Anywhere you dream of!", "Any size", "Unique shapes, toddler sizes to adult XL, & oversized designs"],
              ].map(([label, placement, size, use], i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-t border-rose-100 hover:bg-rose-50/40 transition"
                >
                  <td className="px-4 py-3 font-semibold">{label}</td>
                  <td className="px-4 py-3">{placement}</td>
                  <td className="px-4 py-3">{size}</td>
                  <td className="px-4 py-3">{use}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* PLACEMENT EXAMPLES */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-rose-500 mb-4">
          Visualize Your Design
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          A standard credit card is about 3.3 inches wide. Use one as a reference against your garment to see if our 3" or 5" patch fits your vision best. For back patches, we recommend measuring the width of the jacket between the shoulder seams.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Common Placement Areas
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Chest of leotards or tees</li>
          <li>Sleeves of jackets or hoodies</li>
          <li>Front of hats or beanies</li>
          <li>Center of dance bags or totes</li>
        </ul>
      </motion.div>

      {/* HOW TO MEASURE */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-rose-500 mb-4">
          How to Measure
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Use a measuring tape or ruler</li>
          <li>Measure the flat area where the patch will sit</li>
          <li>Add 0.5" margin for stitching or iron-on space</li>
          <li>For curved surfaces (like hats), measure only the visible flat area</li>
        </ul>
      </motion.div>

      {/* INTERNATIONAL SIZE CARDS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-rose-500 mb-4">
          International Size Conversion
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-16">
          {[
            [2, 5.08, 50.8], [3, 7.62, 76.2], [4, 10.16, 101.6],
            [5, 12.7, 127], [6, 15.24, 152.4], [7, 17.78, 177.8],
            [8, 20.32, 203.2], [9, 22.86, 228.6], [10, 25.4, 254],
            [11, 27.94, 279.4], [12, 30.48, 304.8],
          ].map(([inch, cm, mm], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-rose-100 shadow-md rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              <strong className="text-rose-600 text-lg">{inch}"</strong><br />
              <span className="text-gray-700">{cm} cm / {mm} mm</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AEO ANSWER BLOCK */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-20 bg-rose-50 p-8 rounded-2xl border border-rose-100"
      >
        <h2 className="text-2xl font-semibold text-rose-500 mb-4">What is the standard size for a dance varsity jacket patch?</h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            For most dance academies, a 5-inch patch is the standard for the chest logo. For the back of the jacket, an 8-inch to 10-inch patch is most common. At Stacy's Team, we offer custom sizing to ensure your logo fits perfectly on any garment, from toddler sizes to adult XL.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Can I order a custom size?</strong><br />
              Absolutely! Just upload your artwork and we’ll guide you to the exact dimensions needed for your specific fabric.
            </li>
            <li>
              <strong>What’s the best size for a team logo?</strong><br />
              Medium (3–5") works perfectly for chest or sleeve placement on most studio warm-ups.
            </li>
            <li>
              <strong>Will the patch shrink after washing?</strong><br />
              No — our custom embroidered and chenille patches are pre-treated and highly durable for life in a dance bag.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center"
      >
        <Link
          to="/custom-order"
          className="inline-block bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-rose-700 hover:shadow-2xl transition"
        >
          Start Your Custom Order
        </Link>
        <p className="text-sm text-gray-500 mt-3">
          Need help choosing a size?{" "}
          <Link to="/contact" className="text-rose-400 hover:underline">
            Contact Stacy
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SizeGuide;