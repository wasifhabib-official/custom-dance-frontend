import React from "react";
import { useParams } from "react-router-dom";

function MockupApproved() {
  const { orderId } = useParams();

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Mock-up Approved ✅
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Order ID: <strong>{orderId}</strong>
      </p>

      <p style={{ fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
        Thank you for approving your mock-up. 
        If payment has already been completed, production will now begin.
        If payment is still pending, please complete payment to proceed.
      </p>
    </div>
  );
}

export default MockupApproved;