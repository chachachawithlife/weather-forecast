var todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

// Log today's high temperature to the console.

console.log(todaysWeather.temperature.high);

// Log today's low temperature to the console.

console.log(todaysWeather.temperature.low);

// Log today's conditions to the console.

console.log(todaysWeather.conditions);

// Log today's sunrise time to the console.

console.log(todaysWeather.astronomy.sunrise);

// Use string template literals to create a more detailed description of today's weather.

let weather = `It's currently ${todaysWeather.conditions} and ${todaysWeather.temperature.high} degrees. The sun rose this morning at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}. The temperature is expected to drop to a low of ${todaysWeather.temperature.low} degrees tonight.`;
console.log(weather);