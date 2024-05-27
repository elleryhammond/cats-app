import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="navigation__buttons">
        <Link to="/facts">
          <button className="navigation__button" type="button">
            Facts
          </button>
        </Link>

        <Link to="/images">
          <button className="navigation__button" type="button">
            Photos
          </button>
        </Link>

        <Link to="/about">
          <button className="navigation__button" type="button">
            About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
