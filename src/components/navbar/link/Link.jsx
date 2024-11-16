import React from "react";
import s from "./Link.module.css";
import { NavLink } from "react-router-dom";

export const Link = ({ title, path }) => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${s.active} ${s.item}` : s.item
        }
        to={path}
      >
        {title}
      </NavLink>
    </div>
  );
};
