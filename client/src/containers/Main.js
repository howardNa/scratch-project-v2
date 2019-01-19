import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

const Main = (props) => {
  return (
    <div>
      ScratchMain
    </div>
  )
}

export default withRouter(connect(null, null)(Main));
