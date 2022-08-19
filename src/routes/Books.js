import React, { Component } from 'react';
import {
  withRouter,
} from 'react-router-dom';

class Books extends Component {
  render() {
    const { match: { params } } = this.props;

    return (
      <div style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        {`Book: ${params.bookName}`}
      </div>
    );
  }
}

export default withRouter(Books);
