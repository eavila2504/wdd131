document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

//weather//
const temperature = 10; // degrees Celsius
const windSpeed = 5; // km/h


function calculateWindChill(tempC, windKph) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKph, 0.16) +
    0.3965 * tempC * Math.pow(windKph, 0.16)
  );
}


const windChillEl = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillEl.textContent = `${windChill.toFixed(1)}°C`;
} else {
   windChillEl.textContent = `${temperature}°C`;
}