import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Souvenir.css';
import Sidebar from '../components/Sidebar';

const Souvenir = () => {
  const [date, setDate] = useState(new Date()); // Today's date as default

  const bookings = [
    { name: 'Abigail Forson', id: '11002974', date: '01/02/2025', status: 'Collected' },
    { name: 'Janet Mensah', id: '11029740', date: '01/02/2025', status: 'Collected' },
    { name: 'Vincent Aidoo', id: '11297400', date: '01/02/2025', status: 'Collected' },
    { name: 'Prince Nyarko', id: '11974002', date: '01/02/2025', status: 'Pending' },
    { name: 'Isaac Yeboah', id: '11740229', date: '01/02/2025', status: 'Pending' },
    { name: 'Steven Essien', id: '11400297', date: '01/02/2025', status: 'Pending' },
  ];

  return (
    <div className="booking-management">
      <Sidebar />
      <div className="content">
        <header>
          <div className="title-section">
            <h2>Souvenir Booking Management</h2>
            <p>Souvenir collection controls</p>
          </div>
          <div className="top-bar">
            <div className="date-picker">
              <input type="text" value={date.toLocaleDateString()} readOnly />
            </div>
            <div className="top-icons">
              <div className="icon search-icon">🔍</div>
              <div className="icon notification-icon">🔔</div>
              <img
                src="/path/to/profile-pic.jpg"
                alt="Profile"
                className="profile-pic"
              />
            </div>
          </div>
        </header>
        <div className="main-section">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Collection Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
  {bookings.map((booking, index) => (
    <tr key={index}>
      <td>{booking.name}</td>
      <td>{booking.id}</td>
      <td>{booking.date}</td>
      <td>
        <span className={`badge ${booking.status.toLowerCase()}`}>
          {booking.status}
        </span>
      </td>
      <td>
        <input
          type="checkbox"
          checked={booking.status === 'Collected'}
          readOnly
        />
      </td>
    </tr>
  ))}
</tbody>
          </table>
          <div className="calendar">
            <Calendar
              className="custom-calendar"
              onChange={setDate}
              value={date}
              defaultValue={new Date()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Souvenir;
