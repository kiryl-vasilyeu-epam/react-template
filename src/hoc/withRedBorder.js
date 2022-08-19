/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';

export const withRedBorder = (Child) => {
  class WithRedBorder extends Component {
    render() {
      return (
        <div style={{ border: '5px solid red' }}>
          <Child {...this.props} />
        </div>
      );
    }
  }

  return WithRedBorder;
};
