import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2">
          <div className="day">Sat</div>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="cloudy"
          />
          <div className="weather-forecast-temperature">
            <span className="max-temp">18°C </span>
            <span className="min-temp">7°C </span>
          </div>
        </div>

        <div className="col-2">
          <div className="day">Sun</div>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="cloudy"
          />
          <div className="weather-forecast-temperature">
            <span className="max-temp">18°C </span>
            <span className="min-temp">7°C </span>
          </div>
        </div>

        <div className="col-2">
          <div className="day">Mon</div>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="cloudy"
          />
          <div className="weather-forecast-temperature">
            <span className="max-temp">18°C </span>
            <span className="min-temp">7°C </span>
          </div>
        </div>

        <div className="col-2">
          <div className="day">Tue</div>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="cloudy"
          />
          <div className="weather-forecast-temperature">
            <span className="max-temp">18°C </span>
            <span className="min-temp">7°C </span>
          </div>
        </div>

        <div className="col-2">
          <div className="day">Wed</div>
          <img
            className="icon"
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="cloudy"
          />
          <div className="weather-forecast-temperature">
            <span className="max-temp">18°C </span>
            <span className="min-temp">7°C </span>
          </div>
        </div>
      </div>
    </div>
  );
}
