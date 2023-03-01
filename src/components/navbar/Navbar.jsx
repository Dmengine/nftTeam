import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1>LOGO</h1>
        </div>
        
      </div>
      <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#About">About us</a></p>
          <p><a href="#Portfolio">Portfolio</a></p>
          <p><a href="#News">News</a></p>
        </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Contact us</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
          <p><a href="#About">About us</a></p>
          <p><a href="#Portfolio">Portfolio</a></p>
          <p><a href="#News">News</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <button type="button">Contact us</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
