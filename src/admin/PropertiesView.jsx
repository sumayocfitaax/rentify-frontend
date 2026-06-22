import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { Link } from "react-router-dom";

function PropertiesView() {
  const [properties, setProperties] = useState([]);


  useEffect(() => {
    const fetchProperties = async () => {
    try {
      const res = await axios.get(
        `${backendURL}/api/properties/get`
      );

      if (res.data.success) {
        setProperties(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
    fetchProperties();
  }, []);

  

  const deleteProperty = async (id) => {
  if (!window.confirm("Are you sure you want to delete this property?")) return;

  try {
    const token = localStorage.getItem("token");

    // 🚨 Changed back to matching your backend singular endpoint route path
    const res = await axios.delete(
      `${backendURL}/property/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Delete Response Data:", res.data); // See exactly what your controller sends back

    // Added a fallback check in case your backend doesn't send 'success: true' explicitly
    if (res.data.success || res.status === 200) {
      setProperties((prev) => prev.filter((item) => item._id !== id));
    } else {
      alert(res.data.message || "Failed to delete property");
    }
  } catch (error) {
    console.error("Error deleting property:", error.response?.data || error.message);
    alert(`Error: ${error.response?.data?.message || "An error occurred while deleting."}`);
  }
};

  return (
    <div className="p-8">
      <div className="flex items-center justify-between p-3">
          <h1 className="text-3xl font-bold mb-8">
          All Properties
          </h1>

        <Link to='/addProperty'>
          <button className="bg-blue-500 text-white px-6 py-2 cursor-pointer rounded-md">+Add Property</button>
        </Link>
      </div>
      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={`http://localhost:3000/images/${property.images}`}
              alt={property.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h2 className="font-bold text-xl">
                {property.title}
              </h2>

              <p className="text-gray-500 mt-2">
                📍 {property.location}
              </p>

              <p className="text-blue-600 font-bold mt-2">
                ${property.expense}
              </p>

              <div className="flex gap-3 mt-5">
                

                <button
                  onClick={() =>
                    deleteProperty(property._id)
                  }
                  className="flex-1 bg-red-600 text-white py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertiesView;