import React, { useState } from "react";
import axios from "axios";
import api from "../api/axios";

const ACTION_TYPES = [
  { value: "QUOTE", label: "Quote Approval" },
  { value: "MOCKUP", label: "Mockup Approval" },
  { value: "PRODUCTION_PROOF", label: "Production Proof" },
  { value: "QUALITY_CHECK", label: "Quality Check" }
];

const OrderActionSender = ({ orderId, token }) => {
  const [type, setType] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const uploadFiles = async () => {
    const uploaded = [];

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const res = await api.post(
        "/uploads",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      uploaded.push(res.data.fileUrl);
    }

    return uploaded;
  };

  const sendAction = async () => {
    if (!type || files.length === 0) {
      alert("Select action type and upload files.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const uploadedFiles = await uploadFiles();

      await api.post(
        `/order-actions/${orderId}/create`,
        {
          type,
          files: uploadedFiles
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setMessage("✅ Action sent to customer successfully");
      setFiles([]);
      setType("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to send action");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <h3 className="text-xl font-semibold mb-4">
        Send Files to Customer
      </h3>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full border rounded-lg px-4 py-2 mb-4"
      >
        <option value="">Select Action Type</option>
        {ACTION_TYPES.map((a) => (
          <option key={a.value} value={a.value}>
            {a.label}
          </option>
        ))}
      </select>

      <input
        type="file"
        multiple
        onChange={(e) => setFiles([...e.target.files])}
        className="mb-4"
      />

      <button
        onClick={sendAction}
        disabled={loading}
        className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90"
      >
        {loading ? "Sending..." : "Send to Customer"}
      </button>

      {message && (
        <p className="mt-4 font-semibold text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
};

export default OrderActionSender;