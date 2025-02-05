import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Search, Bell, Menu, X } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { Button } from "../ui/button";

const MobileHeader = ({ onMenuClick, sidebarOpen }) => (
  <div className="lg:hidden flex justify-between items-center p-4 bg-white">
    <Button variant="ghost" size="icon" onClick={onMenuClick}>
      {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
    <div className="flex items-center space-x-2">
      <Bell className="h-5 w-5 text-gray-500" />
      <div className="w-8 h-8 bg-gray-200 rounded-full" />
    </div>
  </div>
);

const Souvenir = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date('2025-01-15'));
  const [bookings, setBookings] = useState([
    { name: 'Abigail Forson', studentId: '11002974', collectionDate: '2025-02-01', status: 'Collected', checked: true },
    { name: 'Janet Mensah', studentId: '11029740', collectionDate: '2025-02-01', status: 'Collected', checked: true },
    { name: 'Vincent Aidoo', studentId: '11297400', collectionDate: '2025-02-01', status: 'Collected', checked: true },
    { name: 'Prince Nyarko', studentId: '11974002', collectionDate: '2025-02-01', status: 'Pending', checked: false },
    { name: 'Isaac Yeboah', studentId: '11740029', collectionDate: '2025-02-01', status: 'Pending', checked: false },
    { name: 'Steven Essien', studentId: '11400297', collectionDate: '2025-02-01', status: 'Pending', checked: false }
  ]);

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'collected': return 'bg-[#E8FFF3] text-green-600';
      case 'pending': return 'bg-[#FFF4E5] text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleCheckboxToggle = (index) => {
    const updatedBookings = [...bookings];
    if (updatedBookings[index].status === 'Pending') {
      updatedBookings[index].checked = !updatedBookings[index].checked;
      setBookings(updatedBookings);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const calendarStyles = `
    .react-calendar {
      border: none;
      font-family: inherit;
      width: 100%;
      background: white;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
      padding: 1rem;
    }
    .react-calendar__navigation {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .react-calendar__navigation button {
      color: #1a1a1a;
      font-size: 16px;
      font-weight: 600;
      min-width: 44px;
      background: none;
      padding: 8px;
      border-radius: 8px;
    }
    .react-calendar__navigation button:disabled {
      background-color: #f3f4f6;
    }
    .react-calendar__navigation button:enabled:hover,
    .react-calendar__navigation button:enabled:focus {
      background-color: #f8f9fa;
    }
    .react-calendar__month-view__weekdays {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 12px;
      color: #6b7280;
    }
    .react-calendar__month-view__weekdays__weekday {
      padding: 8px;
      text-align: center;
    }
    .react-calendar__month-view__weekdays__weekday abbr {
      text-decoration: none;
    }
    .react-calendar__month-view__days__day {
      font-size: 14px;
      padding: 8px;
      color: #1a1a1a;
    }
    .react-calendar__tile {
      padding: 10px;
      border-radius: 9999px;
      font-size: 14px;
      text-align: center;
    }
    .react-calendar__tile:enabled:hover,
    .react-calendar__tile:enabled:focus {
      background-color: #f3f4f6;
      border-radius: 9999px;
    }
    .react-calendar__tile--active,
    .react-calendar__tile--active:enabled:hover,
    .react-calendar__tile--active:enabled:focus {
      background: #2563eb;
      color: white;
      border-radius: 9999px;
    }
    .react-calendar__tile--now {
      background: #2563eb;
      color: white;
      border-radius: 9999px;
    }
    .react-calendar__month-view__days__day--neighboringMonth {
      color: #9ca3af;
    }
  `;

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] relative max-w-full overflow-x-hidden">
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        toggleSidebar={toggleSidebar} 
      />

      <div className="flex-1 lg:ml-64 w-full">
        <MobileHeader onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
        
        <div className="p-4 lg:p-8 max-w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-800">Souvenir Booking Management</h1>
              <p className="text-gray-500 mt-1">Souvenir collection controls</p>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <div className="border border-gray-200 rounded-lg p-2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <div className="border border-gray-200 rounded-lg p-2">
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <input
                  type="date"
                  value={selectedDate.toISOString().split('T')[0]}
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  className="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-white border-b">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student ID</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Collection Date</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {bookings.map((booking, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{booking.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{booking.studentId}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{formatDate(booking.collectionDate)}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs ${getStatusStyle(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {booking.status === 'Collected' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <input 
                              type="checkbox" 
                              checked={booking.checked}
                              onChange={() => handleCheckboxToggle(index)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                            />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm">
              <style>{calendarStyles}</style>
              <Calendar 
                value={selectedDate}
                onChange={setSelectedDate}
                className="react-calendar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Souvenir;