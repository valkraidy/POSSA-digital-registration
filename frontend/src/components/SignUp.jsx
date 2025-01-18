import React, { useState } from 'react';
import './SignUp.css';
import POSSA from './images/Possalogo.png';
import Sign from './images/signup.png';


const SignUp = () => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.length < 12) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (
    <div className="signup-container">
      <div className="image-section">
        <img src={Sign} alt="Students studying" />
      </div>
      <div className="form-section">
             <img
                       src={POSSA} 
                       alt="UG Political Science Logo"
                       className="slogo"
                     />
        <h3 className='upp'>Sign Up</h3>
        <p>Enter your credentials to continue.</p>
        <form>
          <div className="form-row">
            <div className="form-column">
              <input type="text" placeholder="Enter full name" required />
              <input type="text" placeholder="Enter student ID" required />
              <select required>
                <option value="">Select Programme</option>
                <option value="programme1">Programme 1</option>
                <option value="programme2">Programme 2</option>
              </select>
              <select required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-column">
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Student Email" required />
              <input
                type="password"
                placeholder="Enter password"
                onChange={handlePasswordChange}
                required
              />
              <div className="password-strength">{passwordStrength}</div>
              <input
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
          <label>
            <input type="checkbox" required /> I accept the Terms and Conditions
          </label>
          <div className="button-group">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="signup-button">Sign Up</button>
          </div>
        </form>
        <p className='alr'>Already have an account? <a href="/register">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;
