# THEClima — Weather App

A clean, minimal weather forecast application built as part of [The Odin Project](https://www.theodinproject.com) curriculum. Practices API consumption, async/await, modular JavaScript, and Webpack bundling.

🌐 **Live Demo:** [gvillarroel-dev.github.io/weather-app](https://gvillarroel-dev.github.io/weather-app/)

---

## Features

- Search weather by city name
- Current temperature, feels like, humidity, UV index and precipitation
- 7-day forecast with daily min/max temperatures
- Toggle between °C and °F
- Real-time clock adjusted to the searched city's timezone
- Dynamic background theme that changes based on weather conditions
- Loading indicator while fetching data
- Error handling for invalid locations

---

## Built With

- Vanilla JavaScript (ES6+ modules)
- Webpack 5
- CSS3 with custom properties
- [Visual Crossing Weather API](https://www.visualcrossing.com/)
- [DM Sans + DM Serif Display](https://fonts.google.com/) — Google Fonts

---

## Project Structure

```
src/
├── index.js              # Entry point
├── index.html            # HTML template
├── styles/
│   └── main.css          # Global styles and themes
└── modules/
    ├── api.js            # Weather API fetch logic
    ├── weatherData.js    # Data processing and helpers
    ├── ui.js             # DOM rendering
    └── form.js           # Form and event handling
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/gvillarroel-dev/weather-app.git

# Install dependencies
cd weather-app
npm install

# Add your API key
# Create a .env file in the root with:
API_KEY=your_visual_crossing_api_key

# Start the dev server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Weather Themes

The app dynamically changes its background color based on current conditions:

| Condition | Theme |
|---|---|
| Clear / Sunny | Warm amber |
| Cloudy | Soft blue-gray |
| Rainy | Cool blue |
| Snow | Pale gray-white |
| Night | Deep dark blue |

---

## Known Limitations

- API key is exposed in the production bundle — acceptable for educational purposes
- Weather icons use emoji mapping instead of SVG assets

---

## Author

Designed and coded by [Giuliana Villarroel](https://github.com/gvillarroel-dev) — The Odin Project, 2026.