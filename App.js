import React, { useState } from "react";
import EmployeeManager from "./components/EmployeeManager";
import ShiftGenerator from "./components/ShiftGenerator";

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <h1>ShiftPlanner</h1>
      </header>
      <main style={mainStyle}>
        <EmployeeManager />
        <ShiftGenerator />
      </main>
    </div>
  );
}

const headerStyle = {
  background: "#007bff",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

const mainStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
};

export default App;
