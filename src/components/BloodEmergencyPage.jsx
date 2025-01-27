import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BloodEmergencyPage.css";

const BloodEmergencyPage = () => {
  const navigate = useNavigate();
  const [isDonationFormVisible, setIsDonationFormVisible] = useState(false);

  // Toggle blood donation form visibility
  const handleDonationClick = () => {
    setIsDonationFormVisible(true); // Show the blood donation form
  };

  return (
    <div className="blood-emergency-page">
      {/* Navigation Bar */}
      <div className="navbar">
        <a href="#" onClick={() => navigate("/dashboard")}>Home</a>
        <a href="#" onClick={handleDonationClick}>Donate Blood</a> {/* Show form when clicked */}
        <a href="#">Blood Request</a>
      </div>

      {/* Conditional rendering of the Blood Donation Form */}
      {isDonationFormVisible && (
        <div className="blood-donation-form">
          <h2>Donate Blood</h2>
          <form>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Blood Group:</label>
            <select required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="O+">O+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
              <option value="A-">A-</option>
              <option value="O-">O-</option>
              <option value="B-">B-</option>
              <option value="AB-">AB-</option>
            </select>

            <label>City:</label>
            <input type="text" placeholder="Enter your city" required />

            <label>District:</label>
            <input type="text" placeholder="Enter your district" required />

            <label>State:</label>
            <input type="text" placeholder="Enter your state" required />

            {/* Prerequisites */}
            <label>Weight (in kg):</label>
            <input type="number" placeholder="Enter your weight" required />

            <label>Blood Level (Hemoglobin in g/dL):</label>
            <input type="number" placeholder="Enter your blood level" required />

            <label>Have you donated blood in the last 3 months?</label>
            <select required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <button type="submit">Submit Donation</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default BloodEmergencyPage;
