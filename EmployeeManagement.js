import React, { useState } from "react";

function EmployeeManager() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [percentage, setPercentage] = useState("");

  const addEmployee = () => {
    if (!name || !percentage) {
      alert("Please provide both name and percentage.");
      return;
    }

    const weeklyHours = (37.5 * parseFloat(percentage)) / 100;
    const newEmployee = { name, percentage, weeklyHours };

    setEmployees([...employees, newEmployee]);
    setName("");
    setPercentage("");
  };

  return (
    <div style={containerStyle}>
      <h2>Employee Manager</h2>
      <div style={formStyle}>
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Percentage"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>Weekly Hours</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.percentage}%</td>
              <td>{emp.weeklyHours.toFixed(2)} hrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const containerStyle = {
  maxWidth: "600px",
  margin: "20px auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#fff",
};

const formStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "20px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default EmployeeManager;
