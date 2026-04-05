import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const ApproveAction = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading"); // Start in loading state to verify token first
  const [feedback, setFeedback] = useState("");
  const [actionDetails, setActionDetails] = useState(null);

  /* ======================================================
     1. VERIFY TOKEN ON LOAD (Optional but Recommended)
     This prevents showing the form if the link is already dead.
  ====================================================== */
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await api.get(`/order-actions/approve-details/${token}`);
        if (res.data.success) {
          setActionDetails(res.data.data);
          setStatus("ready");
        } else {
          setStatus("error");
        }
      } catch (err) {
        console.error("Token verification failed:", err);
        setStatus("error");
      }
    };

    if (token) {
      verifyToken();
    }
  }, [token]);

  /* ======================================================
     2. HANDLE APPROVE (Matches Backend Route)
  ====================================================== */
  const handleApprove = async () => {
    try {
      setStatus("processing");

      // ✅ POST to /respond/:token with decision "APPROVED"
      await api.post(`/order-actions/respond/${token}`, {
        decision: "APPROVED",
        feedback: feedback
      });

      setStatus("success");
    } catch (err) {
      console.error("Approval failed:", err);
      // If backend says "already recorded", we can treat it as success or specific error
      if (err.response?.data?.message === "Response already recorded") {
          setStatus("success"); 
      } else {
          setStatus("error");
      }
    }
  };

  /* ======================================================
     3. HANDLE CHANGES (Matches Backend Route)
  ====================================================== */
  const handleChanges = async () => {
    try {
      setStatus("processing");

      // ✅ POST to /respond/:token with decision "CHANGES_REQUESTED"
      await api.post(`/order-actions/respond/${token}`, {
        decision: "CHANGES_REQUESTED",
        feedback: feedback || "Changes requested (no message provided)"
      });

      setStatus("success");
    } catch (err) {
      console.error("Change request failed:", err);
      setStatus("error");
    }
  };

  /* ======================================================
     UI STATES
  ====================================================== */
  
  // 1. Loading (Verifying token)
  if (status === "loading" || status === "processing") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="text-center">
            <Loader2 className="animate-spin text-rose-500 mx-auto mb-4" size={40} />
            <p className="text-gray-500 font-medium">Please wait...</p>
        </div>
      </div>
    );
  }

  // 2. Success
  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center bg-[#fafafa]">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={60} />
          <h2 className="font-black text-2xl text-gray-800 mb-2">Response Recorded</h2>
          <p className="text-gray-500">Thank you! We have notified the team.</p>
          <button
            onClick={() => window.location.href = "https://customdancepatches.com"} 
            className="mt-8 text-rose-500 font-bold hover:underline"
          >
            Back to Website
          </button>
        </div>
      </div>
    );
  }

  // 3. Error (Invalid Token)
  if (status === "error") {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center bg-[#fafafa]">
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
          <XCircle className="text-red-500 mx-auto mb-4" size={60} />
          <h2 className="font-black text-2xl text-gray-800 mb-2">Link Expired</h2>
          <p className="text-gray-500">This link is invalid or has already been used.</p>
        </div>
      </div>
    );
  }

  // 4. Ready (Show Form)
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#fafafa]">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full">
        
        {/* Header */}
        <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-gray-900 mb-2">
            Action Required
            </h1>
            <p className="text-gray-500 text-sm">
                Please review your {actionDetails?.type?.toLowerCase().replace('_', ' ') || "order"} and confirm below.
            </p>
        </div>

        {/* Feedback / Message Area */}
        <label className="block text-sm font-bold text-gray-700 mb-2">
            Additional Comments (Optional)
        </label>
        <textarea
          placeholder="e.g., Looks great! or Please change the border color..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-4 border border-gray-200 rounded-xl mb-8 text-sm focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all h-32 resize-none"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleApprove}
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-200"
          >
            Approve
          </button>

          <button
            onClick={handleChanges}
            className="flex-1 bg-white border-2 border-rose-100 text-rose-500 hover:bg-rose-50 py-4 rounded-xl font-bold transition-all"
          >
            Request Changes
          </button>
        </div>

      </div>
    </div>
  );
};

export default ApproveAction;