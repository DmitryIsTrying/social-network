import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import { Post } from "./post/Post";
import { addPostAC } from "../../../redux/profileReducer";
import { requiredFields, maxLength } from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/FormsControls";

const maxLengthValidate = maxLength(10);

export const MyPosts = (props) => {
  const dispatch = useDispatch();

  const addPostHandler = (formData) => {
    dispatch(addPostAC(formData.postText));
  };

  return (
    <div className={s.postsBlock}>
      My posts
      <MyPostsReduxForm onSubmit={addPostHandler} />
      <div className={s.posts}>
        {props.posts.map((el) => (
          <Post key={el.id} likes={el.likesCount} message={el.text} />
        ))}
      </div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="postText"
        component={Textarea}
        validate={[requiredFields, maxLengthValidate]}
        placeholder="Enter post text"
      />
      <button>Add post</button>
    </form>
  );
};

const MyPostsReduxForm = reduxForm({ form: "posts" })(MyPostsForm);
