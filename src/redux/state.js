let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likesCount: 1, text: "Hi, how are u?" },
        { id: 2, likesCount: 12, text: "Dima is cool!!1!" },
        { id: 3, likesCount: 23, text: "It's my first post" },
      ],
      newPostText: "it-kamasutra.com",
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
        { id: 1, sender: "103215", text: "Hello!", send: true },
        { id: 2, sender: "103215", text: "Hi!", send: false },
        { id: 3, sender: "103215", text: "How are u", send: true },
        { id: 4, sender: "1045", text: "new video!!", send: true },
        { id: 5, sender: "1045", text: "NICCE", send: false },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  addPost() {
    let newPost = {
      id: 5,
      likesCount: 0,
      text: this._state.profilePage.newPostText,
    };

    this._state = {
      ...this._state,
      profilePage: {
        ...this._state.profilePage,
        posts: [...this._state.profilePage.posts, newPost],
      },
    };
    this._callSubscriber(this._state);
  },
  updateNewPostChange(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
