import React from "react";
import { useParams } from "react-router-dom";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { connect } from "react-redux";

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
