import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserTC } from "../../redux/authReducer";

export const Header = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserTC());
  };

  return (
    <header className={s.header}>
      <img
        width={50}
        height={50}
        src="https://i.pinimg.com/736x/32/01/84/320184d2eaa02b05df8836f1fca21ea4.jpg"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            <span>{props.login}</span>
            <button onClick={logoutHandler}>logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
