import React from "react";
import "../styles/Registration.css"; // Import the CSS file
import universityLogo from "../images/Possalogo.png";
import studentsImage from "../images/signup.png";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="container">
      {/* Left Section - Image */}
      <div className="image-section">
        <img src={studentsImage} alt="Students on stairs" />
      </div>

      {/* Right Section - Form */}
      <div className="form-section">
        <div className="form-container">
          {/* Logo */}
          <div className="logo">
            <img src={universityLogo} alt="University Logo" />
          </div>
          {/* Form Title */}
          <h2 className="form-title">Registration</h2>
          <p className="form-subtitle">Complete this form to proceed</p>

          {/* Form Fields */}
          <form>
            <div className="form-grid">
              <input
                type="text"
                placeholder="Full Name"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="input-field"
              />
              <input
                type="text"
                placeholder="Student ID"
                className="input-field"
              />
              <input type="email" placeholder="Email" className="input-field" />
              <select className="input-field">
                <option>Programme</option>
              </select>
              <select className="input-field">
                <option>Year</option>
              </select>
              <input
                type="password"
                placeholder="Enter password"
                className="input-field"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="input-field"
              />
            </div>

            {/* Password Strength Indicator */}
            <div className="password-strength">
              Weak &nbsp; Moderate &nbsp; Strong
            </div>

            {/* Buttons */}
            <div className="button-group">
              <button className="cancel-btn">Cancel</button>

              {/* Wrap the Next button with Link */}
              <Link to="/Proof">
                <button className="next-btn">
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
