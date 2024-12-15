import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA = "SET_CAPTCHA";

const initState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, //if null then captcha isn't required
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case SET_CAPTCHA: {
      return { ...state, captchaUrl: action.url };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (id, email, login, isAuth) => {
  return { type: SET_USER_DATA, payload: { id, email, login, isAuth } };
};

export const setCaptcha = (url) => ({ type: SET_CAPTCHA, url });

//thunks

export const setAuthUserDataTC = () => {
  return async (dispatch) => {
    return authAPI.me().then((res) => {
      if (res.resultCode === 0) {
        const { id, login, email } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};

export const getCaptchaUrl = () => async (dispatch) => {
  const res = await authAPI.getCaptcha();
  dispatch(setCaptcha(res.url));
};

export const loginUserTC = (formData) => {
  return (dispatch) => {
    authAPI
      .login({
        email: formData.login,
        password: formData.password,
        rememberMe: formData.rememberMe,
        captcha: formData.captcha,
      })
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserDataTC());
        } else {
          if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
          }
          const message = data.messages.length ? data.messages[0] : "Unexpected error";
          dispatch(
            stopSubmit("login", {
              _error: message,
            })
          );
        }
      });
  };
};

export const logoutUserTC = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
