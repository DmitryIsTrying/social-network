import { connect } from "react-redux";
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer";
import { Users } from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};
export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
