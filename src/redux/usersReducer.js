const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initState = {
  users: [],
};

export const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return { type: FOLLOW, userId };
};

export const unFollowAC = (userId) => {
  return { type: UNFOLLOW, userId };
};

export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
