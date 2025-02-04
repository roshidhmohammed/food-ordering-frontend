import React from "react";
import User from "./User.js";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor")
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount")
  }

  render() {
    // console.log("parent render")
    return (
      <div className=" md:pt-20 pt-40 flex sm:justify-center flex-col h-screen  items-center font-roboto">
        <h1 className=" component-heading mb-5">About Us</h1>
        <div className="bg-slate-300 p-10 px-20 rounded-lg">
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
