import React, { Component } from 'react';

import Input from '../Input/Input';

export default class Modal extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    const { setToggleModal } = this.props;
    setToggleModal(this.toggleModal);
  }

  toggleModal = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;

    if (!visible) return null;

    return (
      <div style={{
        position: 'absolute',
        display: 'flex',
        height: 500,
        width: 500,
        backgroundColor: 'red',
        top: 140,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Input />
      </div>
    );
  }
}
