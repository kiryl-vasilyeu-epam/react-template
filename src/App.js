import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './routes/Main';
import Books from './routes/Books';
import MenuBar from './components/MenuBar/MenuBar';

class App extends React.Component {
  state = {
    token: '1235',
  };

  render() {
    const { token } = this.state;
    return (
      <BrowserRouter>
        <div
          className="App"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <MenuBar token={token} />
          <Switch>

            <Route exact path="/">
              <Main token={token} />
            </Route>

            <Route path="/books/:bookName">
              <Books token={token} />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
