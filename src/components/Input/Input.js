import React, { Component } from 'react';

export default class Input extends Component {
  state = {
    value: '',
  };

  handleInput = ({ target: { value } }) => {
    if (!Number.isNaN(+value)) {
      this.setState({ value });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <input onChange={this.handleInput} value={value} />
    );
  }
}
