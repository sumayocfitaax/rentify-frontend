import { useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt, FaBed, FaBath, FaDollarSign, FaMapMarkerAlt, FaHome } from "react-icons/fa";
import toast, {Toaster} from 'react-hot-toast'

function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    location: "",
    type: "",
    expense: "",
    bedroom: "",
    bathroom: ""
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("location", form.location);
      formData.append("type", form.type);
      formData.append("expense", form.expense);
      formData.append("bedroom", form.bedroom);
      formData.append("bathroom", form.bathroom);
      
      
      formData.append("images", image); 

      const res = await axios.post(
        `${backendURL}/api/property/add`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data" 
          }
        }
      );

      if (res.data.success) {
        toast.success("Property added successfully!")
        // alert("Property added successfully!");
        navigate("/dashboard");
      }

    } catch (error) {
      console.error("Error adding property:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden">
        
        {/* Form Header Title */}
        <div className="bg-stone-800 p-6 text-white">
          <h1 className="text-2xl font-bold tracking-wide">List a New Property</h1>
          <p className="text-stone-400 text-sm mt-1">Fill out the details below to publish your property listing.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
         
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-stone-700">Property Photo</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-stone-300 rounded-xl cursor-pointer bg-stone-50 hover:bg-stone-100/70 transition-all overflow-hidden relative group">
                
                {preview ? (
                  <>
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white font-medium text-sm flex items-center gap-2">
                        <FaCloudUploadAlt size={18} /> Change Photo
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaCloudUploadAlt className="w-10 h-10 text-stone-400 mb-2" />
                    <p className="mb-1 text-sm text-stone-600 font-medium">Click to upload imagery</p>
                    <p className="text-xs text-stone-400">PNG, JPG or JPEG</p>
                  </div>
                )}
                
                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" required />
              </label>
            </div>
          </div>

          <hr className="border-stone-100" />

          {/* BASIC DETAILS */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-stone-700 mb-1">Title</label>
              <input name="title" type="text" placeholder="e.g., Luxury Modern Apartment" onChange={handleChange} required
                className="w-full border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl p-3 text-stone-800 transition" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=" text-sm font-semibold text-stone-700 mb-1 flex items-center gap-1.5"><FaMapMarkerAlt className="text-stone-400"/> Location</label>
                <input name="location" type="text" placeholder="City, Country" onChange={handleChange} required
                  className="w-full border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl p-3 text-stone-800 transition" />
              </div>

              <div>
                <label className=" text-sm font-semibold text-stone-700 mb-1 flex items-center gap-1.5"><FaHome className="text-stone-400"/> Property Type</label>
                <select name="type" onChange={handleChange} defaultValue="" required
                  className="w-full border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl p-3 text-stone-800 bg-white transition">
                  <option value="" disabled>Select Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="house">House</option>
                  <option value="office">Office</option>
                </select>
              </div>
            </div>
          </div>

          {/* SPECIFICATIONS GRID (Price, Beds, Baths) */}
          <div className="grid grid-cols-3 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-100">
            <div>
              <label className=" text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1"><FaDollarSign/> Price</label>
              <input name="expense" type="number" placeholder="Value" onChange={handleChange} required
                className="w-full border border-stone-200 bg-white focus:border-blue-500 outline-none rounded-lg p-2.5 text-stone-800 transition" />
            </div>

            <div>
              <label className=" text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1"><FaBed/> Beds</label>
              <input name="bedroom" type="number" placeholder="Qty" onChange={handleChange} required
                className="w-full border border-stone-200 bg-white focus:border-blue-500 outline-none rounded-lg p-2.5 text-stone-800 transition" />
            </div>

            <div>
              <label className=" text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1"><FaBath/> Baths</label>
              <input name="bathroom" type="number" placeholder="Qty" onChange={handleChange} required
                className="w-full border border-stone-200 bg-white focus:border-blue-500 outline-none rounded-lg p-2.5 text-stone-800 transition" />
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-1">Description</label>
            <textarea name="description" rows="4" placeholder="Describe the outstanding qualities of this property..." onChange={handleChange} required
              className="w-full border border-stone-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none rounded-xl p-3 text-stone-800 transition resize-none" />
          </div>

          {/* SUBMIT BUTTON */}
          <button type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-semibold py-3.5 rounded-xl shadow-lg transition-all text-center cursor-pointer mt-2">
            Publish Property Listing
          </button>

      <Toaster/>
        </form>
      </div>
    </div>
  );
}

export default AddProperty;