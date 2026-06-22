import { useEffect, useState } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { FaBuilding, FaHome, FaHotel, FaWarehouse } from "react-icons/fa";

function PropertyCategories() {
  const [stats, setStats] = useState({
    apartments: 0,
    villas: 0,
    houses: 0,
    offices: 0,
  });

  useEffect(() => {
    const getStats = async () => {
      const res = await axios.get(
        `${backendURL}/api/property/stats`
      );

      setStats(res.data.stats);
    };

    getStats();
  }, []);

  const categories = [
    {
      name: "Apartments",
      icon: <FaBuilding />,
      count: `${stats.apartments} Listings`,
    },
    {
      name: "Villas",
      icon: <FaHotel />,
      count: `${stats.villas} Listings`,
    },
    {
      name: "Houses",
      icon: <FaHome />,
      count: `${stats.houses} Listings`,
    },
    {
      name: "Offices",
      icon: <FaWarehouse />,
      count: `${stats.offices} Listings`,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Property Categories
        </h2>

        <p className="text-gray-500 mt-3">
          Browse properties by type and find what suits you best.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition cursor-pointer"
            >
              <div className="text-4xl text-blue-600 flex justify-center mb-4">
                {cat.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800">
                {cat.name}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyCategories;