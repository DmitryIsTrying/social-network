import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
  return (
    <>
      <div>
        <img
          className={s.headPic}
          src={
            "https://preview.redd.it/4lhrjntqskf81.png?auto=webp&s=8d6d6df70065784df0e24ea0002b5c6ad0f0a544"
          }
        />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </>
  );
};
