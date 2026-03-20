export const processWeatherData = (json) => {
	const city = json.resolvedAddress;
	const temp = json.currentConditions.temp;
	const feelsLike = json.currentConditions.feelslike;
	const humidity = json.currentConditions.humidity;
	const condition = json.currentConditions.conditions;
	const uvindex = json.currentConditions.uvindex;
	const precipitation = json.currentConditions.precip;
	const icon = json.currentConditions.icon;
	const forecast = [];

	for (let i = 0; i < 7; i++) {
		const date = json.days[i].datetime;
		const tempMax = json.days[i].tempmax;
		const tempMin = json.days[i].tempmin;
		const condition = json.days[i].conditions;
		const icon = json.days[i].icon;
		forecast.push({ date, tempMax, tempMin, condition, icon });
	}

	return {
		city,
		temp,
		feelsLike,
		humidity,
		condition,
		uvindex,
		precipitation,
		icon,
		forecast,
	};
};

export const convertTemp = (temp, unit) => {
	if (unit === "C") return +temp.toFixed(1);
	if (unit === "F") {
		return +((temp * 9) / 5 + 32).toFixed(1);
	}
};
