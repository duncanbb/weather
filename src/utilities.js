import { weatherKey } from './hideme';

export const kelvinToFahrenheit = kelvin => (kelvin * 9 / 5 - 459.67) | 0;

export const convertWeatherData = weatherData => {
  const date = new Date();
  const today = date.getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const { list } = weatherData;
  const processed = list.map((weatherForDay, index) => {
    const { max, min } = weatherForDay.temp;
    return {
      day: days[(today + index) % 7],
      description: weatherForDay.weather[0].main,
      max: kelvinToFahrenheit(max),
      min: kelvinToFahrenheit(min)
    };
  });
  return processed;
};

export const fetchWeather = async (lat, lon) => {
  const baseUrl = `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=5&APPID=`;
  const fullUrl = `${baseUrl}${weatherKey}`;
  try {
    let res = await fetch(fullUrl);
    return res.json();
  } catch (e) {
    console.log("there's been an error retrieving the weather data, please check your key");
  }
};
