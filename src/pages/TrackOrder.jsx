import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Search, 
  Package, 
  CheckCircle2, 
  Circle, 
  Download, 
  MessageSquare, 
  AlertCircle,
  Clock,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const STEPS = [
  { key: "submitted", label: "Order Received", desc: "We've got your details." },
  { key: "quoteApproved", label: "Quote Approved", desc: "Pricing and timeline confirmed." },
  { key: "mockupRequested", label: "Mockup In Progress", desc: "Stacy is at the design desk." },
  { key: "mockupApproved", label: "Mockup Approved", desc: "Design finalized for stitching." },
  { key: "production", label: "In Production", desc: "Your patches are being crafted." },
  { key: "qualityCheck", label: "Quality Check", desc: "Inspecting every thread." },
  { key: "orderProof", label: "Final Proof Ready", desc: "Review your final product photos." },
  { key: "dispatched", label: "Dispatched", desc: "On its way to your studio!" },
  { key: "delivered", label: "Delivered", desc: "Enjoy your custom patches!" }
];

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (navigator.userAgent === "ReactSnap") {
      window.SNAP_READY = true;
    }
  }, []);

  const fetchAll = async (id) => {
    const res = await fetch(`/api/orders/track/${id}`);
    if (!res.ok) throw new Error("Not found");
    const o = await res.json();
    setOrder(o.data);
    
    // Fetch related actions (mockups/proofs)
    const actionRes = await fetch(`/api/order-actions/order/${o.data._id}`);
    const a = await actionRes.json();
    // Only show pending actions that require customer response
    setActions(a.data?.filter(x => x.status === "PENDING") || []);
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await fetchAll(orderId.trim());
    } catch (err) {
      setError("We couldn't find an order with that ID. Please check your confirmation email.");
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  /* ======================================================
      CUSTOMER RESPONSE ACTIONS (Single-Touch)
  ====================================================== */
  const handleResponse = async (token, type, message = "") => {
    setProcessing(true);
    try {
      const url = type === 'APPROVE' 
        ? `/api/order-actions/approve/${token}` 
        : `/api/order-actions/changes/${token}`;
      
      const res = await fetch(url, {
        method: type === 'APPROVE' ? 'GET' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: type === 'APPROVE' ? null : JSON.stringify({ message })
      });

      if (res.ok) {
        // Re-fetch to show updated progress bar
        await fetchAll(order.orderId);
        setNote("");
        alert(type === 'APPROVE' ? "Approved! Moving to the next step." : "Changes sent to Stacy.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f5] px-4 py-16 font-body">
      <Helmet>
        <title>Track Your Order | Custom Dance Patches</title>
        {/* ✅ FIXED: Added missing canonical tag */}
        <link rel="canonical" href="https://customdancepatches.com/track-order" />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
            <Package className="text-rose-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading uppercase">
            Track Your <span className="text-rose-600 font-light">Progress</span>
          </h1>
          <p className="text-gray-500 mt-2">Enter your Order ID from your confirmation email.</p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-[2rem] shadow-2xl p-2 mb-8 border border-gray-100">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
              <input
                value={orderId}
                onChange={e => setOrderId(e.target.value)}
                placeholder="Order ID (CDP-XXXXXXXX)"
                className="w-full pl-14 pr-4 py-5 rounded-[1.5rem] bg-gray-50 border-none focus:ring-2 focus:ring-rose-500 outline-none text-gray-900 font-bold"
                required
              />
            </div>
            <button 
              disabled={loading}
              className="bg-gray-900 hover:bg-black text-white font-black uppercase tracking-widest text-xs py-5 px-10 rounded-[1.5rem] transition-all disabled:opacity-50"
            >
              {loading ? "Locating..." : "Find My Order"}
            </button>
          </form>
        </div>

        {error && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 p-5 bg-rose-50 text-rose-700 rounded-2xl border border-rose-100 mb-6">
            <AlertCircle size={20} />
            <p className="text-sm font-bold">{error}</p>
          </motion.div>
        )}

        <AnimatePresence>
          {order && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
              
              {/* Vertical Pipeline */}
              
              <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 border border-gray-50">
                <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-10 flex items-center gap-2 text-gray-400">
                  <Clock size={16} className="text-rose-500" /> Live Pipeline
                </h2>
                
                <div className="space-y-0 relative">
                  <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100" />
                  
                  {STEPS.map((step) => {
                    const isCompleted = order.progress?.[step.key];
                    return (
                      <div key={step.key} className="relative pl-12 pb-10 last:pb-0">
                        <div className={`absolute left-0 top-1 w-8 h-8 rounded-full z-10 flex items-center justify-center transition-all ${isCompleted ? "bg-green-500 shadow-lg shadow-green-100 scale-110" : "bg-white border-2 border-gray-100"}`}>
                          {isCompleted ? (
                            <CheckCircle2 className="text-white w-4 h-4" />
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-100" />
                          )}
                        </div>
                        <div>
                          <h3 className={`font-black uppercase tracking-widest text-xs ${isCompleted ? "text-gray-900" : "text-gray-300"}`}>
                            {step.label}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ACTION CENTER - The "Handshake" with Stacy */}
              {actions.length > 0 && (
                <div className="bg-[#1e293b] rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-rose-400 mb-2 flex items-center gap-2">
                    <Zap size={16} /> Stacy Needs Your Input
                  </h2>
                  <p className="text-slate-400 text-xs mb-8">Review the files below and let us know if we're ready to stitch.</p>
                  
                  {actions.map(action => (
                    <div key={action._id} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] backdrop-blur-sm">
                      <p className="font-black text-white mb-6 uppercase tracking-widest text-[10px]">Proof for: {action.type.replace(/([A-Z])/g, ' $1')}</p>

                      <div className="flex flex-wrap gap-4 mb-8">
                        {action.files?.map((f, i) => (
                          <a 
                            key={i} 
                            href={f.startsWith('http') ? f : `${window.location.origin}${f}`}
                            target="_blank" rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-4 bg-white text-gray-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all shadow-xl"
                          >
                            <Download size={16} /> View Proof {i + 1}
                          </a>
                        ))}
                      </div>

                      <textarea
                        value={note}
                        onChange={e => setNote(e.target.value)}
                        placeholder="Any notes or color changes for Stacy?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-slate-600 focus:bg-white/10 focus:border-rose-500 transition-all outline-none resize-none mb-6"
                        rows={3}
                      />

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button 
                          disabled={processing}
                          onClick={() => handleResponse(action.token, 'APPROVE')}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest text-[10px] py-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20 disabled:opacity-50"
                        >
                          <CheckCircle2 size={16} /> Approve & Proceed
                        </button>
                        <button 
                          disabled={processing || !note}
                          onClick={() => handleResponse(action.token, 'CHANGES', note)}
                          className="flex-1 border-2 border-white/10 text-white font-black uppercase tracking-widest text-[10px] py-5 rounded-2xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 disabled:opacity-30"
                        >
                          <MessageSquare size={16} /> Request Changes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Support Footer */}
              <div className="text-center p-10 bg-white/50 rounded-[2rem] border border-gray-50">
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-6">Need help with your order?</p>
                <div className="flex justify-center gap-8">
                  <Link to="/contact" className="text-gray-900 font-black text-xs uppercase tracking-widest border-b-2 border-rose-200 hover:border-rose-500 transition-all pb-1">
                    Contact Stacy
                  </Link>
                  <Link to="/faq" className="text-gray-900 font-black text-xs uppercase tracking-widest border-b-2 border-rose-200 hover:border-rose-500 transition-all pb-1">
                    Shipping FAQ
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}