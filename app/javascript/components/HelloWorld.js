import React, { Component } from "react"
import PropTypes from "prop-types"

export default class HelloWorld extends Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
