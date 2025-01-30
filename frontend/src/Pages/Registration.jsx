import React, { useState } from 'react';
import '../styles/Registration.css';
import POSSA from '../images/Possalogo.png';
import Sign from '../images/signup.png';

const Registration = () => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const strengthLevels = {
      weak: 5,
      moderate: 10,
    };
    if (password.length < strengthLevels.weak) {
      setPasswordStrength('Weak');
    } else if (password.length < strengthLevels.moderate) {
      setPasswordStrength('Moderate');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (
    <div className="reg-wrapper">
      <div className="reg-image-box">
        <img src={Sign} alt="Students studying" />
      </div>
      <div className="reg-form-box">
        <img
          src={POSSA} 
          alt="UG Political Science Logo"
          className="reg-logo"
        />
        <h3 className='reg-title'>Registration</h3>
        <p className='reg-subtitle'>Complete this form to proceed</p>

        <form>   
          <div className="reg-row">
            <div className="reg-col">
              <input type="text" placeholder="Enter full name" required />
              <input type="text" placeholder="Enter student ID" required />

              <select required>
                <option value="">Select Programme</option>
                <option value="programme1">Programme 1</option>
                <option value="programme2">Programme 2</option>
              </select>

              <select required>
                <option value="">Select Year</option>
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
                <option value="year3">Year 3</option>
                <option value="year4">Year 4</option>
              </select>
            </div>
            <div className="reg-col-alt">
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Student Email" required />
              <input
                type="password"
                placeholder="Enter password"
                onChange={handlePasswordChange}
                required
              />
              <div className="password-status">{passwordStrength}</div>
              <input
                type="password"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>
        </form>
  
        <div className="reg-buttons">
          <button type="button" className="btn-cancel">Cancel</button>
          <button type="submit" className="btn-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
