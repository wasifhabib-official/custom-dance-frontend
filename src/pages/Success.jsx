import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Mail, 
  Clock, 
  Instagram, 
  ArrowRight, 
  Sparkles
} from "lucide-react";
import Button from "../components/ui/Button";

const Success = () => {
  return (
    <div className="min-h-screen bg-white font-body text-gray-900">
      <Helmet>
        <title>Order Received | We're On It!</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Main Success Card */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight font-heading">
              Got it! Your <span className="text-rose-600">Mockup</span> is Next.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Thanks for trusting me with your studio's vision. I've received your details and I'm personally heading to the design desk now.
            </p>
          </motion.div>

          {/* Expectations Grid */}
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 items-start"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Mail className="text-rose-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Check Your Inbox</h3>
                <p className="text-sm text-gray-500 leading-relaxed">I've sent a confirmation email. If you don't see it, check your 'Promotions' or 'Spam' folder!</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 items-start"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <Clock className="text-rose-500 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">24-Hour Mockup</h3>
                <p className="text-sm text-gray-500 leading-relaxed">I usually have your digital mockup ready within 1 business day. Keep an eye out for a message from Stacy.</p>
              </div>
            </motion.div>
          </div>

          {/* Social Engagement Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-rose-50 p-8 rounded-3xl border border-rose-100 relative overflow-hidden"
          >
            <Sparkles className="absolute top-4 right-4 text-rose-200 w-12 h-12" />
            <h3 className="text-2xl font-bold mb-4 font-heading">While you wait...</h3>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">
              Come see what other studios are creating! I post our latest varsity jackets and sequin patches daily on Instagram.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://instagram.com/customdancepatches" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all shadow-lg"
              >
                <Instagram size={20} /> Follow on Instagram
              </a>
              <Link to="/blog">
                <Button variant="outline" className="w-full sm:w-auto border-rose-200 text-rose-600 hover:bg-white px-8 py-4 font-bold">
                  Read Design Tips <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="mt-12">
            <Link to="/" className="text-gray-400 hover:text-rose-500 text-sm font-medium transition-colors">
              ← Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;