import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    newPostChange: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
      dispatch(updateNewPostTextAC(""));
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextAC(text));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
