import React, { Component } from 'react';

import withRedBorder from '../../HOC/withRedBorder';

class Input extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <input onChange={this.handleChange} value={value} />
    );
  }
}

export default withRedBorder(Input);
