import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import UG from "../images/Possalogo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={UG} alt="POSSA Logo" />
        <h1>POSSA</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">📊</span> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/payments-monitoring"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">💳</span> Payments Monitoring
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registration-approval"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">📝</span> Registration Approval
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/souvenir"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">🎁</span> Souvenir Booking Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">⚙️</span> Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">🔓</span> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
