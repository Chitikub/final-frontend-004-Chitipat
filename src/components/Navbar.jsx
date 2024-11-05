import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h2 className="nav-name">JewSjops</h2>
      </div>
      <div className="nav-menu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/popular" className="nav-link">
              popular
            </Link>{" "}
            {/* เพิ่มลิงก์ไปที่ Shop */}
          </li>
          <li className="nav_list">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav_list">
            <Link to="/Review" className="nav-link">
              Review
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
