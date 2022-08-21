import React, { Component } from 'react';
import Button from '../Button/Button';

export default class Header extends Component {
  render() {
    const { toggleModal } = this.props;
    return (
      <div style={{
        display: 'flex',
        backgroundColor: 'rgb(220, 255, 220)',
        justifyContent: 'space-around',
        width: '100%',
      }}
      >
        <Button title="Sign In" onClick={toggleModal} />
        <Button title="Sign Up" secondary />
      </div>
    );
  }
}
