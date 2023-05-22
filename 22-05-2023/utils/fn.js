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
  const iconWeather = document.createElement("img");
  const todayData = document.createElement("p");

  iconWeather.setAttribute("src", data.current.condition.icon);
  temperature.className = "temperature";
  cityname.className = "city";
  container.className = "container";
  todayData.className = "data";

  todayData.textContent = data.location.localtime;
  cityname.textContent = data.location.name;
  weather.textContent = data.current.condition.text;

  temperature.textContent = data.current.temp_c + "°";
  container.append(cityname, todayData, weather, temperature, iconWeather);
  return container;
};
