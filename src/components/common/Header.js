import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
    </nav>
  );
};

export default Header;
