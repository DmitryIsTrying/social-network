import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        width={50}
        height={50}
        src="https://i.pinimg.com/736x/32/01/84/320184d2eaa02b05df8836f1fca21ea4.jpg"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};
