import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../API/api";
import {
  followAC as follow,
  getUsersThunkCreator,
  setCurrentPageAC as setCurrentPage,
  setFollowOnUserTC,
  setIsFetchingAC as setIsFetching,
  setTotalCountAC as setTotalCount,
  setUnFollowOnUserTC,
  setUsersAC as setUsers,
  toggleFollowingProgress,
  unFollowAC as unFollow,
} from "../../redux/usersReducer";
import { Preloader } from "../common/preloader";
import { Users } from "./Users";
import axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator({
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
    });
  }

  onPageChanged = (page) => {
    if (page === this.props.currentPage) return;
    this.props.getUsersThunkCreator({
      currentPage: page,
      pageSize: this.props.pageSize,
    });
    this.props.setCurrentPage(page);
  };

  handleFollow = (id) => {
    this.props.setFollowOnUserTC(id);
  };

  handleUnFollow = (id) => {
    this.props.setUnFollowOnUserTC(id);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          unFollow={this.handleUnFollow}
          follow={this.handleFollow}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          isFetchProgress={this.props.isFetchProgress}
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
    isFetchProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching,
  toggleFollowingProgress,
  getUsersThunkCreator,
  setFollowOnUserTC,
  setUnFollowOnUserTC,
})(UsersContainer);
