import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  sendMessageAC,
  updateNewMessageBodyAC,
} from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";
import { compose } from "redux";

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

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
