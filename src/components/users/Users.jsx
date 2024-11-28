import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/defaultUser.png";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(({ data: { items, totalCount } }) => {
        this.props.setUsers(items);
        this.props.setTotalCount(totalCount);
      });
  }

  onPageChanged = (page) => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then(({ data: { items } }) => this.props.setUsers(items));
    this.props.setCurrentPage(page);
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
      <div>
        <div>
          {pages.map((page) => (
            <span
              onClick={() => {
                this.onPageChanged(page);
              }}
              key={page}
              className={
                this.props.currentPage === page ? styles.selectedPage : ""
              }
            >
              {page}
            </span>
          ))}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  className={styles.userPhoto}
                  src={user.photos.small || userPhoto}
                  alt="Avatar"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unFollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
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
  }
}
export { Users };
