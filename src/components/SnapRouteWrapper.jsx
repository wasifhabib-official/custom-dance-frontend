import { useEffect } from "react";

export default function SnapRouteWrapper({ children }) {
  useEffect(() => {
    const startTime = Date.now();
    let timeoutId = null;

    const waitForDOM = () => {
      const root = document.getElementById("root");
      const main = document.querySelector("main");
      const heading = document.querySelector("h1, h2");

      const hasRenderedContent =
        root &&
        root.innerHTML.length > 500 &&
        main &&
        heading;

      if (hasRenderedContent) {
        window.snapReady = true;
        console.log("✅ snap ready triggered");
        return;
      }

      if (Date.now() - startTime >= 10000) {
        window.snapReady = true;
        console.log("✅ snap ready triggered");
        return;
      }

      console.log("⏳ waiting for real DOM...");
      timeoutId = window.setTimeout(waitForDOM, 100);
    };

    waitForDOM();

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return children;
}
