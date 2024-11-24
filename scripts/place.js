document.getElementById("current-year").textContent = new Date().getFullYear();

// Set the last modified date in the footer
document.getElementById("last-modified").textContent = document.lastModified;

// Function to calculate wind chill
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

// Example: Update Wind Chill dynamically
const temperature = 25; // Example static value (Celsius)
const windSpeed = 12; // Example static value (km/h)
const unit = "metric"; // Use "metric" for °C and km/h, "imperial" for °F and mph

// Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed, unit);

// Display wind chill
document.getElementById("wind-chill").textContent = windChill;