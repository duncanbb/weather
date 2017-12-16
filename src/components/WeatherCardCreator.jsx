import React, { Component } from 'react';
import Card from './Card';
import { weatherKey } from '../hideme';
import { getWeather } from '../utilities';
import './WeatherCardCreator.css';

export default class WeatherCardCreator extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geolocation => {
        const { data } = this.state;
        if (geolocation && !data.length) {
          const lat = geolocation.coords.latitude;
          const lon = geolocation.coords.longitude;
          const baseUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=`;
          fetch(`${baseUrl}${weatherKey}`)
            .then(response => {
              if (response.ok) {
                return response.json();
              } else {
                console.log("there's been an error fetching the weather data");
              }
            })
            .then(json => {
              this.setState({ ...this.state, data: getWeather(json) });
            });
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
