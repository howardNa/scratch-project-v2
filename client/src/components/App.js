import React, { Component } from 'react';
import Main from '../containers/Main';

import NavContainer from '../containers/NavContainer.js';
import { BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <NavContainer />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App;