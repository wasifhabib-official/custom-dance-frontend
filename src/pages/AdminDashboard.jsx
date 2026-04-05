import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "../api/axios";
import { 
  Search, 
  Filter, 
  LayoutDashboard, 
  Package, 
  Clock, 
  CheckCircle, 
  ChevronRight,
  ChevronLeft,
  AlertCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Advanced Filtering
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 20;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          navigate("/admin/login");
          return;
        }

        const res = await api.get(
          "/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Cache-Control": "no-store"
            },
            params: {
              _t: Date.now()
            }
          }
        );

        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else if (Array.isArray(res.data.data)) {
          setOrders(res.data.data);
        } else {
          setOrders([]);
        }

      } catch (err) {
        console.error("Fetch orders error:", err);

        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
          return;
        }

        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  // Advanced Filtering Logic
  const getOrderStatus = (progress) => {
    if (progress?.delivered) return "Completed";
    if (progress?.dispatched) return "Dispatched";
    if (progress?.production) return "In Production";
    if (progress?.mockupRequested || progress?.mockupApproved) return "Design Phase";
    return "New Request";
  };

  const filteredOrders = orders.filter((order) => {
    const searchString = `${order.orderId} ${order.customerName} ${order.customerEmail}`.toLowerCase();
    const matchesSearch = searchString.includes(searchTerm.toLowerCase());
    
    const status = getOrderStatus(order.progress);
    const matchesStatus = statusFilter === "All" || status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination Math
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  // Metrics Calculation
  const totalOrders = orders.length;
  const newRequests = orders.filter(o => getOrderStatus(o.progress) === "New Request").length;
  const inProduction = orders.filter(o => getOrderStatus(o.progress) === "In Production").length;
  const completed = orders.filter(o => getOrderStatus(o.progress) === "Completed").length;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 animate-pulse">
          <Package size={32} className="text-slate-400" />
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Loading Portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f5] font-sans text-slate-800 flex flex-col">
      <div className="flex-1 max-w-7xl w-full mx-auto px-6 space-y-8 pb-12 pt-8">
        
        {/* Error Banner */}
        {error && (
          <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl border border-rose-100 flex items-center gap-3 text-sm font-bold shadow-sm">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        {/* =========================================
            METRICS DASHBOARD
        ========================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-slate-50 rounded-xl text-slate-500 group-hover:bg-slate-100 transition-colors"><LayoutDashboard size={18}/></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Orders</span>
            </div>
            <p className="text-3xl font-black text-slate-900">{totalOrders}</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-rose-50 rounded-xl text-rose-500 group-hover:bg-rose-100 transition-colors"><Clock size={18}/></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Needs Attention</span>
            </div>
            <p className="text-3xl font-black text-slate-900">{newRequests}</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-500 group-hover:bg-blue-100 transition-colors"><Package size={18}/></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">In Production</span>
            </div>
            <p className="text-3xl font-black text-slate-900">{inProduction}</p>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:border-rose-200 transition-colors group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-50 rounded-xl text-emerald-500 group-hover:bg-emerald-100 transition-colors"><CheckCircle size={18}/></div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed</span>
            </div>
            <p className="text-3xl font-black text-slate-900">{completed}</p>
          </div>
        </div>

        {/* =========================================
            DATA TABLE CONTROLS
        ========================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
          
          <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50">
            <h2 className="font-bold text-lg text-slate-800 w-full md:w-auto">Order Management</h2>
            
            <div className="flex w-full md:w-auto gap-3">
              <div className="relative w-full md:w-64">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search ID, Name, Email..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:border-rose-400 outline-none transition-all shadow-sm"
                />
              </div>
              
              <div className="relative min-w-[140px]">
                <Filter size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 focus:border-rose-400 outline-none appearance-none shadow-sm cursor-pointer transition-all"
                >
                  <option value="All">All Statuses</option>
                  <option value="New Request">New Request</option>
                  <option value="Design Phase">Design Phase</option>
                  <option value="In Production">In Production</option>
                  <option value="Dispatched">Dispatched</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* =========================================
              DATA TABLE
          ========================================= */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Order ID</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Customer Details</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400">Current Status</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {currentOrders.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400 space-y-2">
                        <Search size={24} className="opacity-50" />
                        <p className="text-sm font-medium">No orders found matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentOrders.map((order) => {
                    const status = getOrderStatus(order.progress);
                    
                    let badgeColor = "bg-slate-100 text-slate-600 border-slate-200";
                    if (status === "New Request") badgeColor = "bg-rose-50 text-rose-600 border-rose-100";
                    if (status === "Design Phase") badgeColor = "bg-amber-50 text-amber-600 border-amber-100";
                    if (status === "In Production") badgeColor = "bg-blue-50 text-blue-600 border-blue-100";
                    if (status === "Completed") badgeColor = "bg-emerald-50 text-emerald-600 border-emerald-100";

                    return (
                      <tr key={order._id} className="hover:bg-slate-50/80 transition-colors group">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-xs font-black text-slate-700 bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">
                            {order.orderId ? String(order.orderId).split("-").pop() : "N/A"}
                          </span>
                        </td>
                        
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-slate-800">{order.customerName}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{order.customerEmail}</p>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded-full border ${badgeColor}`}>
                            {status}
                          </span>
                        </td>
                        
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <button
                            onClick={() => navigate(`/admin/order/${order._id}`)}
                            className="inline-flex items-center gap-1 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-rose-500 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-sm"
                          >
                            Manage <ChevronRight size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          
          {/* =========================================
              PAGINATION CONTROLS
          ========================================= */}
          {totalPages > 1 && (
            <div className="p-4 md:p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-500">
                Showing <span className="text-slate-800">{indexOfFirstOrder + 1}</span> to <span className="text-slate-800">{Math.min(indexOfLastOrder, filteredOrders.length)}</span> of <span className="text-slate-800">{filteredOrders.length}</span> orders
              </span>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-slate-800 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm bg-white"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="text-xs font-bold text-slate-700 px-4 py-2 rounded-lg border border-slate-200 bg-white shadow-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-white hover:text-slate-800 hover:border-slate-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm bg-white"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;