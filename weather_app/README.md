
# Weatherly

Weatherly is a weather app that provides real-time weather forecasts and air pollution data. Built using **HTML**, **Tailwind CSS**, and **JavaScript**, the app fetches live weather information from various APIs. The app is fully responsive and deployed on **Vercel**.

![image](https://github.com/user-attachments/assets/4108711f-f2b8-4f3f-b244-e57ff57191df)


## Features

- **Weather Forecast**: Get real-time weather data for your selected cities.
- **Air Pollution Data**: View air quality information, including pollutants and air quality index (AQI).
- **City Management**: Manage a list of cities and view their respective weather and air pollution data.
- **Responsive Design**: The app is fully responsive and works across desktop, tablet, and mobile devices.

## Tech Stack

- **HTML**: Provides the structure and content of the app.
- **Tailwind CSS**: Used for utility-first CSS styling to create a modern and responsive design.
- **JavaScript**: Handles the dynamic functionality such as fetching data from APIs and updating the UI.
- **FontAwesome**: Used for icons in the navigation menu.
- **OpenWeather API**: Used to fetch weather forecast data.
- **OpenWeather Air Pollution API**: Used to fetch air quality data.
- **Netlify**: Hosting platform for the deployment.


## Deployment

The app is hosted and deployed on **Netlify**. You can access the live app here:  
[Weatherly - Live Demo](https://lustrous-licorice-5d624f.netlify.app/)

## API Integration

The app integrates with the following APIs:

### 1. **Weather Forecast API (OpenWeather)**

Weatherly fetches weather forecast data from OpenWeather’s API. The data includes:

- Temperature
- Weather condition (e.g., sunny, rainy)
- Wind speed
- Humidity

### 2. **Air Pollution Data API (OpenWeather)**

The app fetches air pollution data, including:

- Air Quality Index (AQI)
- Pollutants (PM2.5, PM10, CO, NO2, SO2, O3)
  
Data is retrieved using JavaScript's `fetch()` function, ensuring a smooth and dynamic user experience.

## Usage

1. **Search for a City**: Enter a city name to get its weather forecast and air quality data.
2. **View Forecast**: Navigate to the **Forecast** section to see weather data (temperature, wind, humidity).
3. **View Air Pollution Data**: Navigate to the **Air Pollution** section to view AQI and other air quality details.
4. **Manage Cities**: Add or remove cities and switch between them for updated weather information.




