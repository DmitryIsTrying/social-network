const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const initState = {
  posts: [
    { id: 1, likesCount: 1, text: "Hi, how are u?" },
    { id: 2, likesCount: 12, text: "Dima is cool!!1!" },
    { id: 3, likesCount: 23, text: "It's my first post" },
  ],
  newPostText: "",
};

export const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        likesCount: 0,
        text: state.newPostText,
      };
      return { ...state, posts: [newPost, ...state.posts] };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default: {
      return state;
    }
  }
};

export const addPostAC = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextAC = (newText) => {
  return { type: UPDATE_NEW_POST_TEXT, newText };
};
