import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfileAC as setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

const ParamsWrapper = (props) => {
  const params = useParams();
  return <ProfileContainer {...props} params={params} />;
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${
          this.props.params.id || 2
        }`
      )
      .then(({ data }) => {
        this.props.setUserProfile(data);
      });
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return { profile: state.profilePage.profile };
};

export default connect(mapStateToProps, { setUserProfile })(ParamsWrapper);
