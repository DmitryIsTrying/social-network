const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const initState = {
  contacts: [
    { name: "Dimych", id: "1045" },
    { name: "Sveta", id: "103215" },
    { name: "Leha", id: "5123" },
    { name: "Alex", id: "324" },
    { name: "Sasha", id: "5412" },
    { name: "Elon", id: "755" },
  ],
  textsMessage: [
    { id: 1, text: "Hello!" },
    { id: 2, text: "Hi!" },
    { id: 3, text: "How are u" },
    { id: 4, text: "new video!!" },
    { id: 5, text: "NICCE" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.newBody };
    }
    case SEND_MESSAGE: {
      const text = state.newMessageBody;

      state.newMessageBody = "";
      return {
        ...state,
        textsMessage: [
          {
            id: 6,
            text,
          },
          ...state.textsMessage,
        ],
      };
    }
    default: {
      return state;
    }
  }
};
export const sendMessageAC = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageBodyAC = (newBody) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, newBody };
};
