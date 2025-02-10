import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../styles/Login.css';
import universityImage from '../images/UGbuilding.png';
import POSSA from '../images/Possalogo.png';
import { useUserStore } from '../Store/UserStore';
import Toast from '../components/Toast';

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const { Login, message, toast, error, isLoading ,user,setToast} = useUserStore();
  const [loginDetails, setLoginDetails] = useState({
    studentId: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh
    await Login(
      loginDetails.studentId,
      loginDetails.password
    );
    console.log(message)
    console.log(error)
    console.log(toast)
    console.log(user)

  };

  return (
    <div className="login-container">
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "" })} />}

      
      <div className="image-section">
        <img
          src={universityImage}
          alt="University of Ghana"
          className="background-image"
        />
      </div>
      <div className="formm-section">
        
        <div className="logo-section">
          <img src={POSSA} alt="UG Political Science Logo" className="plogo" />
        </div>
        <h2 className="welcome">Welcome</h2>
        <p className="para">Enter your credentials to continue.</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="studentId">Student ID or mail</label>
          <input
            type="text"
            id="studentId"
            placeholder="Enter your Student ID or mail"
            value={loginDetails.studentId}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, studentId: e.target.value })
            }
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
            required
          />

          <div className="options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-pin">
              Forgot PIN?
            </a>
          </div>

          <button type="submit" className="login-button">
            {isLoading ? "Logging in..." : "Login"}
            </button>
        </form>

        <p className="register-link">
          Don't have an account? <a href="/signup">Sign-up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
