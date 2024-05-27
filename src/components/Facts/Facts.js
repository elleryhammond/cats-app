import React from "react";
import "./Facts.css";

const Facts = ({ fact }) => {
  return (
    <div className="facts">
      <ul className="facts__container">
        <li className="facts__list">{fact}</li>
      </ul>
    </div>
  );
};

export default Facts;
