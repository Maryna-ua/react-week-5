import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control w-100"
            />
          </div>
          <div className="col-3">
            {" "}
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Friday 20:50</li>
        <li>Partly Cloudy Rain</li>
      </ul>
      <div className="row">
        <div className="col">
          <img
            src="https://iconarchive.com/download/i89287/icons8/ios7/Weather-Partly-Cloudy-Rain.ico"
            alt="weather icon"
          />{" "}
          <span className="temperature">7</span>
          <span className="unit">°C</span>
        </div>

        <div className="col">
          <ul>
            <li>Precipitation: 22%</li>
            <li>Humidity: 60%</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
