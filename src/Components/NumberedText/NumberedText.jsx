import React, { Component } from 'react';

class NumberedText extends Component {
  render() {
    const {
      title, number, color, backgroundColor,
    } = this.props;

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 30,
      }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100%',
          width: 40,
          height: 40,
          margin: 20,
          fontSize: 30,
          color,
          backgroundColor,
        }}
        >
          {number}
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          {title}
        </div>
      </div>
    );
  }
}

export default NumberedText;
