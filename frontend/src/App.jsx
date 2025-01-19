import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import LoginPage from './components/Login'; 
import SignUp from './components/SignUp'; 
import Registration from './components/Registration';
// import Testimonials from './components/Testimonials';
// import Demo from './components/Demo';
// import Footer from './components/Footer';
//import Welcome from './components/Welcome'; 

function App() {
  return (
    <Router>
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/souvenir" element={<Souvenir />} />
        <Route path="/Registration" element={<Registration />} />

      </Routes>
    </Router>
  );
}

export default App;