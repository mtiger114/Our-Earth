var searchCity = document.querySelector("input");
//>>>>>>>>>>>>>>>>>>>>>>>>>>> Main Forecast <<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var cityName = document.querySelector(".main-forecast-left .name");
var thisMonth = document.querySelector(".main-forecast-left .month");
var thisText = document.querySelector(".main-forecast-left .text");
var pressure = document.querySelector(".main-forecast-right .pressure");
var sunrise = document.querySelector(".main-forecast-right .sunrise");
var sunset = document.querySelector(".main-forecast-right .sunset");
var degree = document.querySelector(".main-forecast-right .degree");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day One <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay1Name = document.querySelector(".day1 .forecastDay1Name");
var forecastDay1Image = document.querySelector(".day1 img");
var maxDegreeForecastDay1 = document.querySelector(
  ".day1 .maxDegreeForecastDay1"
);
var minDegreeForecastDay1 = document.querySelector(
  ".day1 .minDegreeForecastDay1"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Two <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay2Name = document.querySelector(".day2 .forecastDay2Name");
var forecastDay2Image = document.querySelector(".day2 img");
var maxDegreeForecastDay2 = document.querySelector(
  ".day2 .maxDegreeForecastDay2"
);
var minDegreeForecastDay2 = document.querySelector(
  ".day2 .minDegreeForecastDay2"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Three <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay3Name = document.querySelector(".day3 .forecastDay3Name");
var forecastDay3Image = document.querySelector(".day3 img");
var maxDegreeForecastDay3 = document.querySelector(
  ".day3 .maxDegreeForecastDay3"
);
var minDegreeForecastDay3 = document.querySelector(
  ".day3 .minDegreeForecastDay3"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Four <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay4Name = document.querySelector(".day4 .forecastDay4Name");
var forecastDay4Image = document.querySelector(".day4 img");
var maxDegreeForecastDay4 = document.querySelector(
  ".day4 .maxDegreeForecastDay4"
);
var minDegreeForecastDay4 = document.querySelector(
  ".day4 .minDegreeForecastDay4"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Five <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay5Name = document.querySelector(".day5 .forecastDay5Name");
var forecastDay5Image = document.querySelector(".day5 img");
var maxDegreeForecastDay5 = document.querySelector(
  ".day5 .maxDegreeForecastDay5"
);
var minDegreeForecastDay5 = document.querySelector(
  ".day5 .minDegreeForecastDay5"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Six <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay6Name = document.querySelector(".day6 .forecastDay6Name");
var forecastDay6Image = document.querySelector(".day6 img");
var maxDegreeForecastDay6 = document.querySelector(
  ".day6 .maxDegreeForecastDay6"
);
var minDegreeForecastDay6 = document.querySelector(
  ".day6 .minDegreeForecastDay6"
);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Day Seven <<<<<<<<<<<<<<<<<<<<<<<<<<<<\\
var forecastDay7Name = document.querySelector(".day7 .forecastDay7Name");
var forecastDay7Image = document.querySelector(".day7 img");
var maxDegreeForecastDay7 = document.querySelector(
  ".day7 .maxDegreeForecastDay7"
);
var minDegreeForecastDay7 = document.querySelector(
  ".day7 .minDegreeForecastDay7"
);

//--------------------- Days of the week ---------------------\\
//--------------------- Months of the year ---------------------\\
var Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function getWeather(searchCity) {
  var response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=e1baaf75a72f4cd8a4462359242703&q=${searchCity}}&days=7`
  );
  var data = await response.json();
  displayMainForecast(data);
  displayDay1(data);
  displayDay2(data);
  displayDay3(data);
  displayDay4(data);
  displayDay5(data);
  displayDay6(data);
  displayDay7(data);
}
getWeather("cairo");

var hestory = new Date();

//>>>>>>>>>>>>>>>>>>>>>> Day Of Week <<<<<<<<<<<<<<<<<<<<<<<<<<\\
var getDay = hestory.getDay();
var getDayOfWeek = Days[getDay];
// console.log(getDayOfWeek);

//>>>>>>>>>>>>>>>>>>>>>> Day Of Month <<<<<<<<<<<<<<<<<<<<<<<<<<\\
var getDayOfMonth = hestory.getDate();
// console.log(getDayOfMonth);

//>>>>>>>>>>>>>>>>>>>>>> Month <<<<<<<<<<<<<<<<<<<<<<<<<<\\
var getMonth = hestory.getMonth();
var getMonthOfYear = months[getMonth];
// console.log(getMonth);

function displayMainForecast(mainForecast) {
  cityName.innerHTML = `${mainForecast.location.name} , ${mainForecast.location.region}`;
  thisMonth.innerHTML = `${getDayOfMonth} ${getMonthOfYear} `;
  thisText.innerHTML = mainForecast.forecast.forecastday[0].day.condition.text;
  pressure.innerHTML = `${mainForecast.current.pressure_mb} 1hr PA`;
  sunrise.innerHTML = mainForecast.forecast.forecastday[0].astro.sunrise;
  sunset.innerHTML = mainForecast.forecast.forecastday[0].astro.sunset;
  degree.innerHTML = `${mainForecast.forecast.forecastday[0].day.maxtemp_c}&#176;C`;
}

function displayDay1(day1) {
  forecastDay1Name.innerHTML = getDayOfWeek.slice(0, 3);
  forecastDay1Image.setAttribute(
    "src",
    `https:${day1.forecast.forecastday[0].day.condition.icon}`
  );
  maxDegreeForecastDay1.innerHTML = `${day1.forecast.forecastday[0].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay1.innerHTML = `${day1.forecast.forecastday[0].day.mintemp_c}&#176;C`;
}

function displayDay2(day2) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay2Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay2Image.setAttribute(
    "src",
    `https:${day2.forecast.forecastday[1].day.condition.icon}`
  );
  maxDegreeForecastDay2.innerHTML = `${day2.forecast.forecastday[1].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay2.innerHTML = `${day2.forecast.forecastday[1].day.mintemp_c}&#176;C`;
}

function displayDay3(day3) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay3Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay3Image.setAttribute(
    "src",
    `https:${day3.forecast.forecastday[2].day.condition.icon}`
  );
  maxDegreeForecastDay3.innerHTML = `${day3.forecast.forecastday[2].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay3.innerHTML = `${day3.forecast.forecastday[2].day.mintemp_c}&#176;C`;
}
function displayDay4(day4) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay4Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay4Image.setAttribute(
    "src",
    `https:${day4.forecast.forecastday[3].day.condition.icon}`
  );
  maxDegreeForecastDay4.innerHTML = `${day4.forecast.forecastday[3].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay4.innerHTML = `${day4.forecast.forecastday[3].day.mintemp_c}&#176;C`;
}
function displayDay5(day5) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay5Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay5Image.setAttribute(
    "src",
    `https:${day5.forecast.forecastday[4].day.condition.icon}`
  );
  maxDegreeForecastDay5.innerHTML = `${day5.forecast.forecastday[4].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay5.innerHTML = `${day5.forecast.forecastday[4].day.mintemp_c}&#176;C`;
}
function displayDay6(day6) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay6Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay6Image.setAttribute(
    "src",
    `https:${day6.forecast.forecastday[5].day.condition.icon}`
  );
  maxDegreeForecastDay6.innerHTML = `${day6.forecast.forecastday[5].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay6.innerHTML = `${day6.forecast.forecastday[5].day.mintemp_c}&#176;C`;
}
function displayDay7(day7) {
  getDay++;
  if (getDay == 7) {
    getDay = 0;
  }
  forecastDay7Name.innerHTML = Days[getDay].slice(0, 3);
  forecastDay7Image.setAttribute(
    "src",
    `https:${day7.forecast.forecastday[6].day.condition.icon}`
  );
  maxDegreeForecastDay7.innerHTML = `${day7.forecast.forecastday[6].day.maxtemp_c}&#176;C`;
  minDegreeForecastDay7.innerHTML = `${day7.forecast.forecastday[6].day.mintemp_c}&#176;C`;
}

searchCity.addEventListener("input", function (e) {
  getCity = e.target.value;
  getWeather(getCity);
});
