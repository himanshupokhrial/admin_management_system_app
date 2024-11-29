


// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [error, setError] = useState("");
//   const [timeLeft, setTimeLeft] = useState(3600); // 1 hour = 3600 seconds
//   const [score, setScore] = useState(0);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [shuffledQuestions, setShuffledQuestions] = useState([]);

//   // Static questions with fixed IDs
//   const questions = [
//     {
//       id: 1,
//       question: "What does CPU stand for?",
//       options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//       correctAnswer: "Central Processing Unit",
//     },
//     {
//       id: 2,
//       question: "Which language is primarily used for web development?",
//       options: ["Python", "HTML", "C++", "Java"],
//       correctAnswer: "HTML",
//     },
//     {
//       id: 3,
//       question: "What is the time complexity of binary search?",
//       options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//       correctAnswer: "O(log n)",
//     },
//     {
//       id: 4,
//       question: "What does HTTP stand for?",
//       options: [
//         "HyperText Transfer Protocol",
//         "HyperText Transmission Protocol",
//         "HyperText Transfer Procedure",
//         "HyperText Transport Protocol",
//       ],
//       correctAnswer: "HyperText Transfer Protocol",
//     },
//     {
//       id: 5,
//       question: "Which one is not an operating system?",
//       options: ["Windows", "Linux", "Oracle", "macOS"],
//       correctAnswer: "Oracle",
//     },
//     {
//       id: 6,
//       question: "Which data structure uses FIFO (First In, First Out)?",
//       options: ["Stack", "Queue", "Array", "Tree"],
//       correctAnswer: "Queue",
//     },
//     {
//       id: 7,
//       question: "What does RAM stand for?",
//       options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//       correctAnswer: "Random Access Memory",
//     },
//     {
//       id: 8,
//       question: "Which one is a primary key in databases?",
//       options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//       correctAnswer: "Unique identifier",
//     },
//     {
//       id: 9,
//       question: "Which programming language is known as 'platform-independent'?",
//       options: ["C++", "Java", "Python", "Assembly"],
//       correctAnswer: "Java",
//     },
//     // More questions go here...
//     {
//       id: 50,
//       question: "Which command is used to display the contents of a file in Linux?",
//       options: ["ls", "cd", "cat", "rm"],
//       correctAnswer: "cat",
//     },
//   ];

//   useEffect(() => {
//     // Check if shuffled questions exist in local storage
//     const storedQuestions = localStorage.getItem("shuffledQuestions");

//     if (storedQuestions) {
//       // If questions are already shuffled in localStorage, use them
//       setShuffledQuestions(JSON.parse(storedQuestions));
//     } else {
//       // Shuffle only the options for each question, keeping the question order fixed
//       const shuffled = questions.map((q) => ({
//         ...q,
//         options: [...q.options].sort(() => Math.random() - 0.5), // Shuffle options
//       }));
//       setShuffledQuestions(shuffled);
//       localStorage.setItem("shuffledQuestions", JSON.stringify(shuffled)); // Save to localStorage
//     }

//     const timer = setInterval(() => {
//       if (timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       } else {
//         clearInterval(timer);
//         handleSubmit();
//       }
//     }, 1000);

//     return () => clearInterval(timer); // Cleanup on unmount
//   }, [timeLeft]);

//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   const handleSubmit = (e) => {
//     if (e) e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     // Calculate score
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // Each question is worth 2 marks
//       }
//     });
//     setScore(totalScore);
//     setIsSubmitted(true);
//     setError(""); // Clear error if everything is fine
//   };

//   return (
//     <div className="flex flex-col items-center py-8">
//       <h2 className="text-3xl font-bold mb-6">Quiz Page</h2>

//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       {isSubmitted && (
//         <div className="text-green-500 mb-4">Your Score: {score} / 100</div>
//       )}

//       <div className="flex justify-between w-full px-8 py-4 border-b">
//         <div className="text-lg font-semibold">Time Left: {new Date(timeLeft * 1000).toISOString().substr(14, 5)}</div>
//         <div className="text-lg font-semibold">Total Marks: {score} / 100</div>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6 overflow-y-auto h-[calc(100vh-150px)] scroll-smooth">
//         {shuffledQuestions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-8">
//             <label className="block text-gray-700 font-medium">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label htmlFor={`q${q.id}_option${idx}`} className="text-gray-700">
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}

//         {!isSubmitted && (
//           <div className="mt-4 flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition duration-200"
//             >
//               Submit Quiz
//             </button>
//           </div>
//         )}
//       </form>
//     </div>
//   );
// };

// export default QuizPage;



// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [error, setError] = useState("");
//   const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
//   const [score, setScore] = useState(null);

//   // Timer Logic
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Handling changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handling form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);
//   };

//   const questions = [
//         {
//           id: 1,
//           question: "What does CPU stand for?",
//           options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//           correctAnswer: "Central Processing Unit",
//         },
//         {
//           id: 2,
//           question: "Which language is primarily used for web development?",
//           options: ["Python", "HTML", "C++", "Java"],
//           correctAnswer: "HTML",
//         },
//         {
//           id: 3,
//           question: "What is the time complexity of binary search?",
//           options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//           correctAnswer: "O(log n)",
//         },
//         {
//           id: 4,
//           question: "What does HTTP stand for?",
//           options: [
//             "HyperText Transfer Protocol",
//             "HyperText Transmission Protocol",
//             "HyperText Transfer Procedure",
//             "HyperText Transport Protocol",
//           ],
//           correctAnswer: "HyperText Transfer Protocol",
//         },
//         {
//           id: 5,
//           question: "Which one is not an operating system?",
//           options: ["Windows", "Linux", "Oracle", "macOS"],
//           correctAnswer: "Oracle",
//         },
       
//           {
//             id: 6,
//             question: "Which data structure uses FIFO (First In, First Out)?",
//             options: ["Stack", "Queue", "Array", "Tree"],
//             correctAnswer: "Queue",
//           },
//           {
//             id: 7,
//             question: "What does RAM stand for?",
//             options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//             correctAnswer: "Random Access Memory",
//           },
//           {
//             id: 8,
//             question: "Which one is a primary key in databases?",
//             options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//             correctAnswer: "Unique identifier",
//           },
//           {
//             id: 9,
//             question: "Which programming language is known as 'platform-independent'?",
//             options: ["C++", "Java", "Python", "Assembly"],
//             correctAnswer: "Java",
//           },
//           {
//             id: 10,
//             question: "What does DNS stand for?",
//             options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
//             correctAnswer: "Domain Name System",
//           },
//           {
//             id: 11,
//             question: "Which sorting algorithm has the best average-case time complexity?",
//             options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
//             correctAnswer: "Merge Sort",
//           },
//           {
//             id: 12,
//             question: "Which part of a computer performs calculations and makes decisions?",
//             options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
//             correctAnswer: "CPU",
//           },
//           {
//             id: 13,
//             question: "What is the default port number for HTTP?",
//             options: ["21", "22", "80", "443"],
//             correctAnswer: "80",
//           },
//           {
//             id: 14,
//             question: "What is the main characteristic of a stack?",
//             options: ["FIFO", "LIFO", "Random Access", "Sequential"],
//             correctAnswer: "LIFO",
//           },
//           {
//             id: 15,
//             question: "Which of the following is a NoSQL database?",
//             options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
//             correctAnswer: "MongoDB",
//           },
//           {
//             id: 16,
//             question: "What does API stand for?",
//             options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
//             correctAnswer: "Application Programming Interface",
//           },
//           {
//             id: 17,
//             question: "Which of the following is not a type of computer network?",
//             options: ["LAN", "WAN", "SAN", "PANIC"],
//             correctAnswer: "PANIC",
//           },
//           {
//             id: 18,
//             question: "Which protocol is used to send emails?",
//             options: ["HTTP", "SMTP", "FTP", "SNMP"],
//             correctAnswer: "SMTP",
//           },
//           {
//             id: 19,
//             question: "What is the smallest unit of data in a computer?",
//             options: ["Byte", "Bit", "Nibble", "Kilobyte"],
//             correctAnswer: "Bit",
//           },
//           {
//             id: 20,
//             question: "Which one is not a relational database?",
//             options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
//             correctAnswer: "MongoDB",
//           },
//           {
//             id: 21,
//             question: "Which of the following is not an HTTP method?",
//             options: ["GET", "POST", "PUT", "FIND"],
//             correctAnswer: "FIND",
//           },
//           {
//             id: 22,
//             question: "What is the purpose of a firewall?",
//             options: ["Data storage", "Network security", "Data encryption", "System backup"],
//             correctAnswer: "Network security",
//           },
//           {
//             id: 23,
//             question: "What is the time complexity of linear search?",
//             options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//             correctAnswer: "O(n)",
//           },
//           {
//             id: 24,
//             question: "Which layer of the OSI model is responsible for data encryption?",
//             options: ["Application", "Presentation", "Transport", "Session"],
//             correctAnswer: "Presentation",
//           },
//           {
//             id: 25,
//             question: "What is a primary purpose of the operating system?",
//             options: ["Gaming", "Hardware management", "Programming", "Networking"],
//             correctAnswer: "Hardware management",
//           },
//           {
//             id: 26,
//             question: "Which is a valid IP address?",
//             options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
//             correctAnswer: "192.168.1.1",
//           },
//           {
//             id: 27,
//             question: "Which one is not a high-level programming language?",
//             options: ["Python", "C", "JavaScript", "Assembly"],
//             correctAnswer: "Assembly",
//           },
//           {
//             id: 28,
//             question: "What is the binary representation of the decimal number 5?",
//             options: ["100", "101", "110", "111"],
//             correctAnswer: "101",
//           },
//           {
//             id: 29,
//             question: "Which of the following is a cloud computing platform?",
//             options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
//             correctAnswer: "AWS",
//           },
//           {
//             id: 30,
//             question: "What is the default subnet mask for a Class C IP address?",
//             options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
//             correctAnswer: "255.255.255.0",
//           },
//           {
//             id: 31,
//             question: "What is the full form of SSD?",
//             options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
//             correctAnswer: "Solid State Drive",
//           },
//           {
//             id: 32,
//             question: "Which language is mainly used for Artificial Intelligence?",
//             options: ["C", "Java", "Python", "PHP"],
//             correctAnswer: "Python",
//           },
//           {
//             id: 33,
//             question: "What is the primary purpose of DNS?",
//             options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
//             correctAnswer: "Resolve domain names",
//           },
//           {
//             id: 34,
//             question: "What is the hexadecimal equivalent of the binary number 1010?",
//             options: ["A", "B", "C", "D"],
//             correctAnswer: "A",
//           },
//           {
//             id: 35,
//             question: "Which of the following is not a type of operating system?",
//             options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
//             correctAnswer: "Hybrid",
//           },
//           {
//             id: 36,
//             question: "What is the output of 5 AND 3 in binary?",
//             options: ["0001", "0011", "0101", "1001"],
//             correctAnswer: "0001",
//           },
//           {
//             id: 37,
//             question: "Which is the best tool for version control?",
//             options: ["Git", "Jenkins", "Docker", "Slack"],
//             correctAnswer: "Git",
//           },
//           {
//             id: 38,
//             question: "What is the default port number for HTTPS?",
//             options: ["21", "80", "443", "8080"],
//             correctAnswer: "443",
//           },
//           {
//             id: 39,
//             question: "What does LAN stand for?",
//             options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
//             correctAnswer: "Local Area Network",
//           },
//           {
//             id: 40,
//             question: "What is the term for a self-contained unit of functionality in programming?",
//             options: ["Variable", "Function", "Loop", "Array"],
//             correctAnswer: "Function",
//           },
//           {
//             id: 41,
//             question: "Which protocol is used to secure communication over the web?",
//             options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
//             correctAnswer: "SSL/TLS",
//           },
//           {
//             id: 42,
//             question: "Which programming paradigm focuses on objects and classes?",
//             options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
//             correctAnswer: "Object-Oriented",
//           },
//           {
//             id: 43,
//             question: "Which sorting algorithm is the fastest in the average case?",
//             options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
//             correctAnswer: "Quick Sort",
//           },
//           {
//             id: 44,
//             question: "What is the primary function of a database index?",
//             options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
//             correctAnswer: "Optimize queries",
//           },
//           {
//             id: 45,
//             question: "What is the size of an IPv4 address?",
//             options: ["16 bits", "32 bits", "64 bits", "128"],
//               correctAnswer:"32 bits",
//           },
//           {
//             id: 46,
//             question: "What does CPU stand for?",
//             options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
//             correctAnswer: "Central Processing Unit",
//           },
//           {
//             id: 47,
//             question: "Which protocol is used to send email?",
//             options: ["HTTP", "SMTP", "FTP", "IMAP"],
//             correctAnswer: "SMTP",
//           },
//           {
//             id: 48,
//             question: "What does RAM stand for?",
//             options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
//             correctAnswer: "Random Access Memory",
//           },
//           {
//             id: 49,
//             question: "Which of the following is a non-volatile storage device?",
//             options: ["RAM", "Hard Disk", "Cache", "Registers"],
//             correctAnswer: "Hard Disk",
//           },
//           {
//             id: 50,
//             question: "Which command is used to display the contents of a file in Linux?",
//             options: ["ls", "cd", "cat", "rm"],
//             correctAnswer: "cat",
//           },
          
//         ];

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth items-center   h-[75vh] ">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-100] ">Tech Quiz</h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">Time Remaining: {formatTime(timeRemaining)}</div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label htmlFor={`q${q.id}_option${idx}`} className="text-gray-700">{option}</label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div className=" text-2xl font-semibold mb-0 text-green-600 mt-[-37%] pl-[30%]">
//           You scored: {score} / 100
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;





// "use client";
// import React, { useState, useEffect } from "react";


// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [error, setError] = useState("");
//   const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
//   const [score, setScore] = useState(null);
//   const [result, setResult] = useState(null); // Track pass/fail


//   // const [score, setScore] = useState(null);

//   // useEffect(() => {
//   //   // Retrieve score from localStorage
//   //   const savedScore = localStorage.getItem("quizScore");
//   //   if (savedScore) {
//   //     setScore(savedScore);
//   //   }
//   // }, []);


//   // Timer Logic
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Handling changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handling form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);

//     // Determine pass or fail
//     if (totalScore >= 35) {
//       setResult("pass");
//     } else {
//       setResult("fail");
//     }
//   };

//   const questions = [
//     {
//                 id: 1,
//                 question: "What does CPU stand for?",
//                 options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//                 correctAnswer: "Central Processing Unit",
//               },
//               {
//                 id: 2,
//                 question: "Which language is primarily used for web development?",
//                 options: ["Python", "HTML", "C++", "Java"],
//                 correctAnswer: "HTML",
//               },
//               {
//                 id: 3,
//                 question: "What is the time complexity of binary search?",
//                 options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//                 correctAnswer: "O(log n)",
//               },
//               {
//                 id: 4,
//                 question: "What does HTTP stand for?",
//                 options: [
//                   "HyperText Transfer Protocol",
//                   "HyperText Transmission Protocol",
//                   "HyperText Transfer Procedure",
//                   "HyperText Transport Protocol",
//                 ],
//                 correctAnswer: "HyperText Transfer Protocol",
//               },
//               {
//                 id: 5,
//                 question: "Which one is not an operating system?",
//                 options: ["Windows", "Linux", "Oracle", "macOS"],
//                 correctAnswer: "Oracle",
//               },
             
//                 {
//                   id: 6,
//                   question: "Which data structure uses FIFO (First In, First Out)?",
//                   options: ["Stack", "Queue", "Array", "Tree"],
//                   correctAnswer: "Queue",
//                 },
//                 {
//                   id: 7,
//                   question: "What does RAM stand for?",
//                   options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//                   correctAnswer: "Random Access Memory",
//                 },
//                 {
//                   id: 8,
//                   question: "Which one is a primary key in databases?",
//                   options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//                   correctAnswer: "Unique identifier",
//                 },
//                 {
//                   id: 9,
//                   question: "Which programming language is known as 'platform-independent'?",
//                   options: ["C++", "Java", "Python", "Assembly"],
//                   correctAnswer: "Java",
//                 },
//                 {
//                   id: 10,
//                   question: "What does DNS stand for?",
//                   options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
//                   correctAnswer: "Domain Name System",
//                 },
//                 {
//                   id: 11,
//                   question: "Which sorting algorithm has the best average-case time complexity?",
//                   options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
//                   correctAnswer: "Merge Sort",
//                 },
//                 {
//                   id: 12,
//                   question: "Which part of a computer performs calculations and makes decisions?",
//                   options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
//                   correctAnswer: "CPU",
//                 },
//                 {
//                   id: 13,
//                   question: "What is the default port number for HTTP?",
//                   options: ["21", "22", "80", "443"],
//                   correctAnswer: "80",
//                 },
//                 {
//                   id: 14,
//                   question: "What is the main characteristic of a stack?",
//                   options: ["FIFO", "LIFO", "Random Access", "Sequential"],
//                   correctAnswer: "LIFO",
//                 },
//                 {
//                   id: 15,
//                   question: "Which of the following is a NoSQL database?",
//                   options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
//                   correctAnswer: "MongoDB",
//                 },
//                 {
//                   id: 16,
//                   question: "What does API stand for?",
//                   options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
//                   correctAnswer: "Application Programming Interface",
//                 },
//                 {
//                   id: 17,
//                   question: "Which of the following is not a type of computer network?",
//                   options: ["LAN", "WAN", "SAN", "PANIC"],
//                   correctAnswer: "PANIC",
//                 },
//                 {
//                   id: 18,
//                   question: "Which protocol is used to send emails?",
//                   options: ["HTTP", "SMTP", "FTP", "SNMP"],
//                   correctAnswer: "SMTP",
//                 },
//                 {
//                   id: 19,
//                   question: "What is the smallest unit of data in a computer?",
//                   options: ["Byte", "Bit", "Nibble", "Kilobyte"],
//                   correctAnswer: "Bit",
//                 },
//                 {
//                   id: 20,
//                   question: "Which one is not a relational database?",
//                   options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
//                   correctAnswer: "MongoDB",
//                 },
//                 {
//                   id: 21,
//                   question: "Which of the following is not an HTTP method?",
//                   options: ["GET", "POST", "PUT", "FIND"],
//                   correctAnswer: "FIND",
//                 },
//                 {
//                   id: 22,
//                   question: "What is the purpose of a firewall?",
//                   options: ["Data storage", "Network security", "Data encryption", "System backup"],
//                   correctAnswer: "Network security",
//                 },
//                 {
//                   id: 23,
//                   question: "What is the time complexity of linear search?",
//                   options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//                   correctAnswer: "O(n)",
//                 },
//                 {
//                   id: 24,
//                   question: "Which layer of the OSI model is responsible for data encryption?",
//                   options: ["Application", "Presentation", "Transport", "Session"],
//                   correctAnswer: "Presentation",
//                 },
//                 {
//                   id: 25,
//                   question: "What is a primary purpose of the operating system?",
//                   options: ["Gaming", "Hardware management", "Programming", "Networking"],
//                   correctAnswer: "Hardware management",
//                 },
//                 {
//                   id: 26,
//                   question: "Which is a valid IP address?",
//                   options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
//                   correctAnswer: "192.168.1.1",
//                 },
//                 {
//                   id: 27,
//                   question: "Which one is not a high-level programming language?",
//                   options: ["Python", "C", "JavaScript", "Assembly"],
//                   correctAnswer: "Assembly",
//                 },
//                 {
//                   id: 28,
//                   question: "What is the binary representation of the decimal number 5?",
//                   options: ["100", "101", "110", "111"],
//                   correctAnswer: "101",
//                 },
//                 {
//                   id: 29,
//                   question: "Which of the following is a cloud computing platform?",
//                   options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
//                   correctAnswer: "AWS",
//                 },
//                 {
//                   id: 30,
//                   question: "What is the default subnet mask for a Class C IP address?",
//                   options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
//                   correctAnswer: "255.255.255.0",
//                 },
//                 {
//                   id: 31,
//                   question: "What is the full form of SSD?",
//                   options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
//                   correctAnswer: "Solid State Drive",
//                 },
//                 {
//                   id: 32,
//                   question: "Which language is mainly used for Artificial Intelligence?",
//                   options: ["C", "Java", "Python", "PHP"],
//                   correctAnswer: "Python",
//                 },
//                 {
//                   id: 33,
//                   question: "What is the primary purpose of DNS?",
//                   options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
//                   correctAnswer: "Resolve domain names",
//                 },
//                 {
//                   id: 34,
//                   question: "What is the hexadecimal equivalent of the binary number 1010?",
//                   options: ["A", "B", "C", "D"],
//                   correctAnswer: "A",
//                 },
//                 {
//                   id: 35,
//                   question: "Which of the following is not a type of operating system?",
//                   options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
//                   correctAnswer: "Hybrid",
//                 },
//                 {
//                   id: 36,
//                   question: "What is the output of 5 AND 3 in binary?",
//                   options: ["0001", "0011", "0101", "1001"],
//                   correctAnswer: "0001",
//                 },
//                 {
//                   id: 37,
//                   question: "Which is the best tool for version control?",
//                   options: ["Git", "Jenkins", "Docker", "Slack"],
//                   correctAnswer: "Git",
//                 },
//                 {
//                   id: 38,
//                   question: "What is the default port number for HTTPS?",
//                   options: ["21", "80", "443", "8080"],
//                   correctAnswer: "443",
//                 },
//                 {
//                   id: 39,
//                   question: "What does LAN stand for?",
//                   options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
//                   correctAnswer: "Local Area Network",
//                 },
//                 {
//                   id: 40,
//                   question: "What is the term for a self-contained unit of functionality in programming?",
//                   options: ["Variable", "Function", "Loop", "Array"],
//                   correctAnswer: "Function",
//                 },
//                 {
//                   id: 41,
//                   question: "Which protocol is used to secure communication over the web?",
//                   options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
//                   correctAnswer: "SSL/TLS",
//                 },
//                 {
//                   id: 42,
//                   question: "Which programming paradigm focuses on objects and classes?",
//                   options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
//                   correctAnswer: "Object-Oriented",
//                 },
//                 {
//                   id: 43,
//                   question: "Which sorting algorithm is the fastest in the average case?",
//                   options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
//                   correctAnswer: "Quick Sort",
//                 },
//                 {
//                   id: 44,
//                   question: "What is the primary function of a database index?",
//                   options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
//                   correctAnswer: "Optimize queries",
//                 },
//                 {
//                   id: 45,
//                   question: "What is the size of an IPv4 address?",
//                   options: ["16 bits", "32 bits", "64 bits", "128"],
//                     correctAnswer:"32 bits",
//                 },
//                 {
//                   id: 46,
//                   question: "What does CPU stand for?",
//                   options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
//                   correctAnswer: "Central Processing Unit",
//                 },
//                 {
//                   id: 47,
//                   question: "Which protocol is used to send email?",
//                   options: ["HTTP", "SMTP", "FTP", "IMAP"],
//                   correctAnswer: "SMTP",
//                 },
//                 {
//                   id: 48,
//                   question: "What does RAM stand for?",
//                   options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
//                   correctAnswer: "Random Access Memory",
//                 },
//                 {
//                   id: 49,
//                   question: "Which of the following is a non-volatile storage device?",
//                   options: ["RAM", "Hard Disk", "Cache", "Registers"],
//                   correctAnswer: "Hard Disk",
//                 },
//                 {
//                   id: 50,
//                   question: "Which command is used to display the contents of a file in Linux?",
//                   options: ["ls", "cd", "cat", "rm"],
//                   correctAnswer: "cat",
//                 },
//   ];

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth pt-[8%] w-[100%] items-center h-[75vh]">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-100]">
//         Tech Quiz
//       </h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">
//         Time Remaining: {formatTime(timeRemaining)}
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label
//                   htmlFor={`q${q.id}_option${idx}`}
//                   className="text-gray-700"
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div
//           className={`text-2xl font-semibold mt-6 ${
//             result === "pass" ? "text-green-600" : "text-red-600 "
//           }`}
//         >
//           You scored: {score} / 100
//           <br />
//           {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
//         </div>
//       )}

// <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
//       {score !== null ? (
//         <div className="text-lg">
//           Your quiz score is: <strong>{score} / 100</strong>
//         </div>
//       ) : (
//         <div>No quiz score found.</div>
//       )}
//     </div>

//     </div>


//   );
// };

// export default QuizPage;



// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [answers, setAnswers] = useState({});
//   const [error, setError] = useState("");
//   const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
//   const [score, setScore] = useState(null);
//   const [result, setResult] = useState(null); // Track pass/fail

//   const questions = [
//     {
//                       id: 1,
//                       question: "What does CPU stand for?",
//                       options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//                       correctAnswer: "Central Processing Unit",
//                     },
//                     {
//                       id: 2,
//                       question: "Which language is primarily used for web development?",
//                       options: ["Python", "HTML", "C++", "Java"],
//                       correctAnswer: "HTML",
//                     },
//                     {
//                       id: 3,
//                       question: "What is the time complexity of binary search?",
//                       options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//                       correctAnswer: "O(log n)",
//                     },
//                     {
//                       id: 4,
//                       question: "What does HTTP stand for?",
//                       options: [
//                         "HyperText Transfer Protocol",
//                         "HyperText Transmission Protocol",
//                         "HyperText Transfer Procedure",
//                         "HyperText Transport Protocol",
//                       ],
//                       correctAnswer: "HyperText Transfer Protocol",
//                     },
//                     {
//                       id: 5,
//                       question: "Which one is not an operating system?",
//                       options: ["Windows", "Linux", "Oracle", "macOS"],
//                       correctAnswer: "Oracle",
//                     },
                   
//                       {
//                         id: 6,
//                         question: "Which data structure uses FIFO (First In, First Out)?",
//                         options: ["Stack", "Queue", "Array", "Tree"],
//                         correctAnswer: "Queue",
//                       },
//                       {
//                         id: 7,
//                         question: "What does RAM stand for?",
//                         options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//                         correctAnswer: "Random Access Memory",
//                       },
//                       {
//                         id: 8,
//                         question: "Which one is a primary key in databases?",
//                         options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//                         correctAnswer: "Unique identifier",
//                       },
//                       {
//                         id: 9,
//                         question: "Which programming language is known as 'platform-independent'?",
//                         options: ["C++", "Java", "Python", "Assembly"],
//                         correctAnswer: "Java",
//                       },
//                       {
//                         id: 10,
//                         question: "What does DNS stand for?",
//                         options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
//                         correctAnswer: "Domain Name System",
//                       },
//                       {
//                         id: 11,
//                         question: "Which sorting algorithm has the best average-case time complexity?",
//                         options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
//                         correctAnswer: "Merge Sort",
//                       },
//                       {
//                         id: 12,
//                         question: "Which part of a computer performs calculations and makes decisions?",
//                         options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
//                         correctAnswer: "CPU",
//                       },
//                       {
//                         id: 13,
//                         question: "What is the default port number for HTTP?",
//                         options: ["21", "22", "80", "443"],
//                         correctAnswer: "80",
//                       },
//                       {
//                         id: 14,
//                         question: "What is the main characteristic of a stack?",
//                         options: ["FIFO", "LIFO", "Random Access", "Sequential"],
//                         correctAnswer: "LIFO",
//                       },
//                       {
//                         id: 15,
//                         question: "Which of the following is a NoSQL database?",
//                         options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
//                         correctAnswer: "MongoDB",
//                       },
//                       {
//                         id: 16,
//                         question: "What does API stand for?",
//                         options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
//                         correctAnswer: "Application Programming Interface",
//                       },
//                       {
//                         id: 17,
//                         question: "Which of the following is not a type of computer network?",
//                         options: ["LAN", "WAN", "SAN", "PANIC"],
//                         correctAnswer: "PANIC",
//                       },
//                       {
//                         id: 18,
//                         question: "Which protocol is used to send emails?",
//                         options: ["HTTP", "SMTP", "FTP", "SNMP"],
//                         correctAnswer: "SMTP",
//                       },
//                       {
//                         id: 19,
//                         question: "What is the smallest unit of data in a computer?",
//                         options: ["Byte", "Bit", "Nibble", "Kilobyte"],
//                         correctAnswer: "Bit",
//                       },
//                       {
//                         id: 20,
//                         question: "Which one is not a relational database?",
//                         options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
//                         correctAnswer: "MongoDB",
//                       },
//                       {
//                         id: 21,
//                         question: "Which of the following is not an HTTP method?",
//                         options: ["GET", "POST", "PUT", "FIND"],
//                         correctAnswer: "FIND",
//                       },
//                       {
//                         id: 22,
//                         question: "What is the purpose of a firewall?",
//                         options: ["Data storage", "Network security", "Data encryption", "System backup"],
//                         correctAnswer: "Network security",
//                       },
//                       {
//                         id: 23,
//                         question: "What is the time complexity of linear search?",
//                         options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//                         correctAnswer: "O(n)",
//                       },
//                       {
//                         id: 24,
//                         question: "Which layer of the OSI model is responsible for data encryption?",
//                         options: ["Application", "Presentation", "Transport", "Session"],
//                         correctAnswer: "Presentation",
//                       },
//                       {
//                         id: 25,
//                         question: "What is a primary purpose of the operating system?",
//                         options: ["Gaming", "Hardware management", "Programming", "Networking"],
//                         correctAnswer: "Hardware management",
//                       },
//                       {
//                         id: 26,
//                         question: "Which is a valid IP address?",
//                         options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
//                         correctAnswer: "192.168.1.1",
//                       },
//                       {
//                         id: 27,
//                         question: "Which one is not a high-level programming language?",
//                         options: ["Python", "C", "JavaScript", "Assembly"],
//                         correctAnswer: "Assembly",
//                       },
//                       {
//                         id: 28,
//                         question: "What is the binary representation of the decimal number 5?",
//                         options: ["100", "101", "110", "111"],
//                         correctAnswer: "101",
//                       },
//                       {
//                         id: 29,
//                         question: "Which of the following is a cloud computing platform?",
//                         options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
//                         correctAnswer: "AWS",
//                       },
//                       {
//                         id: 30,
//                         question: "What is the default subnet mask for a Class C IP address?",
//                         options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
//                         correctAnswer: "255.255.255.0",
//                       },
//                       {
//                         id: 31,
//                         question: "What is the full form of SSD?",
//                         options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
//                         correctAnswer: "Solid State Drive",
//                       },
//                       {
//                         id: 32,
//                         question: "Which language is mainly used for Artificial Intelligence?",
//                         options: ["C", "Java", "Python", "PHP"],
//                         correctAnswer: "Python",
//                       },
//                       {
//                         id: 33,
//                         question: "What is the primary purpose of DNS?",
//                         options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
//                         correctAnswer: "Resolve domain names",
//                       },
//                       {
//                         id: 34,
//                         question: "What is the hexadecimal equivalent of the binary number 1010?",
//                         options: ["A", "B", "C", "D"],
//                         correctAnswer: "A",
//                       },
//                       {
//                         id: 35,
//                         question: "Which of the following is not a type of operating system?",
//                         options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
//                         correctAnswer: "Hybrid",
//                       },
//                       {
//                         id: 36,
//                         question: "What is the output of 5 AND 3 in binary?",
//                         options: ["0001", "0011", "0101", "1001"],
//                         correctAnswer: "0001",
//                       },
//                       {
//                         id: 37,
//                         question: "Which is the best tool for version control?",
//                         options: ["Git", "Jenkins", "Docker", "Slack"],
//                         correctAnswer: "Git",
//                       },
//                       {
//                         id: 38,
//                         question: "What is the default port number for HTTPS?",
//                         options: ["21", "80", "443", "8080"],
//                         correctAnswer: "443",
//                       },
//                       {
//                         id: 39,
//                         question: "What does LAN stand for?",
//                         options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
//                         correctAnswer: "Local Area Network",
//                       },
//                       {
//                         id: 40,
//                         question: "What is the term for a self-contained unit of functionality in programming?",
//                         options: ["Variable", "Function", "Loop", "Array"],
//                         correctAnswer: "Function",
//                       },
//                       {
//                         id: 41,
//                         question: "Which protocol is used to secure communication over the web?",
//                         options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
//                         correctAnswer: "SSL/TLS",
//                       },
//                       {
//                         id: 42,
//                         question: "Which programming paradigm focuses on objects and classes?",
//                         options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
//                         correctAnswer: "Object-Oriented",
//                       },
//                       {
//                         id: 43,
//                         question: "Which sorting algorithm is the fastest in the average case?",
//                         options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
//                         correctAnswer: "Quick Sort",
//                       },
//                       {
//                         id: 44,
//                         question: "What is the primary function of a database index?",
//                         options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
//                         correctAnswer: "Optimize queries",
//                       },
//                       {
//                         id: 45,
//                         question: "What is the size of an IPv4 address?",
//                         options: ["16 bits", "32 bits", "64 bits", "128"],
//                           correctAnswer:"32 bits",
//                       },
//                       {
//                         id: 46,
//                         question: "What does CPU stand for?",
//                         options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
//                         correctAnswer: "Central Processing Unit",
//                       },
//                       {
//                         id: 47,
//                         question: "Which protocol is used to send email?",
//                         options: ["HTTP", "SMTP", "FTP", "IMAP"],
//                         correctAnswer: "SMTP",
//                       },
//                       {
//                         id: 48,
//                         question: "What does RAM stand for?",
//                         options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
//                         correctAnswer: "Random Access Memory",
//                       },
//                       {
//                         id: 49,
//                         question: "Which of the following is a non-volatile storage device?",
//                         options: ["RAM", "Hard Disk", "Cache", "Registers"],
//                         correctAnswer: "Hard Disk",
//                       },
//                       {
//                         id: 50,
//                         question: "Which command is used to display the contents of a file in Linux?",
//                         options: ["ls", "cd", "cat", "rm"],
//                         correctAnswer: "cat",
//                       },
//   ];

//   // Timer Logic
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Retrieve score from localStorage on page load
//   useEffect(() => {
//     const savedScore = localStorage.getItem("quizScore");
//     if (savedScore) {
//       setScore(Number(savedScore)); // Convert saved score to a number
//     }
//   }, []);

//   // Handling changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handling form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);

//     // Store the score in localStorage
//     localStorage.setItem("quizScore", totalScore);

//     // Determine pass or fail
//     if (totalScore >= 35) {
//       setResult("pass");
//     } else {
//       setResult("fail");
//     }
//   };

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth pt-[8%] w-[100%] items-center h-[75vh]">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-100]">
//         Tech Quiz
//       </h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">
//         Time Remaining: {formatTime(timeRemaining)}
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label
//                   htmlFor={`q${q.id}_option${idx}`}
//                   className="text-gray-700"
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div
//           className={`text-2xl font-semibold mt-6 ${
//             result === "pass" ? "text-green-600" : "text-red-600 "
//           }`}
//         >
//           You scored: {score} / 100
//           <br />
//           {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;





// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(null);
//   const [error, setError] = useState("");
//   const [result, setResult] = useState("");
//   const [answers, setAnswers] = useState({});
//   const [questions, setQuestions] = useState([
   
//   ]);

//   // Fetch time remaining (optional: if you want to persist the timer)
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Retrieve score from localStorage on page load
//   useEffect(() => {
//     const savedScore = localStorage.getItem("quizScore");
//     if (savedScore) {
//       setScore(Number(savedScore)); // Convert saved score to a number
//     }
//   }, []);

//   // Handle changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handle form submission and store score in employees
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);

//     // Store the score in localStorage
//     localStorage.setItem("quizScore", totalScore);

//     // Determine pass or fail
//     if (totalScore >= 35) {
//       setResult("pass");
//     } else {
//       setResult("fail");
//     }

//     // Assume we are updating the employee with ID = 1
//     const employeeId = 1;

//     // Get employees from localStorage
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

//     // Update the score of the specific employee
//     const updatedEmployees = storedEmployees.map((employee) =>
//       employee.id === employeeId
//         ? { ...employee, score: totalScore }
//         : employee
//     );

//     // Save the updated employees list back to localStorage
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//   };

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth pt-[8%] w-[100%] items-center h-[75vh]">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-100]">
//         Tech Quiz
//       </h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">
//         Time Remaining: {formatTime(timeRemaining)}
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label
//                   htmlFor={`q${q.id}_option${idx}`}
//                   className="text-gray-700"
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div
//           className={`text-2xl font-semibold mt-6 ${result === "pass" ? "text-green-600" : "text-red-600 "}`}
//         >
//           You scored: {score} / 100
//           <br />
//           {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;



// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(null);
//   const [error, setError] = useState("");
//   const [result, setResult] = useState("");
//   const [answers, setAnswers] = useState({});
//   const [questions, setQuestions] = useState([
//     {
//                                   id: 1,
//                                   question: "What does CPU stand for?",
//                                   options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//                                   correctAnswer: "Central Processing Unit",
//                                 },
//                                 {
//                                   id: 2,
//                                   question: "Which language is primarily used for web development?",
//                                   options: ["Python", "HTML", "C++", "Java"],
//                                   correctAnswer: "HTML",
//                                 },
//                                 {
//                                   id: 3,
//                                   question: "What is the time complexity of binary search?",
//                                   options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//                                   correctAnswer: "O(log n)",
//                                 },
//                                 {
//                                   id: 4,
//                                   question: "What does HTTP stand for?",
//                                   options: [
//                                     "HyperText Transfer Protocol",
//                                     "HyperText Transmission Protocol",
//                                     "HyperText Transfer Procedure",
//                                     "HyperText Transport Protocol",
//                                   ],
//                                   correctAnswer: "HyperText Transfer Protocol",
//                                 },
//                                 {
//                                   id: 5,
//                                   question: "Which one is not an operating system?",
//                                   options: ["Windows", "Linux", "Oracle", "macOS"],
//                                   correctAnswer: "Oracle",
//                                 },
                               
//                                   {
//                                     id: 6,
//                                     question: "Which data structure uses FIFO (First In, First Out)?",
//                                     options: ["Stack", "Queue", "Array", "Tree"],
//                                     correctAnswer: "Queue",
//                                   },
//                                   {
//                                     id: 7,
//                                     question: "What does RAM stand for?",
//                                     options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//                                     correctAnswer: "Random Access Memory",
//                                   },
//                                   {
//                                     id: 8,
//                                     question: "Which one is a primary key in databases?",
//                                     options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//                                     correctAnswer: "Unique identifier",
//                                   },
//                                   {
//                                     id: 9,
//                                     question: "Which programming language is known as 'platform-independent'?",
//                                     options: ["C++", "Java", "Python", "Assembly"],
//                                     correctAnswer: "Java",
//                                   },
//                                   {
//                                     id: 10,
//                                     question: "What does DNS stand for?",
//                                     options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
//                                     correctAnswer: "Domain Name System",
//                                   },
//                                   {
//                                     id: 11,
//                                     question: "Which sorting algorithm has the best average-case time complexity?",
//                                     options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
//                                     correctAnswer: "Merge Sort",
//                                   },
//                                   {
//                                     id: 12,
//                                     question: "Which part of a computer performs calculations and makes decisions?",
//                                     options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
//                                     correctAnswer: "CPU",
//                                   },
//                                   {
//                                     id: 13,
//                                     question: "What is the default port number for HTTP?",
//                                     options: ["21", "22", "80", "443"],
//                                     correctAnswer: "80",
//                                   },
//                                   {
//                                     id: 14,
//                                     question: "What is the main characteristic of a stack?",
//                                     options: ["FIFO", "LIFO", "Random Access", "Sequential"],
//                                     correctAnswer: "LIFO",
//                                   },
//                                   {
//                                     id: 15,
//                                     question: "Which of the following is a NoSQL database?",
//                                     options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
//                                     correctAnswer: "MongoDB",
//                                   },
//                                   {
//                                     id: 16,
//                                     question: "What does API stand for?",
//                                     options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
//                                     correctAnswer: "Application Programming Interface",
//                                   },
//                                   {
//                                     id: 17,
//                                     question: "Which of the following is not a type of computer network?",
//                                     options: ["LAN", "WAN", "SAN", "PANIC"],
//                                     correctAnswer: "PANIC",
//                                   },
//                                   {
//                                     id: 18,
//                                     question: "Which protocol is used to send emails?",
//                                     options: ["HTTP", "SMTP", "FTP", "SNMP"],
//                                     correctAnswer: "SMTP",
//                                   },
//                                   {
//                                     id: 19,
//                                     question: "What is the smallest unit of data in a computer?",
//                                     options: ["Byte", "Bit", "Nibble", "Kilobyte"],
//                                     correctAnswer: "Bit",
//                                   },
//                                   {
//                                     id: 20,
//                                     question: "Which one is not a relational database?",
//                                     options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
//                                     correctAnswer: "MongoDB",
//                                   },
//                                   {
//                                     id: 21,
//                                     question: "Which of the following is not an HTTP method?",
//                                     options: ["GET", "POST", "PUT", "FIND"],
//                                     correctAnswer: "FIND",
//                                   },
//                                   {
//                                     id: 22,
//                                     question: "What is the purpose of a firewall?",
//                                     options: ["Data storage", "Network security", "Data encryption", "System backup"],
//                                     correctAnswer: "Network security",
//                                   },
//                                   {
//                                     id: 23,
//                                     question: "What is the time complexity of linear search?",
//                                     options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//                                     correctAnswer: "O(n)",
//                                   },
//                                   {
//                                     id: 24,
//                                     question: "Which layer of the OSI model is responsible for data encryption?",
//                                     options: ["Application", "Presentation", "Transport", "Session"],
//                                     correctAnswer: "Presentation",
//                                   },
//                                   {
//                                     id: 25,
//                                     question: "What is a primary purpose of the operating system?",
//                                     options: ["Gaming", "Hardware management", "Programming", "Networking"],
//                                     correctAnswer: "Hardware management",
//                                   },
//                                   {
//                                     id: 26,
//                                     question: "Which is a valid IP address?",
//                                     options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
//                                     correctAnswer: "192.168.1.1",
//                                   },
//                                   {
//                                     id: 27,
//                                     question: "Which one is not a high-level programming language?",
//                                     options: ["Python", "C", "JavaScript", "Assembly"],
//                                     correctAnswer: "Assembly",
//                                   },
//                                   {
//                                     id: 28,
//                                     question: "What is the binary representation of the decimal number 5?",
//                                     options: ["100", "101", "110", "111"],
//                                     correctAnswer: "101",
//                                   },
//                                   {
//                                     id: 29,
//                                     question: "Which of the following is a cloud computing platform?",
//                                     options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
//                                     correctAnswer: "AWS",
//                                   },
//                                   {
//                                     id: 30,
//                                     question: "What is the default subnet mask for a Class C IP address?",
//                                     options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
//                                     correctAnswer: "255.255.255.0",
//                                   },
//                                   {
//                                     id: 31,
//                                     question: "What is the full form of SSD?",
//                                     options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
//                                     correctAnswer: "Solid State Drive",
//                                   },
//                                   {
//                                     id: 32,
//                                     question: "Which language is mainly used for Artificial Intelligence?",
//                                     options: ["C", "Java", "Python", "PHP"],
//                                     correctAnswer: "Python",
//                                   },
//                                   {
//                                     id: 33,
//                                     question: "What is the primary purpose of DNS?",
//                                     options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
//                                     correctAnswer: "Resolve domain names",
//                                   },
//                                   {
//                                     id: 34,
//                                     question: "What is the hexadecimal equivalent of the binary number 1010?",
//                                     options: ["A", "B", "C", "D"],
//                                     correctAnswer: "A",
//                                   },
//                                   {
//                                     id: 35,
//                                     question: "Which of the following is not a type of operating system?",
//                                     options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
//                                     correctAnswer: "Hybrid",
//                                   },
//                                   {
//                                     id: 36,
//                                     question: "What is the output of 5 AND 3 in binary?",
//                                     options: ["0001", "0011", "0101", "1001"],
//                                     correctAnswer: "0001",
//                                   },
//                                   {
//                                     id: 37,
//                                     question: "Which is the best tool for version control?",
//                                     options: ["Git", "Jenkins", "Docker", "Slack"],
//                                     correctAnswer: "Git",
//                                   },
//                                   {
//                                     id: 38,
//                                     question: "What is the default port number for HTTPS?",
//                                     options: ["21", "80", "443", "8080"],
//                                     correctAnswer: "443",
//                                   },
//                                   {
//                                     id: 39,
//                                     question: "What does LAN stand for?",
//                                     options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
//                                     correctAnswer: "Local Area Network",
//                                   },
//                                   {
//                                     id: 40,
//                                     question: "What is the term for a self-contained unit of functionality in programming?",
//                                     options: ["Variable", "Function", "Loop", "Array"],
//                                     correctAnswer: "Function",
//                                   },
//                                   {
//                                     id: 41,
//                                     question: "Which protocol is used to secure communication over the web?",
//                                     options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
//                                     correctAnswer: "SSL/TLS",
//                                   },
//                                   {
//                                     id: 42,
//                                     question: "Which programming paradigm focuses on objects and classes?",
//                                     options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
//                                     correctAnswer: "Object-Oriented",
//                                   },
//                                   {
//                                     id: 43,
//                                     question: "Which sorting algorithm is the fastest in the average case?",
//                                     options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
//                                     correctAnswer: "Quick Sort",
//                                   },
//                                   {
//                                     id: 44,
//                                     question: "What is the primary function of a database index?",
//                                     options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
//                                     correctAnswer: "Optimize queries",
//                                   },
//                                   {
//                                     id: 45,
//                                     question: "What is the size of an IPv4 address?",
//                                     options: ["16 bits", "32 bits", "64 bits", "128"],
//                                       correctAnswer:"32 bits",
//                                   },
//                                   {
//                                     id: 46,
//                                     question: "What does CPU stand for?",
//                                     options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
//                                     correctAnswer: "Central Processing Unit",
//                                   },
//                                   {
//                                     id: 47,
//                                     question: "Which protocol is used to send email?",
//                                     options: ["HTTP", "SMTP", "FTP", "IMAP"],
//                                     correctAnswer: "SMTP",
//                                   },
//                                   {
//                                     id: 48,
//                                     question: "What does RAM stand for?",
//                                     options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
//                                     correctAnswer: "Random Access Memory",
//                                   },
//                                   {
//                                     id: 49,
//                                     question: "Which of the following is a non-volatile storage device?",
//                                     options: ["RAM", "Hard Disk", "Cache", "Registers"],
//                                     correctAnswer: "Hard Disk",
//                                   },
//                                   {
//                                     id: 50,
//                                     question: "Which command is used to display the contents of a file in Linux?",
//                                     options: ["ls", "cd", "cat", "rm"],
//                                     correctAnswer: "cat",
//                                   },
//   ]);
  
//   const [userName, setUserName] = useState(''); // Store user name

//   // Generate a unique user ID for this session (you can also use a more persistent ID from the login system)
//   const userId = Date.now();  // Use timestamp as a unique ID for the session

//   // Fetch time remaining (optional: if you want to persist the timer)
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Retrieve score from localStorage on page load
//   useEffect(() => {
//     const savedScore = localStorage.getItem("quizScore");
//     if (savedScore) {
//       setScore(Number(savedScore)); // Convert saved score to a number
//     }
//   }, []);

//   // Handle changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handle form submission and store score in employees
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);

//     // Store the score in localStorage
//     localStorage.setItem("quizScore", totalScore);

//     // Determine pass or fail
//     if (totalScore >= 35) {
//       setResult("pass");
//     } else {
//       setResult("fail");
//     }

//     // Save the quiz score in the employee list (localStorage)
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

//     // Create a new employee record with the score
//     const newEmployee = {
//       id: userId,
//       name: userName || "Anonymous", // Default name if no name is provided
//       score: totalScore,
//     };

//     // Add the new employee to the list (or update if the user already exists)
//     const updatedEmployees = [...storedEmployees, newEmployee];

//     // Save the updated employee list to localStorage
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));
//   };

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth pt-[8%] w-[100%]  items-center h-[90vh]">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-5%]">
//         Tech Quiz
//       </h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">
//         Time Remaining: {formatTime(timeRemaining)}
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         <div className="mb-4">
//           <label htmlFor="userName" className="block text-lg font-medium text-gray-700">
//             Enter Your Name:
//           </label>
//           <input
//             type="text"
//             id="userName"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//             className="border border-gray-300 rounded px-4 py-2 w-full"
//             placeholder="Your name"
//           />
//         </div>
        
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label
//                   htmlFor={`q${q.id}_option${idx}`}
//                   className="text-gray-700"
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div
//           className={`text-2xl font-semibold mt-6 ${result === "pass" ? "text-green-600" : "text-red-600 "}`}
//         >
//           You scored: {score} / 100
//           <br />
//           {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;




// "use client";
// import React, { useState, useEffect } from "react";

// const QuizPage = () => {
//   const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
//   const [score, setScore] = useState(null);
//   const [error, setError] = useState("");
//   const [result, setResult] = useState("");
//   const [answers, setAnswers] = useState({});
//   const [questions, setQuestions] = useState([
//     {
//                                         id: 1,
//                                         question: "What does CPU stand for?",
//                                         options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
//                                         correctAnswer: "Central Processing Unit",
//                                       },
//                                       {
//                                         id: 2,
//                                         question: "Which language is primarily used for web development?",
//                                         options: ["Python", "HTML", "C++", "Java"],
//                                         correctAnswer: "HTML",
//                                       },
//                                       {
//                                         id: 3,
//                                         question: "What is the time complexity of binary search?",
//                                         options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
//                                         correctAnswer: "O(log n)",
//                                       },
//                                       {
//                                         id: 4,
//                                         question: "What does HTTP stand for?",
//                                         options: [
//                                           "HyperText Transfer Protocol",
//                                           "HyperText Transmission Protocol",
//                                           "HyperText Transfer Procedure",
//                                           "HyperText Transport Protocol",
//                                         ],
//                                         correctAnswer: "HyperText Transfer Protocol",
//                                       },
//                                       {
//                                         id: 5,
//                                         question: "Which one is not an operating system?",
//                                         options: ["Windows", "Linux", "Oracle", "macOS"],
//                                         correctAnswer: "Oracle",
//                                       },
                                     
//                                         {
//                                           id: 6,
//                                           question: "Which data structure uses FIFO (First In, First Out)?",
//                                           options: ["Stack", "Queue", "Array", "Tree"],
//                                           correctAnswer: "Queue",
//                                         },
//                                         {
//                                           id: 7,
//                                           question: "What does RAM stand for?",
//                                           options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
//                                           correctAnswer: "Random Access Memory",
//                                         },
//                                         {
//                                           id: 8,
//                                           question: "Which one is a primary key in databases?",
//                                           options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
//                                           correctAnswer: "Unique identifier",
//                                         },
//                                         {
//                                           id: 9,
//                                           question: "Which programming language is known as 'platform-independent'?",
//                                           options: ["C++", "Java", "Python", "Assembly"],
//                                           correctAnswer: "Java",
//                                         },
//                                         {
//                                           id: 10,
//                                           question: "What does DNS stand for?",
//                                           options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
//                                           correctAnswer: "Domain Name System",
//                                         },
//                                         {
//                                           id: 11,
//                                           question: "Which sorting algorithm has the best average-case time complexity?",
//                                           options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
//                                           correctAnswer: "Merge Sort",
//                                         },
//                                         {
//                                           id: 12,
//                                           question: "Which part of a computer performs calculations and makes decisions?",
//                                           options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
//                                           correctAnswer: "CPU",
//                                         },
//                                         {
//                                           id: 13,
//                                           question: "What is the default port number for HTTP?",
//                                           options: ["21", "22", "80", "443"],
//                                           correctAnswer: "80",
//                                         },
//                                         {
//                                           id: 14,
//                                           question: "What is the main characteristic of a stack?",
//                                           options: ["FIFO", "LIFO", "Random Access", "Sequential"],
//                                           correctAnswer: "LIFO",
//                                         },
//                                         {
//                                           id: 15,
//                                           question: "Which of the following is a NoSQL database?",
//                                           options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
//                                           correctAnswer: "MongoDB",
//                                         },
//                                         {
//                                           id: 16,
//                                           question: "What does API stand for?",
//                                           options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
//                                           correctAnswer: "Application Programming Interface",
//                                         },
//                                         {
//                                           id: 17,
//                                           question: "Which of the following is not a type of computer network?",
//                                           options: ["LAN", "WAN", "SAN", "PANIC"],
//                                           correctAnswer: "PANIC",
//                                         },
//                                         {
//                                           id: 18,
//                                           question: "Which protocol is used to send emails?",
//                                           options: ["HTTP", "SMTP", "FTP", "SNMP"],
//                                           correctAnswer: "SMTP",
//                                         },
//                                         {
//                                           id: 19,
//                                           question: "What is the smallest unit of data in a computer?",
//                                           options: ["Byte", "Bit", "Nibble", "Kilobyte"],
//                                           correctAnswer: "Bit",
//                                         },
//                                         {
//                                           id: 20,
//                                           question: "Which one is not a relational database?",
//                                           options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
//                                           correctAnswer: "MongoDB",
//                                         },
//                                         {
//                                           id: 21,
//                                           question: "Which of the following is not an HTTP method?",
//                                           options: ["GET", "POST", "PUT", "FIND"],
//                                           correctAnswer: "FIND",
//                                         },
//                                         {
//                                           id: 22,
//                                           question: "What is the purpose of a firewall?",
//                                           options: ["Data storage", "Network security", "Data encryption", "System backup"],
//                                           correctAnswer: "Network security",
//                                         },
//                                         {
//                                           id: 23,
//                                           question: "What is the time complexity of linear search?",
//                                           options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
//                                           correctAnswer: "O(n)",
//                                         },
//                                         {
//                                           id: 24,
//                                           question: "Which layer of the OSI model is responsible for data encryption?",
//                                           options: ["Application", "Presentation", "Transport", "Session"],
//                                           correctAnswer: "Presentation",
//                                         },
//                                         {
//                                           id: 25,
//                                           question: "What is a primary purpose of the operating system?",
//                                           options: ["Gaming", "Hardware management", "Programming", "Networking"],
//                                           correctAnswer: "Hardware management",
//                                         },
//                                         {
//                                           id: 26,
//                                           question: "Which is a valid IP address?",
//                                           options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
//                                           correctAnswer: "192.168.1.1",
//                                         },
//                                         {
//                                           id: 27,
//                                           question: "Which one is not a high-level programming language?",
//                                           options: ["Python", "C", "JavaScript", "Assembly"],
//                                           correctAnswer: "Assembly",
//                                         },
//                                         {
//                                           id: 28,
//                                           question: "What is the binary representation of the decimal number 5?",
//                                           options: ["100", "101", "110", "111"],
//                                           correctAnswer: "101",
//                                         },
//                                         {
//                                           id: 29,
//                                           question: "Which of the following is a cloud computing platform?",
//                                           options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
//                                           correctAnswer: "AWS",
//                                         },
//                                         {
//                                           id: 30,
//                                           question: "What is the default subnet mask for a Class C IP address?",
//                                           options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
//                                           correctAnswer: "255.255.255.0",
//                                         },
//                                         {
//                                           id: 31,
//                                           question: "What is the full form of SSD?",
//                                           options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
//                                           correctAnswer: "Solid State Drive",
//                                         },
//                                         {
//                                           id: 32,
//                                           question: "Which language is mainly used for Artificial Intelligence?",
//                                           options: ["C", "Java", "Python", "PHP"],
//                                           correctAnswer: "Python",
//                                         },
//                                         {
//                                           id: 33,
//                                           question: "What is the primary purpose of DNS?",
//                                           options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
//                                           correctAnswer: "Resolve domain names",
//                                         },
//                                         {
//                                           id: 34,
//                                           question: "What is the hexadecimal equivalent of the binary number 1010?",
//                                           options: ["A", "B", "C", "D"],
//                                           correctAnswer: "A",
//                                         },
//                                         {
//                                           id: 35,
//                                           question: "Which of the following is not a type of operating system?",
//                                           options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
//                                           correctAnswer: "Hybrid",
//                                         },
//                                         {
//                                           id: 36,
//                                           question: "What is the output of 5 AND 3 in binary?",
//                                           options: ["0001", "0011", "0101", "1001"],
//                                           correctAnswer: "0001",
//                                         },
//                                         {
//                                           id: 37,
//                                           question: "Which is the best tool for version control?",
//                                           options: ["Git", "Jenkins", "Docker", "Slack"],
//                                           correctAnswer: "Git",
//                                         },
//                                         {
//                                           id: 38,
//                                           question: "What is the default port number for HTTPS?",
//                                           options: ["21", "80", "443", "8080"],
//                                           correctAnswer: "443",
//                                         },
//                                         {
//                                           id: 39,
//                                           question: "What does LAN stand for?",
//                                           options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
//                                           correctAnswer: "Local Area Network",
//                                         },
//                                         {
//                                           id: 40,
//                                           question: "What is the term for a self-contained unit of functionality in programming?",
//                                           options: ["Variable", "Function", "Loop", "Array"],
//                                           correctAnswer: "Function",
//                                         },
//                                         {
//                                           id: 41,
//                                           question: "Which protocol is used to secure communication over the web?",
//                                           options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
//                                           correctAnswer: "SSL/TLS",
//                                         },
//                                         {
//                                           id: 42,
//                                           question: "Which programming paradigm focuses on objects and classes?",
//                                           options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
//                                           correctAnswer: "Object-Oriented",
//                                         },
//                                         {
//                                           id: 43,
//                                           question: "Which sorting algorithm is the fastest in the average case?",
//                                           options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
//                                           correctAnswer: "Quick Sort",
//                                         },
//                                         {
//                                           id: 44,
//                                           question: "What is the primary function of a database index?",
//                                           options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
//                                           correctAnswer: "Optimize queries",
//                                         },
//                                         {
//                                           id: 45,
//                                           question: "What is the size of an IPv4 address?",
//                                           options: ["16 bits", "32 bits", "64 bits", "128"],
//                                             correctAnswer:"32 bits",
//                                         },
//                                         {
//                                           id: 46,
//                                           question: "What does CPU stand for?",
//                                           options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
//                                           correctAnswer: "Central Processing Unit",
//                                         },
//                                         {
//                                           id: 47,
//                                           question: "Which protocol is used to send email?",
//                                           options: ["HTTP", "SMTP", "FTP", "IMAP"],
//                                           correctAnswer: "SMTP",
//                                         },
//                                         {
//                                           id: 48,
//                                           question: "What does RAM stand for?",
//                                           options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
//                                           correctAnswer: "Random Access Memory",
//                                         },
//                                         {
//                                           id: 49,
//                                           question: "Which of the following is a non-volatile storage device?",
//                                           options: ["RAM", "Hard Disk", "Cache", "Registers"],
//                                           correctAnswer: "Hard Disk",
//                                         },
//     {
//       id: 50,
//       question: "Which command is used to display the contents of a file in Linux?",
//       options: ["ls", "cd", "cat", "rm"],
//       correctAnswer: "cat",
//     },
//   ]);

//   // Generate a unique user ID for this session
//   const userId = Date.now(); // Use timestamp as a unique ID for the session

//   // Fetch time remaining
//   useEffect(() => {
//     if (timeRemaining <= 0) return;
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   // Handle changes in answers
//   const handleChange = (questionId, value) => {
//     setAnswers({ ...answers, [questionId]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if at least 20 questions are answered
//     if (Object.keys(answers).length < 20) {
//       setError("You must answer at least 20 questions to submit!");
//       return;
//     }

//     setError("");

//     // Scoring Logic (2 marks per question)
//     let totalScore = 0;
//     questions.forEach((q) => {
//       if (answers[q.id] === q.correctAnswer) {
//         totalScore += 2; // 2 marks for each correct answer
//       }
//     });

//     setScore(totalScore);

//     // Determine pass or fail
//     const testResult = totalScore >= 35 ? "pass" : "fail";
//     setResult(testResult);

//     // Save the quiz score in the employee list (localStorage)
//     const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];

//     // Create a new employee record with the score
//     const newEmployee = {
//       id: userId,
//       score: totalScore,
//     };

//     // Add the new employee to the list
//     const updatedEmployees = [...storedEmployees, newEmployee];

//     // Save the updated employee list to localStorage
//     localStorage.setItem("employees", JSON.stringify(updatedEmployees));

//     // Reset state to not display previous test results
//     setTimeout(() => {
//       setScore(null);
//       setResult("");
//       setAnswers({});
//     }, 10000); // Optional: Clear after 3 seconds
//   };

//   // Convert time remaining to mm:ss format
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
//   };

//   return (
//     <div className="flex flex-col scroll-smooth pt-[8%] w-[100%] items-center h-[90vh]">
//       <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-5%]">
//         Tech Quiz
//       </h2>
//       <div className="text-xl font-semibold mb-4 pr-[403px]">
//         Time Remaining: {formatTime(timeRemaining)}
//       </div>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
//         style={{ maxHeight: "70vh", overflowY: "scroll" }}
//       >
//         {questions.map((q) => (
//           <div key={q.id} className="space-y-4 mb-6">
//             <label className="block text-lg font-medium text-gray-700">
//               {q.id}. {q.question}
//             </label>
//             {q.options.map((option, idx) => (
//               <div key={idx} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   id={`q${q.id}_option${idx}`}
//                   name={`question_${q.id}`}
//                   value={option}
//                   checked={answers[q.id] === option}
//                   onChange={(e) => handleChange(q.id, e.target.value)}
//                   className="h-4 w-4 text-blue-500"
//                 />
//                 <label
//                   htmlFor={`q${q.id}_option${idx}`}
//                   className="text-gray-700"
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </div>
//         ))}
//         <div className="flex justify-center mt-6">
//           <button
//             type="submit"
//             className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
//             disabled={timeRemaining <= 0}
//           >
//             Submit Quiz
//           </button>
//         </div>
//       </form>

//       {score !== null && (
//         <div
//           className={`text-2xl font-semibold mt-6 ${result === "pass" ? "text-green-600" : "text-red-600 "}`}
//         >
//           You scored: {score} / 100
//           <br />
//           {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizPage;




"use client";
import React, { useState, useEffect } from "react";

const QuizPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What does CPU stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "Compute Process Unit"],
      correctAnswer: "Central Processing Unit",
    },
    {
      id: 2,
      question: "Which language is primarily used for web development?",
      options: ["Python", "HTML", "C++", "Java"],
      correctAnswer: "HTML",
    },
    {
      id: 3,
      question: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
      correctAnswer: "O(log n)",
    },
    {
      id: 4,
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HyperText Transmission Protocol",
        "HyperText Transfer Procedure",
        "HyperText Transport Protocol",
      ],
      correctAnswer: "HyperText Transfer Protocol",
    },
    {
      id: 5,
      question: "Which one is not an operating system?",
      options: ["Windows", "Linux", "Oracle", "macOS"],
      correctAnswer: "Oracle",
    },
   
      {
        id: 6,
        question: "Which data structure uses FIFO (First In, First Out)?",
        options: ["Stack", "Queue", "Array", "Tree"],
        correctAnswer: "Queue",
      },
      {
        id: 7,
        question: "What does RAM stand for?",
        options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Action Memory"],
        correctAnswer: "Random Access Memory",
      },
      {
        id: 8,
        question: "Which one is a primary key in databases?",
        options: ["Unique identifier", "Foreign key", "Composite key", "Candidate key"],
        correctAnswer: "Unique identifier",
      },
      {
        id: 9,
        question: "Which programming language is known as 'platform-independent'?",
        options: ["C++", "Java", "Python", "Assembly"],
        correctAnswer: "Java",
      },
      {
        id: 10,
        question: "What does DNS stand for?",
        options: ["Domain Name System", "Data Network Server", "Domain Name Service", "Digital Network System"],
        correctAnswer: "Domain Name System",
      },
      {
        id: 11,
        question: "Which sorting algorithm has the best average-case time complexity?",
        options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Merge Sort"],
        correctAnswer: "Merge Sort",
      },
      {
        id: 12,
        question: "Which part of a computer performs calculations and makes decisions?",
        options: ["Motherboard", "CPU", "RAM", "Hard Drive"],
        correctAnswer: "CPU",
      },
      {
        id: 13,
        question: "What is the default port number for HTTP?",
        options: ["21", "22", "80", "443"],
        correctAnswer: "80",
      },
      {
        id: 14,
        question: "What is the main characteristic of a stack?",
        options: ["FIFO", "LIFO", "Random Access", "Sequential"],
        correctAnswer: "LIFO",
      },
      {
        id: 15,
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
        correctAnswer: "MongoDB",
      },
      {
        id: 16,
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Application Program Interaction", "Applied Programming Interface", "Advanced Program Interaction"],
        correctAnswer: "Application Programming Interface",
      },
      {
        id: 17,
        question: "Which of the following is not a type of computer network?",
        options: ["LAN", "WAN", "SAN", "PANIC"],
        correctAnswer: "PANIC",
      },
      {
        id: 18,
        question: "Which protocol is used to send emails?",
        options: ["HTTP", "SMTP", "FTP", "SNMP"],
        correctAnswer: "SMTP",
      },
      {
        id: 19,
        question: "What is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Nibble", "Kilobyte"],
        correctAnswer: "Bit",
      },
      {
        id: 20,
        question: "Which one is not a relational database?",
        options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
        correctAnswer: "MongoDB",
      },
      {
        id: 21,
        question: "Which of the following is not an HTTP method?",
        options: ["GET", "POST", "PUT", "FIND"],
        correctAnswer: "FIND",
      },
      {
        id: 22,
        question: "What is the purpose of a firewall?",
        options: ["Data storage", "Network security", "Data encryption", "System backup"],
        correctAnswer: "Network security",
      },
      {
        id: 23,
        question: "What is the time complexity of linear search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(n)",
      },
      {
        id: 24,
        question: "Which layer of the OSI model is responsible for data encryption?",
        options: ["Application", "Presentation", "Transport", "Session"],
        correctAnswer: "Presentation",
      },
      {
        id: 25,
        question: "What is a primary purpose of the operating system?",
        options: ["Gaming", "Hardware management", "Programming", "Networking"],
        correctAnswer: "Hardware management",
      },
      {
        id: 26,
        question: "Which is a valid IP address?",
        options: ["192.168.1.1", "256.256.256.256", "abc.def.ghi.jkl", "123.456.78.90"],
        correctAnswer: "192.168.1.1",
      },
      {
        id: 27,
        question: "Which one is not a high-level programming language?",
        options: ["Python", "C", "JavaScript", "Assembly"],
        correctAnswer: "Assembly",
      },
      {
        id: 28,
        question: "What is the binary representation of the decimal number 5?",
        options: ["100", "101", "110", "111"],
        correctAnswer: "101",
      },
      {
        id: 29,
        question: "Which of the following is a cloud computing platform?",
        options: ["Google Drive", "AWS", "Dropbox", "Zoom"],
        correctAnswer: "AWS",
      },
      {
        id: 30,
        question: "What is the default subnet mask for a Class C IP address?",
        options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
        correctAnswer: "255.255.255.0",
      },
      {
        id: 31,
        question: "What is the full form of SSD?",
        options: ["Solid State Drive", "Simple Storage Device", "Secure Storage Drive", "System Storage Device"],
        correctAnswer: "Solid State Drive",
      },
      {
        id: 32,
        question: "Which language is mainly used for Artificial Intelligence?",
        options: ["C", "Java", "Python", "PHP"],
        correctAnswer: "Python",
      },
      {
        id: 33,
        question: "What is the primary purpose of DNS?",
        options: ["Store data", "Resolve domain names", "Encrypt emails", "Manage IPs"],
        correctAnswer: "Resolve domain names",
      },
      {
        id: 34,
        question: "What is the hexadecimal equivalent of the binary number 1010?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "A",
      },
      {
        id: 35,
        question: "Which of the following is not a type of operating system?",
        options: ["Batch", "Real-Time", "Distributed", "Hybrid"],
        correctAnswer: "Hybrid",
      },
      {
        id: 36,
        question: "What is the output of 5 AND 3 in binary?",
        options: ["0001", "0011", "0101", "1001"],
        correctAnswer: "0001",
      },
      {
        id: 37,
        question: "Which is the best tool for version control?",
        options: ["Git", "Jenkins", "Docker", "Slack"],
        correctAnswer: "Git",
      },
      {
        id: 38,
        question: "What is the default port number for HTTPS?",
        options: ["21", "80", "443", "8080"],
        correctAnswer: "443",
      },
      {
        id: 39,
        question: "What does LAN stand for?",
        options: ["Local Area Network", "Large Area Network", "Linear Area Network", "Low Access Network"],
        correctAnswer: "Local Area Network",
      },
      {
        id: 40,
        question: "What is the term for a self-contained unit of functionality in programming?",
        options: ["Variable", "Function", "Loop", "Array"],
        correctAnswer: "Function",
      },
      {
        id: 41,
        question: "Which protocol is used to secure communication over the web?",
        options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
        correctAnswer: "SSL/TLS",
      },
      {
        id: 42,
        question: "Which programming paradigm focuses on objects and classes?",
        options: ["Functional", "Object-Oriented", "Procedural", "Declarative"],
        correctAnswer: "Object-Oriented",
      },
      {
        id: 43,
        question: "Which sorting algorithm is the fastest in the average case?",
        options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
        correctAnswer: "Quick Sort",
      },
      {
        id: 44,
        question: "What is the primary function of a database index?",
        options: ["Store data", "Optimize queries", "Encrypt data", "Create tables"],
        correctAnswer: "Optimize queries",
      },
      {
        id: 45,
        question: "What is the size of an IPv4 address?",
        options: ["16 bits", "32 bits", "64 bits", "128"],
          correctAnswer:"32 bits",
      },
      {
        id: 46,
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Central Performance Unit", "Computer Processing Unit", "Control Processing Unit"],
        correctAnswer: "Central Processing Unit",
      },
      {
        id: 47,
        question: "Which protocol is used to send email?",
        options: ["HTTP", "SMTP", "FTP", "IMAP"],
        correctAnswer: "SMTP",
      },
      {
        id: 48,
        question: "What does RAM stand for?",
        options: ["Read Access Memory", "Random Allocation Memory", "Random Access Memory", "Read And Modify"],
        correctAnswer: "Random Access Memory",
      },
      {
        id: 49,
        question: "Which of the following is a non-volatile storage device?",
        options: ["RAM", "Hard Disk", "Cache", "Registers"],
        correctAnswer: "Hard Disk",
      },
      {
        id: 50,
        question: "Which command is used to display the contents of a file in Linux?",
        options: ["ls", "cd", "cat", "rm"],
        correctAnswer: "cat",
      },
  ]);

  // Timer Logic
  useEffect(() => {
    if (timeRemaining <= 0) return;
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Reset quiz state after submission
  const resetQuizState = () => {
    setScore(null);
    setResult("");
    setAnswers({});
  };

  // Handle changes in answers
  const handleChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure at least 20 questions are answered (adjust based on your quiz length)
    if (Object.keys(answers).length < 20) {
            setError("You must answer at least 20 questions to submit!");
            return;
          }
    setError("");

    // Scoring Logic (2 marks per question)
    let totalScore = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        totalScore += 2; // 2 marks for each correct answer
      }
    });

    setScore(totalScore);

    // Determine pass or fail
    const testResult = totalScore >= 35 ? "pass" : "fail";
    setResult(testResult);

    // Reset state after showing the result for 5 seconds
    setTimeout(resetQuizState, 10000);
  };

  // Convert time remaining to mm:ss format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <div className="flex flex-col scroll-smooth pt-[8%] w-[100%] items-center h-[90vh]">
      <h2 className="text-3xl font-bold text-center text-blue-600 mt-[-5%]">
        Tech Quiz
      </h2>
      <div className="text-xl font-semibold mb-4 pr-[403px]">
        Time Remaining: {formatTime(timeRemaining)}
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
        style={{ maxHeight: "70vh", overflowY: "scroll" }}
      >
        {questions.map((q) => (
          <div key={q.id} className="space-y-4 mb-6">
            <label className="block text-lg font-medium text-gray-700">
              {q.id}. {q.question}
            </label>
            {q.options.map((option, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={`q${q.id}_option${idx}`}
                  name={`question_${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  className="h-4 w-4 text-blue-500"
                />
                <label
                  htmlFor={`q${q.id}_option${idx}`}
                  className="text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-8 rounded-lg hover:bg-green-600 transition duration-200"
            disabled={timeRemaining <= 0}
          >
            Submit Quiz
          </button>
        </div>
      </form>

      {score !== null && (
        <div
          className={`text-2xl font-semibold mt-6 ${result === "pass" ? "text-green-600" : "text-red-600 "}`}
        >
          You scored: {score} / {questions.length * 2}
          <br />
          {result === "pass" ? "Congratulations! You passed!" : "You failed. Try again!"}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
