import React from "react";

const Portal = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center font-poppins">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Student Login
        </h2>
        <form>
          {/* User ID */}
          <div className="mb-6">
            <label
              htmlFor="user-id"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              User ID
            </label>
            <input
              id="user-id"
              name="user-id"
              type="text"
              placeholder="Enter your User ID"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
              required
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-secondary hover:text-primary hover:duration-300 transition-all"
            >
              Login
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          © 2024 Amazing Grace. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Portal;
