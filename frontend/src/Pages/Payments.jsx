import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../styles/Payments.css';
import Sidebar from '../components/Sidebar';

const Payments = () => {

    const [date, setDate] = useState(new Date()); // Today's date as default
    
      const bookings = [
        { id:'11002974',name:'Abigail Forson',amountpaid:'500',paymentmethod:'Mobile Money',date:'Jan 3,2025',status:'Successful' },
        {  id: '11029740',name: 'Janet Mensah', amountpaid:'500',paymentmethod:'Cash', date: 'Jan 3,2025', status: 'Successful' },
        {  id: '11297400',name: 'Vincent Aidoo',amountpaid:'500',paymentmethod:'Cash', date: 'Jan 3,2025', status: 'Successful' },
        {  id: '11974002',name: 'Prince Nyarko',amountpaid:'500',paymentmethod:'Mobile Money', date: 'Jan 4,2025', status: 'Failed' },
        {  id: '11740229',name: 'Isaac Yeboah',amountpaid:'500',paymentmethod:'Mobile Money', date: 'Jan 6,2025', status: 'Pending' },
        {  id: '11400297',name: 'Steven Essien',amountpaid:'500',paymentmethod:'Cash', date: 'Jan 8,2025', status: 'Successful' },
      ];
    return(
        <div className="payments-monitoring">
      <Sidebar />
      <div className="content">
        <header>
          <div className="title-section">
            <h2>Payments Monitoring</h2>
            <p>Complete data of all payment</p>
          </div>
          <div className="top-bar">
            {/* date */}
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
        <div className="date-picker1">
              <input type="text" value={date.toLocaleDateString()} readOnly />
        </div>
        <div className='export-button'>
            
        </div>
        <div className="main-section">
        
          <table>
            <thead>
              <tr>
                <th>Student  ID</th>
                <th> Name </th>
                <th>Amount Paid</th>
                <th>Payment Method</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
  {bookings.map((booking, index) => (
    <tr key={index}>
      <td>{booking.id}</td>
      <td>{booking.name}</td>
      <td>{booking.amountpaid}</td>
      <td>{booking.paymentmethod}</td>
      <td>{booking.date}</td>
      
      <td>
        <span className={`badge ${booking.status.toLowerCase()}`}>
          {booking.status}
        </span>
      </td>
      {/* <td>
        <input
          type="checkbox"
          checked={booking.status === 'Collected'}
          readOnly
        />
      </td> */}
    </tr>
  ))}
</tbody>
          </table>
          {/* <div className="calendar">
            <Calendar
              className="custom-calendar"
              onChange={setDate}
              value={date}
              defaultValue={new Date()}
            />
          </div> */}
        </div>
      </div>
    </div>
  
        

    )
}

export default Payments