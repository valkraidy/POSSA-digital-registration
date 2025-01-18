import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LoginPage from './components/Login'; 
import SignUp from './components/SignUp'; 
// import Testimonials from './components/Testimonials';
// import Demo from './components/Demo';
// import Footer from './components/Footer';
//import Welcome from './components/Welcome'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              {/* <Testimonials /> */}
              {/* <Demo /> */}
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} /> {/* Corrected path */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;