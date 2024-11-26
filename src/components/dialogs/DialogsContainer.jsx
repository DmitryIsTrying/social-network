import { connect } from "react-redux";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    contacts: state.messagePage.contacts,
    textsMessage: state.messagePage.textsMessage,
    newMessageBody: state.messagePage.newMessageBody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
    updateNewMessageBody: (text) => {
      dispatch(updateNewMessageBodyAC(text));
    },
  };
};

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);
