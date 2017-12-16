const kelvinToFahrenheit = kelvin => (kelvin * 9 / 5 - 459.67) | 0;

const getWeather = weatherData => {
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
