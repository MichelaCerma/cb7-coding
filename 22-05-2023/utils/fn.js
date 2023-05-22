export const weatherData = async (city) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=50513ad9d062454786f124818232205&q=${city}&days=1&aqi=no&alerts=no`
  );
  const data = await res.json();

  return data;
};

export const WeatherEl = (data) => {
  const container = document.createElement("div");
  const cityname = document.createElement("h1");
  const weather = document.createElement("h2");
  const temperature = document.createElement("h2");
  //   const iconWeather = document.createElement("img");
  const todayData = document.createElement("p");
  const temperatureC = document.createElement("span");
  const containerInfo = document.createElement("div");
  const humContainer = document.createElement("div");

  const windContainer = document.createElement("div");
  const precContainer = document.createElement("div");
  const windImg = document.createElement("i");
  const windMis = document.createElement("p");
  const wind = document.createElement("p");

  //   const windDire = document.createElement("p");
  const humidity = document.createElement("p");
  const humImg = document.createElement("i");
  const humidityText = document.createElement("p");

  const prec = document.createElement("p");
  const precImg = document.createElement("i");
  const precText = document.createElement("p");

  //   iconWeather.setAttribute("src", data.current.condition.icon);
  weather.className = "weather";
  temperature.className = "temperature";
  cityname.className = "city";
  container.className = "container";
  todayData.className = "data";
  temperatureC.className = "C";
  containerInfo.className = "container-info";

  windContainer.className = "wind-container";
  windMis.className = "wind-mis";
  windImg.className = "fa-solid fa-wind";
  wind.className = "wind";

  humContainer.className = "hum-container";
  humImg.className = "fa-solid fa-droplet";
  humidity.className = "hum-num";
  humidityText.className = "hum-text";

  precContainer.className = "prec-container";
  prec.className = "prec-num";
  precImg.className = "fa-solid fa-cloud-rain";
  precText.className = "prec-text";

  temperatureC.textContent = "°";
  cityname.textContent = data.location.name;
  todayData.textContent = data.location.localtime;

  wind.textContent = "Wind";
  windMis.textContent = data.current.wind_kph + "km/h";
  weather.textContent = data.current.condition.text;
  temperature.textContent = data.current.temp_c;
  humidityText.textContent = "Humidity";
  humidity.textContent = data.current.humidity + "%";
  precText.textContent = "Precipitation";
  prec.textContent = data.current.precip_mm + "%";

  precContainer.append(precImg, prec, precText);
  windContainer.append(windImg, windMis, wind);
  humContainer.append(humImg, humidity, humidityText);
  containerInfo.append(windContainer, humContainer, precContainer);
  temperature.appendChild(temperatureC);
  container.append(
    cityname,
    todayData,
    weather,
    temperature,
    // iconWeather,
    containerInfo
  );
  return container;
};
