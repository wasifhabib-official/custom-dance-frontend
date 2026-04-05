import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

// 👇 Directly importing your actual logo file
import customLogo from '../assets/images/logo.jpeg';

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#faf9f6]">
      
      {/* =========================================
          CUSTOM BRANDED HEADER
      ========================================= */}
      <div className="sticky top-0 z-50 shadow-sm">
        {/* Top Reddish Banner */}
        <div className="bg-[#f43f5e] text-white text-[10px] sm:text-xs font-bold text-center py-2 uppercase tracking-widest">
          🔒 Custom Dance Patches • Secure Admin Control Panel
        </div>

        {/* Main White Header */}
        <header className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Brand Logo */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => navigate("/admin")}
            >
              {/* ✅ Your dancer logo is finally injected here! */}
              <img 
                src={customLogo} 
                alt="Custom Dance Patches" 
                className="h-14 w-auto object-contain rounded-md"
              />
              
              <span className="text-slate-200 font-light text-3xl mb-1 ml-4 hidden md:block">|</span>
              <span className="text-slate-400 font-bold text-sm tracking-widest uppercase hidden md:block mt-1 ml-3">
                Workspace
              </span>
            </div>
            
            {/* Logout Button */}
            <button 
              onClick={handleLogout} 
              className="flex items-center gap-2 text-xs font-bold text-white bg-[#f43f5e] hover:bg-[#e11d48] px-6 py-2.5 rounded-full transition-all shadow-sm"
            >
              <LogOut size={14} /> Logout
            </button>

          </div>
        </header>
      </div>

      {/* =========================================
          MAIN CONTENT 
      ========================================= */}
      <main className="flex-grow">
        {children}
      </main>

      {/* =========================================
          POLISHED FOOTER
      ========================================= */}
      <footer className="bg-[#faf9f6] border-t border-slate-200/60 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
            © {new Date().getFullYear()} Custom Dance Patches. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-wide">
            <span>Admin Version 1.0</span>
            <span>•</span>
            <span>Secure System</span>
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default AdminLayout;