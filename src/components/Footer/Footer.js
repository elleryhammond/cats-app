import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      Site made pawsible by&nbsp;
      <a
        href="https://thecatapi.com/"
        rel="noreferrer"
        target="_blank"
        className="footer__link"
      >
        TheCatAPI
      </a>
      &nbsp;and&nbsp;
      <a
        href="https://catfact.ninja/"
        rel="noreferrer"
        target="_blank"
        className="footer__link"
      >
        CatFactsApi
      </a>
    </footer>
  );
};

export default Footer;
