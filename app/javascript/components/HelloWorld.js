import React, { Component } from "react"
import PropTypes from "prop-types"

export default class HelloWorld extends Component {
  render () {
    return (
      <React.Fragment>
        <button type="button" class="btn btn-default">button</button>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
