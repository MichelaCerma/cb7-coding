import { weatherData, WeatherEl } from "./utils/fn.js";

const root = document.querySelector("#root");

const button = document.createElement("button");
const form = document.createElement("form");
const input = document.createElement("input");
const submit = document.createElement("input");

input.setAttribute("type", "text");
submit.setAttribute("type", "submit");
form.className = "form";
input.className = "text";
submit.className = "submit";

button.textContent = "click";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  weatherData(e.srcElement[0].value).then((data) => {
    console.log(data);
    root.append(WeatherEl(data));
  });
});

form.append(input, submit);
root.appendChild(form);
