import React from "react";
import s from "./Message.module.css";

export const Message = (props) => {
  console.log(props.isSend);

  return (
    <div
      className={`${s.message} ${props.isSend ? s.myMessage : s.youMessage}`}
    >
      {props.text}
    </div>
  );
};
