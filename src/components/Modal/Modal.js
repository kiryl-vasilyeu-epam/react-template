import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    const { closeModal } = this.props;
    return (
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
          backgroundColor: '#EEE',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          boxShadow: '8px 8px 24px 0px rgba(66, 68, 90, 1)',
          width: 600,
          height: 400,
          borderRadius: 20,
        }}
        >
          <button type="button" onClick={closeModal}>close</button>
        </div>
      </div>
    );
  }
}
