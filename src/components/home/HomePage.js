import React, { Component } from "react";

import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration Panel</h1>
        <p>React, Redux and all it's friend in this tutorial</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}
export default HomePage;
