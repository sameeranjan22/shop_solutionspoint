import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../SP Logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="sp__navbar">
      <div className="sp__navbar-links">
        <img src={logo} className="logo" />
        <div className="sp__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p>
            <div className="dropdown">
              <button type="button" className="dropbtn">Services</button>
              <div className="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
              </div>
            </div>
          </p>
          <p><a href="#contact">Contact Us</a></p>
        </div>
      </div>
      <div className="sp__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sp__navbar-menu_container scale-up-center">
          <div className="sp__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#possibility">Services</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
