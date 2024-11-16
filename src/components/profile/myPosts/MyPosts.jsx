import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";



export const MyPosts = (props) => {
  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts.map((el) => (
          <Post key={el.id} likes={el.likesCount} message={el.text} />
        ))}
      </div>
    </div>
  );
};
