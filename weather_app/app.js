let input = document.querySelector('.city_input');
let search = document.querySelector('.search');
let api_key = '824e49a9e9dbddd8f6d63afd203f6abb';
let close = document.querySelector('.close');
let menu = document.querySelector('.menu');

// Add event listener for the close button
function get_city() {
  let city_name = input.value.trim();

  if (!city_name) {
    alert('Please enter a city name!');
    return;
  }
  input.value = '';

  let api_url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=1&appid=${api_key}`;

  fetch(api_url)
    .then(res => res.json())
    .then(data => {
      if (data.length === 0) {
        alert("City not found. Please try again.");
        return;
      }
      let { name, lat, lon, country, state } = data[0];
      get_details(name, lat, lon, country, state);
      get_air_quality(lat, lon);  // Fetch air quality data
    })
    .catch(() => {
      alert("Failed to fetch city data. Please check your internet connection or API key.");
    });
}

function get_details(name, lat, lon, country, state) {
  let api_url_2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;
  let forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`;

  fetch(api_url_2)
    .then(res => res.json())
    .then(data => {
      console.log("Current Weather Data:", data);
      update_weather_info(name, data);
    })
    .catch(() => {
      alert("Failed to fetch weather data. Please check your internet connection or API key.");
    });

  fetch(forecast)
    .then(res => res.json())
    .then(data => {
      console.log("Forecast Data:", data);
      update_forecast(data);
    })
    .catch(() => {
      alert("Failed to fetch forecast data. Please check your internet connection or API key.");
    });
}

function get_air_quality(lat, lon) {
  let api_url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${api_key}`;

  fetch(api_url)
    .then(res => res.json())
    .then(data => {
      console.log("Air Quality Data:", data);
      update_air_quality(data);
    })
    .catch(() => {
      alert("Failed to fetch air quality data. Please check your internet connection or API key.");
    });
}

function update_weather_info(city, data) {
  document.querySelector('.city').textContent = city;
  document.querySelector('.text-lg.text-gray-500').textContent = data.weather[0].description;
  document.querySelector('.text-6xl.font-bold').textContent = `${Math.round(data.main.temp - 273.15)}°C`; // Convert from Kelvin to Celsius

  document.querySelector('.grid.gap-4 .flex.justify-between:nth-child(1) .font-bold').textContent = `${data.main.humidity}%`;
  document.querySelector('.grid.gap-4 .flex.justify-between:nth-child(2) .font-bold').textContent = `${Math.round(data.wind.speed * 3.6)} km/h`; // Convert m/s to km/h
  document.querySelector('.grid.gap-4 .flex.justify-between:nth-child(3) .font-bold').textContent = `${data.main.pressure} hPa`;
  document.querySelector('.grid.gap-4 .flex.justify-between:nth-child(4) .font-bold').textContent = `${data.uvi ? data.uvi : 'N/A'}`; // If UV index is not available, display 'N/A'
}

function update_forecast(data) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastElems = document.querySelectorAll('.grid.grid-cols-2 .flex.flex-col');

  // Initialize an object to hold the forecast for each day
  let forecastByDay = {};

  // Populate the forecastByDay object with the daily forecast data
  data.list.forEach(entry => {
    let date = new Date(entry.dt * 1000);
    let day = days[date.getDay()];

    if (!forecastByDay[day]) {
      forecastByDay[day] = { temp: entry.main.temp, icon: entry.weather[0].icon };
    } else {
      // Average the temperatures for the same day (e.g., if there are multiple entries for a day)
      forecastByDay[day].temp = (forecastByDay[day].temp + entry.main.temp) / 2;
    }
  });

  // Function to determine the icon based on the temperature
  function getIcon(temp) {
    if (temp < 273.15) { // Below 0°C
      return 'fa-snowflake text-blue-300';
    } else if (temp >= 273.15 && temp < 283.15) { // 0°C to 10°C
      return 'fa-cloud text-blue-700';
    } else if (temp >= 283.15 && temp < 293.15) { // 10°C to 20°C
      return 'fa-cloud-sun text-yellow-400';
    } else if (temp >= 293.15 && temp < 303.15) { // 20°C to 30°C
      return 'fa-sun text-yellow-500';
    } else { // Above 30°C
      return 'fa-temperature-high text-red-500';
    }
  }

  // Update the forecast elements with the new data
  let index = 0;
  for (const [day, forecast] of Object.entries(forecastByDay)) {
    if (index >= forecastElems.length) break;

    forecastElems[index].querySelector('span').textContent = day;
    forecastElems[index].querySelector('.fa-solid').className = `fa-solid text-4xl mt-2 ${getIcon(forecast.temp)}`; // Update icon based on temperature
    forecastElems[index].querySelector('.font-bold').textContent = `${Math.round(forecast.temp - 273.15)}°C`; // Convert from Kelvin to Celsius

    index++;
  }
}

function update_air_quality(data) {
  const aqi = data.list[0].main.aqi;

  let rate = document.querySelector('.air-quality-index');
  let aqiText = '';
  let rateClass = ''; // To store the class for the color

  switch (aqi) {
    case 1:
      aqiText = "Good";
      rateClass = 'text-green-500';
      break;
    case 2:
      aqiText = "Fair";
      rateClass = 'text-yellow-500';
      break;
    case 3:
      aqiText = "Moderate";
      rateClass = 'text-orange-500';
      break;
    case 4:
      aqiText = "Poor";
      rateClass = 'text-red-500';
      break;
    case 5:
      aqiText = "Very Poor";
      rateClass = 'text-purple-500';
      break;
    default:
      aqiText = "Unknown";
      rateClass = 'text-gray-500';
  }


  rate.textContent = aqiText;
  rate.className = 'air-quality-index';
  rate.classList.add(rateClass);
  document.querySelector('.air-quality-index').textContent = aqiText;
  document.querySelector('.pm25 .font-bold').textContent = `${data.list[0].components.pm2_5} µg/m³`;
  document.querySelector('.pm10 .font-bold').textContent = `${data.list[0].components.pm10} µg/m³`;
}

search.addEventListener('click', get_city);
