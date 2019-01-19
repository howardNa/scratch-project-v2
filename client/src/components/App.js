import React, { Component } from 'react';
import Main from '../containers/Main';
import NavComponent from './NavComponent'
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <NavComponent />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App;