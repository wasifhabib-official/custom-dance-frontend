import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_URL = "https://www.customdancepatches.com";

function getCanonicalPath(pathname) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${getCanonicalPath(pathname)}`;

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFBF7]">
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
