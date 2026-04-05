import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api/axios";
import {
  ChevronLeft,
  FileText,
  User,
  Package,
  Truck,
  CreditCard,
  CheckCircle,
  History,
  MessageSquare,
  AlertCircle,
  PlusCircle,
  Edit2,
  Save,
  X,
  Download,
  Lock,
  Bell
} from "lucide-react";

const BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace("/api", "").replace(/\/$/, "");

// Helper to build the correct artwork URL
const getArtworkUrl = (artwork) => {
  if (!artwork) return null;
  const pathString = typeof artwork === 'object' ? artwork.fileUrl : artwork;
  
  if (typeof pathString !== 'string') return null;
  if (pathString.startsWith('http')) return pathString;
  
  const cleanArtwork = pathString.replace(/^\/+/, ''); 
  
  if (cleanArtwork.startsWith('uploads/')) {
      return `${BASE_URL}/${cleanArtwork}`;
  }
  return `${BASE_URL}/uploads/${cleanArtwork}`;
};

// Helper to format size objects cleanly
const formatSize = (sizeObj) => {
  if (!sizeObj) return "N/A";
  const w = sizeObj.width || 0;
  const h = sizeObj.height || 0;
  if (w === 0 && h === 0) return "N/A";
  return `${w} × ${h}`;
};

const AdminOrderDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const adminToken = localStorage.getItem("adminToken");

  const [order, setOrder] = useState(null);
  const [actions, setActions] = useState([]);
  const [loading, setLoading] = useState(true);

  const [quotePrice, setQuotePrice] = useState("");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");
  const [sendingQuote, setSendingQuote] = useState(false);
  const [remindingQuote, setRemindingQuote] = useState(false); 
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");
  const [paymentRef, setPaymentRef] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);

  const [selectedActionType, setSelectedActionType] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [remindingActionId, setRemindingActionId] = useState(null);

  const [isEditingSpecs, setIsEditingSpecs] = useState(false);
  const [specForm, setSpecForm] = useState({});
  const [savingSpecs, setSavingSpecs] = useState(false);

  const fetchData = async () => {
    try {
      const orderRes = await api.get(
        `/admin/orders/${id}/view`,
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      if (orderRes.data.success) {
        const data = orderRes.data.data;
        setOrder(data);

        setSpecForm({
          patchType: data.specs?.patchType || "",
          quantity: data.specs?.quantity || 0,
          backing: data.specs?.backing || "",
          border: data.specs?.border || "",
          thread: data.specs?.thread || "",
          usageType: data.specs?.usageType || "",
          width: data.specs?.size?.inches?.width || data.specs?.sizeInches?.width || data.specs?.width || 0,
          height: data.specs?.size?.inches?.height || data.specs?.sizeInches?.height || data.specs?.height || 0,
          unit: 'in',
          designName: data.specs?.designName || "",
          designNotes: data.specs?.designNotes || ""
        });

        setQuotePrice("");
        setQuoteCurrency(data.financials?.currency || "USD");

        try {
          const actionRes = await api.get(
            `/order-actions/order/${data._id}`,
            { headers: { Authorization: `Bearer ${adminToken}` } }
          );
          if (actionRes.data.success) {
            setActions(actionRes.data.data || []);
          }
        } catch (actionErr) {
          console.error("Failed to load actions:", actionErr);
        }
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!adminToken) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [id]);

  const downloadProductionSheet = async () => {
    try {
      const response = await api.get(
        `/admin/orders/${order._id}/production-sheet`,
        {
          headers: { Authorization: `Bearer ${adminToken}` },
          responseType: "blob"
        }
      );

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Production-Sheet-${order.orderId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);

    } catch (err) {
      console.error("Download error:", err);
      alert("Failed to download production sheet.");
    }
  };

  /* ✅ UPDATED: Now dynamically accepts any file object */
  const downloadArtworkFile = async (fileObj) => {
    try {
      const url = getArtworkUrl(fileObj);
      if (!url) return;

      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data]);
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      
      const ext = typeof fileObj === "object"
        ? fileObj.fileName?.split(".").pop()
        : fileObj?.split(".").pop();
        
      let fileName = "Artwork"; 
      if (typeof fileObj === 'object' && fileObj.fileName) {
        fileName = fileObj.fileName;
      } else if (typeof fileObj === 'string') {
        fileName = fileObj.split('/').pop().split('\\').pop();
      }

      if (!fileName.includes('.')) {
        fileName = `${fileName}.${ext || 'png'}`;
      }
        
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);

    } catch (err) {
      console.error("Artwork download failed, opening in new tab:", err);
      window.open(getArtworkUrl(fileObj), '_blank');
    }
  };

  const handleSaveSpecs = async () => {
    if (!window.confirm("Are you sure you want to save these specification changes?")) return;
    
    setSavingSpecs(true);
    try {
      const payload = {
        patchType: specForm.patchType,
        quantity: Number(specForm.quantity),
        backing: specForm.backing,
        border: specForm.border,
        thread: specForm.thread,
        usageType: specForm.usageType,
        width: Number(specForm.width),
        height: Number(specForm.height),
        sizeUnit: specForm.unit || "in",
        designName: specForm.designName,
        designNotes: specForm.designNotes
      };

      const res = await api.put(
        `/admin/orders/${order._id}/specs`,
        payload,
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      if (res.data.success) {
        setIsEditingSpecs(false);
        await fetchData();
      } else {
        alert(res.data.message || "Update failed.");
      }
    } catch (err) {
      alert("Failed to update: " + (err.response?.data?.message || err.message));
    } finally {
      setSavingSpecs(false);
    }
  };

  const sendQuote = async () => {
    if (!quotePrice || Number(quotePrice) <= 0) return alert("Invalid price");
    if (!window.confirm(`Are you sure you want to set the new quote price to ${quoteCurrency} ${quotePrice}?`)) return;

    try {
      setSendingQuote(true);
      await api.put(
        `/admin/orders/${order._id}/send-quote`,
        { price: Number(quotePrice), currency: quoteCurrency },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      fetchData();
    } catch (err) {
      alert(`Quote Failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setSendingQuote(false);
    }
  };

  const handleRemindQuote = async () => {
    if (!window.confirm("Are you sure you want to remind the customer about their pending quote?")) return;

    try {
      setRemindingQuote(true);
      const res = await api.post(
        `/order-actions/remind-quote/${order._id}`, 
        {},
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      if (res.data.success) {
        alert("Quote reminder sent!");
        fetchData(); 
      }
    } catch (err) {
      alert(`Reminder Failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setRemindingQuote(false);
    }
  };

  const handleManualPayment = async (e) => {
    e.preventDefault();
    if (!paymentAmount) return alert("Invalid amount");
    if (!window.confirm(`Are you sure you want to record a ${paymentMethod} payment of ${quoteCurrency} ${paymentAmount}?`)) return;

    try {
      setProcessingPayment(true);
      await api.post(
        `/admin/orders/${order._id}/manual-payment`,
        { amount: Number(paymentAmount), method: paymentMethod, reference: paymentRef },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      setShowPaymentForm(false);
      setPaymentAmount("");
      setPaymentRef("");
      fetchData();
    } catch (err) {
      alert(`Payment Failed: ${err.response?.data?.message || err.message}`);
    } finally {
      setProcessingPayment(false);
    }
  };

  const handleSendReminder = async (actionId) => {
    if (!window.confirm("Are you sure you want to send a reminder email to the customer?")) return;

    setRemindingActionId(actionId);
    try {
      const res = await api.post(
        `/order-actions/remind/${actionId}`,
        {},
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      if (res.data.success) {
        alert("Reminder sent successfully!");
        fetchData();
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to send reminder.");
    } finally {
      setRemindingActionId(null);
    }
  };

  const handleProgressConfirm = (step, stepDisplayName) => {
    if (window.confirm(`Are you sure you want to advance the workflow to: ${stepDisplayName}?`)) {
      updateProgress(step);
    }
  };

  const updateProgress = async (step) => {
    try {
      await api.put(
        `/orders/${order._id}/progress`,
        { step },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );
      fetchData();
    } catch (err) {
      alert(`Backend Validation Failed:\n\n${err.response?.data?.message || err.message}`);
    }
  };

  const handleFileSelect = async (e) => {
    const files = Array.from(e.target.files);
    if (!files || files.length === 0) return;

    const fileNames = files.map(f => `- ${f.name}`).join("\n");
    const actionLabel = selectedActionType === "PRODUCTION_PROOF" ? "Production Proof" : "Mockup";
    
    const confirmUpload = window.confirm(`Are you sure you want to send the following ${files.length} file(s) as a ${actionLabel}?\n\n${fileNames}`);
    
    if (!confirmUpload) {
      document.getElementById("actionFileInput").value = "";
      return; 
    }

    try {
      setUploading(true);
      const uploadedUrls = [];

      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        
        const uploadRes = await api.post(`/uploads`, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        
        uploadedUrls.push(uploadRes.data.fileUrl);
      }

      await api.post(
        `/order-actions/${order._id}/create`,
        { type: selectedActionType, files: uploadedUrls },
        { headers: { Authorization: `Bearer ${adminToken}` } }
      );

      fetchData();
    } catch (err) {
      alert(`Failed to upload files:\n\n${err.response?.data?.message || err.message}`);
    } finally {
      setUploading(false);
      document.getElementById("actionFileInput").value = "";
    }
  };

  if (loading || !order) return <div className="h-screen flex items-center justify-center font-bold text-slate-500 bg-[#faf9f6]">Loading order details...</div>;

  const payments = order?.financials?.payments || [];
  const totalPaid = payments.reduce((sum, p) => sum + (p?.amount || 0), 0);
  const quoteTotal = order?.financials?.quotePrice || 0;
  let balance = Math.max(0, quoteTotal - totalPaid);
  if (order?.financials?.isPaid) balance = 0;
  const isFullyPaid = order?.financials?.isPaid || balance <= 0.01;

  const validActions = actions.filter(a => ["MOCKUP", "PRODUCTION_PROOF", "SPEC_CHANGE"].includes(a?.type));

  const STEP_ORDER = ["submitted", "mockupRequested", "production", "qualityCheck", "orderProof", "dispatched", "delivered"];
  const completedSteps = STEP_ORDER.filter(s => order?.progress?.[s] === true);
  const lastCompletedStep = completedSteps.length > 0 ? completedSteps[completedSteps.length - 1] : "submitted";
  const currentIndex = STEP_ORDER.indexOf(lastCompletedStep);
  const expectedNextStep = STEP_ORDER[currentIndex + 1];

  const isProductionLocked = expectedNextStep === "production" && (!order?.financials?.isPaid || !order?.progress?.mockupApproved);
  const isDispatchLocked = expectedNextStep === "dispatched" && (!order?.progress?.production || !order?.progress?.qualityCheck || !order?.progress?.orderProofApproved);

  const sizeIn = order?.specs?.size?.inches || order?.specs?.sizeInches;
  const sizeCm = order?.specs?.size?.cm || order?.specs?.sizeCm;
  const sizeMm = order?.specs?.size?.mm || order?.specs?.sizeMm;

  return (
    <div className="min-h-screen bg-[#faf9f6] p-6 lg:p-10 text-slate-800 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

        <div>
          <button onClick={() => navigate("/admin")} className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400 mb-2 hover:text-slate-700 transition-colors">
            <ChevronLeft size={14} /> Back to Dashboard
          </button>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900">Order #{String(order?.orderId || "").split("-").pop() || "N/A"}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-8 lg:col-span-2">

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xs font-black uppercase mb-6 flex gap-2 text-slate-500"><MessageSquare size={14} /> Feedback & Approvals</h3>
              
              <div className="mb-6 flex gap-2">
                <button onClick={() => { setSelectedActionType("MOCKUP"); document.getElementById("actionFileInput").click(); }} disabled={uploading} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors flex items-center gap-2 disabled:opacity-50">
                  <PlusCircle size={14}/> {uploading && selectedActionType === "MOCKUP" ? "Uploading..." : "Send Mockup"}
                </button>
                <button onClick={() => { setSelectedActionType("PRODUCTION_PROOF"); document.getElementById("actionFileInput").click(); }} disabled={uploading} className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-xs font-bold border border-slate-200 hover:bg-slate-100 transition-colors flex items-center gap-2 disabled:opacity-50">
                  <PlusCircle size={14}/> {uploading && selectedActionType === "PRODUCTION_PROOF" ? "Uploading..." : "Send Proof"}
                </button>
              </div>

              {validActions.length === 0 ? <p className="text-center text-slate-400 text-xs italic py-4">No actions sent yet.</p> : (
                <div className="space-y-4">
                  {validActions.map(action => (
                    <div key={action._id} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-slate-700">
                          {action.type === 'SPEC_CHANGE' ? 'Specification Change' : String(action.type || "").replace(/_/g, ' ')}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${action.status === 'APPROVED' ? 'bg-emerald-50 text-emerald-700' : action.status === 'CHANGES_REQUESTED' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'}`}>
                          {String(action.status || "UNKNOWN").replace(/_/g, ' ')}
                        </span>
                      </div>
                      
                      {action.files && action.files.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3 mt-2">
                           {action.files.map((f, i) => (
                              <a key={i} href={getArtworkUrl(f)} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded border border-blue-100 hover:bg-blue-100 transition-colors">
                                View File {i + 1}
                              </a>
                           ))}
                        </div>
                      )}

                      {action.customerMessage && <p className="text-xs italic text-slate-600 bg-white p-3 rounded-xl border border-slate-100 shadow-sm mt-2">"{action.customerMessage}"</p>}
                      
                      {action.status === 'PENDING' && (
                        <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-between items-center">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            Reminders Sent: {action.reminderCount || 0}
                            {action.lastRemindedAt && ` (Last: ${new Date(action.lastRemindedAt).toLocaleDateString()})`}
                          </span>
                          <button
                            onClick={() => handleSendReminder(action._id)}
                            disabled={remindingActionId === action._id}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 rounded-lg text-[10px] font-bold transition-colors disabled:opacity-50"
                          >
                            <Bell size={12} />
                            {remindingActionId === action._id ? "Sending..." : "Send Reminder"}
                          </button>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black uppercase flex gap-2 text-slate-500"><CheckCircle size={14} /> Workflow Progression</h3>
                <span className="text-[10px] font-bold uppercase text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">Strict Sequence</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <button disabled={expectedNextStep !== "mockupRequested"} onClick={() => handleProgressConfirm("mockupRequested", "1. Request Mockup")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "mockupRequested" ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  1. Request Mockup
                </button>
                <button disabled={expectedNextStep !== "production" || isProductionLocked} onClick={() => handleProgressConfirm("production", "2. Start Production")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "production" && !isProductionLocked ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  2. Start Production
                </button>
                <button disabled={expectedNextStep !== "qualityCheck"} onClick={() => handleProgressConfirm("qualityCheck", "3. QC Pass")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "qualityCheck" ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  3. QC Pass
                </button>
                <button disabled={expectedNextStep !== "orderProof"} onClick={() => handleProgressConfirm("orderProof", "4. Proof Sent")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "orderProof" ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  4. Proof Sent
                </button>
                <button disabled={expectedNextStep !== "dispatched" || isDispatchLocked} onClick={() => handleProgressConfirm("dispatched", "5. Dispatch")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "dispatched" && !isDispatchLocked ? 'bg-slate-900 text-white shadow-sm hover:bg-slate-800' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  5. Dispatch
                </button>
                <button disabled={expectedNextStep !== "delivered"} onClick={() => handleProgressConfirm("delivered", "6. Complete")} className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${expectedNextStep === "delivered" ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700' : 'bg-slate-50 text-slate-400 border border-slate-200 cursor-not-allowed'}`}>
                  6. Complete
                </button>
              </div>
              
              {isProductionLocked && (
                <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl flex gap-2 items-start mt-4 animate-in fade-in">
                  <Lock size={14} className="text-rose-500 mt-0.5" />
                  <p className="text-[10px] text-rose-700 font-bold uppercase tracking-wide">Production Locked: Awaiting Payment or Mockup Approval.</p>
                </div>
              )}
              {isDispatchLocked && (
                <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl flex gap-2 items-start mt-4 animate-in fade-in">
                  <Lock size={14} className="text-rose-500 mt-0.5" />
                  <p className="text-[10px] text-rose-700 font-bold uppercase tracking-wide">Dispatch Locked: Awaiting Production, QC, and Proof Approval.</p>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">Milestone Tracker</p>
                {order?.progress && typeof order.progress === 'object' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {STEP_ORDER.map((step, idx) => {
                      const isComplete = order.progress[step];
                      const stepName = step.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                      return (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/30">
                          <p className={`font-bold text-xs ${isComplete ? 'text-slate-800' : 'text-slate-400'}`}>{stepName}</p>
                          <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${isComplete ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                            {isComplete ? 'Completed' : 'Pending'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 italic">No detailed progress tracking available.</p>
                )}
              </div>
            </section>

            {/* COMBINED DESIGN & SPECIFICATIONS SECTION */}
            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm relative transition-all">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xs font-black uppercase flex gap-2 text-slate-500"><Package size={14} /> Design & Specifications</h3>
                <div className="flex gap-2">
                  <button
                    onClick={downloadProductionSheet}
                    title="Download Production Sheet"
                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg hover:bg-slate-100 border border-slate-200 text-[10px] font-bold transition-colors"
                  >
                    <Download size={12} /> Prod. Sheet
                  </button>
                  {!isEditingSpecs ? (
                    <button onClick={() => setIsEditingSpecs(true)} className="flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 text-[10px] font-bold transition-colors">
                      <Edit2 size={12} /> Edit
                    </button>
                  ) : (
                    <button onClick={() => setIsEditingSpecs(false)} className="flex items-center gap-1 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 text-[10px] font-bold transition-colors">
                      <X size={12} /> Cancel
                    </button>
                  )}
                </div>
              </div>

              {!isEditingSpecs ? (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    
                    {/* ✅ ALL FILES NOW RENDER HERE */}
                    {(() => {
                      const files = [];
                      const primary = order?.specs?.artwork || order?.artwork;
                      if (primary) files.push(primary);
                      
                      const extra = order?.specs?.additionalFiles || order?.additionalFiles || [];
                      if (Array.isArray(extra)) {
                        files.push(...extra);
                      }

                      if (files.length === 0) return null;

                      return (
                        <div className="w-full md:w-1/3 flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                          {files.map((file, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50 p-2 relative group shrink-0">
                              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[9px] font-black text-slate-600 uppercase shadow-sm z-10 border border-slate-100">
                                {idx === 0 ? "Primary Artwork" : `Attachment ${idx}`}
                              </div>
                              <img
                                src={getArtworkUrl(file)}
                                alt={`Artwork ${idx}`}
                                className="w-full h-auto object-contain rounded-xl"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  const parent = e.target.parentNode;
                                  const fallback = document.createElement('div');
                                  fallback.className = 'flex flex-col items-center justify-center p-8 text-slate-400 gap-2 bg-slate-100/50 rounded-xl h-48';
                                  const rawName = typeof file === 'object' ? file.fileName : file;
                                  fallback.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg><span class="text-[10px] font-bold text-center break-all px-2">${rawName || 'Unknown File'}</span>`;
                                  parent.appendChild(fallback);
                                }}
                              />
                              <button 
                                onClick={() => downloadArtworkFile(file)}
                                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm shadow-sm border border-slate-200 text-slate-800 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2"
                              >
                                <Download size={12} /> Save
                              </button>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                    
                    <div className="w-full flex-1 space-y-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Design Name</span>
                        <h4 className="text-lg font-bold text-slate-800">{order?.specs?.designName || "Untitled Design"}</h4>
                      </div>
                      
                      {order?.specs?.designNotes && (
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 mb-1 block">Customer Notes</span>
                          <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 whitespace-pre-wrap leading-relaxed">
                            {order.specs.designNotes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Patch Type</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.patchType || "N/A"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Quantity</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.quantity || 0}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Primary Usage</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.usageType || "N/A"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Backing</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.backing || "N/A"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Border</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.border || "N/A"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Thread</span>
                      <strong className="text-sm text-slate-800">{order?.specs?.thread || "N/A"}</strong>
                    </div>

                    <div className="col-span-2 md:col-span-3 lg:col-span-2 pt-2">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Dimensions (All Units)</span>
                      <div className="grid grid-cols-3 gap-2 text-sm text-slate-800">
                        <div className="flex flex-col items-center justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                          <span className="text-[10px] text-slate-400 font-bold mb-0.5">INCHES</span>
                          <strong>{formatSize(sizeIn) !== "N/A" ? formatSize(sizeIn) : `${order?.specs?.width || 0}" × ${order?.specs?.height || 0}"`}</strong>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                          <span className="text-[10px] text-slate-400 font-bold mb-0.5">CM</span>
                          <strong>{formatSize(sizeCm)}</strong>
                        </div>
                        <div className="flex flex-col items-center justify-center bg-slate-50 py-2 rounded-xl border border-slate-100">
                          <span className="text-[10px] text-slate-400 font-bold mb-0.5">MM</span>
                          <strong>{formatSize(sizeMm)}</strong>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Design Name</label>
                      <input type="text" className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.designName || ""} onChange={e => setSpecForm({...specForm, designName: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Patch Type</label>
                      <input type="text" className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.patchType || ""} onChange={e => setSpecForm({...specForm, patchType: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Quantity</label>
                      <input type="number" className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.quantity || ""} onChange={e => setSpecForm({...specForm, quantity: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Backing</label>
                      <select className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.backing || ""} onChange={e => setSpecForm({...specForm, backing: e.target.value})}>
                        <option value="Iron On">Iron On</option>
                        <option value="Velcro (Hook & Loop)">Velcro</option>
                        <option value="Sew On">Sew On</option>
                        <option value="Peel & Stick">Peel & Stick</option>
                        <option value="PVC">PVC</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Width (in)</label>
                      <input type="number" step="0.1" className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.width || ""} onChange={e => setSpecForm({...specForm, width: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Height (in)</label>
                      <input type="number" step="0.1" className="w-full p-2.5 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" value={specForm.height || ""} onChange={e => setSpecForm({...specForm, height: e.target.value})} />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Design Notes</label>
                    <textarea className="w-full p-3 border border-slate-200 rounded-xl text-sm font-medium focus:border-slate-400 outline-none bg-slate-50" rows="3" value={specForm.designNotes || ""} onChange={e => setSpecForm({...specForm, designNotes: e.target.value})} />
                  </div>
                  
                  <button onClick={handleSaveSpecs} disabled={savingSpecs} className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-bold flex justify-center gap-2 items-center shadow-sm transition-all mt-4">
                    {savingSpecs ? "Saving..." : <><Save size={16} /> Save & Update System</>}
                  </button>
                </div>
              )}
            </section>

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
              <h3 className="text-xs font-black uppercase mb-6 flex gap-2 text-slate-500"><History size={14} /> System Audit Log</h3>
              {Array.isArray(order?.auditLog) && order.auditLog.length > 0 ? (
                <div className="max-h-64 overflow-y-auto pr-3 space-y-3 scrollbar-thin">
                  {order.auditLog.map((log, idx) => (
                    <div key={idx} className="flex gap-3 text-sm border border-slate-100 bg-slate-50/50 p-3 rounded-2xl">
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-bold text-slate-700">{log?.message || log?.action || 'System Action'}</p>
                          <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">
                            {log?.timestamp ? new Date(log.timestamp).toLocaleString() : 'Unknown Time'}
                          </span>
                        </div>
                        {log?.details && <p className="text-xs text-slate-500 mb-2">{log.details}</p>}
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider inline-flex items-center gap-1">
                          <User size={10} /> {log?.user || 'System'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-400 italic text-center py-4 bg-slate-50 rounded-2xl border border-slate-100">No audit logs recorded for this order.</p>
              )}
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xs font-black uppercase mb-6 flex gap-2 text-slate-500"><User size={14} /> Customer Profile</h3>
              <div className="space-y-4">
                <div><span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Name</span><p className="font-bold text-sm text-slate-800">{order?.customer?.name || "N/A"}</p></div>
                <div><span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Studio / Company</span><p className="font-bold text-sm text-slate-800">{order?.customer?.company || order?.customer?.organization || "N/A"}</p></div>
                <div><span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Email</span><p className="font-bold text-sm text-slate-800 break-all">{order?.customer?.email || "N/A"}</p></div>
                <div><span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Phone</span><p className="font-bold text-sm text-slate-800">{order?.customer?.phone || "-"}</p></div>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xs font-black uppercase mb-6 flex gap-2 text-slate-500"><CreditCard size={14} /> Financial Ledger</h3>
              <div className="flex justify-between mb-6 gap-3">
                <div className="text-center p-4 bg-slate-50 rounded-2xl w-1/2 border border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Total</span>
                  <p className="font-black text-xl text-slate-800">{quoteCurrency} {quoteTotal.toFixed(2)}</p>
                </div>
                <div className={`text-center p-4 rounded-2xl w-1/2 border ${isFullyPaid ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-rose-50 border-rose-100 text-rose-700'}`}>
                  <span className="text-[10px] uppercase font-bold opacity-70 block mb-1">Balance</span>
                  <p className="font-black text-xl">{quoteCurrency} {balance.toFixed(2)}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm border-b border-slate-100 pb-5 mb-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-xs font-medium">Quote Status</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wide ${String(order?.financials?.quoteStatus).toLowerCase() === 'approved' ? 'bg-emerald-50 text-emerald-600' : (String(order?.financials?.quoteStatus).toLowerCase() === 'sent' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600')}`}>
                      {order?.financials?.quoteStatus || "Pending"}
                    </span>
                    
                    {(String(order?.financials?.quoteStatus).toLowerCase() === 'sent' || 
                      (String(order?.financials?.quoteStatus).toLowerCase() === 'approved' && !isFullyPaid)) && (
                      <button
                        onClick={handleRemindQuote}
                        disabled={remindingQuote}
                        className="flex items-center gap-1.5 px-2 py-1 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm rounded-lg text-[10px] font-bold text-slate-600 transition-colors disabled:opacity-50"
                        title={String(order?.financials?.quoteStatus).toLowerCase() === 'approved' ? "Send Payment Reminder" : "Send Quote Reminder"}
                      >
                        <Bell size={12} />
                        {remindingQuote ? "..." : "Remind"}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {payments.length > 0 && (
                <div className="mb-6 space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-3">Transaction History</p>
                  {payments.map((p, i) => (
                    <div key={i} className="flex flex-col text-xs p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="flex justify-between font-bold mb-1">
                        <span className="text-slate-700">{p?.method || 'Unknown'}</span>
                        <span className="text-emerald-600">+{p?.amount?.toFixed(2) || '0.00'}</span>
                      </div>
                      {(p?.date || p?.reference) && (
                        <div className="flex justify-between text-[10px] text-slate-400 mt-1 pt-1 border-t border-slate-200">
                          <span>{p?.date ? new Date(p.date).toLocaleDateString() : ''}</span>
                          <span>{p?.reference || ''}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {!showPaymentForm && <button onClick={() => setShowPaymentForm(true)} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-xs font-bold text-slate-500 hover:border-slate-300 hover:text-slate-700 hover:bg-slate-50 transition-all flex justify-center items-center gap-2"><PlusCircle size={14}/>Record Payment</button>}

              {showPaymentForm && (
                <form onSubmit={handleManualPayment} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 animate-in fade-in">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">New Transaction</p>
                  <input type="number" placeholder="Amount" className="w-full p-2.5 text-sm rounded-xl border border-slate-200 focus:border-slate-400 outline-none font-medium" value={paymentAmount} onChange={e=>setPaymentAmount(e.target.value)}/>
                  <select className="w-full p-2.5 text-sm rounded-xl border border-slate-200 outline-none bg-white" value={paymentMethod} onChange={e=>setPaymentMethod(e.target.value)}>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="Check">Check</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="flex gap-2 pt-2">
                    <button type="button" onClick={()=>setShowPaymentForm(false)} className="w-1/2 text-xs font-bold text-slate-500 py-2.5 rounded-xl hover:bg-slate-200 transition-colors">Cancel</button>
                    <button type="submit" disabled={processingPayment} className="w-1/2 bg-slate-900 text-white text-xs font-bold py-2.5 rounded-xl shadow-sm hover:bg-slate-800 transition-colors">{processingPayment ? "Saving..." : "Save"}</button>
                  </div>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-slate-100 flex gap-2">
                <select 
                  value={quoteCurrency} 
                  onChange={e => setQuoteCurrency(e.target.value)}
                  className="w-1/4 p-2.5 text-sm border border-slate-200 rounded-xl outline-none font-medium bg-white text-slate-700 cursor-pointer shadow-sm"
                >
                  <option value="USD">USD ($)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="CAD">CAD ($)</option>
                  <option value="AUD">AUD ($)</option>
                  <option value="NZD">NZD ($)</option>
                </select>
                <input 
                  type="number" 
                  placeholder="New Quote Price" 
                  className="w-2/4 p-2.5 text-sm border border-slate-200 rounded-xl outline-none font-medium bg-slate-50 shadow-sm" 
                  value={quotePrice} 
                  onChange={e => setQuotePrice(e.target.value)}
                />
                <button 
                  onClick={sendQuote} 
                  disabled={sendingQuote} 
                  className="w-1/4 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                >
                  {sendingQuote ? "Sending..." : "Update"}
                </button>
              </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-sm">
              <h3 className="text-xs font-black uppercase mb-6 flex gap-2 text-slate-500"><Truck size={14} /> Logistics & Delivery</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Service Type</span>
                  <p className="font-bold text-sm text-slate-800">{order?.delivery?.type || "Standard"}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Estimated Timeline</span>
                  <p className="font-bold text-sm text-slate-800">{order?.delivery?.timeline || "N/A"}</p>
                </div>
                {order?.delivery?.deadline && (
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Hard Deadline</span>
                    <p className="font-bold text-sm text-rose-600 bg-rose-50 border border-rose-100 inline-block px-3 py-1 rounded-lg mt-1 shadow-sm">{new Date(order.delivery.deadline).toLocaleDateString()}</p>
                  </div>
                )}
              </div>
            </section>

          </div>
        </div>

        <input type="file" multiple id="actionFileInput" className="hidden" onChange={handleFileSelect} />
      </div>
    </div>
  );
};

export default AdminOrderDetails;