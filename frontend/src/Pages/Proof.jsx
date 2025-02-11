import React from 'react';
import "../styles/Proof.css"; // Import the CSS file

// Import images
import studentsImage from "../images/signup.png"; // Replace with the actual image path
import universityLogo from "../images/Possalogo.png"; // Replace with the actual logo image path

const RegistrationUpload = () => {
  return (
    <div className="reg-container">
      <div className="reg-image">
        <img src={studentsImage} alt="Students studying" />
      </div>

      <div className="reg-content">
        <img src={universityLogo} alt="UG Logo" className="reg-logo" />
        <div className="reg-main">
          <h3 className="reg-title">Registration</h3>
          <p className="reg-subtitle">Upload Proof of Registration</p>
          
          <div className="reg-upload-box">
            <div className="reg-upload-content">
              <svg className="reg-pdf-icon" width="32" height="32" viewBox="0 0 24 24">
                <path d="M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 2V10L13 8L10 10V2" fill="none" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <p>Drag and drop or upload file</p>
            </div>
          </div>

          <div className="reg-form">
            <div className="reg-form-group">
              <label>Payment Method</label>
              <select className="reg-select">
                <option value="">Select an option</option>
              </select>
            </div>

            <div className="reg-form-group">
              <label>Souvenir Collection Date</label>
              <div className="reg-date">
                <select className="reg-date-select">
                  <option>DD</option>
                </select>
                <select className="reg-date-select">
                  <option>MM</option>
                </select>
                <select className="reg-date-select">
                  <option>YYYY</option>
                </select>
              </div>
            </div>
          </div>

          <button className="reg-submit">Register</button>
        </div>

        <footer className="reg-footer">
          <div className="reg-links">
            <a href="#">Privacy Policy</a>
            <span className="reg-dot">·</span>
            <a href="#">Terms & Conditions</a>
          </div>
          <p>©2024 Group #. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default RegistrationUpload;
