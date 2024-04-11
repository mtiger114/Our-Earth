var searchCity = document.querySelector("input");

// Main Forecast Elements
var cityName = document.querySelector(".main-forecast-left .name");
var thisMonth = document.querySelector(".main-forecast-left .month");
var thisText = document.querySelector(".main-forecast-left .text");
var pressure = document.querySelector(".main-forecast-right .pressure");
var sunrise = document.querySelector(".main-forecast-right .sunrise");
var sunset = document.querySelector(".main-forecast-right .sunset");
var degree = document.querySelector(".main-forecast-right .degree");

// Day Elements
var forecastDayNames = document.querySelectorAll(".day .forecastDayName");
var forecastDayImages = document.querySelectorAll(".day img");
var maxDegreeForecastDays = document.querySelectorAll(
  ".day .maxDegreeForecastDay"
);
var minDegreeForecastDays = document.querySelectorAll(
  ".day .minDegreeForecastDay"
);

// Days of the week
var Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

async function getWeather(searchCity) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e1baaf75a72f4cd8a4462359242703&q=${searchCity}&days=7`
  );
  var data = await response.json();
  displayMainForecast(data);
  displayWeeklyForecast(data);
}

getWeather("cairo");

function displayMainForecast(mainForecast) {
  cityName.innerHTML = `${mainForecast.location.name}, ${mainForecast.location.region}`;
  var date = new Date(mainForecast.forecast.forecastday[0].date);
  thisMonth.innerHTML = `${date.getDate()} ${months[date.getMonth()]}`;
  thisText.innerHTML = mainForecast.forecast.forecastday[0].day.condition.text;
  pressure.innerHTML = `${mainForecast.current.pressure_mb} 1hr PA`;
  sunrise.innerHTML = mainForecast.forecast.forecastday[0].astro.sunrise;
  sunset.innerHTML = mainForecast.forecast.forecastday[0].astro.sunset;
  degree.innerHTML = `${mainForecast.forecast.forecastday[0].day.maxtemp_c}&#176;C`;
}

function displayWeeklyForecast(data) {
  for (let i = 0; i < 7; i++) {
    let forecast = data.forecast.forecastday[i];
    let date = new Date(forecast.date);
    let dayOfWeek = Days[date.getDay()];

    forecastDayNames[i].innerHTML = dayOfWeek;
    forecastDayImages[i].setAttribute(
      "src",
      `https:${forecast.day.condition.icon}`
    );
    maxDegreeForecastDays[i].innerHTML = `${forecast.day.maxtemp_c}&#176;C`;
    minDegreeForecastDays[i].innerHTML = `${forecast.day.mintemp_c}&#176;C`;
  }
}

searchCity.addEventListener("input", function (e) {
  getCity = e.target.value;
  getWeather(getCity);
});
