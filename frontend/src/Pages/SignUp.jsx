import React, { useState } from 'react';
import '../styles/SignUp.css'; // Importing the CSS file
import POSSA from '../images/Possalogo.png';
import Sign from '../images/signup.png';
import { useUserStore } from '../Store/UserStore';
import Toast from '../components/Toast';

const SignUp = () => {
  const { signUp, message, toast, error, isLoading ,setToast} = useUserStore();
  const [passwordStrength, setPasswordStrength] = useState('Weak');
  const [confirmPasswordStrength, setConfirmPasswordStrength] = useState('Weak');
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signupDetails, setSignupDetails] = useState({
    name: "",
    email: "",
    studentId: "",
    password: "",
    program: "",
    gender: ""
  });

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page refresh
    await signUp(
      signupDetails.name,
      signupDetails.email,
      signupDetails.studentId,
      signupDetails.password,
      signupDetails.program,
      signupDetails.gender
    );
  };

  const checkPasswordStrength = (password) => {
    if (password.length < 6) return 'Weak';
    if (password.length < 12) return 'Moderate';
    
    return 'Strong';
  };

  const handlePasswordChange = (e) => {
    const strength = checkPasswordStrength(e.target.value);
    setPasswordStrength(strength);
    setSignupDetails({ ...signupDetails, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordStrength(checkPasswordStrength(e.target.value));
  };

  return (
    <div className="signup-container">
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "sucess" })} />}
      <div className="signup-image-section">
        <img src={Sign} alt="Students studying" />
      </div>
      <div className="signup-form-section">
        <img src={POSSA} alt="University of Ghana" className="signup-logo" />
        <h2>Sign Up</h2>
        <p>Enter your credentials to continue.</p>

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-form-content">
            <div className="signup-form-left">
              <div className="signup-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={signupDetails.name}
                  onChange={(e) => setSignupDetails({ ...signupDetails, name: e.target.value })}
                />
              </div>
              <div className="signup-form-group">
                <label>Student ID</label>
                <input
                  type="text"
                  placeholder="Enter student ID"
                  value={signupDetails.studentId}
                  onChange={(e) => setSignupDetails({ ...signupDetails, studentId: e.target.value })}
                />
              </div>
              <div className="signup-form-group">
                <label>Programme</label>
                <select
                  value={signupDetails.program}
                  onChange={(e) => setSignupDetails({ ...signupDetails, program: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business Administration">Business Administration</option>
                </select>
              </div>
              <div className="signup-form-group">
                <label>Gender</label>
                <select
                  value={signupDetails.gender}
                  onChange={(e) => setSignupDetails({ ...signupDetails, gender: e.target.value })}
                >
                  <option value="">Select an option</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="signup-form-right">
              <div className="signup-form-group">
                <label>Contact information</label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={signupDetails.phone}
                  onChange={(e) => setSignupDetails({ ...signupDetails, phone: e.target.value })}
                />
              </div>
              <div className="signup-form-group">
                <input
                  type="email"
                  placeholder="Student Email"
                  value={signupDetails.email}
                  onChange={(e) => setSignupDetails({ ...signupDetails, email: e.target.value })}
                />
              </div>
              <div className="signup-form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={signupDetails.password}
                  onChange={handlePasswordChange}
                />
                <div className="signup-password-strength-meter">
                  <span className={passwordStrength.toLowerCase()}>{passwordStrength}</span>
                </div>
              </div>
              <div className="signup-form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
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
              <input type="checkbox"  required/>
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
