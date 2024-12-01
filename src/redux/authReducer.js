import { authAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";

const initState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login) => {
  return { type: SET_USER_DATA, data: { id, email, login } };
};

//thunks

export const setAuthUserDataTC = () => {
  return (dispatch) => {
    authAPI.me().then((res) => {
      if (res.resultCode === 0) {
        const { id, login, email } = res.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
