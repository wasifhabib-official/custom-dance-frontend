import React from 'react';

import { useNavigate } from 'react-router-dom';

import { LayoutDashboard, LogOut } from 'lucide-react';



const AdminHeader = () => {

  const navigate = useNavigate();



  const handleLogout = () => {

    if (!window.confirm("Are you sure you want to log out?")) return;

    localStorage.removeItem("adminToken");

    navigate("/admin/login");

  };



  return (

    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

       

        {/* Logo / Brand Name */}

        <div

          className="flex items-center gap-3 cursor-pointer group"

          onClick={() => navigate("/admin")}

        >

          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">

            <LayoutDashboard size={16} className="text-white" />

          </div>

          <span className="font-black text-slate-800 tracking-tight text-lg group-hover:text-slate-600 transition-colors">

            Admin Workspace

          </span>

        </div>

       

        {/* Actions */}

        <button

          onClick={handleLogout}

          className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 px-3 py-1.5 rounded-lg border border-slate-100 hover:border-rose-100 transition-all"

        >

          <LogOut size={14} /> Logout

        </button>



      </div>

    </header>

  );

};



export default AdminHeader;