import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Dashboard from "./components/Dashboard";
import BloodEmergencyPage from "./components/BloodEmergencyPage";
import BloodRequestPage from "./components/BloodRequestPage"; // Import BloodRequestPage

function App()  {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blood-emergency" element={<BloodEmergencyPage />} />       
        <Route path="/blood-request" element={<BloodRequestPage />} /> {/* Blood Request */}

      </Routes>
    </Router>
  );
}

export default App;
