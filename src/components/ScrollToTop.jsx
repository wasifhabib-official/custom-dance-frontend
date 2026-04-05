import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This snaps the window back to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the URL (pathname) changes

  return null;
};

export default ScrollToTop;