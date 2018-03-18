import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../../redux/actions/posts";
@connect(state => ({}), Actions)
class Home extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.getApiData}>Home</button>
      </div>
    );
  }
}

export default Home;
