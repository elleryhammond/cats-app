import React from "react";
import PropTypes from "prop-types";
import "./About.css";

const About = ({ embedId }) => {
  return (
    <div className="about">
      <div>
        <div className="about__header">
          This site was purrrfected by an aspiring software developer who loves
          cats. Consider donating right&nbsp;
          <a
            href="https://fearlesskittyrescue.org/donate/?gad_source=1&gclid=Cj0KCQjwjLGyBhCYARIsAPqTz1_TRim50QKLQuvuSTVLXmjkNPwBQk6Vg8c-qct85zFfGePAdZsZkXQaAshGEALw_wcB"
            rel="noreferrer"
            target="_blank"
            className="about__link"
          >
            meow
          </a>
          !
        </div>
        <iframe
          className="about__iframe"
          title="about__iframe"
          src={`https://www.youtube.com/embed/${embedId}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

About.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default About;
