import React from "react";
import s from "./ProfileInfo.module.css";
import { Preloader } from "../../common/preloader";
import { ProfileStatus } from "./profileStatus/ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
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
      <div>{props.profile.fullName}</div>
      <div className={s.descriptionBlock}>
        {props.profile && <img src={props.profile.photos.large} alt="Avatar" />}
        <ProfileStatus handleUpdateStatus={props.handleUpdateStatus} status={props.status} />
      </div>
    </>
  );
};
