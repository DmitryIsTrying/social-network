import { createSelector } from "reselect";

export const selectUsers = (state) => {
  return state.usersPage.users;
};

export const selectUsersMemoized = createSelector(selectUsers, (users) => {
  return users.filter((u) => true);
});

export const selectPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const selectTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const selectCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const selectFetching = (state) => {
  return state.usersPage.isFetching;
};

export const selectFetchProgress = (state) => {
  return state.usersPage.followingInProgress;
};
