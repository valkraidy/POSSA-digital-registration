


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Testimonials from './components/Testimonials'
 import Welcome from './components/Welcome'
//  import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
       {/* <Testimonials /> */}
      <Welcome />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

