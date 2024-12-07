import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { sendMessageAC } from "../../redux/dialogsReducer";
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
  };
};

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
