import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

export const DialogItem = ({ name, path }) => {
  return (
    <div className={s.dialog}>
      <NavLink
        className={({ isActive }) => (isActive ? `${s.active}` : "")}
        to={"/dialogs/" + path}
      >
        {name}
      </NavLink>
    </div>
  );
};
