import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import myImage from "../../asset/R_logo.svg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        {/* Logo and Name */}
        <div className="navbar-logo">
          <img src={myImage} alt="Raj Kumar Logo" className="logo" />
          <span className="logo-text">Raj Kumar</span>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="smooth-scroll">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="mobile-icon" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="mobile-menu">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setNavOpen(false)}
                className="smooth-scroll"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
