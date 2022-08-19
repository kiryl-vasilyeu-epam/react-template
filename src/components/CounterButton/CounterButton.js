import React, { Component } from 'react';
import Button from '../Button/Button';
import { withRedBorder } from '../../hoc/withRedBorder';

class CounterButton extends Component {
  state = {
    counter: 1,
  };

  addCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { counter } = this.state;
    return (
      <Button title={counter} onClick={this.addCounter} />
    );
  }
}

export default withRedBorder(CounterButton);
