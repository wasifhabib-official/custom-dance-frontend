import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/axios";

const AdminPayments = () => {
  const adminToken = localStorage.getItem("adminToken");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    try {
      const res = await api.get(
        `/admin/payments`,
        {
          headers: { Authorization: `Bearer ${adminToken}` }
        }
      );

      if (res.data.success) {
        setData(res.data);
      }
    } catch (err) {
      console.error("Payments fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  if (loading) {
    return <div className="p-10">Loading payments...</div>;
  }

  if (!data) {
    return <div className="p-10">No payment data available.</div>;
  }

  const { summary, orders } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-8">Payments Dashboard</h1>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Paid Orders</p>
          <p className="text-2xl font-bold">{summary.totalPaidOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Unpaid Orders</p>
          <p className="text-2xl font-bold">{summary.totalUnpaidOrders}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Revenue by Currency</p>
          {Object.entries(summary.revenueByCurrency).map(
            ([currency, amount]) => (
              <p key={currency} className="font-semibold">
                {currency} {amount}
              </p>
            )
          )}
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Order</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Paid At</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id} className="border-t">
                <td className="p-3">{order.orderId}</td>
                <td className="p-3">{order.customerName}</td>
                <td className="p-3">
                  {order.currency} {order.quotePrice}
                </td>
                <td className="p-3">
                  {order.isPaid ? (
                    <span className="text-green-600 font-bold">
                      Paid
                    </span>
                  ) : (
                    <span className="text-red-500 font-bold">
                      Unpaid
                    </span>
                  )}
                </td>
                <td className="p-3">
                  {order.paidAt
                    ? new Date(order.paidAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPayments;