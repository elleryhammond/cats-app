import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
