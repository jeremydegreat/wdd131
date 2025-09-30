document.addEventListener('DOMContentLoaded', () => {

// Get DOM elements
const lastModified = document.getElementById('lastModified');
const temperatureEl = document.getElementById('temperature');
const windEl = document.getElementById('wind');
const windchillEl = document.getElementById('windchill');

//  Dispaly Last modified date
lastModified.textContent = `last modified: ${document.lastModified}`;

//  Display static values
const temperature = 30;
const windSpeed = 9;
temperatureEl.textContent = `${temperature}°C`;
windEl.textContent = `${windSpeed} km/h`;

// Function to calculate windchill
function calculatewindchill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}

// Calculate and display windChill
const windchill = calculatewindchill(temperature, windSpeed);
windchillEl.textContent = windchill;
})


