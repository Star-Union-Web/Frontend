const apiKey = "e579453686aa462ba39194024241612";

const fetchWeather = async () => {
    const city = document.getElementById("city-input").value || "Harrisonburg";
    try{
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`);

        const data = await response.json();
        const forecastData = await forecastResponse.json();
        console.log(data , forecastData);

        document.getElementById("city-name").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("city-name-d").textContent = `${data.location.name}, ${data.location.country}`;
        document.getElementById("temp").textContent = `${data.current.temp_c}°C`;
        document.getElementById("Temperature").textContent = `${data.current.temp_c}°`;
        document.getElementById("condition").textContent = `Condition: ${data.current.condition.text}`;
        document.getElementById("humidity").textContent = `${data.current.humidity}%`;
        document.getElementById("wind-speed").textContent = `${data.current.wind_kph} km/h`;
        document.getElementById("cloudy").textContent = `${data.current.cloud}%`;
        // date (day , month, year)
        document.getElementById("date").textContent = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.src = `https:${data.current.condition.icon}`;
        weatherIcon.alt = data.current.condition.text;

          // Change the background image based on condition
        const weatherBg = document.getElementById("weather-BG");
        const condition = data.current.condition.text.toLowerCase();
        if (condition.includes("rain")) {
            weatherBg.style.backgroundImage = "url('./assets/img/rainy.jpg')";
        } else if (condition.includes("clear")) {
            weatherBg.style.backgroundImage = "url('./assets/img/clear.jpg')";
        } else if (condition.includes("cloud")) {
            weatherBg.style.backgroundImage = "url('./assets/img/cloudy.jpg')";
        }
        else if (condition.includes("snow")) {
            weatherBg.style.backgroundImage = "url('./assets/img/snowy.jpg')";
        }
        else if (condition.includes("thunder")) {
            weatherBg.style.backgroundImage = "url('./assets/img/thunder.jpg')";
        }
        else if (condition.includes("storm")) {
            weatherBg.style.backgroundImage = "url('./assets/img/storm.jpg')";
        }
        else if (condition.includes("mist")) {
            weatherBg.style.backgroundImage = "url('./assets/img/mist.jpg')";
        }
        else if (condition.includes("sunny")) {
            weatherBg.style.backgroundImage = "url('./assets/img/sunny.jpg')";
        }
        else if (condition.includes("overcast")) {
            weatherBg.style.backgroundImage = "url('./assets/img/overcast.jpg')";
        }
        else {
            weatherBg.style.backgroundImage = "url('./assets/img/clear.jpg')";
        }


         // 5-Day Forecast
         const forecastContainer = document.getElementById("forecast-container");
         forecastContainer.innerHTML = ""; // Clear previous data
 
         forecastData.forecast.forecastday.forEach(day => {
             forecastContainer.innerHTML += `
                 <div class="text-center bg-gray-700 p-2 rounded flex flex-col items-center">
                     <p class="lg:text-sm text-xs mb-2">${new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                     <div class="bg-blue-500 rounded-t-md w-6" style="height: ${day.day.avgtemp_c * 3}px;"></div>
                     <p class="lg:text-sm text-xs mt-2">${day.day.avgtemp_c}°</p>
                 </div>
             `;
         });
        
    }
    catch (error) {
        console.error("Error fetching weather data", error)
        alert("Failed to fetch weather data. Please try again.");

    }
};


// defualt weather
fetchWeather("Harrisonburg");