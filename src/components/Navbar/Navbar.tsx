import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/c3c18620-a179-43f4-8691-9e83cc190826_200x200.png";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <NavLink to="/">
        <img src={Logo} alt="home" className="nav__logo" />
      </NavLink>
      <ul className="nav__right">
        <NavLink
          to="/portfolio"
          className="nav__right-item"
          activeStyle={{ color: "#1c77c3" }}
        >
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink
          to="/resume"
          className="nav__right-item"
          activeStyle={{ color: "#1c77c3" }}
        >
          <li>RESUME</li>
        </NavLink>
        <NavLink
          to="/about"
          className="nav__right-item"
          activeStyle={{ color: "#1c77c3" }}
        >
          <li>ABOUT</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
