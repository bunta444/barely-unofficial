import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://www.youtube.com/@barelyunofficial3545"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube style={{ color: "white" }} size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/barely.unofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram style={{ color: "white" }} size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter style={{ color: "white" }} size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>&copy; 2023 Your Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
