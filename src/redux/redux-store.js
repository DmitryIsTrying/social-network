import { applyMiddleware, combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import { thunk as thunkMiddleware } from "redux-thunk";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
