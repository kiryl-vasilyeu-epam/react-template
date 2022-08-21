import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../Button/Button';

const booksList = ['BookOne', 'BookTwo'];

class MenuBar extends Component {
  render() {
    const { history } = this.props;

    return (
      <div style={{
        display: 'flex',
        backgroundColor: 'rgb(255, 200, 200)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
      }}
      >
        <Button title="Main" onClick={() => history.push('/')} />
        {booksList.map((bookName) => (
          <Button
            key={bookName}
            title={bookName}
            onClick={() => history.push(`/books/${bookName}`)}
          >
            {bookName}
          </Button>
        ))}
      </div>
    );
  }
}

export default withRouter(MenuBar);
