// "use client";
// import React, { useState } from "react";

// function Admin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username === "admin" && password === "admin123") {
//       alert("Admin login successful!");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div
//       className="flex justify-center items-center h-[89vh] bg-cover bg-center "
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
//           overflow:"hidden"
//       }}
//     >
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
//           Admin Login
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Username:
//             </label>
//             <input
//               required
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter username"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Password:
//             </label>
//             <input
//               required
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Admin;





"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router for navigation

function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Next.js router

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      alert("Login successful!");
      router.push("/employees"); // Redirect to Employee Details page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
        <div
          className="flex justify-center items-center h-[90.5vh] bg-cover bg-center "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')",
              overflow:"hidden"
          }}
        >
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
              Admin Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Username:
                </label>
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Password:
                </label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

export default Admin;
