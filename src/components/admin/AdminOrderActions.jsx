import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/axios";
import {
  Upload,
  CheckCircle,
  Send,
  DollarSign,
  MessageSquare,
  Truck,
  Paperclip,
  Clock,
  AlertCircle
} from "lucide-react";

const AdminOrderActions = ({ orderId, onActionComplete }) => {
  const adminToken = localStorage.getItem("adminToken");

  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  // Admin inputs
  const [manualPrice, setManualPrice] = useState("");
  const [adminNote, setAdminNote] = useState("");

  const fetchActions = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        `/order-actions/order/${orderId}`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );
      setActions(Array.isArray(res.data.data) ? res.data.data : []);
    } catch (err) {
      console.error("Action History Error:", err);
      setActions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (orderId) fetchActions();
  }, [orderId]);

  const handleQuickAction = async (e, actionType) => {
    const files = e?.target?.files || [];
    const normalizedAction = actionType === "dispatched" ? "dispatch" : actionType;
    const formData = new FormData();

    if (files.length > 0) {
      for (let file of files) {
        formData.append("files", file);
      }
    }

    formData.append("actionType", normalizedAction);
    formData.append("orderId", orderId);

    if (manualPrice) formData.append("price", manualPrice);
    if (adminNote) formData.append("adminNote", adminNote);

    try {
      setUploading(true);
      await api.post(
        `/order-actions/automate`,
        formData,
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      setManualPrice("");
      setAdminNote("");
      fetchActions();
      if (onActionComplete) onActionComplete();
      
      alert(`Action "${normalizedAction}" sent successfully!`);
    } catch (err) {
      console.error("Automation Error:", err);
      alert(err?.response?.data?.message || "Automation failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  // Helper function to format dates
  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Intl.DateTimeFormat('en-US', {
      month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
    }).format(new Date(dateString));
  };

  if (loading) {
    return (
      <div className="p-10 text-center bg-[#FCFBF9] rounded-3xl border border-slate-200">
        <div className="w-8 h-8 border-2 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          Loading Studio Data...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFBF9] rounded-3xl shadow-sm border border-slate-200 p-8 mt-8 relative overflow-hidden text-slate-800">
      {uploading && (
        <div className="absolute inset-0 bg-[#FCFBF9]/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <p className="font-bold text-rose-500 animate-pulse tracking-wide">
            PROCESSING COMMAND...
          </p>
        </div>
      )}

      {/* COMMAND CENTER HEADER */}
      <div className="mb-10">
        <h3 className="text-sm font-bold text-slate-800 tracking-widest uppercase mb-6 flex items-center gap-3">
          <span className="p-2 bg-rose-50 rounded-full">
            <Send size={16} className="text-rose-500" />
          </span>
          Studio Command Center
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          {/* PRICE INPUT */}
          <div>
            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest block mb-2">
              Set Quote Amount ($)
            </label>
            <div className="relative">
              <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
              <input
                type="number"
                value={manualPrice}
                onChange={(e) => setManualPrice(e.target.value)}
                placeholder="0.00"
                className="w-full pl-12 pr-4 py-3 bg-[#FCFBF9] border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none font-medium text-slate-700"
              />
            </div>
          </div>

          {/* NOTE INPUT */}
          <div>
            <label className="text-[10px] font-bold uppercase text-slate-400 tracking-widest block mb-2">
              Internal / Customer Note
            </label>
            <div className="relative">
              <MessageSquare size={16} className="absolute left-4 top-3.5 text-slate-300" />
              <textarea
                value={adminNote}
                onChange={(e) => setAdminNote(e.target.value)}
                placeholder="Add context to this action..."
                rows="1"
                className="w-full pl-12 pr-4 py-3 bg-[#FCFBF9] border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-200 focus:border-rose-400 transition-all outline-none resize-none text-sm text-slate-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <button
          onClick={() => handleQuickAction({ target: { files: [] } }, "submitted")}
          disabled={!manualPrice || uploading}
          className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-sm transition-all disabled:opacity-50"
        >
          <DollarSign className="mx-auto mb-2 text-slate-400 group-hover:text-rose-500 transition-colors" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Send Quote</span>
        </button>

        <label className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-sm transition-all cursor-pointer text-center">
          <Upload className="mx-auto mb-2 text-slate-400 group-hover:text-rose-500 transition-colors" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Upload Mockup</span>
          <input type="file" multiple hidden onChange={(e) => handleQuickAction(e, "mockupRequested")} />
        </label>

        <label className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-sm transition-all cursor-pointer text-center">
          <CheckCircle className="mx-auto mb-2 text-slate-400 group-hover:text-rose-500 transition-colors" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Final Proof</span>
          <input type="file" hidden onChange={(e) => handleQuickAction(e, "orderProof")} />
        </label>

        <button
          onClick={() => handleQuickAction({ target: { files: [] } }, "dispatched")}
          className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-sm transition-all"
        >
          <Truck className="mx-auto mb-2 text-slate-400 group-hover:text-rose-500 transition-colors" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Dispatch</span>
        </button>
      </div>

      {/* ACTIVITY TIMELINE (Now showing Files & Customer Messages) */}
      <div className="space-y-4">
        <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
          Action Log
        </h4>

        {actions.length === 0 ? (
          <p className="text-center text-sm text-slate-400 py-6">No studio actions recorded yet.</p>
        ) : (
          <div className="space-y-4">
            {actions.map((action) => (
              <div key={action._id} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
                
                {/* Header Row */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-700 bg-slate-100 px-2 py-1 rounded-md">
                      {action.type.replace('_', ' ')}
                    </span>
                    <div className="flex items-center gap-2 mt-2 text-slate-400 text-xs">
                      <Clock size={12} />
                      <span>Sent: {formatDate(action.createdAt)}</span>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <span className={`text-[10px] font-bold uppercase px-3 py-1 rounded-full border ${
                    action.status === 'APPROVED' ? 'bg-green-50 text-green-600 border-green-100' :
                    action.status === 'CHANGES_REQUESTED' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                    'bg-slate-50 text-slate-500 border-slate-200'
                  }`}>
                    {action.status.replace('_', ' ')}
                  </span>
                </div>

                {/* File Attachments */}
                {action.files && action.files.length > 0 && (
                  <div className="flex items-center gap-2 mt-2">
                    <Paperclip size={14} className="text-slate-400" />
                    <div className="flex flex-wrap gap-2">
                      {action.files.map((file, idx) => (
                        <a key={idx} href={file} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-500 hover:text-rose-600 underline underline-offset-2">
                          View Attachment {idx + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Customer Response / Feedback */}
                {action.customerMessage && (
                  <div className="mt-2 bg-[#FCFBF9] p-3 rounded-xl border border-slate-200 border-l-2 border-l-rose-400">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={14} className="text-rose-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Client Feedback • {formatDate(action.respondedAt)}
                        </p>
                        <p className="text-sm text-slate-700 italic">"{action.customerMessage}"</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrderActions;