import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Truck, Ruler, Info, ShieldCheck, Zap, User, Palette, Package, Paperclip, XCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";

/* ======================================================
    CONFIG & CONSTANTS
====================================================== */

const STEPS = [
  "Patch Type",
  "Size & Quantity",
  "Backing & Border",
  "Artwork",
  "Delivery & Contact"
];

const PATCH_TYPES = [
  { value: "Fuzzy Chenille (Classic Varsity)", desc: "Soft fuzzy style for jackets & varsity wear" },
  { value: "Detailed Embroidery (Traditional)", desc: "Classic stitched patches with textured look" },
  { value: "Woven (Intricate/Flat)", desc: "Ideal for fine details and small text" },
  { value: "3D Puff Embroidered", desc: "Raised embroidery for bold designs" },
  { value: "PVC / Rubber Patch", desc: "Waterproof & flexible modern patches" },
  { value: "Leather Patch", desc: "Premium leather branding patches" },
  { value: "Silicone Patch", desc: "Soft-touch silicone branding" },
  { value: "Bullion Patch", desc: "Luxury hand-crafted wire patches" },
  { value: "TPU Patch", desc: "Modern thermo plastic patches" },
  { value: "Printed / Sublimated Patch", desc: "Photo-quality full color printing" },
  { value: "Glossy Stickers", desc: "Shiny finish with vibrant colors" },
  { value: "Vinyl Stickers", desc: "Durable weatherproof stickers" },
  { value: "Other / Custom", desc: "Tell us what you need — we'll guide you" }
];

const BACKING_OPTIONS = [
  { value: "Heat Seal", desc: "Iron-on: Best for Jackets & Cotton hoodies" },
  { value: "Sew On", desc: "No adhesive: Best for delicate costumes & mesh" },
  { value: "Velcro (Hook & Loop)", desc: "Removable: Best for tactical or gear swaps" },
  { value: "Peel & Stick", desc: "Temporary: Best for one-day events/recitals" },
  { value: "Plastic", desc: "Standard: Best for patches you plan to sew later" },
  { value: "Keychain", desc: "Hardware: Best for studio bag accessories" },
  { value: "Tuxedo Pin", desc: "Pin-on: Best for lapels or formal team wear" }
];

const BORDER_OPTIONS = [
  { value: "Merrowed", desc: "Classic thick stitched edge" },
  { value: "Satin", desc: "Smooth thin satin finish" },
  { value: "Laser Cut", desc: "Precision flush edge (No border)" },
  { value: "Dye-Cut", desc: "Custom shape precision cut" }
];

const THREAD_OPTIONS = [
  { value: "Normal", desc: "Standard high-durability thread" },
  { value: "Metallic", desc: "Gold/Silver shiny performance finish" },
  { value: "Madeira", desc: "Premium high-sheen embroidery thread" }
];

const DELIVERY_OPTIONS = [
  { value: "Standard", timeline: "20–30 Business Days" },
  { value: "Express", timeline: "10–14 Business Days" }
];

/* ======================================================
    SIZE CONVERSION HELPERS
====================================================== */
const inchToCm = v => (v * 2.54).toFixed(2);
const inchToMm = v => (v * 25.4).toFixed(2);
const cmToInch = v => (v / 2.54).toFixed(2);
const cmToMm = v => (v * 10).toFixed(2);
const mmToInch = v => (v / 25.4).toFixed(2);
const mmToCm = v => (v / 10).toFixed(2);

/* ======================================================
    REUSABLE OPTION CARD 
====================================================== */
const OptionCard = ({ title, desc, selected, onClick }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer border rounded-xl p-4 transition
      ${selected ? "border-rose-500 bg-rose-50" : "hover:border-rose-300"}`}
  >
    <p className="font-medium">{title}</p>
    <p className="text-sm text-gray-500 leading-tight">{desc}</p>
  </div>
);

/* ======================================================
    MAIN COMPONENT
====================================================== */
const CustomOrderForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  
  // ✅ NEW: Store an array of uploaded files properly
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const [formData, setFormData] = useState({
    patchType: "",

    sizeUnit: "in",
    width: "",
    height: "",
    sizeInches: { width: "", height: "" },
    sizeCm: { width: "", height: "" },
    sizeMm: { width: "", height: "" },
    quantity: "",

    backing: "",
    border: "",
    thread: "",

    designName: "",
    designNotes: "",
    usageType: "",

    deliveryType: "Standard",
    deliveryTimeline: "20–30 Business Days",
    deadline: "",

    fullName: "",
    email: "",
    phone: "",
    company: ""
  });

  const handleSizeChange = (field, value) => {
    const num = parseFloat(value);
    setFormData(prev => ({ ...prev, [field]: value }));
    setFormError(""); 
    if (isNaN(num)) return;

    let inches = {}, cm = {}, mm = {};

    if (formData.sizeUnit === "in") {
      inches[field] = num;
      cm[field] = inchToCm(num);
      mm[field] = inchToMm(num);
    }
    if (formData.sizeUnit === "cm") {
      inches[field] = cmToInch(num);
      cm[field] = num;
      mm[field] = cmToMm(num);
    }
    if (formData.sizeUnit === "mm") {
      inches[field] = mmToInch(num);
      cm[field] = mmToCm(num);
      mm[field] = num;
    }

    setFormData(prev => ({
      ...prev,
      sizeInches: { ...prev.sizeInches, ...inches },
      sizeCm: { ...prev.sizeCm, ...cm },
      sizeMm: { ...prev.sizeMm, ...mm }
    }));
  };

  /* ================= PROPER MULTI-FILE UPLOAD ================= */
  const handleUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    try {
      setUploading(true);
      setFormError("");
      const newUploads = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fd = new FormData();
        fd.append("file", file);

        const res = await fetch("/api/uploads", { method: "POST", body: fd });
        const data = await res.json();
        
        if (data.fileUrl) {
          newUploads.push({ fileUrl: data.fileUrl, fileName: file.name });
        }
      }

      setUploadedFiles(prev => [...prev, ...newUploads]);

    } catch (err) {
      console.error("Upload error:", err);
      setFormError("Some files failed to upload. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (indexToRemove) => {
    setUploadedFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  /* ================= STRICT SUBMIT VALIDATION ================= */
  const submitOrder = async () => {
    // 🚨 Friendly but strict frontend checks
    if (!formData.patchType) {
      setStep(1);
      return setFormError("Please select a Patch Type to continue.");
    }
    if (!formData.width || !formData.height) {
      setStep(2);
      return setFormError("Please enter the approximate Width and Height.");
    }
    if (!formData.quantity) {
      setStep(2);
      return setFormError("Please enter the Estimated Quantity.");
    }
    if (!formData.backing) {
      setStep(3);
      return setFormError("Please select a Backing option.");
    }
    if (!formData.border) {
      setStep(3);
      return setFormError("Please select a Border Style.");
    }
    if (!formData.thread) {
      setStep(3);
      return setFormError("Please select a Thread Quality.");
    }
    if (!formData.fullName.trim()) return setFormError("Please enter your Full Name.");
    if (!formData.company.trim()) return setFormError("Please enter your Studio Name.");
    if (!formData.email.trim()) return setFormError("Please enter your Email Address.");
    if (!formData.phone.trim()) return setFormError("Please enter your Phone Number.");

    setFormError("");
    setSubmitting(true);

    const securePayload = {
      ...formData,
      width: Number(formData.width),
      height: Number(formData.height),
      quantity: Number(formData.quantity),
      designName: formData.designName || "Design Concept Request",
      
      // ✅ We send the first file as the "primary" to keep the backend happy for now
      artworkFileUrl: uploadedFiles.length > 0 ? uploadedFiles[0].fileUrl : "",
      artworkFileName: uploadedFiles.length > 0 ? uploadedFiles[0].fileName : "",
      
      // ✅ We bundle the rest perfectly for the backend to catch in the next step
      additionalFiles: uploadedFiles.length > 1 ? uploadedFiles.slice(1) : []
    };

    try {
      const res = await fetch("/api/orders/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(securePayload)
      });
      
      setSubmitting(false);

      if (res.ok) {
        navigate("/success");
      } else {
        // ✅ NO MORE NATIVE ALERTS. All errors map to our UI.
        const errorData = await res.json();
        setFormError(`Server Error: ${errorData.message || "Failed to submit. Please check missing fields."}`);
      }
    } catch (err) {
      setSubmitting(false);
      // ✅ NO MORE NATIVE ALERTS.
      setFormError("Network error. Please check your connection and try submitting again.");
    }
  };

  const deadlineDay = formData.deadline
      ? new Date(formData.deadline).toLocaleDateString("en-US", { weekday: "long" })
      : "";

  return (
    <section className="min-h-screen bg-[#faf7f5] py-20 px-4 font-body">
      <Helmet>
        <title>Get a Quote | Order Custom Dance Patches for Your Studio</title>
        <meta name="description" content="Ready to elevate your studio's brand? Upload your logo and choose your patch style. Fast, professional quoting and Free Worldwide Shipping." />
        <link rel="canonical" href="https://customdancepatches.com/custom-order" />
      </Helmet>

      <div className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Start Your Custom Patch Order</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">Tell us about your vision. Don't have artwork or exact sizes yet? No problem—just fill in your best guess, and our experts will help refine it.</p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">

        <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 flex flex-col h-full">
          <AnimatePresence mode="wait">

            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex justify-between items-center mb-6">
                   <h2 className="text-2xl font-semibold">Select Patch Type <span className="text-rose-500">*</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {PATCH_TYPES.map(p => (
                    <OptionCard key={p.value} title={p.value} desc={p.desc} selected={formData.patchType === p.value}
                      onClick={() => { setFormData(prev => ({ ...prev, patchType: p.value })); setFormError(""); }} />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex justify-between items-end mb-6">
                  <div className="flex items-center gap-3">
                     <h2 className="text-2xl font-semibold">Size & Quantity <span className="text-rose-500">*</span></h2>
                  </div>
                  <Link to="/size-guide" target="_blank" className="flex items-center gap-2 text-rose-500 font-bold text-sm hover:text-rose-600 border-b border-rose-200 pb-1 transition-all">
                    <Ruler size={16} /> Open Size Guide
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <select className="input" value={formData.sizeUnit} onChange={(e) => setFormData(prev => ({ ...prev, sizeUnit: e.target.value }))}>
                    <option value="in">Inches</option>
                    <option value="cm">CM</option>
                    <option value="mm">MM</option>
                  </select>
                  <input type="number" className="input" placeholder="Width *" value={formData.width} onChange={(e) => handleSizeChange("width", e.target.value)} />
                  <input type="number" className="input" placeholder="Height *" value={formData.height} onChange={(e) => handleSizeChange("height", e.target.value)} />
                </div>

                <div className="text-sm text-gray-600 mb-6 bg-rose-50/50 p-4 rounded-xl border border-rose-100/50 flex flex-col gap-1">
                  <div className="flex items-center gap-2 mb-1 text-rose-600 font-bold uppercase text-[10px] tracking-wider">
                    <Info size={12} /> Live Conversions
                  </div>
                  {formData.sizeUnit !== 'in' && <p>Inches: <strong>{formData.sizeInches.width || "0"} × {formData.sizeInches.height || "0"}</strong></p>}
                  {formData.sizeUnit !== 'cm' && <p>CM: <strong>{formData.sizeCm.width || "0"} × {formData.sizeCm.height || "0"}</strong></p>}
                  {formData.sizeUnit !== 'mm' && <p>MM: <strong>{formData.sizeMm.width || "0"} × {formData.sizeMm.height || "0"}</strong></p>}
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Quantity <span className="text-rose-500">*</span></label>
                    <input type="number" className="input" placeholder="e.g. 50" value={formData.quantity} onChange={(e) => { setFormData(prev => ({ ...prev, quantity: e.target.value })); setFormError(""); }} />
                </div>
                
                <div className="mb-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Primary Usage (Optional)</label>
                  <input className="input" placeholder="e.g., Competition Jackets, Costumes, Bags" value={formData.usageType} onChange={(e) => setFormData(prev => ({ ...prev, usageType: e.target.value }))} />
                  <p className="text-[11px] text-gray-500 mt-2 italic flex items-center gap-1">
                    <Zap size={10} className="text-rose-400" /> Stacy's Tip: Tell us the fabric type for a better backing recommendation!
                  </p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex justify-between items-end mb-6">
                  <div className="flex items-center gap-3">
                     <h2 className="text-2xl font-semibold">Backing & Finishing <span className="text-rose-500">*</span></h2>
                  </div>
                  <Link to="/backing-guide" target="_blank" className="flex items-center gap-2 text-rose-500 font-bold text-sm hover:text-rose-600 border-b border-rose-200 pb-1 transition-all">
                    <ShieldCheck size={16} /> View Backing Guide
                  </Link>
                </div>
                
                <p className="text-sm text-gray-500 mb-8 italic text-rose-600 font-medium">Stacy's Tip: Iron-on (Heat Seal) is our #1 choice for varsity jackets.</p>

                <h4 className="font-bold text-sm text-gray-700 mb-3 flex items-center gap-2">Select Backing</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {BACKING_OPTIONS.map(b => (
                    <OptionCard key={b.value} title={b.value} desc={b.desc} selected={formData.backing === b.value}
                      onClick={() => { setFormData(prev => ({ ...prev, backing: b.value })); setFormError(""); }} />
                  ))}
                </div>

                <h4 className="font-bold text-sm text-gray-700 mb-3">Select Border Style</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {BORDER_OPTIONS.map(b => (
                    <OptionCard key={b.value} title={b.value} desc={b.desc} selected={formData.border === b.value}
                      onClick={() => { setFormData(prev => ({ ...prev, border: b.value })); setFormError(""); }} />
                  ))}
                </div>

                <h4 className="font-bold text-sm text-gray-700 mb-3">Thread Quality</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {THREAD_OPTIONS.map(t => (
                    <OptionCard key={t.value} title={t.value} desc={t.desc} selected={formData.thread === t.value}
                      onClick={() => { setFormData(prev => ({ ...prev, thread: t.value })); setFormError(""); }} />
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex justify-between items-center mb-2">
                   <h2 className="text-2xl font-semibold">Artwork & Design</h2>
                   <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-bold">Optional</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Don't have artwork? No problem! Skip this step and our team will help design it for you.</p>

                <input className="input mb-4" placeholder="Name your design (e.g., Studio 2026 Logo)"
                  value={formData.designName} onChange={(e) => setFormData(prev => ({ ...prev, designName: e.target.value }))} />

                <label className="block text-sm font-bold mb-2">Upload Studio Logo (Sketch or Digital)</label>
                <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center cursor-pointer mb-4 hover:border-rose-400 transition-colors">
                  <Upload className="text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500 text-center px-4">
                    {uploading ? "Uploading files..." : "Drop files here or click to browse (You can select multiple files!)"}
                  </p>
                  <input hidden type="file" multiple onChange={handleUpload} />
                </label>

                {/* ✅ BEAUTIFUL LIST OF ATTACHED FILES */}
                {uploadedFiles.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Attached Files</p>
                    <ul className="space-y-2">
                      {uploadedFiles.map((file, idx) => (
                        <li key={idx} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-100">
                          <span className="flex items-center gap-2 text-sm text-gray-700 truncate"><Paperclip size={14} className="text-rose-500"/> {file.fileName}</span>
                          <button onClick={() => removeFile(idx)} className="text-gray-400 hover:text-rose-500 transition-colors"><XCircle size={16}/></button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <textarea className="input" rows="4" placeholder="Special instructions or ideas (e.g., 'Make the pink match our costumes exactly')"
                  value={formData.designNotes} onChange={(e) => setFormData(prev => ({ ...prev, designNotes: e.target.value }))} />
              </motion.div>
            )}

            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h2 className="text-2xl font-semibold mb-6">Delivery & Contact Details</h2>

                <label className="block text-sm font-bold mb-4 text-rose-600 uppercase tracking-widest text-[11px]">Free Worldwide Express Shipping included</label>

                {DELIVERY_OPTIONS.map(d => (
                  <label key={d.value} className="flex items-center gap-3 mb-3 p-3 border rounded-xl hover:bg-gray-50 cursor-pointer">
                    <input type="radio" checked={formData.deliveryType === d.value}
                      onChange={() => setFormData(prev => ({ ...prev, deliveryType: d.value, deliveryTimeline: d.timeline, deadline: "" }))} />
                    <div>
                      <p className="font-medium">{d.value}</p>
                      <p className="text-sm text-gray-500">{d.timeline}</p>
                    </div>
                  </label>
                ))}

                <div className="mt-4">
                  <label className="block text-sm font-bold mb-2">Upcoming competition or recital deadline? (Optional)</label>
                  <input type="date" className="input" value={formData.deadline} onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))} />
                  {formData.deadline && <p className="text-sm text-gray-600 mt-1">Target Delivery: <strong>{deadlineDay}</strong></p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 border-t pt-6">
                  <div className="md:col-span-2 mb-2">
                    <h4 className="font-bold text-gray-800">Where should we send your quote? <span className="text-rose-500">*</span></h4>
                  </div>
                  <input className="input" placeholder="Your Full Name *" value={formData.fullName} onChange={(e) => {setFormData(prev => ({ ...prev, fullName: e.target.value })); setFormError("");}} />
                  <input className="input" placeholder="Studio Name *" value={formData.company} onChange={(e) => {setFormData(prev => ({ ...prev, company: e.target.value })); setFormError("");}} />
                  <input className="input" type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => {setFormData(prev => ({ ...prev, email: e.target.value })); setFormError("");}} />
                  <input className="input" type="tel" placeholder="Phone Number *" value={formData.phone} onChange={(e) => {setFormData(prev => ({ ...prev, phone: e.target.value })); setFormError("");}} />
                </div>
              </motion.div>
            )}

          </AnimatePresence>
          
          <div className="flex-grow"></div>

          <div className="flex justify-between items-end mt-10 pt-6 border-t border-gray-50">
            {step > 1 ? (
              <button className="text-gray-500 hover:text-gray-800 font-bold text-sm uppercase tracking-widest pb-3" onClick={() => {setStep(step - 1); setFormError("");}}>Back</button>
            ) : <div></div>}
            
            <div className="ml-auto flex flex-col items-end">
              {formError && (
                <span className="text-rose-600 font-bold text-xs mb-3 bg-rose-50 px-3 py-2 rounded-md border border-rose-100 animate-pulse text-right max-w-xs leading-tight">
                  ⚠️ {formError}
                </span>
              )}
              
              {step < 5 ? (
                <button onClick={() => setStep(step + 1)} className="btn-primary">Next Step</button>
              ) : (
                <button disabled={submitting} onClick={submitOrder} className="btn-primary">
                  {submitting ? "Submitting..." : "Get My Custom Quote"}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ================= FULL SUMMARY SIDEBAR ================= */}
        <aside className="lg:col-span-1 hidden lg:block">
          <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-20 border border-gray-100">
            <h3 className="font-bold text-lg mb-4 border-b pb-2 flex items-center gap-2">Order Summary</h3>
            
            <div className="space-y-6 text-sm">
                <div>
                    <h4 className="font-bold text-rose-500 text-xs uppercase mb-2 flex items-center gap-1"><Package size={12}/> Patch Specs</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li className="flex justify-between"><span>Type:</span> <span className="font-medium text-right text-gray-900 truncate max-w-[120px]">{formData.patchType || "Pending"}</span></li>
                        <li className="flex justify-between"><span>Qty:</span> <span className="font-medium text-gray-900">{formData.quantity || "Pending"}</span></li>
                        <li className="flex justify-between"><span>Size:</span> <span className="font-medium text-gray-900">
                            {formData.sizeInches.width ? `${formData.sizeInches.width}" × ${formData.sizeInches.height}"` : "Pending"}
                        </span></li>
                        {formData.usageType && <li className="flex justify-between"><span>Usage:</span> <span className="font-medium text-right text-gray-900 truncate max-w-[120px]">{formData.usageType}</span></li>}
                        <li className="flex justify-between"><span>Backing:</span> <span className="font-medium text-gray-900 truncate max-w-[120px]">{formData.backing || "Pending"}</span></li>
                        <li className="flex justify-between"><span>Border:</span> <span className="font-medium text-gray-900">{formData.border || "Pending"}</span></li>
                        <li className="flex justify-between"><span>Thread:</span> <span className="font-medium text-gray-900">{formData.thread || "Pending"}</span></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-rose-500 text-xs uppercase mb-2 flex items-center gap-1"><Palette size={12}/> Artwork</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li className="flex justify-between"><span>Name:</span> <span className="font-medium text-right text-gray-900 truncate max-w-[120px]">{formData.designName || "Pending Concept"}</span></li>
                        <li className="flex justify-between"><span>Files:</span> <span className="font-medium text-right text-gray-900 truncate max-w-[120px]">{uploadedFiles.length > 0 ? `${uploadedFiles.length} Attached` : "None"}</span></li>
                        {formData.designNotes && (
                            <li className="mt-1 bg-gray-50 p-2 rounded text-xs italic text-gray-500 break-words line-clamp-3">
                                "{formData.designNotes}"
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-rose-500 text-xs uppercase mb-2 flex items-center gap-1"><Truck size={12}/> Delivery</h4>
                    <ul className="space-y-1 text-gray-600">
                        <li className="flex justify-between"><span>Method:</span> <span className="font-medium text-gray-900">{formData.deliveryType}</span></li>
                        <li className="flex justify-between"><span>Time:</span> <span className="font-medium text-right text-gray-900 text-xs max-w-[100px]">{formData.deliveryTimeline}</span></li>
                        {formData.deadline && <li className="flex justify-between text-rose-600 font-bold mt-1"><span>Deadline:</span> <span>{formData.deadline}</span></li>}
                    </ul>
                </div>

                {(formData.fullName || formData.email) && (
                    <div>
                        <h4 className="font-bold text-rose-500 text-xs uppercase mb-2 flex items-center gap-1"><User size={12}/> Contact</h4>
                        <ul className="space-y-1 text-gray-600 text-xs">
                            {formData.fullName && <li className="font-bold text-gray-900 truncate">{formData.fullName}</li>}
                            {formData.company && <li className="truncate">{formData.company}</li>}
                            {formData.email && <li className="truncate">{formData.email}</li>}
                            {formData.phone && <li>{formData.phone}</li>}
                        </ul>
                    </div>
                )}
            </div>
            
            <div className="mt-6 p-3 bg-rose-50 rounded-xl border border-rose-100">
               <p className="text-[10px] text-gray-500 italic leading-tight text-center">
                 Review details. We will email your custom quote within 24 hours.
               </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center border-t pt-10 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-sm text-rose-500">The Custom Dance Patch Guarantee</h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Once you submit your quote, Stacy or her team will respond within 24 business hours with a professional mockup. After approval, production takes 7–10 days with Free Express Shipping directly to your studio door.
        </p>
      </div>

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: white;
          transition: border 0.2s;
          font-size: 16px; 
        }
        .input:focus {
          outline: none;
          border-color: #f43f5e;
          box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.1);
        }
        .btn-primary {
          background: #f43f5e;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 999px;
          font-weight: 700;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-size: 0.8rem;
        }
        .btn-primary:hover:not(:disabled) {
          background: #e11d48;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(244, 63, 94, 0.3);
        }
        .btn-primary:disabled {
          background: #fda4af;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default CustomOrderForm;