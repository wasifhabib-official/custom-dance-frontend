import React from "react";
import { useParams } from "react-router-dom";

function MockupRevision() {
  const { orderId } = useParams();

  return (
    <div style={{ padding: "80px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Revision Requested ✏️
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        Order ID: <strong>{orderId}</strong>
      </p>

      <p style={{ fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
        Your revision request has been received.
        Our design team will update your mock-up and send it to you shortly.
      </p>
    </div>
  );
}

export default MockupRevision;
