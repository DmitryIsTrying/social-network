import React from "react";
import { MyPostsContainer } from "./myPosts/MyPostsContainer";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};
