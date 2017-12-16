import React, { Component } from 'react';
import key from '../hideme';

export default class WeatherCardCreator extends Component {
  state = {
    weatherByDay: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(geolocation => this.setState({ ...this.state, geolocation }));
  }

  componentDidUpdate() {
    const { weatherByDay, geolocation } = this.state;
    if (geolocation && !weatherByDay.length) {
      fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20York&APPID=${key}')
        .then(response => response.json())
        .then(json => {
          this.setState({ ...this.state, data: json });
        });
    }
  }

  render() {
    return (
      <div>
        {' '}we got {this.state.weatherByDay}
      </div>
    );
  }
}
