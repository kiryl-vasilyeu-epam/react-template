import React, { Component } from 'react';
import './Header.css';

import Button from '../Button/Button';

export default class Header extends Component {
  render() {
    const { onSignInPress, onSignUpPress } = this.props;
    return (
      <div className="header">
        <Button title="Sign In" secondary onClick={onSignInPress} />
        <Button title="Sign Up" onClick={onSignUpPress} />
      </div>
    );
  }
}
