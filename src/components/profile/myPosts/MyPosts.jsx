import React, { useRef } from "react";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";

export const MyPosts = (props) => {
  let newPostElement = useRef(null);

  const handleAddPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
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
          <button onClick={handleAddPost}>Add post</button>
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
