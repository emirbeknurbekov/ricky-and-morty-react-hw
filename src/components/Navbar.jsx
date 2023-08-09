import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  );
};

export default Navbar;
