import React from "react";
import { Link } from "react-router-dom";

import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Pashu Bazar</h1>
          <p>Buy your heart out</p>
          <div className="btnContainer">
            <Link
              to="/buy"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="btn-default">Buy</button>
            </Link>
            <Link
              to="/sell"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <button className="btn-default">Sell</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
