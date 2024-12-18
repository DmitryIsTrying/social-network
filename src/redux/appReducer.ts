//@ts-ignore
import { setAuthUserDataTC } from "./authReducer";
import { Dispatch } from "redux";

const initState = {
  initialized: false,
};

export const appReducer = (state = initState, action: AppActions) => {
  switch (action.type) {
    case "SUCCESS_INITIALIZED": {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const setInitializedSuccess = () => ({ type: "SUCCESS_INITIALIZED" } as const);

//thunks

export const initializeApp = () => {
  return (dispatch: Dispatch) => {
    const dispatchResult = dispatch(setAuthUserDataTC());
    dispatchResult.then(() => {
      dispatch(setInitializedSuccess());
    });
  };
};

//types
type SetInitSuccess = ReturnType<typeof setInitializedSuccess>;
export type AppActions = SetInitSuccess;
