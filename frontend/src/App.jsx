import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
=======
// <<<<<<< HEAD

import Dashboard from "./Pages/Dashboard";
// =======
// import Dashboard from "./components/Dashboard";
// >>>>>>> 4fb8f756abafd59b6a69e63d5a9896200bcb1909
>>>>>>> 1b6451e7422269469aff414c22411d4ca0b73112
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Registration from "./Pages/Registration";
import Settings from "./Pages/Settings";
import Souvenir from "./Pages/Souvenir";
import Homepage from "./components/Homepage";
import Payments from "./Pages/Payments";
import Proof from "./Pages/Proof";
import RegistrationApproval from "./Pages/RegistrationApproval";

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
        <Route path="/registration" element={<Registration />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/proof" element={<Proof />} />

        <Route path="/registration-approval" element={<RegistrationApproval />} />
      </Routes>
    </Router>
  );
}

export default App;