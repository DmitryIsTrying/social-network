import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { sendMessageAC } from "../../redux/dialogsReducer";
import { maxLength, requiredFields } from "../../utils/validators/validators";
import { Textarea } from "../common/formsControls/FormsControls";
import { DialogItem } from "./dialogItem/DialogItem";
import s from "./Dialogs.module.css";
import { Message } from "./message/Message";

const maxLengthValidate = maxLength(100);
export const Dialogs = (props) => {
  const { id } = useParams();
  const disptach = useDispatch();

  const sendMessageHandler = (formData) => {
    disptach(sendMessageAC(formData.message));
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
          props.textsMessage.map((m) => <Message isSend={true} key={m.id} text={m.text} />)
        ) : (
          <div>Choose chat</div>
        )}
        <AddMessageReduxForm onSubmit={sendMessageHandler} />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Enter your message"
        component={Textarea}
        validate={[requiredFields, maxLengthValidate]}
        name="message"
      />
      <button>Send message</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "message" })(AddMessageForm);
