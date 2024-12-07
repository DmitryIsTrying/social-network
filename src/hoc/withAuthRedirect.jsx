import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToPropsForRedirect = (state) => {
  return { isAuth: state.auth.isAuth };
};

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      //!props.isAuth
      return <Navigate to="/login" replace />;
    }
    return <Component {...props} />;
  };

  const ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedRedirectComponent;
};
