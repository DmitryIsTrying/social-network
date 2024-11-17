import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { DialogItem } from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./message/Message";

export const Dialogs = (props) => {
  const { id } = useParams();
  const refMessage = useRef(null);
  const messages = props.state.textsMessage.filter((m) => m.sender === id);

  const handleSendMessage = () => {
    alert(refMessage.current.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.state.contacts.map((el) => (
          <DialogItem key={el.id} path={el.id} name={el.name} />
        ))}
      </div>
      <div className={s.messages}>
        {id ? (
          messages.map((m) => (
            <Message isSend={m.send} key={m.id} text={m.text} />
          ))
        ) : (
          <div>Choose chat</div>
        )}
        <textarea ref={refMessage} />
        <button onClick={handleSendMessage}>Send message</button>
      </div>
    </div>
  );
};
