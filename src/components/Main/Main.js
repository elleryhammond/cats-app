import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <main className="main">
      <div>
        <h2 className="main__header">Take me to the...</h2>
        <div className="main__buttons">
          <Link to="/facts">
            <button className="main__button" type="button">
              feline facts
            </button>
          </Link>

          <Link to="/images">
            <button className="main__button" type="button">
              fur-tographs
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;
