import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import "./index.css";
import { initSnapReady } from "./lib/snapReady";

initSnapReady();

const isSnap =
  typeof navigator !== "undefined" && navigator.userAgent === "ReactSnap";

if (typeof window !== "undefined") {
  window.setTimeout(() => {
    if (!window.snapReady) {
      console.log("⚠️ SNAP fallback triggered");
      window.snapReady = true;
    }
  }, 5000);
}

const routerLocation =
  typeof window !== "undefined"
    ? `${window.location.pathname}${window.location.search}${window.location.hash}`
    : "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isSnap ? (
      <StaticRouter location={routerLocation}>
        <App />
      </StaticRouter>
    ) : (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )}
  </React.StrictMode>
);
