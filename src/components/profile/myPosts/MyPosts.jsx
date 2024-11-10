import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "../post/Post";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id=""></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post likes={1} message="Hi, how are u?" />
        <Post likes={12} message="Dima is cool!!1!" />
        <Post likes={23} message="It's my first post" />
      </div>
    </div>
  );
};
