import React from 'react';
import '../styles/Login.css';
import universityImage from '../images/UGbuilding.png';
import POSSA from '../images/Possalogo.png';


const Login = () => {
  return (
    <div className="login-container">
      <div className="image-section">
      <img
      src={universityImage}
      alt="University of Ghana"
      className="background-image"
    />
      </div>
      <div className="formm-section">
        <div className="logo-section">
          <img
            src={POSSA} 
            alt="UG Political Science Logo"
            className="plogo"
          />
        </div>
        <h2 className='welcome'>Welcome</h2>
        <p className='para'>Enter your credentials to continue.</p>
        <form>
          <label htmlFor="studentId">Student ID or mail</label>
          <input
            type="text"
            id="studentId"
            placeholder="Enter your Student ID or mail"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-pin">Forgot PIN?</a>
          </div>

          <button type="submit" className="login-button"> <a href="/Registration">Login </a></button>
        </form>
        <p className="register-link">
  Don't have an account? <a href="/signup">Sign-up</a>
</p>
        

      </div>
    </div>
  );
};

export default Login;
