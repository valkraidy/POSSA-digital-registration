import React, { useState } from 'react';
import { Search, Bell, Menu, X, Eye, EyeOff } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import { Button } from "../ui/button";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingField, setEditingField] = useState(null);
  const [username, setUsername] = useState("Eric@admin");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] relative max-w-full overflow-x-hidden">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex-1 lg:ml-64 w-full">
        <div className="lg:hidden flex justify-between items-center p-4 bg-white">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-gray-500" />
            <div className="w-8 h-8 bg-gray-200 rounded-full" />
          </div>
        </div>
        
        <div className="p-4 lg:p-8 max-w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div className="text-center lg:text-left w-full">
              <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
              <p className="text-gray-500 mt-1">Manage account and systems</p>
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
            <h2 className="text-lg font-semibold text-gray-800 mb-8">Account Information and Security</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <label className="text-sm font-semibold text-gray-700">Email address</label>
                  <span className="text-sm text-gray-900">a***@gmail.com</span>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-left">If you need to change your e-mail address, please contact support.</p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <label className="text-sm font-semibold text-gray-700">Username</label>
                <div className="flex flex-col items-end w-full sm:w-auto">
                  {editingField === "username" ? (
                    <input 
                      type="text" 
                      value={username} 
                      onChange={(e) => setUsername(e.target.value)} 
                      className="border rounded-lg p-2 text-sm w-full sm:w-40 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                    />
                  ) : (
                    <span className="text-sm text-gray-900 mb-1">{username}</span>
                  )}
                  <button className="text-blue-500 text-sm mt-1" onClick={() => setEditingField(editingField === "username" ? null : "username")}>
                    {editingField === "username" ? "Save" : "Change username"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="flex flex-col items-end w-full sm:w-auto relative">
                  {editingField === "password" ? (
                    <div className="relative w-full sm:w-40">
                      <input 
                        type={showPassword ? "text" : "password"} 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="border rounded-lg p-2 text-sm w-full focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        placeholder="New password"
                      />
                      <button 
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500" 
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-900 mb-1">********</span>
                  )}
                  <button className="text-blue-500 text-sm mt-1" onClick={() => setEditingField(editingField === "password" ? null : "password")}>
                    {editingField === "password" ? "Save" : "Reset password"}
                  </button>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button className="bg-[#1A4CAB] text-white px-6 py-2 rounded-lg text-sm">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
