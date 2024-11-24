import React from "react";
import s from "./Message.module.css";

export const Message = (props) => {
  return (
    <div
      className={`${s.message} ${props.isSend ? s.myMessage : s.youMessage}`}
    >
      {props.text}
    </div>
  );
};
