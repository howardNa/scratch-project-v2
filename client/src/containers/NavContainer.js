import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavComponent from "../components/NavComponent.js";

import * as actions from "../store/actions/actions.js";

const mapStateToProps = store => ({
  searchActivities: store.activities.searchedActivities
});

const mapDispatchToProps = dispatch => ({
  searchForActivities: activity => {
    dispatch(actions.searchForActivities(activity));
  }
});

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value)
    console.log('logging e.target.id', e.target.id)
    const newState = this.state;
    newState.title = e.target.value;
    this.setState(newState);
  }

  handleSearch(e) {
    const code = e.keyCode || e.which;
    if (code === 13) {
      console.log('firing handlesearch')
      console.log(this.state.title)
      this.props.searchForActivities({ title: this.state.title });
    }
  }

  render() {
    return (
      <NavComponent
        handleSearch={this.handleSearch}
        handleChange={this.handleChange}
      />
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavContainer)
);

// const NavContainer = (props) => {
//   return (
//       <NavComponent />
//   )
// }

// export default withRouter(connect(null, null)(NavContainer));
