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
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Testimonials from './components/Testimonials'
 import Welcome from './components/Welcome'
//  import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for the homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              {/* Add other components here for the homepage */}
              {/* <Testimonials /> */}
              {/* <Demo /> */}
              {/* <Footer /> */}
            </>
          }
        />
        {/* Route for the login page */}
        <Route path="/register" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
    
    </div>

  );
}

export default App;
