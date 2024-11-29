// "use client";
// import React, { useState, useEffect } from "react";


// function EmployeeDetails() {
//   const [employees, setEmployees] = useState([]);

//   // Fetch employees who completed the test
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       const res = await fetch("/api/employees");
//       if (res.ok) {
//         const data = await res.json();
//         setEmployees(data);
//       } else {
//         alert("Failed to fetch employee details.");
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border border-gray-300 p-2">ID</th>
//             <th className="border border-gray-300 p-2">Name</th>
//             <th className="border border-gray-300 p-2">Email</th>
//             <th className="border border-gray-300 p-2">DOB</th>
//             <th className="border border-gray-300 p-2">Software</th>
//             <th className="border border-gray-300 p-2">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.id}>
//               <td className="border border-gray-300 p-2">{employee.id}</td>
//               <td className="border border-gray-300 p-2">{employee.name}</td>
//               <td className="border border-gray-300 p-2">{employee.email}</td>
//               <td className="border border-gray-300 p-2">{employee.dob}</td>
//               <td className="border border-gray-300 p-2">{employee.software}</td>
//               <td className="border border-gray-300 p-2">{employee.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeDetails;






// "use client";
// import React, { useEffect, useState } from "react";

// function EmployeeDetails() {
//   const [employees, setEmployees] = useState([]);

//   // Fetch employees from localStorage
//   useEffect(() => {
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
//     setEmployees(storedEmployees);
//   }, []);

//   // Handle delete functionality
//   const handleDelete = (id) => {
//     // Delete the employee from the list
//     const updatedEmployees = employees.filter((employee) => employee.id !== id);
    
//     // Delete the employee's score from localStorage if it exists
//     localStorage.removeItem(`employee_score_${id}`);

//     // Update the employees list in localStorage
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));

//     // Update the state to reflect the changes
//     setEmployees(updatedEmployees);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Name</th>
//               <th className="border border-gray-300 p-2">Email</th>
//               <th className="border border-gray-300 p-2">DOB</th>
//               <th className="border border-gray-300 p-2">Software</th>
//               <th className="border border-gray-300 p-2">Score</th>
            
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => {
//               // Fetching the score for each employee from localStorage
//               const score = localStorage.getItem(`employee_score_${employee.score}`);
//               return (
//                 <tr key={employee.id} className="bg-white">
//                   <td className="border border-gray-300 p-2">{index + 1}</td> {/* Serial ID */}
//                   <td className="border border-gray-300 p-2">{employee.name}</td>
//                   <td className="border border-gray-300 p-2">{employee.email}</td>
//                   <td className="border border-gray-300 p-2">{employee.dob}</td>
//                   <td className="border border-gray-300 p-2">{employee.software}</td>
//                   <td className="border border-gray-300 p-2">
//                     {/* Show the score */}
//                     {score ? (
//                       <div className="text-lg">
//                         <strong>{score} / 100</strong>
//                       </div>
//                     ) : (
//                       <div>No score found.</div>
//                     )}
//                   </td>
                 
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default EmployeeDetails;

// "use client";
// import React, { useEffect, useState } from "react";

// function EmployeeDetails() {
//   const [employees, setEmployees] = useState([]);

//   // Fetch employees from localStorage
//   useEffect(() => {
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
//     setEmployees(storedEmployees);
//   }, []);

//   // Handle delete functionality
//   const handleDelete = (id) => {
//     // Remove the employee with the specified ID
//     const updatedEmployees = employees.filter((employee) => employee.id !== id);

//     // Update the employees list in localStorage
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));

//     // Update the state to reflect the changes
//     setEmployees(updatedEmployees);
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 p-2">ID</th>
//               <th className="border border-gray-300 p-2">Name</th>
//               <th className="border border-gray-300 p-2">Email</th>
//               <th className="border border-gray-300 p-2">DOB</th>
//               <th className="border border-gray-300 p-2">Software</th>
//               <th className="border border-gray-300 p-2">Score</th>
//               <th className="border border-gray-300 p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee, index) => (
//               <tr key={employee.id} className="bg-white">
//                 <td className="border border-gray-300 p-2">{index + 1}</td> {/* Serial ID */}
//                 <td className="border border-gray-300 p-2">{employee.name}</td>
//                 <td className="border border-gray-300 p-2">
//                   {employee.email}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {employee.dob || "N/A"}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {employee.software || "N/A"}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {/* Show the score */}
//                   {employee.score !== undefined ? (
//                     <strong>{employee.score} / 100</strong>
//                   ) : (
//                     "No score found"
//                   )}
//                 </td>
//                 <td className="border border-gray-300 p-2">
//                   {/* Delete button to remove employee */}
//                   <button
//                     onClick={() => handleDelete(employee.id)}
//                     className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default EmployeeDetails;




"use client";
import React, { useEffect, useState } from "react";

function EmployeeDetails() {
  const [employees, setEmployees] = useState([]);

  // Fetch employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    // Exclude any scores (if stored in employees data) before rendering
    const sanitizedEmployees = storedEmployees.map(({ score, ...employee }) => employee);
    setEmployees(sanitizedEmployees);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Address</th>
              <th className="border border-gray-300 p-2">DOB</th>
              <th className="border border-gray-300 p-2">Software</th>
            </tr>
          </thead>
          <tbody>
           {employees.map((employee, index) => {
            
              
              return (
                <tr key={employee.id} className="bg-white">
                  <td className="border border-gray-300 p-2">{index + 1}</td> {/* Serial ID */}
                  <td className="border border-gray-300 p-2">{employee.name}</td>
                  <td className="border border-gray-300 p-2">{employee.email}</td>
                  <td className="border border-gray-300 p-2">{employee.address}</td>
                  <td className="border border-gray-300 p-2">{employee.dob}</td>
                  <td className="border border-gray-300 p-2">{employee.software}</td>
                 
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeDetails;



