import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 1, text: "Hi, how are u?" },
        { id: 2, likesCount: 12, text: "Dima is cool!!1!" },
        { id: 3, likesCount: 23, text: "It's my first post" },
      ],
      newPostText: "",
    },
    messagePage: {
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
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.messagePage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
