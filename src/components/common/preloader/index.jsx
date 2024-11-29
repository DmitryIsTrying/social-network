import React from "react";
import sprite from "../../../assets/sprite.svg";
import styles from "../../users/Users.module.css";

export const Preloader = () => {
  return (
    <svg
      className={styles.spinner}
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      <use xlinkHref={`${sprite}#preloader`} x="0" y="0" />
    </svg>
  );
};
