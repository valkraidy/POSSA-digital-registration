import React, { useState } from 'react';
import { Search, Bell, Menu, X, ChevronDown } from 'lucide-react';
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

const RegistrationApproval = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [date, setDate] = useState('15/01/2025');
  const [exportDropdownOpen, setExportDropdownOpen] = useState(false);

  const registrations = [
    { id: '11002974', name: 'Abigail Forson', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' },
    { id: '11029740', name: 'Janet Mensah', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' },
    { id: '11297400', name: 'Vincent Aidoo', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' },
    { id: '11974002', name: 'Prince Nyarko', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' },
    { id: '11740229', name: 'Isaac Yeboah', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' },
    { id: '11400297', name: 'Steven Essien', email: 'xxxx@st.ug.edu.gh', proof: 'Uploaded', status: 'Pending' }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] relative max-w-full overflow-x-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 lg:ml-64 w-full">
        <MobileHeader onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
        
        <div className="p-4 lg:p-8 max-w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Registration Approval</h1>
              <p className="text-gray-500 mt-1">Registered students queue</p>
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

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
              <div className="relative w-full sm:w-auto">
                <button 
                onClick={() => setExportDropdownOpen(!exportDropdownOpen)}
                className="bg-[#1A4CAB] hover:bg-blue-800 text-white px-6 py-2 rounded-2xl transition-colors duration-200 flex items-center justify-center w-full sm:w-auto space-x-2"
                >
                  <span>Export as CSV</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {exportDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                    <ul className="py-1">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Export as PDF</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Export as Excel</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Print</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-white border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student Name</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student ID</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Proof of Registration</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {registrations.map((registration, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">{registration.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{registration.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{registration.email}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{registration.proof}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-[#FFF4E5] text-orange-600">
                          {registration.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="px-6 py-2 bg-[#4991FF] text-white rounded-2xl text-sm hover:bg-blue-600 transition-colors">
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationApproval;