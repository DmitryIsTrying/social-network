import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfileTC } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { compose } from "redux";

const ParamsWrapper = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileTC(this.props.params.id || 2);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default compose(
  connect(mapStateToProps, { getProfileTC }),
  withAuthRedirect
)(ParamsWrapper);
