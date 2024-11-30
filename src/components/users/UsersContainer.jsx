import { connect } from "react-redux";
import {
  followAC as follow,
  setCurrentPageAC as setCurrentPage,
  setIsFetchingAC as setIsFetching,
  setTotalCountAC as setTotalCount,
  setUsersAC as setUsers,
  unFollowAC as unFollow,
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching,
})(UsersContainer);
