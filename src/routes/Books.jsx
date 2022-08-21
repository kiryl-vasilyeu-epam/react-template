import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Books extends Component {
  render() {
    const { match: { params } } = this.props;
    return (
      <div style={{
        display: 'flex',
        flex: 1,
      }}
      >
        {`Book page, book = ${params.bookId}`}
      </div>
    );
  }
}

export default withRouter(Books);
