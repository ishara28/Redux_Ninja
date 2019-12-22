import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home is working</h3>
      </div>
    );
  }
}

export default connect()(Home);
