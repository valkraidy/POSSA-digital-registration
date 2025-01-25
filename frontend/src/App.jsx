import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import LoginPage from './Pages/Login'; 
import SignUp from './Pages/SignUp'; 
import Registration from './Pages/Registration';
<<<<<<< HEAD
import Settings from './Pages/Settings';
import Souvenir from './Pages/Souvenir';
import Dashboard from './Pages/Dashboard';
// import Testimonials from './components/Testimonials';
// import Demo from './components/Demo';
// import Footer from './components/Footer';
//import Welcome from './components/Welcome'; 
=======
import Settings from './components/Settings'
import Souvenir from './components/Souvenir'
import Homepage from './components/Homepage' 
>>>>>>> 57f04b7ff7881edeefbc47c900b647bffbe44490

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/" element={<Homepage/>}
        />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} /> {/* Corrected path */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/souvenir" element={<Souvenir />} />
        <Route path="/Registration" element={<Registration />} />
        

      </Routes>
    </Router>
  )
}

export default App;