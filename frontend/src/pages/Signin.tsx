import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [button, setButton] = useState("Login");
  const url = import.meta.env.VITE_BACKEND;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setButton("Logging in...");

    try {
      const response = await axios.post(`${url}/api/v1/user/signin`, {
        username,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.name));
        navigate("/home");
      } else {
        alert("Invalid Credentials");
        setButton("Login");
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please try again.");
      setButton("Login");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-slate-800">
      <form className="bg-white shadow-md rounded-lg p-10 max-w-lg w-full" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome to <span className="bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent">VentureVerse</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full p-2.5"
            placeholder="abc@gmail.com"
            autoComplete="off"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-400 focus:border-indigo-400 block w-full p-2.5"
            placeholder="●●●●●●●"
            autoComplete="off"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-indigo-400 to-pink-600 hover:bg-gradient-to-l hover:from-indigo-400 hover:to-pink-600 focus:ring-4 focus:outline-none focus:ring-indigo-200 font-medium rounded-full text-sm px-5 py-3 text-center transition duration-150 ease-in-out"
        >
         {button}
        </button>

        <div className="flex justify-center mt-4 text-gray-900">
          If you do not have an account?
          <div onClick={() => navigate("/signup")} className="ml-1 text-indigo-700 underline cursor-pointer">SignUp</div>
        </div>
      </form>
    </div>
  );
}
