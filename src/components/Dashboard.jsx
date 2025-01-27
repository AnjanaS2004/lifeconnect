import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleBloodEmergencyClick = () => {
    navigate("/blood-emergency");
  };

  return (
    <div className="dashboard">
      <h1>Welcome to LifeConnect Dashboard</h1>
      
      {/* Buttons for navigation */}
      <div className="buttons">
        <button onClick={handleBloodEmergencyClick}>Blood Emergency</button>
        <button>Accident Reporting</button>
        <button>Crime Reporting</button>
      </div>

      {/* Help Box */}
      <div className="help-box" onClick={() => alert("You clicked Help! Add actions here.")}>
        <h2>Help?</h2>
      </div>
    </div>
  );
};

export default Dashboard;
