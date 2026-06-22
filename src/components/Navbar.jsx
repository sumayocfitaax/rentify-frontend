import { useState, useContext } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // ✅ Grab the global auth variables directly from context
  const { userLogin, logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogOutAction = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="bg-white/10 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Rentify
              </span>
            </Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-stone-600 hover:text-stone-900 transition">Home</Link>
            <Link to="/property" className="text-stone-600 hover:text-stone-900 transition">Properties</Link>
            <Link to="/about" className="text-stone-600 hover:text-stone-900 transition">About</Link>
            <Link to="/contact" className="text-stone-600 hover:text-stone-900 transition">Contact</Link>
          </div>

          {/* AUTH SECTION */}
          {userLogin ? (
            <div className="relative group flex items-center space-x-3 cursor-pointer">

              {/* Avatar Initial */}
              <div className=" w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold border border-amber-800 shadow-xs">
                {userLogin?.name ? userLogin.name.charAt(0).toUpperCase() : "U"}
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-lg py-2 text-sm border border-stone-100 overflow-hidden">

                  <div className="px-4 py-2 border-b border-stone-100 bg-stone-50/50">
                    <p className="text-stone-400 text-xs font-medium">Welcome,</p>
                    <p className="font-semibold text-stone-800 truncate mt-0.5">{userLogin?.name}</p>
                  </div>

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2.5 text-stone-700 hover:bg-stone-50 transition"
                  >
                    My Properties
                  </Link>

                  <button
                    onClick={handleLogOutAction}
                    className="w-full text-left px-4 py-2.5 text-red-600 hover:bg-red-50 border-t border-stone-100 font-medium transition cursor-pointer"
                  >
                    Sign Out
                  </button>

                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link to="/login" className="text-stone-600 hover:text-stone-900 transition">Sign In</Link>
              <Link to="/register" className="bg-stone-900 hover:bg-stone-800 text-white px-4 py-2 rounded-xl transition">
                Register
              </Link>
            </div>
          )}

          {/* Mobile Hamburg Button Toggle */}
          <button
            className="md:hidden text-2xl text-stone-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-stone-100 bg-white px-2 space-y-3 rounded-b-xl shadow-md">
            <div className="flex flex-col space-y-3 text-sm font-medium pl-2">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/property" onClick={() => setMenuOpen(false)}>Properties</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

              <hr className="border-stone-100" />

              {userLogin ? (
                <div className="space-y-3 pt-1">
                  <p className="text-stone-500 text-xs uppercase tracking-wider">Account</p>
                  <p className="font-semibold text-stone-800">Welcome, {userLogin?.name}</p>
                  <Link to="/dashboard" className="block text-stone-700" onClick={() => setMenuOpen(false)}>My Properties</Link>
                  <button
                    onClick={() => { handleLogOutAction(); setMenuOpen(false); }}
                    className="text-red-600 text-left font-medium w-full pt-1"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-3 pt-1">
                  <Link to="/login" className="text-stone-600" onClick={() => setMenuOpen(false)}>Sign In</Link>
                  <Link to="/register" className="bg-stone-900 text-white text-center py-2 rounded-xl" onClick={() => setMenuOpen(false)}>Register</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;