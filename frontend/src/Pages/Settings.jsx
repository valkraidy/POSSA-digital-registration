import React from "react";
import Sidebar from "../components/Sidebar";
import '../styles/Settings.css';


const Settings = () => {
  return (
    <div className="settings-container">
      <Sidebar/>
      <div className="main-content">
        <header>
          <h2>Settings</h2>
          <p>Manage account and systems</p>
        </header>
        <div className="account-info">
          <h3>Account Information and Security</h3>
          <div className="form-group">
            <label>Email address</label>
            <p>a***@gmail.com</p>
          </div>
          <div className="form-group">
            <label>Username</label>
            <p>
              Eric@admin <a href="#">Change username</a>
            </p>
          </div>
          <div className="form-group">
            <label>Password</label>
            <p>
              ********** <a href="#">Reset password</a>
            </p>
          </div>
          <button className="update-button">Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
