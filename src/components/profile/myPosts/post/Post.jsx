import React from "react";
import s from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={`${s.item} ${s.active}`}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLg6JNKL3cZxeOj-F7SW7gLj9x7iPVm4yGTw&s"
          alt="Avatar"
        />
        <span>{props.message}</span>
      </div>
      <span>
        {props.likes} {props.likes === 1 ? "like" : "likes"}
      </span>
    </div>
  );
};
