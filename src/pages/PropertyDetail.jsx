import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendURL } from "../config";
import Navbar from "../components/Navbar";
import { FaLocationDot, FaBed, FaBath, FaDollarSign, FaRegPaperPlane } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";


function PropertyDetail() {
  const { id } = useParams(); // Grabs the property ID from the URL route path
  const navigate = useNavigate();

  

console.log("PARAM ID:", id);
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {

        const response = await axios.get(`${backendURL}/property/get/${id}`);
        if (response.data) {
          setProperty(response.data.data || response.data);
        }
        console.log("RESPONSE:", response.data);

      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return alert("Please type a message first!");
    
    
    alert(`Message sent successfully regarding: "${property.title}"`);
    setMessage("");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-pulse text-stone-500 font-medium">Loading property details...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50 p-4">
        <p className="text-xl text-stone-600 font-semibold mb-4">Property not found.</p>
        <button onClick={() => navigate("/")} className="bg-stone-800 text-white px-4 py-2 rounded-xl">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-12">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-1 text-stone-500 hover:text-stone-800 font-medium mb-6 transition cursor-pointer"
        >
          <IoChevronBackOutline size={18} />
          <span>Back</span>
        </button>

        {/* SPLIT SCREEN LAYOUT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden">
          
          {/* LEFT COLUMN: IMAGES (Takes 7/12 width on large screens) */}
          <div className="lg:col-span-7 bg-stone-900 min-h-87.5 lg:min-h-137.5 relative flex items-center justify-center overflow-hidden">
            <img
              src={`http://localhost:3000/images/${property.images}`}
              alt={property.title}
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* Soft dark vignette overlay over the image base */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Property Type Floating Badge */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
              {property.type}
            </span>
          </div>

          {/* RIGHT COLUMN: DETAILS & MESSAGE (Takes 5/12 width on large screens) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full space-y-8">
            
            {/* Top Details Block */}
            <div className="space-y-5">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-stone-800 leading-tight">
                  {property.title}
                </h1>
                <p className="text-stone-500 flex items-center gap-1.5 mt-2 text-sm sm:text-base">
                  <FaLocationDot className="text-blue-500 shrink-0" /> {property.location}
                </p>
              </div>

              {/* Price Tag styling */}
              <div className="inline-flex items-center gap-1 text-2xl font-black text-blue-600 bg-blue-50/70 px-4 py-2 rounded-xl">
                <FaDollarSign size={20} className="-mr-0.5" />
                <span>{property.expense}</span>
                <span className="text-xs font-semibold text-blue-400 ml-1 uppercase tracking-wider">Total</span>
              </div>

              <hr className="border-stone-100" />

              {/* Specs Grid Row */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex flex-col items-center">
                  <IoHomeSharp className="text-stone-400 mb-1" size={16} />
                  <span className="text-xs text-stone-400 font-medium block">Type</span>
                  <span className="text-sm font-semibold text-stone-700 capitalize">{property.type}</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex flex-col items-center">
                  <FaBed className="text-stone-400 mb-1" size={16} />
                  <span className="text-xs text-stone-400 font-medium block">Bedrooms</span>
                  <span className="text-sm font-semibold text-stone-700">{property.bedroom} Beds</span>
                </div>
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 flex flex-col items-center">
                  <FaBath className="text-stone-400 mb-1" size={16} />
                  <span className="text-xs text-stone-400 font-medium block">Bathrooms</span>
                  <span className="text-sm font-semibold text-stone-700">{property.bathroom} Baths</span>
                </div>
              </div>

              {/* Description Block */}
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-stone-700 uppercase tracking-wider">About This Space</h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>
            </div>

            {/* MESSAGE INTERACTION BLOCK (Bottom right section) */}
            <div className="pt-6 border-t border-stone-100">
              <h3 className="text-sm font-bold text-stone-700 uppercase tracking-wider mb-3">
                Inquire About Property
              </h3>
              <form onSubmit={handleSendMessage} className="space-y-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask a question or request a viewing setup..."
                  rows="3"
                  required
                  className="w-full border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl p-3 text-sm text-stone-800 transition resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <FaRegPaperPlane size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetail;