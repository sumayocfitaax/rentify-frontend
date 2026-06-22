
import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { FaLocationDot } from "react-icons/fa6";
import { BsHouseFill } from "react-icons/bs";
import { FaBed } from "react-icons/fa6";
import { MdBathtub } from "react-icons/md";
import { Link } from "react-router-dom";


function FeaturedProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${backendURL}/properties/get`);

        if (res.data.success) {
          setProperties(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Properties
          </h2>
          <p className="text-gray-500 mt-3">
            Explore our most popular rental properties.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {properties.slice(0, 3).map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img
                src={`http://localhost:3000/images/${property.images}`}
                alt={property.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    {property.title}
                  </h3>

                  <p className="text-blue-600 font-bold mt-2">
                    ${property.expense}/month
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-gray-500 mt-2 flex gap-1 items-center">
                    <span><FaLocationDot/></span>
                   {property.location}
                  </p>
                  <p className="flex items-center gap-1 mt-4 text-gray-600">
                    <span><BsHouseFill/></span>
                    <span>  {property.type}</span>
                  </p>
                </div>
                  <div className="border border-stone-100 mt-3 rounded-full"></div>
                  <div className="flex items-center justify-around gap-4 mt-4 text-gray-600">
                   <span className="bg-stone-100 px-6 rounded-md py-1 flex items-center gap-1"> <span><FaBed/></span> {property.bedroom} Beds</span>
                   <span className="bg-stone-100 px-6 rounded-md py-1 flex items-center gap-1"> <span><MdBathtub/></span> {property.bathroom} Baths</span>
                 </div>

                  <div className="border border-stone-100 mt-3 rounded-full"></div>

                <p className="text-gray-500 mt-2">
                   {property.description}
                </p>

                <Link to='/propertyDetail'>
                  <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;