import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Registration from "./Pages/Registration";
import Settings from "./Pages/Settings";
import Souvenir from "./Pages/Souvenir";
import Homepage from "./components/Homepage";
import Payments from "./Pages/Payments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/souvenir" element={<Souvenir />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
}

export default App;
