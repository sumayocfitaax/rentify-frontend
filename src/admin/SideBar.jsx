import { useState } from "react";
import { MdMenu, MdChevronLeft, MdLogout, MdDashboard } from "react-icons/md";
import { FaBuilding, FaUsers } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    
    <div className="min-h-screen bg-stone-100 flex">
      
      {/* SIDEBAR */}
      <aside className={`bg-stone-900 text-stone-300 flex flex-col justify-between transition-all duration-300 shrink-0 ${
        isCollapsed ? "w-20" : "w-64"
      }`}>
        
        {/* Top Control Block */}
        <div>
          <div className="h-20 flex items-center justify-between px-6 border-b border-stone-800">
            {!isCollapsed && <span className="text-white font-black tracking-wider uppercase text-lg">Admin</span>}
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-stone-400 hover:text-white p-1.5 rounded-lg bg-stone-800/50 cursor-pointer mx-auto"
            >
              {isCollapsed ? <MdMenu size={22} /> : <MdChevronLeft size={22} />}
            </button>
          </div>

          {/* Sidebar Menu Links */}
          <nav className="p-4 space-y-2">
            <Link to='/admin/dashboard'>
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium text-sm cursor-pointer ${
                  activeTab === "dashboard" ? "bg-blue-600 text-white" : "hover:bg-stone-800 hover:text-white"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
              >
                <MdDashboard size={20} />
                {!isCollapsed && <span>Dashboard</span>}
              </button>
            </Link>
            
            <Link to='/admin/property'>
              <button
                onClick={() => setActiveTab("properties")}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium text-sm cursor-pointer ${
                  activeTab === "properties" ? "bg-blue-600 text-white" : "hover:bg-stone-800 hover:text-white"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
              >
                <FaBuilding size={18} />
                {!isCollapsed && <span>Properties</span>}
              </button>
            </Link>

            <Link to='/admin/user'>
              <button
                onClick={() => setActiveTab("users")}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-medium text-sm cursor-pointer ${
                  activeTab === "users" ? "bg-blue-600 text-white" : "hover:bg-stone-800 hover:text-white"
                } ${isCollapsed ? "justify-center px-0" : ""}`}
              >
                <FaUsers size={18} />
                {!isCollapsed && <span>Users</span>}
              </button>
            </Link>

          </nav>
        </div>

        {/* Bottom Sidebar Logout Button */}
        <div className="p-4 border-t border-stone-800">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all font-medium text-sm cursor-pointer ${
              isCollapsed ? "justify-center px-0" : ""
            }`}
          >
            <MdLogout size={20} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>

      </aside>


    </div>
  );
}

export default SideBar;