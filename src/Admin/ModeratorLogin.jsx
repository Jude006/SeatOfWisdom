import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const ModeratorLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    setError("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-accent font-open">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center font-poppins">Moderator Login</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-lg font-semibold text-gray-700">Username / Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2">
              <FaUserAlt className="w-5 h-5 ml-3 text-gray-500" />
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-3 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold text-gray-700">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg mt-2">
              <FaLock className="w-5 h-5 ml-3 text-gray-500" />
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-3 rounded-r-lg focus:outline-none focus:border-none "
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-primary text-white font-semibold text-lg rounded-lg shadow-md hover:bg-secondary hover:text-pretty hover:duration-300 hover:ease-linear focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ModeratorLogin;
