import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginUserTC } from "../../redux/authReducer";
import { requiredFields } from "../../utils/validators/validators";
import { Input } from "../common/formsControls/FormsControls";
import styles from "../common/formsControls/FormsControls.module.css";

const selectAuth = (state) => state.auth.isAuth;
const selectCaptcha = (state) => state.auth.captchaUrl;

export const Login = () => {
  const disptach = useDispatch();
  const isAuth = useSelector(selectAuth);
  const captchaUrl = useSelector(selectCaptcha);
  const onSubmitHandler = (formData) => {
    disptach(loginUserTC(formData));
  };

  if (isAuth) {
    return <Navigate replace to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmitHandler} />
    </div>
  );
};

const LoginForm = ({ captchaUrl, ...props }) => {
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
      {props.error && <div className={styles.formSummuryControl}>{props.error}</div>}
      {captchaUrl && (
        <>
          <img src={captchaUrl} alt="captcha image" />{" "}
          <div>
            <Field
              type="text"
              validate={[requiredFields]}
              component={Input}
              placeholder="Captcha"
              name="captcha"
            />
          </div>
        </>
      )}
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
