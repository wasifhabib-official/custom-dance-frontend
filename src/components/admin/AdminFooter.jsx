import React from 'react';

const AdminFooter = () => {
  return (
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
  );
};

export default AdminFooter;