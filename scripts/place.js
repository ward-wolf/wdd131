// Date and last modified 

const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Function to calculate wind chill
// Temporary static numbers
const temperature = 40;
const windSpeed = 16;

function calculateWindChill(temp, wind) {
    if (temp <= 10 && wind > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

document.querySelector("#windChill").textContent = calculateWindChill(temperature, windSpeed);

