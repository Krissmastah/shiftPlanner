import React, { useState } from "react";

function ShiftGenerator() {
  const openingHours = {
    monday: { start: 10, end: 22 },
    tuesday: { start: 10, end: 22 },
    wednesday: { start: 10, end: 22 },
    thursday: { start: 10, end: 22 },
    friday: { start: 10, end: 22 },
    saturday: { start: 10, end: 21 },
    sunday: { start: 10, end: 22 },
  };

  const [shifts, setShifts] = useState([]);

  const generateShifts = () => {
    const newShifts = [];

    for (const [day, hours] of Object.entries(openingHours)) {
      newShifts.push({
        day,
        start: `${hours.start}:00`,
        end: `${hours.end}:00`,
      });
    }

    setShifts(newShifts);
  };

  return (
    <div style={containerStyle}>
      <h2>Shift Generator</h2>
      <button onClick={generateShifts}>Generate Shifts</button>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          {shifts.map((shift, index) => (
            <tr key={index}>
              <td>{shift.day}</td>
              <td>{shift.start}</td>
              <td>{shift.end}</td>
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

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

export default ShiftGenerator;
