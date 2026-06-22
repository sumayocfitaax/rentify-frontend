import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { MdDelete } from "react-icons/md";
import Navbar from "../components/Navbar";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Dashboard() {
  const [properties, setProperties] = useState([]);

  // Fetch all user properties
  useEffect(() => {
    const fetchMyProperties = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${backendURL}/property/my`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("API RESPONSE:", response.data);

        if (response.data.success) {
          setProperties(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchMyProperties();
  }, []);

  // ✅ NEW: Handle Delete functionality
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?",
    );
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      // Hits your backend route: /property/delete/:id
      const response = await axios.delete(
        `${backendURL}/property/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Pass token if backend requires auth for deletes
          },
        },
      );

      if (response.data.success || response.status === 200) {
        // Instantly remove the deleted property from the frontend UI state
        setProperties(properties.filter((property) => property._id !== id));
        alert("Property deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Failed to delete property. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      {/* HEADER SECTION: Title and Add Button */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-widest uppercase text-stone-500 text-center sm:text-left">
          my properties
        </h1>
        <Link to="/addProperty">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer">
            <FaPlus size={16} />
            <span>Add Property</span>
          </button>
        </Link>
      </div>

      {/* CONDITIONAL RENDERING */}
      {properties.length === 0 ? (
        <div className="text-center mt-12 p-8 bg-stone-50 rounded-xl max-w-md mx-auto border border-stone-200 shadow-sm  sm:mx-auto">
          <p className="text-xl text-stone-600 font-medium mb-2">
            You haven't listed any properties yet.
          </p>
          <p className="text-sm text-stone-400">
            Once you add a property, it will appear right here on your
            dashboard.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl mx-auto px-4 pb-12">
          {properties.map((p) => (
            <div
              key={p._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={`http://localhost:3000/images/${p.images}`}
                alt={p.title}
                className="h-48 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 space-y-2">
                <h2 className="text-lg font-bold text-gray-800">{p.title}</h2>

                <p className="text-gray-500 flex items-center gap-1">
                  <span>
                    <FaLocationDot />
                  </span>{" "}
                  {p.location}
                </p>

                <p className="text-sm text-gray-600">
                  Type: <span className="font-medium">{p.type}</span>
                </p>

                {/* BADGE & ACTIONS */}
                <div className="flex justify-between items-center mt-3">
                  <span className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                    {p.type}
                  </span>

                  {/* ✅ UPDATED: Added onClick listener passing the property ID */}
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="text-sm text-red-500 hover:text-red-700 border border-stone-600 w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-colors"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Dashboard;
