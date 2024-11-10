import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./myPosts/MyPosts";

export const Profile = () => {
  return (
    <div className={s.content}>
      <img
        src={
          "https://preview.redd.it/4lhrjntqskf81.png?auto=webp&s=8d6d6df70065784df0e24ea0002b5c6ad0f0a544"
        }
      />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
