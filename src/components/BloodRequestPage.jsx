import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BloodRequestPage.css";

const BloodRequestPage = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    bloodGroup: "",
    state: "",
    district: "",
    city: "",
  });

  // Dropdown options
  const bloodGroups = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];
  const states = ["State 1", "State 2", "State 3"];
  const districts = {
    "State 1": ["District A", "District B", "District C"],
    "State 2": ["District D", "District E"],
    "State 3": ["District F", "District G", "District H"],
  };
  const cities = {
    "District A": ["City X", "City Y"],
    "District B": ["City Z"],
    "District D": ["City M", "City N"],
  };

  // Update form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset dependent dropdowns
    if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        district: "",
        city: "",
      }));
    }
    if (name === "district") {
      setFormData((prev) => ({
        ...prev,
        city: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Request Submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div className="blood-request-page">
      <div className="navbar">
        <a href="#" onClick={() => navigate("/dashboard")}>
          Home
        </a>
        <a href="#" onClick={() => navigate("/donate-blood")}>
          Donate Blood
        </a>
        <a href="#">Blood Request</a>
      </div>

      <div className="blood-request-form">
        <h2>Request Blood</h2>
        <form onSubmit={handleSubmit}>
          {/* Blood Group Dropdown */}
          <label>Blood Group:</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>

          {/* State Dropdown */}
          <label>State:</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          {/* District Dropdown */}
          {formData.state && (
            <>
              <label>District:</label>
              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              >
                <option value="">Select District</option>
                {districts[formData.state]?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </>
          )}

          {/* City Dropdown */}
          {formData.district && (
            <>
              <label>City:</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                {cities[formData.district]?.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </>
          )}

          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestPage;
