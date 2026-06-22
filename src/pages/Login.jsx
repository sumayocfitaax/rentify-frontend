import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { backendURL } from "../config";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // ✅ Grab the global login function
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendURL}/api/user/login`, { email, password });

      if (res.data.success) {
        // ✅ Call global context login. It saves to storage AND tells the navbar to re-render!
        login(res.data.user, res.data.token); 
        
        navigate("/");
      }

      

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl text-white">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Sign in to continue exploring luxury homes
        </p>

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="space-y-4">

          <input  value={email} onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />

          <input value={password} onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 rounded-xl transition"
          >
            Sign In
          </button>

        </form>

        {/* Links */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-amber-400 hover:underline">
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;