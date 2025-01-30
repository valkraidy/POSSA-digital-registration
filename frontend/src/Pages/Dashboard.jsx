import React from "react";
import Sidebar from "../components/Sidebar";
import { Line, Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="main-content">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Welcome Back</h1>
            <p className="subtitle">Posthboard</p>
          </div>
          <div className="header-right">
            <div className="user-info">
              <span>Justine Addo</span>
              <div className="user-icon">JD</div>
            </div>
          </div>
        </header>

        {/* Stats Section */}
        <section className="stats">
          {[ 
            {
              title: "All registered students",
              value: "23.4K",
              desc: "Total registration"
            },
            {
              title: "Total Payments Received",
              value: "₵6,000",
              desc: "Completed cash received"
            },
            {
              title: "Pending Approval",
              value: "8",
              desc: "Awaiting administrator"
            },
            {
              title: "Souvenir Collection",
              value: "100",
              desc: "Scheduled collection"
            }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
              <span>{stat.desc}</span>
            </div>
          ))}
        </section>

        {/* Charts Section */}
        <section className="charts">
          <div className="chart">
            <h3>Payment Trends</h3>
            <Line
              data={{
                labels: ['F', 'T', 'W', 'T', 'M'],
                datasets: [{
                  label: 'Payments',
                  data: [5000, 4000, 3000, 2000, 1000],
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  tension: 0.4
                }]
              }}
              options={{
                scales: {
                  y: {
                    ticks: {
                      callback: (value) => `${value/1000}K`
                    }
                  }
                }
              }}
            />
          </div>
          <div className="chart pie-chart">
  <h3>Registration Status</h3>
  <Pie
    data={{
      labels: ['Approved', 'Rejected', 'Pending'],
      datasets: [{
        data: [18, 24, 31],
        backgroundColor: ['#10b981', '#ef4444', '#facc15']
      }]
    }}
  />
</div>

          <div className="chart">
            <h3>Collection Schedule</h3>
            <Bar
              data={{
                labels: ['M', 'T', 'W', 'T', 'F'],
                datasets: [{
                  label: 'Collections',
                  data: [20, 40, 60, 80, 100],
                  backgroundColor: "#3b82f6"
                }]
              }}
            />
          </div>
        </section>

        {/* Recent Payments */}
        <section className="recent-payments">
          <div className="section-header">
            <h3>Recent Payments</h3>
            <button className="view-all">View All</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Transaction</th>
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
                <td>#12345</td>
                <td>10/09/27</td>
                <td>Ahlordi Forson</td>
                <td>₵500</td>
                <td>Mobile Money</td>
                <td>Jan 3, 2025</td>
                <td><span className="status successful">Successful</span></td>
              </tr>
              <tr>
                <td>#12346</td>
                <td>10/09/28</td>
                <td>Kofi Asante</td>
                <td>₵600</td>
                <td>Credit Card</td>
                <td>Jan 4, 2025</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
