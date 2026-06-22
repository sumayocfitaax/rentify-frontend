import { useState, useEffect } from "react";
import axios from "axios";
import { backendURL } from "../config";
import { FaUsers, FaBuilding, FaHotel, FaBriefcase, FaChartPie } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


function DashboardView() {

  const navigate = useNavigate()

   useEffect(()=>{
    const token = localStorage.getItem('adminLogin')
    if(!token){
    navigate('/adminLogin')
  }
  })

  const [adminName, setAdminName] = useState("Admin");
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProperties: 0,
    apartment: 0,
    villa: 0,
    house: 0,
    office: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = { Authorization: `Bearer ${token}` };

        // Pull admin name from storage if available
        setAdminName(localStorage.getItem("adminName") || "System Administrator");

        // Fetching structural info to populate dashboard analytics
        const propsRes = await axios.get(`${backendURL}/properties/get`, { headers });
        const usersRes = await axios.get(`${backendURL}/user/getAll`, { headers }).catch(() => null);
        console.log(usersRes.data);
        if (propsRes?.data?.success) {
          const props = propsRes.data.data || [];
          const counts = props.reduce((acc, curr) => {
            const type = curr.type?.toLowerCase();
            if (acc[type] !== undefined) acc[type]++;
            return acc;
          }, { apartment: 0, villa: 0, house: 0, office: 0 });

          setStats({
            totalUsers: usersRes?.data?.users?.length || 0,
            totalProperties: props.length,
            ...counts
});
        }
      } catch (error) {
        console.error("Error loading dashboard metrics:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
    <div className="flex-1 flex flex-col min-w-0 bg-stone-100 min-h-screen">
      
      {/* TOP ADMIN PROFILE & WELCOME BANNER */}
      <header className="bg-white border-b border-stone-200 px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-stone-800">Welcome Back, Admin</h1>
          <p className="text-stone-400 text-xs sm:text-sm mt-0.5">Here is an overview of your platform statistics today.</p>
        </div>
        
        {/* Admin Profile Details */}
        <div className="flex items-center gap-3 bg-stone-50 border border-stone-200/60 rounded-xl p-2.5 pr-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm uppercase">
            {adminName.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-800 leading-tight">{adminName}</p>
            <span className="text-[10px] font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md uppercase">Root Access</span>
          </div>
        </div>
      </header>

      {/* LIVE METRICS CARDS DISPLAY CONTAINER */}
      <div className="p-8 max-w-7xl w-full mx-auto space-y-6 animate-fadeIn">
        <h2 className="text-lg font-bold text-stone-700 tracking-tight flex items-center gap-2">
          <FaChartPie className="text-stone-400" /> Platform Metrics Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><FaUsers size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Total Users</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.totalUsers}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-stone-100 text-stone-700 rounded-xl"><FaBuilding size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Properties</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.totalProperties}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><FaBuilding size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Apartments</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.apartment}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><FaHotel size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Villas</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.villa}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><FaHouse size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Houses</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.house}</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-rose-50 text-rose-600 rounded-xl"><FaBriefcase size={20}/></div>
            <div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Offices</p>
              <h3 className="text-xl font-extrabold text-stone-800 mt-0.5">{stats.office}</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}

export default DashboardView;