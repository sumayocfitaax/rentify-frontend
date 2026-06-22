import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {backendURL} from '../config'
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

function Register() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backendURL}/user/register`, {name, email, password})

      if(response.data.success){
        localStorage.setItem('token', response.data.success)
        toast.success('user register success')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
     const errorMessage = error.response?.data?.message || 'Something went wrong';
    
    toast.error(errorMessage);
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black px-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl text-white">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Join to access premium properties
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">

          <input value={name} onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 outline-none text-white placeholder-gray-400"
          />

          <input value={email} onChange={(e) => setEmail(e.target.value)}
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
            Create Account
          </button>

        </form>

        {/* Links */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-400 hover:underline">
            Sign in
          </Link>
        </p>

      </div>
      <Toaster/>
    </div>
  );
}

export default Register;