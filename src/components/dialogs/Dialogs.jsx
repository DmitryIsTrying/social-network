import React from "react";
import { useParams } from "react-router-dom";
import { DialogItem } from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./message/Message";

export const Dialogs = (props) => {
  const { id } = useParams();

  const handleSendMessage = () => {
    props.sendMessage();
  };

  const handleChangeMessageField = (e) => {
    props.updateNewMessageBody(e.target.value);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.contacts.map((el) => (
          <DialogItem key={el.id} path={el.id} name={el.name} />
        ))}
      </div>
      <div className={s.messages}>
        {id ? (
          props.textsMessage.map((m) => (
            <Message isSend={true} key={m.id} text={m.text} />
          ))
        ) : (
          <div>Choose chat</div>
        )}
        <textarea
          value={props.newMessageBody}
          onChange={handleChangeMessageField}
          placeholder="Enter your message"
        />
        <button onClick={handleSendMessage}>Send message</button>
      </div>
    </div>
  );
};
