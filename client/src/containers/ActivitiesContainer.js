import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import SearchBoxComponent from '../components/SearchBox.js'
import ActivitiesComponent from '../components/Activities.js'

const mapStateToProps = store => ({

  // lastMarketId: store.markets.lastMarketId,
  // marketList: store.markets.marketList


});

const mapDispatchToProps = dispatch => ({
  
  // create functions that will dispatch action creators
  // createMarket: (e) => {
  //   console.log('e.target after clicking add market: ', e.target)
  //   dispatch(actions.createMarket())
  // },

  // setNewLocation: (e) => {
  //   console.log('e.target after changing LOCATION: ', e.target)
  //   dispatch(actions.setNewLocation(e.target.value))
  // }

});

const ActivitiesContainer = (props) => {
  return (
    <div>
      <SearchBoxComponent />
      <ActivitiesComponent />
    </div>
  )
}

export default withRouter(connect(null, null)(ActivitiesContainer));