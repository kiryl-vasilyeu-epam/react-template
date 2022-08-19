import React, { Component } from 'react';

export default class NumberedText extends Component {
  render() {
    const {
      text, number, color, backgroundColor,
    } = this.props;
    return (
      <div style={{
        backgroundColor: '#EEE',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
      }}
      >
        <div style={{
          backgroundColor,
          fontSize: 20,
          color,
          borderRadius:
          '100%',
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          margin: '0 10px',
        }}
        >
          {number}
        </div>
        <div>{text}</div>
      </div>
    );
  }
}
