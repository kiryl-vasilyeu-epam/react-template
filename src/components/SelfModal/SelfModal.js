import React, { Component } from 'react';

export default class SelfModal extends Component {
  constructor(props) {
    super(props);

    props.setShowModal(this.toggleModal);
  }

  state = {
    visible: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;
    return visible ? (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <div style={{
          backgroundColor: 'rgb(255, 200, 200)',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
          width: 600,
          height: 400,
          borderRadius: 20,
        }}
        >
          <button type="button" onClick={this.toggleModal}>close</button>
        </div>
      </div>
    ) : null;
  }
}
