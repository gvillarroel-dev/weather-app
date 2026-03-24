import { convertTemp, formatDay, getWeatherIcon } from "./weatherData.js";

let clockInterval = null;

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");

export const showLoader = () => {
	loader.setAttribute("aria-hidden", "false");
	loader.hidden = false;
};

export const hideLoader = () => {
	loader.setAttribute("aria-hidden", "true");
	loader.hidden = true;
};

export const showError = (message) => {
	error.setAttribute("aria-hidden", "false");
	error.hidden = false;
	error.textContent = message;
};

export const hideError = () => {
	error.setAttribute("aria-hidden", "true");
	error.hidden = true;
};

export const renderWeather = (data, unit) => {
	const container = document.querySelector(".weather");
	container.innerHTML = "";

	// ------------ primary card ------------
	const primaryCard = document.createElement("div");
	primaryCard.classList.add("weather__principal");

	// city
	const city = document.createElement("p");
	city.classList.add("weather__city");
	city.textContent = data.city;

	// ---- clock ----
	const hour = document.createElement("p");
	hour.classList.add("weather__hour");

	if (clockInterval) clearInterval(clockInterval);
	const updateClock = () => {
		hour.textContent = new Date().toLocaleTimeString("en-US", {
			timeZone: data.timezone,
			hour: "2-digit",
			minute: "2-digit",
		});
	}
	updateClock();
	clockInterval = setInterval(updateClock, 1000);

	// icon
	const icon = document.createElement("div");
	icon.classList.add("weather__icon");
	icon.textContent = getWeatherIcon(data.icon);

	// temperature
	const temp = document.createElement("p");
	temp.classList.add("weather__temp");
	temp.textContent = `${convertTemp(data.temp, unit)}°${unit}`;

	// feelslike
	const condition = document.createElement("p");
	condition.classList.add("weather__condition");
	condition.textContent = data.condition;

	primaryCard.appendChild(city);
	primaryCard.appendChild(hour);
	primaryCard.appendChild(condition);
	primaryCard.appendChild(icon);
	primaryCard.appendChild(temp);

	// ------------ secondary card ------------
	const secondaryCard = document.createElement("div");
	secondaryCard.classList.add("weather__secondary");

	const stats = [
		{ label: "Humidity", value: `${data.humidity}%`, icon: "💧" },
		{ label: "Feels Like", value: `${convertTemp(data.feelsLike, unit)}°${unit}`, icon: "🌡️" },
		{ label: "UV Index", value: `${data.uvindex}`, icon: "☀️" },
		{ label: "Precipitation", value: `${data.precipitation}mm`, icon: "🌧️" }
	];

	stats.forEach((item) => {
		const card = document.createElement("div");
		card.classList.add("weather__stat-card");

		const icon = document.createElement("div");
		icon.classList.add("weather__stat-icon");
		icon.textContent = item.icon;

		const header = document.createElement("p");
		header.classList.add("weather__stat-label");
		header.textContent = item.label;

		const value = document.createElement("p");
		value.classList.add("weather__stat-value");
		value.textContent = item.value;

		card.appendChild(icon);
		card.appendChild(header);
		card.appendChild(value);

		secondaryCard.appendChild(card);
	});

	// ------------ forecast card ------------
	const forecast = document.createElement("div");
	forecast.classList.add("weather__forecast");

	data.forecast.forEach((item) => {
		const card = document.createElement("div");
		card.classList.add("forecast__card");

		const day = document.createElement("p");
		day.classList.add("forecast__day");
		day.textContent = formatDay(item.date);

		const dayCondition = document.createElement("div");

		const icon = document.createElement("span");
		icon.classList.add("forecast__icon");
		icon.textContent = getWeatherIcon(item.icon);

		const condition = document.createElement("p");
		condition.classList.add("forecast__condition");
		condition.textContent = item.condition;

		dayCondition.appendChild(icon);
		dayCondition.appendChild(condition);

		const max = document.createElement("p");
		max.classList.add("forecast__maxtemp");
		max.textContent = `${convertTemp(item.tempMax, unit)}°`;

		const min = document.createElement("p");
		min.classList.add("forecast__mintemp");
		min.textContent = `${convertTemp(item.tempMin, unit)}°`;

		card.appendChild(day);
		card.appendChild(dayCondition);
		card.appendChild(max);
		card.appendChild(min);

		forecast.appendChild(card);
	});

	// ------------ append container ------------
	container.appendChild(primaryCard);
	container.appendChild(secondaryCard);
	container.appendChild(forecast);

	container.hidden = false;
	container.setAttribute("aria-hidden", "false");
	return container;
};

export const setTheme = (icon) => {
    const body = document.querySelector("body");
    body.className = "";

    if (icon.includes("sunny") || icon.includes("clear")) {
        body.classList.add("theme-sunny");
    } else if (icon.includes("cloud")) {
        body.classList.add("theme-cloudy");
    } else if (icon.includes("rain")) {
        body.classList.add("theme-rainy");
    } else if (icon.includes("snow")) {
        body.classList.add("theme-snow");
    } else if (icon.includes("night")) {
        body.classList.add("theme-night");
    } else {
        body.classList.add("theme-default");
    }
};

