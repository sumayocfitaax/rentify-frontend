import Property from "./Property";
import axios from "axios";
import { backendURL } from "../config";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const PropertyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllProperty = async () => {
      try {
        const response = await axios.get(`${backendURL}/properties/get`);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProperty();
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main Section Header */}
        <div className="flex flex-col space-y-2 mb-12 border-b border-stone-200/60 pb-6">
          <div className="inline-flex items-center space-x-2">
            <span className="h-px w-6 bg-amber-500"></span>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-600">
              Live Directories
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">
            All Listed <span className="text-amber-700 italic font-normal font-sans">Properties</span>
          </h1>
        </div>

        {/* Responsive Flex/Grid Canvas Structure */}
        {data.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200/60 p-8">
            <p className="text-stone-400 text-sm">No properties found in database index.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 items-stretch">
            {data.map((property) => (
              <Property
                key={property._id}
                property={property}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default PropertyList;