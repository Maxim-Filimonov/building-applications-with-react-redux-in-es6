import React, { Component } from "react";

import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="container-fluid">{this.props.children}</div>;
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
