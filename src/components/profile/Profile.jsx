import React from "react";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
