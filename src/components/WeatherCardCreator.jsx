import React, { Component } from 'react';
import Card from './Card';
import key from '../hideme';
import { getWeather } from '../utilities';

export default class WeatherCardCreator extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(geolocation => this.setState({ ...this.state, geolocation }));
  }

  componentDidUpdate() {
    const { data, geolocation } = this.state;
    const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20York&APPID=';
    if (geolocation && !data.length) {
      fetch(`${baseUrl}${key}`).then(response => response.json()).then(json => {
        this.setState({ ...this.state, data: getWeather(json) });
      });
    }
  }

  renderDays() {
    const { data } = this.state;
    return data.map(dayData => <Card {...dayData} />);
  }

  render() {
    return (
      <div>
        {this.renderDays()}
      </div>
    );
  }
}
