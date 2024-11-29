"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation

const EmployeeLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize Next.js router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored employees from localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Check if username and password match any employee
    const employee = employees.find(
      (emp) =>
        emp.username === formData.username && emp.password === formData.password
    );

    if (employee) {
      // Login successful
      setError("");
      router.push("/quizpage"); // Use router to redirect to the quiz page
    } else {
      // Login failed
      setError("Invalid username or password!");
    }
  };

  return (
    <div
      className="flex justify-center items-center pt-[1%] h-[90.5vh]"
      style={{
        backgroundImage:
          "url('https://c0.wallpaperflare.com/preview/389/615/630/business-businessman-communication-concept.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white shadow-2xl rounded-lg p-8 w-[70vw] max-w-md border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6">Employee Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username:
            </label>
            <input
              name="username"
              value={formData.username}
              placeholder="Enter your username"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;
