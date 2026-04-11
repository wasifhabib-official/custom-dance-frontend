import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = document.getElementById("root");

if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    root,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}