import React from "react";
import { Link } from "react-router-dom";
import { Heart, Instagram, Facebook, Truck, Globe, ShieldCheck, Ruler, Lock } from "lucide-react";
import { cn } from "../lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Intro */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
              <span className="font-heading font-bold text-xl tracking-tight">
                CustomDancePatches
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Hi, I'm Stacy. With 15+ years in the dance world, I provide studios worldwide with premium branding, free digital mockups, and the quality your performers deserve. 
            </p>
            {/* Global Trust Badge */}
            <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 mb-6 max-w-xs">
               <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-widest mb-1">
                 <Truck className="w-4 h-4" /> Free Express Shipping
               </div>
               <p className="text-gray-500 text-[11px]">Proudly serving USA, UK, Canada & Australia.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/customdancepatches/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className={cn("text-gray-400 hover:text-rose-400 transition-colors")}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/customdancepatches/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className={cn("text-gray-400 hover:text-rose-400 transition-colors")}
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-rose-200">Explore</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className={cn("hover:text-white transition-colors")}>Home</Link></li>
              <li><Link to="/patch-types" className={cn("hover:text-white transition-colors")}>Patch Types</Link></li>
              <li><Link to="/pricing" className={cn("hover:text-white transition-colors")}>Pricing & Value</Link></li>
              <li><Link to="/track-order" className={cn("hover:text-white transition-colors")}>Track Order</Link></li>
              <li><Link to="/blog" className={cn("hover:text-white transition-colors")}>Blog</Link></li>
            </ul>
          </div>

          {/* Technical Guides & Policies */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-rose-200">Guides & Policies</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/size-guide" className={cn("hover:text-white transition-colors flex items-center gap-2")}>
                  <Ruler size={14} className="text-rose-400" /> Patch Size Guide
                </Link>
              </li>
              <li>
                <Link to="/backing-guide" className={cn("hover:text-white transition-colors flex items-center gap-2")}>
                  <ShieldCheck size={14} className="text-rose-400" /> Backing Guide
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/terms" className={cn("hover:text-white transition-colors")}>Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className={cn("hover:text-white transition-colors")}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className={cn("hover:text-white transition-colors")}>Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-rose-200">Get in Touch</h4>
            <p className="text-gray-400 text-sm mb-2">Questions about your design?</p>
            <a
              href="mailto:stacy@customdancepatches.com"
              className={cn("text-rose-400 hover:text-rose-300 transition-colors font-medium block mb-3 text-sm")}
            >
              stacy@customdancepatches.com
            </a>
            <p className="text-gray-500 text-xs flex items-center gap-1 mb-1">
               <Globe className="w-3 h-3" /> Global Express Fulfillment
            </p>
            <p className="text-gray-500 text-xs italic">Response time: 24-48 hours</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} CustomDancePatches.com. Made with{" "}
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for the dance community.
          </p>
          
          {/* Trust Badge Updated */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Lock className="w-3 h-3" />
            <span>Secure Payments via Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;