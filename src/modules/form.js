import { getWeatherData } from "./api.js";
import {
	hideError,
	hideLoader,
	renderWeather,
	setTheme,
	showError,
	showLoader,
} from "./ui.js";
import { processWeatherData } from "./weatherData.js";

let currentUnit = "C";
let lastData = null;

export const initForm = () => {
	const form = document.querySelector(".app__form");
	form.addEventListener("submit", async (e) => {
		e.preventDefault();

		try {
			showLoader();
			hideError();

			const input = form.querySelector(".app__form-input").value;
			const rawData = await getWeatherData(input);
			lastData = processWeatherData(rawData);
			renderWeather(lastData, currentUnit);
			setTheme(lastData.icon);
		} catch (error) {
			showError("Location not found. Please try again.");
		} finally {
			hideLoader();
		}
	});

	const celsiusBtn = document.querySelector(".app__header-btn--celsius");
	celsiusBtn.addEventListener("click", () => {
		currentUnit = "C";
		celsiusBtn.classList.add("app__header-btn--active");
		fahrenheitBtn.classList.remove("app__header-btn--active");

		if (lastData) {
			renderWeather(lastData, currentUnit);
			setTheme(lastData.icon);
		}
	});

	const fahrenheitBtn = document.querySelector(".app__header-btn--fahrenheit");
	fahrenheitBtn.addEventListener("click", () => {
		currentUnit = "F";
		fahrenheitBtn.classList.add("app__header-btn--active");
    	celsiusBtn.classList.remove("app__header-btn--active");
		
		if (lastData) {
			renderWeather(lastData, currentUnit);
			setTheme(lastData.icon);
		}
	});
};
