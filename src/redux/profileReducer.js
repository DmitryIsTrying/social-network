import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initState = {
  posts: [
    { id: 1, likesCount: 1, text: "Hi, how are u?" },
    { id: 2, likesCount: 12, text: "Dima is cool!!1!" },
    { id: 3, likesCount: 23, text: "It's my first post" },
  ],
  newPostText: "",
  profile: null,
  status: null,
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
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
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

export const setUserProfileAC = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};

export const setStatucAC = (status) => {
  return { type: SET_STATUS, status };
};

// thunks

export const getProfileTC = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then((res) => {
      dispatch(setUserProfileAC(res));
    });
  };
};

export const getStatusTC = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((res) => {
      dispatch(setStatucAC(res));
    });
  };
};

export const updateStatusTC = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatucAC(status));
      }
    });
  };
};
