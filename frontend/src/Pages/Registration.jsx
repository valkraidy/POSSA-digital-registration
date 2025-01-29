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
    <div className="registration-container">
      <div className="image-section">
        <img src={Sign} alt="Students studying" />
      </div>
      <div className="form-section">
             <img
                       src={POSSA} 
                       alt="UG Political Science Logo"
                       className="slogo"
                     />
        <h3 className='regis'>Registration</h3>
        <p className='tration'>Complete this form to proceed</p>

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
                <option value="">Select Year</option>
                <option value="year 1">Year 1</option>
                <option value="year 2">Year 2</option>
                <option value="year 3">Year 3</option>
                <option value="year 4">Year 4</option>
              </select>
            </div>
            <div className="form-column2">
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
          </form>
  
                 
          <div className="buttons">
            <button type="button" className="cancel-button">Cancel</button>
            <button type="submit" className="next-button">Next</button>
          </div>
      </div>
    </div>
  )
  };

export default Registration;
