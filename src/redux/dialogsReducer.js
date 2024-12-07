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
};

export const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        textsMessage: [
          {
            id: 6,
            text: action.text,
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
export const sendMessageAC = (text) => {
  return { type: SEND_MESSAGE, text };
};
