let employees = []; // In-memory array to store employees

export default function handler(req, res) {
  if (req.method === "GET") {
    // Get all employees
    res.status(200).json(employees);
  } else if (req.method === "POST") {
    // Add a new employee
    const { name, email, password, score } = req.body;
    const id = employees.length + 1; // Auto-generate ID
    employees.push({ id, name, email, password, score });
    res.status(201).json({ message: "Employee added successfully!" });
  } else if (req.method === "DELETE") {
    // Delete an employee by ID
    const { id } = req.query;
    employees = employees.filter((employee) => employee.id !== parseInt(id));
    res.status(200).json({ message: "Employee deleted successfully!" });
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
