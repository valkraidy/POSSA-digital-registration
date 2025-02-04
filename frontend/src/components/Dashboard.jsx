import { useState } from "react"
import {
  Bell,
  Menu,
  X,
  Search,
  LogOut,
  Settings,
  Users,
  Wallet,
  Hourglass,
  Gift,
  MoreHorizontal,
  LineChartIcon,
  PieChartIcon,
  BarChartIcon,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card } from "../ui/card";

import logo from "../images/Uglogo.png"

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
)

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("full")

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  const paymentTrendsData = [
    { name: "1K", value: 2200 },
    { name: "2K", value: 2400 },
    { name: "3K", value: 2800 },
    { name: "4K", value: 3000 },
    { name: "5K", value: 3200 },
  ]

  const registrationData = [
    { name: "Approved", value: 54, color: "#4318FF" },
    { name: "Rejected", value: 30, color: "#FF6B6B" },
    { name: "Pending", value: 16, color: "#10B981" },
  ]

  const collectionData = [
    { day: "M", value: 40 },
    { day: "T", value: 35 },
    { day: "W", value: 90 },
    { day: "T", value: 30 },
    { day: "F", value: 60 },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Sidebar with overlay for mobile */}
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
          <div className="flex items-center text-primary p-3 bg-blue-50 rounded-lg">
            <Users className="w-5 h-5 mr-3" />
            <span className="font-medium">Dashboard</span>
          </div>

          <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Wallet className="w-5 h-5 mr-3" />
            <span className="font-medium">Payments Monitoring</span>
          </div>

          <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Hourglass className="w-5 h-5 mr-3" />
            <span className="font-medium">Registration Approval</span>
          </div>

          <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Gift className="w-5 h-5 mr-3" />
            <span className="font-medium">Souvenirs Booking</span>
          </div>
        </nav>

        <div className="border-t pt-4 space-y-1">
          <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
            <Settings className="w-5 h-5 mr-3" />
            <span className="font-medium">Settings</span>
          </div>
          <div className="flex items-center text-gray-600 p-3 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer">
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <MobileHeader onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
        <div className="p-4 lg:p-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-500 mt-1">Welcome Back</p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
              <div className="oval-button-group w-full sm:w-auto">
                <button
                  className={`oval-button ${activeTab === "full" ? "oval-button-active" : "oval-button-inactive"}`}
                  onClick={() => setActiveTab("full")}
                >
                  Full Statistics
                </button>
                <button
                  className={`oval-button ${activeTab === "recent" ? "oval-button-active" : "oval-button-inactive"}`}
                  onClick={() => setActiveTab("recent")}
                >
                  Recent Summary
                </button>
              </div>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <div className="border border-gray-200 rounded-lg p-2">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <div className="border border-gray-200 rounded-lg p-2">
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Card className="stats-card">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-600">Total Registration</span>
                </div>
                <span className="text-3xl font-bold text-gray-800">234</span>
                <span className="text-sm text-gray-500 mt-1">All registered students</span>
              </div>
            </Card>

            <Card className="stats-card">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <Wallet className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-600">Total Payments Received</span>
                </div>
                <span className="text-3xl font-bold text-gray-800">₵ 6,000</span>
                <span className="text-sm text-gray-500 mt-1">Complete cash received</span>
              </div>
            </Card>

            <Card className="stats-card">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <Hourglass className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-600">Pending Approval</span>
                </div>
                <span className="text-3xl font-bold text-gray-800">44</span>
                <span className="text-sm text-gray-500 mt-1">Awaiting administrator</span>
              </div>
            </Card>

            <Card className="stats-card">
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <Gift className="w-5 h-5 text-primary mr-2" />
                  <span className="text-gray-600">Souvenir Collection</span>
                </div>
                <span className="text-3xl font-bold text-gray-800">100</span>
                <span className="text-sm text-gray-500 mt-1">Scheduled souvenir collection</span>
              </div>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="chart-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Payment Trends</h3>
                <LineChartIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={paymentTrendsData}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#4318FF" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="chart-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Registration Status</h3>
                <PieChartIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center h-64">
                <PieChart width={200} height={200}>
                  <Pie
                    data={registrationData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {registrationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
                  {registrationData.map((entry, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }} />
                      <span className="text-sm text-gray-600">
                        {entry.name}: {entry.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="chart-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800">Collection Schedule</h3>
                <BarChartIcon className="w-5 h-5 text-gray-400" />
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={collectionData}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4318FF" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Recent Payments */}
          <Card className="p-6 mb-6">
            <h3 className="font-bold text-gray-800 mb-4">Recent Payments</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {[
                { name: "Justine Addo", date: "Jan 12, 2025", amount: "₵ 6,000", status: "Successful" },
                { name: "Kofi Asante", date: "Jan 12, 2025", amount: "₵ 6,000", status: "Pending" },
                { name: "Ama Serwaa", date: "Jan 11, 2025", amount: "₵ 5,500", status: "Successful" },
                { name: "Kwame Owusu", date: "Jan 10, 2025", amount: "₵ 5,800", status: "Successful" },
              ].map((payment, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center mb-2 sm:mb-0">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">{payment.name}</p>
                      <p className="text-sm text-gray-500">{payment.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                    <span className="font-semibold text-gray-800">{payment.amount}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        payment.status === "Successful"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {payment.status}
                    </span>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Transactions Table */}
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
              <h3 className="font-bold text-gray-800">Transaction</h3>
              <div className="relative w-full lg:w-auto">
                <Input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 bg-gray-50 w-full lg:w-auto focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-4 font-medium">Student ID</th>
                    <th className="pb-4 font-medium">Name</th>
                    <th className="pb-4 font-medium">Amount Paid</th>
                    <th className="pb-4 font-medium">Payment Method</th>
                    <th className="pb-4 font-medium">Date</th>
                    <th className="pb-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-sm hover:bg-gray-50 transition-colors duration-200">
                    <td className="py-3 text-gray-800">11002974</td>
                    <td className="py-3 text-gray-800">Abigail Forson</td>
                    <td className="py-3 text-gray-800">500</td>
                    <td className="py-3 text-gray-800">Mobile Money</td>
                    <td className="py-3 text-gray-800">Jan 3, 2025</td>
                    <td className="py-3">
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Successful</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

