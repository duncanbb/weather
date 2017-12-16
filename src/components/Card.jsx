import React from 'react';

const Card = (props = { max: '45°', min: '32°', day: 'Today', description: 'cloudy' }) =>
  <div className='weather-card'>
    <div className='weather-card-day'>
      {props.day}
    </div>
    <img alt={props.description} src={require(`../../public/${props.description}.png`)} />
    <span className='max'>
      {props.max}
    </span>
    <span className='min'>
      {props.min}
    </span>
  </div>;

export default Card;
