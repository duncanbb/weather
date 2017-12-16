import React from 'react';

const Card = (props = { max: '45°', min: '32°', day: 'Today', description: 'cloudy' }) =>
  <div className='weather-card'>
    <div className='weather-card-day'>
      {props.day}
    </div>
    <img className='weather-card-img' alt={props.description} src={require(`../../public/${props.description}.png`)} />
    <div className='card-details'>
      <div className='max'>
        High: {props.max}
      </div>
      <div className='min'>
        Low: {props.min}
      </div>
    </div>
  </div>;

export default Card;
