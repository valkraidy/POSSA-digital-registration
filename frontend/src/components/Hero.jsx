import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />

      <div className="content">
        <p first='second'></p>
        <p className="second">POSSA</p>
        {/* <div>


        </div> */}
        <p className='first'>
          Knowledge, Integrity, and <br /> National Development.
        </p>
        <p className="third">
          Join the Political Science Students' Association in shaping tomorrow's
          leaders <br /> through knowledge, collaboration, and integrity.
        </p>
      </div>

    </div>
  );
};

export default Hero;
