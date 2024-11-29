import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalCountAC,
  setUsersAC,
  unFollowAC,
} from "../../redux/usersReducer";
import React from "react";
import axios from "axios";
import { Users } from "./Users";
import { Preloader } from "../common/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(({ data: { items, totalCount } }) => {
        this.props.setIsFetching(false);
        this.props.setUsers(items);
        this.props.setTotalCount(totalCount);
      });
  }

  onPageChanged = (page) => {
    if (page === this.props.currentPage) return;
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(({ data: { items } }) => {
        this.props.setIsFetching(false);
        this.props.setUsers(items);
      });
    this.props.setCurrentPage(page);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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
    setCurrentPage: (newCurrentPage) => {
      dispatch(setCurrentPageAC(newCurrentPage));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    setIsFetching: (fetching) => {
      dispatch(setIsFetchingAC(fetching));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
