import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

import { Link } from 'react-router-dom';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
      activities: [
        {
          name: "Braden",
          activity: "tennis",
          time: Date.now(),
          where: "Venice, CA",
          lat: 33.998885,
          lng: -118.472386,
          show: false,
        },
        {
          name: "Carolyn",
          activity: "massages",
          time: Date.now(),
          where: "Venice, CA",
          lat: 33.997141,
          lng: -118.461012,
          show: false,
        },
        {
          name: "Howard",
          activity: "magic",
          time: Date.now(),
          where: "Venice, CA",
          lat: 33.981093,
          lng: -118.460584,
          show: false,
        }
      ],
      show: false
    };
    this.setLocation = this.setLocation.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.toggleClose = this.toggleClose.bind(this);
  }

  setLocation(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  handleToggle(i) {
    const result = this.state;
    result.activities = result.activities.map((item, index) => {
      if (i === index) item.show = true;
      else item.show = false;
      return item;
    })
    this.setState(result);
  }
  toggleClose(i) {
    const result = this.state;
    result.activities[i].show = false;
    this.setState(result);
  }

  componentDidMount() {
    const func = this.setLocation;
    navigator.geolocation.getCurrentPosition(function (position) {
      func(position);
    });
  }

  render() {

    const mapMarkers = this.state.activities.map((item, i) => {
      return (
        <div id={i} key={i}>
          <Marker
            position={{ lat: item.lat, lng: item.lng }}
            onClick={() => this.handleToggle(i)}
          />
          {item.show &&
            <InfoBox
              defaultPosition={new google.maps.LatLng(item.lat, item.lng)}
              options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
              <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                <div style={{ fontSize: `12px`, fontColor: `#08233B` }}>
                  <Link to="/moreInfo">More Info!!!</Link>
                  <p>{item.name}</p>
                  <p>{item.activity}</p>
                  <p>{item.time}</p>
                  <p>{item.where}</p>
                  <button onClick={() => this.toggleClose(i)}>X</button>
                </div>
              </div>
            </InfoBox>
          }
        </div>
      )
    })

    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap defaultZoom={14} defaultCenter={{ lat: this.state.latitude, lng: this.state.longitude }}>
        {props.isMarkerShown && (
          <div>
            {mapMarkers}
          </div>
        )}
      </GoogleMap>

    ))
    return (
      <div>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQf8XQCVMQeOGULPg_YWjgxR25M6I-0u8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `500px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          isMarkerShown={true}
        />
        <h1>Latitude: {this.state.latitude}</h1>
        <h2>Longitude: {this.state.longitude}</h2>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(MapContainer));