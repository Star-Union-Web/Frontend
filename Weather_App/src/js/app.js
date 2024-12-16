const apiKey = "e579453686aa462ba39194024241612";

const fetchWeather = async () => {
    const city = document.getElementById("city-input").value || "Harrisonburg";
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();
        console.log(data);

        document.getElementById("city-name").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temperature").textContent = `Temperature:${data.current.temp_c}°C`;
        document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").textContent = `Humidity: ${data.current.humidity}%`;
        document.getElementById("wind-speed").textContent = `Wind Speed: ${data.current.wind_kph} km/h`;

        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.src = `https:${data.current.condition.icon}`;
        weatherIcon.alt = data.current.condition.text;

          // Change the background image based on condition
        const weatherBg = document.getElementById("weather-BG");
        const condition = data.current.condition.text.toLowerCase();
        if (condition.includes("rain")) {
            weatherBg.style.backgroundImage = "url('./assets/img/rainy2.jpg')";
        } else if (condition.includes("clear")) {
            weatherBg.style.backgroundImage = "url('./assets/img/sunny1.jpg')";
        } else if (condition.includes("cloud")) {
            weatherBg.style.backgroundImage = "url('./assets/img/cloudy1.jpg')";
        }
        else if (condition.includes("snow")) {
            weatherBg.style.backgroundImage = "url('./assets/img/snowy1.jpg')";
        }


        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";
        data.forecast.forecastday.forEach(day => {
            forecastContainer.innerHTML += `
                <div class="text-center bg-gray-700 p-2 rounded">
                    <p>${new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}</p>
                    <img src="https:${day.day.condition.icon}" class="mx-auto w-12 h-12" />
                    <p>${day.day.avgtemp_c}°C</p>
                </div>
                `;
            });
        
    }
    catch (error) {
        console.log("Error fetching weather data", error)
        alert("Failed to fetch weather data. Please try again.");

    }
};


// defualt weather
fetchWeather("Harrisonburg");