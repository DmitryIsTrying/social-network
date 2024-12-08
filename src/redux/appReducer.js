import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";
import { setAuthUserData, setAuthUserDataTC } from "./authReducer";

const SUCCESS_INITIALIZED = "SUCCESS_INITIALIZED";

const initState = {
  initialized: false,
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SUCCESS_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({ type: SUCCESS_INITIALIZED });

//thunks

export const initializeApp = () => {
  return (dispatch) => {
    const dispatchResult = dispatch(setAuthUserDataTC());
    dispatchResult.then(() => {
      dispatch(setInitializedSuccess());
    });
  };
};
