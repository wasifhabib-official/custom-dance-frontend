import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ✅ CRITICAL: react-snap hook for React 18
if (navigator.userAgent === "ReactSnap") {
  window.snapSaveState = () => {
    return document.getElementById("root").innerHTML;
  };
}