import React, { useRef, useState } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";

export const MyPosts = (props) => {
  let newPostElement = useRef(null);

  const handleOnClickBtn = () => {
    props.addPost(newPostElement.current.value);
    props.updateNewPostChange("");
  };

  const onPostChange = () => {
    props.updateNewPostChange(newPostElement.current.value);
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            value={props.newPostChange}
            onChange={onPostChange}
            ref={newPostElement}
          />
        </div>
        <div>
          <button onClick={handleOnClickBtn}>Add post</button>
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
