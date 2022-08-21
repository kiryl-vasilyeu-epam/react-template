import React from 'react';

import { Switch, Route } from 'react-router-dom';
import MenuBar from './Components/MenuBar/MenuBar';

import Main from './routes/Main';
import Books from './routes/Books';

class App extends React.Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          position: 'relative',
        }}
      >
        <MenuBar setCurrentRoute={this.setCurrentRoute} />

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/books/:bookId">
            <Books />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
