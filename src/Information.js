import React from "react";

import "./Information.css";

export default function Information() {
  return (
    <div className="information">
      <div className="row row-cols-2">
        <div className="col">
          Wind: <span id="wind"></span>8 km/h
        </div>
        <div className="col">
          Humidity: <span id="humidity"></span>5 %
        </div>
      </div>
    </div>
  );
}
