import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { loginUserTC } from "../../redux/authReducer";
import { Input } from "../common/formsControls/FormsControls";
import { requiredFields } from "../../utils/validators/validators";
import { Navigate, useNavigate } from "react-router-dom";

const selector = (state) => state.auth.isAuth;

export const Login = () => {
  const disptach = useDispatch();
  const isAuth = useSelector(selector);
  const onSubmitHandler = (formData) => {
    disptach(loginUserTC(formData));
  };
  const navigate = useNavigate();

  if (isAuth) {
    navigate("/profile");
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmitHandler} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[requiredFields]}
          autoComplete="username"
          placeholder="Login"
          component={Input}
          name="login"
        />
      </div>
      <div>
        <Field
          autoComplete="current-password"
          type="password"
          validate={[requiredFields]}
          component={Input}
          placeholder="Password"
          name="password"
        />
      </div>
      <div>
        <Field type="checkbox" component={Input} name="rememberMe" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default Login;
