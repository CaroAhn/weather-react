import React from "react";

import "./City.css";

export default function City() {
  return (
    <div className="city">
      <img
        className="principal-icon"
        src="http://openweathermap.org/img/wn/10d@2x.png"
        id="icon-principal"
        alt="rainy"
      />
      <h2 className="current-city" id="city">
        Quito{" "}
      </h2>
      <h3 className="current-weather" id="description-weather">
        Mostly Cloudy
      </h3>
      <h4 className="current-temperature" id="temperature">
        11{" "}
      </h4>
      <span className="measures">
        <a href="hashtag" id="celsius-link">
          °C
        </a>
      </span>
    </div>
  );
}
