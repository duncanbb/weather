import React, { Component } from 'react';
import Card from './Card';
import { fetchWeather, convertWeatherData } from '../utilities';
import './WeatherCardCreator.css';

export default class WeatherCardCreator extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async geolocation => {
        const { data } = this.state;
        if (geolocation && !data.length) {
          const lat = geolocation.coords.latitude;
          const lon = geolocation.coords.longitude;
          const response = await fetchWeather(lat, lon);
          this.setState({ ...this.state, data: convertWeatherData(response) });
        }
      });
    } else {
      console.log('this app requires geolocation for use');
    }
  }

  renderDays() {
    const { data } = this.state;
    return data.map(dayData => <Card {...dayData} key={dayData.day} />);
  }

  render() {
    return (
      <div className="Weather-card-container">
        {this.renderDays()}
      </div>
    );
  }
}
