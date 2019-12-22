import React, { Component } from "react";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    return (
      <div>
        
        <h3>Home Component</h3>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
