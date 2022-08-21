import React, { Component } from 'react';

const withRedBorder = (Comp) => {
  class WithRedBorderComponent extends Component {
    render() {
      return (
        <div
          style={{
            border: '5px solid blue',
          }}
        >
          <Comp borderColor="blue" {...this.props} />
        </div>
      );
    }
  }

  return WithRedBorderComponent;
};

export default withRedBorder;
