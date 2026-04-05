import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from "../api/axios";
import { motion } from 'framer-motion';
import { MessageSquare, Send, ArrowLeft, CheckCircle } from 'lucide-react';

const RequestChanges = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    try {
      setStatus('submitting');
      await api.post(`/order-actions/respond/${token}`, {
        decision: 'CHANGES_REQUESTED',
        feedback
      });
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-xl text-center">
          <div className="bg-rose-100 text-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h1 className="text-2xl font-black uppercase text-gray-900">Notes Sent!</h1>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Stacy has received your feedback. She'll review the design and get back to you with an updated version shortly.
          </p>
          <button onClick={() => navigate('/')} className="mt-8 text-xs font-black uppercase text-rose-500 border-b-2 border-rose-100">Return to Home</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-6 font-body">
      <div className="max-w-lg w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-50">
        <div className="bg-[#1e293b] p-8 text-white text-center">
          <MessageSquare className="mx-auto mb-3 text-rose-500" size={32} />
          <h1 className="text-2xl font-black uppercase tracking-tight">Request Changes</h1>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Design Feedback Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="p-10">
          <p className="text-sm text-gray-500 mb-6 text-center leading-relaxed">
            Please describe the adjustments you'd like to see. Be as specific as possible regarding colors, sizing, or thread types!
          </p>

          <div className="relative mb-8">
            <textarea 
              required
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Example: Can we make the 'Elite Dance' text slightly larger and change the border to silver?"
              className="w-full p-6 bg-gray-50 rounded-3xl border-none focus:ring-2 focus:ring-rose-500 text-sm min-h-[150px] outline-none text-gray-700 font-medium transition-all"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button 
              type="submit"
              disabled={status === 'submitting' || !feedback}
              className="w-full bg-rose-500 text-white py-5 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-rose-600 transition-all flex items-center justify-center gap-3 shadow-lg shadow-rose-100 disabled:opacity-50"
            >
              {status === 'submitting' ? "Sending..." : <><Send size={16}/> Submit Revision Request</>}
            </button>
            
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="text-[10px] font-black uppercase text-gray-400 hover:text-gray-600 flex items-center justify-center gap-2"
            >
              <ArrowLeft size={14}/> Back to Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestChanges;