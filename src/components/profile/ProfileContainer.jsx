import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getProfileTC, getStatusTC, updateStatusTC } from "../../redux/profileReducer";
import { Profile } from "./Profile";
import { compose } from "redux";

const ParamsWrapper = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.id;

    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getProfileTC(userId);
    this.props.getStatusTC(userId);
  }
  handleUpdateStatus = (status) => {
    this.props.updateStatusTC(status);
  };
  render() {
    return <Profile handleUpdateStatus={this.handleUpdateStatus} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
  };
};

export default compose(
  connect(mapStateToProps, { getProfileTC, getStatusTC, updateStatusTC }),
  withAuthRedirect
)(ParamsWrapper);
