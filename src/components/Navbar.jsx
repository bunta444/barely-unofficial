import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../fonts/font.css";

const Navbar = ({ cartItems }) => {
  const navigate = useNavigate();
  const navbarRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    closeNavbar();
  };

  const closeNavbar = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.remove("show");
    }
  };

  useEffect(() => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener("click", closeNavbar);
    });

    return () => {
      dropdownToggles.forEach((toggle) => {
        toggle.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand"
            style={{ cursor: "pointer", fontFamily: "Vortax" }}
          >
            BARELY UNOFFICIAL
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            ref={navbarRef}
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button
                  onClick={() => handleNavigation("/products")}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => handleNavigation("/cart")}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Cart ({cartItems.length})
                </button>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => handleNavigation("/watch-us")}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Watch Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
