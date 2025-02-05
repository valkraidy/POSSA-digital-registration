import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Wallet,
  Hourglass,
  Gift,
  Settings,
  LogOut,
  X, 
} from "lucide-react";
import logo from "../images/Uglogo.png";
import { Button } from "../ui/button";

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { 
      path: "/admin", 
      icon: LayoutDashboard, 
      label: "Dashboard" 
    },
    { 
      path: "/payments", 
      icon: Wallet, 
      label: "Payments Monitoring" 
    },
    { 
      path: "/registration-approval", 
      icon: Hourglass, 
      label: "Registration Approval" 
    },
    { 
      path: "/souvenir", 
      icon: Gift, 
      label: "Souvenirs Booking" 
    }
  ];

  const renderNavItem = (item) => {
    const isActive = location.pathname === item.path;
    return (
      <Link to={item.path} key={item.path} className="block">
        <div className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
          isActive 
            ? "text-primary bg-blue-50" 
            : "text-gray-600 hover:bg-gray-100"
        }`}>
          <item.icon className={`w-5 h-5 mr-3 ${isActive ? 'text-[#4318ff]' : 'text-gray-500'}`} />
          <span className="font-medium">{item.label}</span>
        </div>
      </Link>
    );
  };

  return (
    <>
      {/* Sidebar overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity z-30 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`w-64 bg-white py-6 px-4 flex flex-col fixed h-full z-40 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-12 px-2">
          <div className="flex items-center">
            <img src={logo || "/placeholder.svg"} alt="POSSA Logo" className="w-8 h-8 mr-2" />
            <span className="font-bold text-xl">POSSA</span>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <nav className="space-y-1 flex-1">
          {navItems.map(renderNavItem)}
        </nav>

        <div className="border-t pt-4 space-y-1">
          <Link to="/settings" className="block">
            <div className={`flex items-center p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer ${
              location.pathname === '/settings' 
                ? 'text-primary bg-blue-50' 
                : 'text-gray-600'
            }`}>
              <Settings className={`w-5 h-5 mr-3 ${location.pathname === '/settings' ? 'text-[#4318ff]' : 'text-gray-500'}`} />
              <span className="font-medium">Settings</span>
            </div>
          </Link>
          
          <Link to="/" className="block">
            <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
              <LogOut className="w-5 h-5 mr-3 text-[#4318ff]" />
              <span className="font-medium">Logout</span>
            </div>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;