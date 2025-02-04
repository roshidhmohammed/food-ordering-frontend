import React from "react";
import UserContext from "../utils/userContext.js";
import AboutUs from "./shimmerUi/AboutUs.js";
// import { githubProfile } from "../utils/constants.js";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default",
        location: "default",
      },
    };

    // console.log("constructor");
  }

  async componentDidMount() {
    // const data = await fetch(githubProfile);
    const profileUrl = process.env.REACT_APP_GIT_PROFILE_URL
    const data = await fetch(profileUrl);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    // console.log("component Did Mount");
  }

  componentDidUpdate() {
    // console.log("component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("Component Will Unmount");
  }

  render() {
    // console.log(this.props.name + " render")
    // const { name, location } = this.props;
    // console.log("Render")
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card font-roboto ">
        {avatar_url === undefined ? (
          <AboutUs />
        ) : (
          <img src={avatar_url} className=" rounded-full h-60 w-74 mb-3" />
        )}
        <UserContext.Consumer>
          {({ userName }) => (
            <h1 className="  text-lg">
              <span className=" font-bold">Name:</span> {userName}
            </h1>
          )}
        </UserContext.Consumer>
        <h1>
          <span className=" font-bold">Location:</span> {location}
        </h1>
        <UserContext.Consumer>
          {({ designation }) => (
            <h1>
              <span className=" font-bold">Designation:</span> {designation}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
