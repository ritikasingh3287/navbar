import React from "react";
import "./Navbar.css"; 
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part */}
        <div className="logo">
          <h2>
            <span>R</span>itika
            <span>T</span>echnical
          </h2>
        </div>

        {/* 2nd logo part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* 3rd media social links*/}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/ritika.rajpoot.9659/"
                target="_ritika"
              >
                <FaFacebookSquare className="Facebook" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/ritika8467singh/"
                target="_ritika"
              >
                <FaInstagramSquare className="Instagram" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ritika-singh-87a12b273/"
                target="_ritika"
              >
                <FaLinkedin  className="Linkedin"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      { /* hero section */}
      <section className="hero-section">
      <p>Welcome to </p>
      <h1>Ritika Technical</h1>

      </section>

      
    </>
  );
};

export default Navbar;
