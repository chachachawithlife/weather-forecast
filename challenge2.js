var weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

// Log today's weather conditions to the console.

function todaysWeather(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Today"){
            console.log(arrObj[i].conditions);
            }
    }
}

todaysWeather(weatherForecast)

// Log Saturday's high temperature to the console.

function saturdayHighTemp(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Saturday"){
            console.log(arrObj[i].temperature.high);
            }
    }
}

saturdayHighTemp(weatherForecast)

// Log Saturday's sunrise time to the console.

function saturdaySunriseTime(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Saturday"){
            console.log(arrObj[i].astronomy.sunrise);
            }
    }
}

saturdaySunriseTime(weatherForecast)

// Log Sunday's conditions to the console.

function sundayCons(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Sunday"){
            console.log(arrObj[i].conditions);
            }
    }
}

sundayCons(weatherForecast)

// Log Sunday's sunset time to the console.

function sundaySunsetTime(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Sunday"){
            console.log(arrObj[i].astronomy.sunset);
            }
    }
}

sundaySunsetTime(weatherForecast)

// Use string template literals to build few sentences about the weather forecast for Sunday. (Example: "The high on Sunday will be 47 and the low will be 35. We're predicting a chance of rain. The sun will rise at 7:45 AM and set at 5:07 PM.")

function sundayForecast(arrObj){
    for (let i = 0; i < arrObj.length; i++){
        if (arrObj[i].day == "Sunday"){
            let sundayWeather = `The high on Sunday will be ${arrObj[i].temperature.high} and the low will be ${arrObj[i].temperature.low}. We're predicting a ${arrObj[i].conditions}. The sun will rise at ${arrObj[i].astronomy.sunrise} and set at ${arrObj[i].astronomy.sunset}.`
            console.log(sundayWeather);
            }
    }
}

sundayForecast(weatherForecast)
