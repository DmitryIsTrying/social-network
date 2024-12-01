import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../API/api";
import {
  followAC as follow,
  setCurrentPageAC as setCurrentPage,
  setIsFetchingAC as setIsFetching,
  setTotalCountAC as setTotalCount,
  setUsersAC as setUsers,
  toggleFollowingProgress,
  unFollowAC as unFollow,
} from "../../redux/usersReducer";
import { Preloader } from "../common/preloader";
import { Users } from "./Users";
import axios from "axios";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then(({ items, totalCount }) => {
        this.props.setIsFetching(false);
        this.props.setUsers(items);
        this.props.setTotalCount(totalCount);
      });
  }

  onPageChanged = (page) => {
    if (page === this.props.currentPage) return;
    this.props.setIsFetching(true);
    usersAPI.getUsers(page, this.props.pageSize).then(({ items }) => {
      this.props.setIsFetching(false);
      this.props.setUsers(items);
    });
    this.props.setCurrentPage(page);
  };

  handleFollow = (id) => {
    this.props.toggleFollowingProgress(true, id);

    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${id}`,
        {},
        {
          withCredentials: true,
          headers: {
            "api-key": "382bfce1-2258-420f-a736-6160001df197",
          },
        }
      )
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.follow(id);
        }
        this.props.toggleFollowingProgress(false, id);
      });
  };

  handleUnFollow = (id) => {
    this.props.toggleFollowingProgress(true, id);

    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
          "api-key": "382bfce1-2258-420f-a736-6160001df197",
        },
      })
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.unFollow(id);
        }
        this.props.toggleFollowingProgress(false, id);
      });
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
})(UsersContainer);
