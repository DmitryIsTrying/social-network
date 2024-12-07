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
        ...action.payload,
        isAuth: action.payload.isAuth,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { id, email, login, isAuth } };
};

//thunks

export const setAuthUserDataTC = () => {
  return (dispatch) => {
    authAPI.me().then((res) => {
      if (res.resultCode === 0) {
        const { id, login, email } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const loginUserTC = (formData) => {
  return (dispatch) => {
    authAPI
      .login({
        email: formData.login,
        password: formData.password,
        rememberMe: formData.rememberMe,
      })
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserDataTC());
        } else {
          alert(data.messages[0]);
        }
      });
  };
};

export const logoutUserTC = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      } else {
        alert(data.messages[0]);
      }
    });
  };
};
