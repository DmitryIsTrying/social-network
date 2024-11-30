import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/defaultUser.png";
import { NavLink } from "react-router-dom";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  pages = pages.slice(
    props.currentPage > 2 ? props.currentPage - 3 : 0,
    props.currentPage > 2
      ? props.currentPage + 3
      : props.currentPage + 3 + (props.currentPage === 1 ? 2 : 1)
  );

  return (
    <div>
      <div className={styles.pageLayout}>
        <span>...</span>
        {pages.map((page) => (
          <span
            onClick={() => {
              props.onPageChanged(page);
            }}
            key={page}
            className={
              props.currentPage === page
                ? `${styles.page} ${styles.selectedPage}`
                : `${styles.page}`
            }
          >
            {page}
          </span>
        ))}
        <span>...</span>
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  className={styles.userPhoto}
                  src={user.photos.small || userPhoto}
                  alt="Avatar"
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
        </div>
      ))}
    </div>
  );
};
