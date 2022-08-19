import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '../Button/Button';

class MenuBar extends Component {
  render() {
    const { history } = this.props;
    const books = ['First', 'Second'];
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 150,
          backgroundColor: 'rgb(100, 100, 200)',
          padding: 30,
        }}
      >
        <Button title="Main page" onClick={() => history.push('/')} />

        {
          books.map((name) => (
            <Button key={name} title={name} secondary onClick={() => history.push(`/books/${name}`)} />
          ))
        }
      </div>
    );
  }
}

export default withRouter(MenuBar);
