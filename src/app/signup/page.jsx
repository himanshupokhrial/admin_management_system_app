"use client";
import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    dob: "",
    password: "",
    confirmPassword: "",
    software: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setSuccess("");
      return;
    }

    setError("");

    // Retrieve existing employees from localStorage
    const employees = JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee to the list
    const newEmployee = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      address: formData.address,
      dob: formData.dob,
      password: formData.password,
      software: formData.software,
    };
    employees.push(newEmployee);

    // Save updated employee list back to localStorage
    localStorage.setItem("employees", JSON.stringify(employees));

    // Reset form and show success message
    setFormData({
      name: "",
      username: "",
      email: "",
      address: "",
      dob: "",
      password: "",
      confirmPassword: "",
      software: "",
    });

    setSuccess("Employee signed up successfully!");
  };

  return (
    <div className="flex justify-center items-center pt-[1%] h-[90.5vh]"
   
    style={{
      backgroundImage:
        "url('https://images.squarespace-cdn.com/content/v1/610d4d6e86f84f7c5dd6eeef/8d1fe6a5-1698-4e37-9366-98869c56d418/NewsletterSignup-Background.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}
    
    
    >
      <div className="bg-white shadow-2xl rounded-lg p-8 w-[70vw] max-w-4xl border border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-6">Employee Signup</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">FullName:</label>
              <input
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Username:</label>
              <input
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email:</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Address:</label>
              <input
                name="address"
                value={formData.address}
                placeholder="Address"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date of Birth:</label>
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password:</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password:
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Software:</label>
              <select
                name="software"
                value={formData.software}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select</option>
                <option>Adobe InDesign</option>
                <option>Photoshop</option>
                <option>Illustrator</option>
                <option>IntelliJ</option>
                <option>Eclipse</option>
              </select>
            </div>
          </div>
        </form>

        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
