import React from "react";
import { NavLink } from "react-router-dom";
import "./DropdownMenu.css";

function DropdownMenu({ data }) {
  return (
    <>
      <ul className="dropdown--menu">
        {data.map((item, i) => {
          return (
            <li key={i}>
              <NavLink
                exact="true"
                activeclassname="active"
                className={item.cName}
                to={item.path}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DropdownMenu;
