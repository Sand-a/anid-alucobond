import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "../../App.css";
import "./Navbar.css";

import { coloursSurfacesData } from "../Data/coloursSurfacesData";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

const Navbar = ({ navLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);

  const toggleMobileMenuAndShowDropdown = () => {
    setMenuClicked(!menuClicked);
    setDropdown(true);
  };
  const toggleMobileMenu = () => setMenuClicked(!menuClicked);
  const menuOpen = () => {
    setMenuClicked(true);
    document.body.style.overflow = "hidden";
  };
  const menuClose = () => {
    setMenuClicked(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="header">
        <nav className="navbar container">
          {menuClicked ? (
            <div className="menu-icon" onClick={menuClose}>
              <ion-icon name="close-outline"></ion-icon>
            </div>
          ) : (
            <div className="menu-icon" onClick={menuOpen}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
          )}

          <ul className={menuClicked ? "nav-list active" : "nav-list"}>
            {navLinks.map((item) => {
              if (item.title === "colours & surfaces") {
                return (
                  <li
                    key={item._id}
                    className="nav-items"
                    onMouseEnter={!menuClicked ? showDropdown : undefined}
                    onMouseLeave={!menuClicked ? closeDropdown : undefined}
                  >
                    <NavLink
                      exact="true"
                      activeclassname="active"
                      className={item.cName}
                      to={item.path}
                      onClick={toggleMobileMenuAndShowDropdown}
                    >
                      {item.title}
                    </NavLink>
                    {dropdown && <DropdownMenu data={coloursSurfacesData} />}
                  </li>
                );
              }
              return (
                <li key={item._id} className="nav-items">
                  <NavLink
                    exact="true"
                    activeclassname="active"
                    className={item.cName}
                    to={item.path}
                    onClick={toggleMobileMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <Link className="navbar-logos" to="/">
            <img
              className="logo-name"
              id="logo"
              src="./images/logo/logo-white2.svg"
              alt="logo"
            />
            <img
              className="logo-icon"
              id="logo"
              src="./images/logo/logo-icon-white.svg"
              alt="logo"
            />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
