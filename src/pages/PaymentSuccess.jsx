import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('id');

  useEffect(() => {
    // Celebration effect for the customer!
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fbbf24', '#3b82f6']
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center p-6 font-body">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-gray-50 text-center"
      >
        {/* Decorative Top Bar */}
        <div className="h-3 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500" />
        
        <div className="p-10 md:p-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-25" />
            <div className="relative bg-green-500 text-white p-6 rounded-full shadow-lg shadow-green-100">
              <CheckCircle size={48} strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="text-4xl font-black text-gray-900 uppercase font-heading tracking-tight mb-4">
            Payment <span className="text-green-500">Confirmed</span>
          </h1>
          
          <p className="text-gray-500 font-medium text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Thank you! Your order <span className="text-gray-900 font-bold">#{orderId}</span> is now moving to the production floor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-left">
              <Package className="text-rose-500 mb-3" size={24} />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Step 5 Activated</h4>
              <p className="text-sm font-bold text-gray-800">Production Started</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 text-left">
              <Star className="text-amber-500 mb-3" size={24} />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Quality Check</h4>
              <p className="text-sm font-bold text-gray-800">Stacy's Personal Review</p>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => navigate(`/track-order?id=${orderId}`)}
              className="w-full bg-[#1e293b] text-white py-6 rounded-3xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-rose-500 transition-all shadow-xl"
            >
              Track Live Progress <ArrowRight size={18} />
            </button>
            
            <button 
              onClick={() => navigate('/')}
              className="text-[10px] font-black uppercase text-gray-400 hover:text-rose-500 transition-all tracking-[0.2em]"
            >
              Back to Home
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-t border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            A confirmation email has been sent to your studio.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;