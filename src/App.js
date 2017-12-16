import React, { Component } from 'react';
import './App.css';
import WeatherCardCreator from './components/WeatherCardCreator';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>5 Day Forecast</h1>
        </header>
        <WeatherCardCreator />
        <p className='App-intro' />
      </div>
    );
  }
}

export default App;
