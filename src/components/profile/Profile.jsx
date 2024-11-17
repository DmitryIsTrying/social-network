import React from "react";
import s from "./Profile.module.css";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./profileInfo/ProfileInfo";

export const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        addPost={props.addPost}
        newPostChange={props.state.newPostText}
        posts={props.state.posts}
        updateNewPostChange={props.updateNewPostChange}
      />
    </div>
  );
};
