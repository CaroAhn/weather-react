import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form id="search-form" className="Search">
      <div className="weather-search">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control search-input"
              id="city-input"
              autoComplete="off"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
