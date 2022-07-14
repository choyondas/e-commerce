import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light  py-3">
        <div className="container">
          <NavLink
            className="navlogo"
            style={{ color: "black", transition: ".5s ease" }}
            to="/"
          >
            <h2>DasShop</h2>
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-icon">
                  <NavLink 
                    style={{ color: "black", textDecoration: "none" }}
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-magnifying-glass"></i>
              </li>
              <li className="nav-item">
                <i class="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
