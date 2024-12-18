import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    newPostChange: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

export const MyPostsContainer = connect(mapStateToProps, {})(MyPosts);
