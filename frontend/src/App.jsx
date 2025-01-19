import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import LoginPage from './components/Login'; 
import SignUp from './components/SignUp'; 
<<<<<<< HEAD
import Registration from './components/Registration'; 
=======
import Settings from './components/Settings';
import Souvenir from './components/Souvenir';
>>>>>>> 9279d6f528b39174ddc2714cbe351e2f7ac7a106
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
<<<<<<< HEAD
        <Route path="/Registration" element={<Registration />} />
=======
        <Route path="/settings" element={<Settings />} />
        <Route path="/souvenir" element={<Souvenir />} />

>>>>>>> 9279d6f528b39174ddc2714cbe351e2f7ac7a106
      </Routes>
    </Router>
  );
}

export default App;