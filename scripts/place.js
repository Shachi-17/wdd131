document.getElementById("current-year").textContent = new Date().getFullYear();

document.getElementById("last-modified").textContent = document.lastModified;

function calculateWindChill(temperature, windSpeed, unit) {
    if (isNaN(temperature) || isNaN(windSpeed)) {
        return "Invalid input";
    }

    if (
        (unit === "metric" && temperature <= 10 && windSpeed > 4.8) ||
        (unit === "imperial" && temperature <= 50 && windSpeed > 3)
    ) {
        return unit === "metric"
            ? (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2)
            : (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}


const temperature = 25;
const windSpeed = 12;
const unit = "metric";


const windChill = calculateWindChill(temperature, windSpeed, unit);


document.getElementById("wind-chill").textContent = windChill;