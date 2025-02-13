
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
<<<<<<< HEAD


=======
>>>>>>> cf2780a (just pulled)
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