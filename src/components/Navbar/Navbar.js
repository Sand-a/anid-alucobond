import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../Data/menuData";
import logo1 from "../../logo-icon-white.svg";
import logo2 from "../../logo-white.svg";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import "../../App.css";
import "./Navbar.css";
import { coloursSurfacesData } from "../Data/coloursSurfacesData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);

  const openMobieMenu = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="menu-icon" onClick={openMobieMenu}>
            <ion-icon name={open ? "close-outline" : "menu-outline"}></ion-icon>
          </div>

          <ul className={open ? "nav-menu active" : "nav-menu"}>
            {menuData.map((item) => {
              if (item.title === "colours & surfaces") {
                return (
                  <li
                    key={item._id}
                    className="nav-items"
                    onMouseEnter={!open && showDropdown}
                    onMouseLeave={!open && closeDropdown}
                  >
                    <NavLink
                      exact="true"
                      activeclassname="active"
                      className={item.cName}
                      to={item.path}
                      onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <Link className="navbar-logos" to="/">
            <img className="logo-name" id="logo" src={logo2} alt="logo" />
            <img className="logo-icon" id="logo" src={logo1} alt="logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
