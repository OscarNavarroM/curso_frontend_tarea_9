import React from "react";
import "./header.scss";
function Header() {
  return (
    <header className="layout__header">
      <img className="header__logo" src="images/logo.png" alt="logo" />
      <nav className="header__navbar">
        <ul className="navbar__items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
