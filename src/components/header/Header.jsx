import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        width={50}
        height={50}
        src="https://i.pinimg.com/736x/32/01/84/320184d2eaa02b05df8836f1fca21ea4.jpg"
      />
    </header>
  );
};
