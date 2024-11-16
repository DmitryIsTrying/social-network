import React from "react";
import { Link as NavigationLink } from "./link/Link";
import s from "./Navbar.module.css";

const navItems = [
  { title: "Profile", path: "/profile" },
  { title: "Message", path: "/dialogs" },
  { title: "News", path: "/news" },
  { title: "Music", path: "/music" },
  { title: "Settings", path: "/settings" },
];

export const Navbar = () => {
  return (
    <nav className={s.nav}>
      {navItems.map((item, index) => (
        <NavigationLink key={index} title={item.title} path={item.path} />
      ))}
    </nav>
  );
};
