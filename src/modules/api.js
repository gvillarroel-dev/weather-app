const API_KEY = process.env.API_KEY;

export const getWeatherData = async (location) => {
	const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;

	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(`Error ${res.status}: ${res.statusText}`);
	}

	const data = await res.json();
	return data;
};
