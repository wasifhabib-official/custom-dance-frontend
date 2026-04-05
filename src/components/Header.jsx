import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion"; 

// 🟢 Import your logo here (adjust path based on your folder structure)
import logo from "../assets/images/logo.jpeg"; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/our-story" },
    { name: "Patch Types", path: "/patch-types" },
    { name: "Pricing", path: "/pricing" },
    { name: "Track Order", path: "/track-order" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full sticky top-0 z-[1000]">
      {/* 🟢 Announcement Bar */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white text-sm text-center py-2 font-medium tracking-wide">
        ✈️ Free Digital Mockups & Global Express Shipping on All Custom Orders!
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          
          {/* 🟢 Brand Logo (Updated with Profile 3) */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Custom Dance Patches by Stacy" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-pink-600" : "hover:text-pink-600 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/custom-order"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90 transition-all whitespace-nowrap"
            >
              Order Custom Patches
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-bold py-2 transition-all ${
                      isActive ? "text-pink-600 border-l-4 border-pink-600 pl-4" : "text-gray-700 pl-4"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/custom-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 py-4 text-lg font-bold text-white shadow-lg"
                >
                  Order Custom Patches
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;