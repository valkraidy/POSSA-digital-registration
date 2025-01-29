import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        <section className="stats">
          <div className="stat-card">
            <h3>Total Registration</h3>
            <p>234</p>
            <span>All registered students</span>
          </div>
          <div className="stat-card">
            <h3>Total Payments Received</h3>
            <p>₵ 6,000</p>
            <span>Complete cash received</span>
          </div>
          <div className="stat-card">
            <h3>Pending Approval</h3>
            <p>44</p>
            <span>Awaiting administrator</span>
          </div>
          <div className="stat-card">
            <h3>Souvenir Collection</h3>
            <p>100</p>
            <span>Scheduled souvenir collection</span>
          </div>
        </section>
        <section className="charts">
          <div className="chart">
            <h3>Payment Trends</h3>
            <div className="chart-placeholder">Chart Placeholder</div>
          </div>
          <div className="chart">
            <h3>Registration Status</h3>
            <div className="chart-placeholder">Pie Chart Placeholder</div>
          </div>
          <div className="chart">
            <h3>Collection Schedule</h3>
            <div className="chart-placeholder">Bar Chart Placeholder</div>
          </div>
        </section>
        <section className="recent-payments">
          <h3>Recent Payments</h3>
          <div className="payment">
            <span>Justine Addo</span>
            <span>₵ 6,000</span>
            <span>Successful</span>
            <span>Jan 12, 2025</span>
          </div>
          <div className="payment">
            <span>Kofi Asante</span>
            <span>₵ 6,000</span>
            <span>Pending</span>
            <span>Jan 12, 2025</span>
          </div>
        </section>
        <section className="transactions">
          <h3>Transaction</h3>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Amount Paid</th>
                <th>Payment Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11002974</td>
                <td>Abigail Forson</td>
                <td>₵ 500</td>
                <td>Mobile Money</td>
                <td>Jan 3, 2025</td>
                <td>Successful</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
