import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { FaUser, FaTrashCan, FaEnvelope } from "react-icons/fa6";

function UsersView() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // 🚨 Using your exact backend router configuration path
      const res = await axios.get(`${backendURL}/user/getAll`);
      if (res.data.success) {
        setUsers(res.data.users || []);
      }
    } catch (error) {
      console.error("Error pulling users list:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user profile?")) return;

    try {
      const token = localStorage.getItem("token");
      // Assuming a standard match on singular user deletion architecture routes
      const res = await axios.delete(`${backendURL}/user/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success || res.status === 200) {
        // Remove item from UI instantly
        setUsers((prev) => prev.filter((user) => user._id !== id));
      } else {
        alert(res.data.message || "Failed to remove user profile.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while attempting deletion.");
    }
  };

  return (
    <div className="flex-1 min-h-screen bg-stone-100 p-8 w-full">
      
      {/* Header section matched perfectly */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-800 tracking-tight flex items-center gap-3">
          Registered Users
        </h1>
        <p className="text-stone-500 mt-2 text-sm">
          Manage system users, view system credentials, and clean up inactive platform profiles.
        </p>
      </div>

      {/* Grid Matrix Table Layout Container */}
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden max-w-7xl w-full">
        
        {/* Table Headings — Swapped to Stone theme palette colors */}
        <div className="grid grid-cols-3 bg-stone-900 text-stone-200 px-6 py-4 font-semibold text-sm tracking-wide uppercase">
          <p>User Name</p>
          <p>Email Address</p>
          <p className="text-center">Action</p>
        </div>

        {loading ? (
          <div className="p-8 text-center text-stone-400 font-medium">Loading platform system users...</div>
        ) : users.length === 0 ? (
          <div className="p-8 text-center text-stone-400 font-medium">No registered user entries found.</div>
        ) : (
          /* User Rows loop */
          users.map((user) => (
            <div 
              key={user._id} 
              className="grid grid-cols-3 items-center px-6 py-4 border-b border-stone-100 hover:bg-stone-50/70 transition"
            >
              {/* User Name */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-600 flex items-center justify-center border border-stone-200/60">
                  <FaUser size={14} />
                </div>
                <p className="font-semibold text-stone-700">{user.name || "N/A"}</p>
              </div>

              {/* Email column entry field */}
              <div className="flex items-center gap-2 text-stone-600">
                <FaEnvelope className="text-stone-400 hidden sm:inline" size={14} />
                <span className="text-sm font-medium break-all">{user.email}</span>
              </div>

              {/* Centered deletion action execution button */}
              <div className="text-center">
                <button 
                  onClick={() => deleteUser(user._id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition text-sm font-medium inline-flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <FaTrashCan size={13} />
                  <span>Delete</span>
                </button>
              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default UsersView;