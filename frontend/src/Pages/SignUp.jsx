import React, { useState } from 'react';
import '../styles/SignUp.css'; // Importing the CSS file
import POSSA from '../images/Possalogo.png';
import Sign from '../images/signup.png';

const SignUp = () => {
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState('Weak');

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return 'Weak';
    if (password.length < 12) return 'Moderate';
    return 'Strong';
  };

  const handlePasswordChange = (e) => {
    const strength = checkPasswordStrength(e.target.value);
    setPasswordStrength(strength);
  };

  const handleConfirmPasswordChange = (e) => {
    const strength = checkPasswordStrength(e.target.value);
    setConfirmPasswordStrength(strength);
  };

  return (
    <div className="signup-container">
      <div className="signup-image-section">
        <img src={Sign} alt="Students studying" />
      </div>
      <div className="signup-form-section">
        <img src={POSSA} alt="University of Ghana" className="signup-logo" />
        <h2>Sign Up</h2>
        <p>Enter your credentials to continue.</p>
        
        <form className="signup-form">
          <div className="signup-form-content">
            <div className="signup-form-left">
              <div className="signup-form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>
              <div className="signup-form-group">
                <label>Student ID</label>
                <input type="text" placeholder="Enter student ID" />
              </div>
              <div className="signup-form-group">
                <label>Programme</label>
                <select>
                  <option value="">Select an option</option>
                </select>
              </div>
              <div className="signup-form-group">
                <label>Gender</label>
                <select>
                  <option value="">Select an option</option>
                </select>
              </div>
            </div>

            <div className="signup-form-right">
              <div className="signup-form-group">
                <label>Contact information</label>
                <input type="tel" placeholder="Phone number" />
              </div>
              <div className="signup-form-group">
                <input type="email" placeholder="Student Email" />
              </div>
              <div className="signup-form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  placeholder="Enter password"
                  onChange={handlePasswordChange}
                />
                <div className="signup-password-strength-meter">
                  <span className={passwordStrength.toLowerCase()}>{passwordStrength}</span>
                </div>
              </div>
              <div className="signup-form-group">
                <input 
                  type="password" 
                  placeholder="Confirm password"
                  onChange={handleConfirmPasswordChange}
                />
                <div className="signup-password-strength-meter">
                  <span className={confirmPasswordStrength.toLowerCase()}>{confirmPasswordStrength}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-terms-container">
            <label className="signup-terms-label">
              <input type="checkbox" />
              <span>I accept the Terms and Conditions of services</span>
            </label>
          </div>

          <div className="signup-button-group">
            <button type="button" className="signup-cancel-btn">Cancel</button>
            <button type="submit" className="signup-signup-btn">Sign Up</button>
          </div>

          <div className="signup-login-link">
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
