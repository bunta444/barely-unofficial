import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToTopAndNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="about" className="container mb-5 mt-5 text-center">
      <div className="my-3">
        <Link
          to="/watch-us"
          className="display-3 link-dark link-underline-opacity-0 link-opacity-50-hover"
          onClick={scrollToTopAndNavigate}
        >
          Wätch Üs
        </Link>
      </div>
      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/VPsQWeS855Y?si=BxWnasz5We-The9v"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
