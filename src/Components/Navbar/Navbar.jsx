import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   const handleCall = () => {
          window.location.href = "tel:+998331511717";
        };

  return (
    <>
      <nav id="desktop-nav">
        <div className="navLogo">
          <Link className="navImage" to={"/"}>ChillPro<span style={{ color: "#2887ff", fontWeight: "bold" }}>Service</span></Link>
        </div>
        <div className={`navLinks ${isOpen ? "open" : ""}`}>
          <div className="navContact">
            <div className="navRight">
              <a href="https://www.instagram.com/chillpro.uz">
                <img src={assets.instagram} alt="" className="socialIcon" />
              </a>
              <a href="https://t.me/chillprouz">
                <img src={assets.telegram} alt="" className="socialIcon" />
              </a>
              
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" className="socialIcon"/>
            </div>
            <hr className="navbarHr"/>
            <div className="navLeft">
              <button onClick={handleCall} className="navButton" style={{ fontWeight: "500" }}>
                +998 33 151 17 17
              </button>
              <button
                className="navButtonBottom"
                style={{ color: "#fff", fontWeight: "500" }}
              >
                24/7
              </button>
            </div>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </nav>

    </>
  );
};

export default Navbar;
