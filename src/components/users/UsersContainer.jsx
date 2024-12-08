import React from "react";
import { connect } from "react-redux";
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
import {
  selectCurrentPage,
  selectFetching,
  selectFetchProgress,
  selectPageSize,
  selectTotalUsersCount,
  selectUsers,
  selectUsersMemoized,
} from "../../redux/usersSelectors";
import { Preloader } from "../common/preloader";
import { Users } from "./Users";

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
    users: selectUsersMemoized(state),
    pageSize: selectPageSize(state),
    totalUsersCount: selectTotalUsersCount(state),
    currentPage: selectCurrentPage(state),
    isFetching: selectFetching(state),
    isFetchProgress: selectFetchProgress(state),
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
