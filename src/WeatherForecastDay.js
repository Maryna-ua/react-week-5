import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      {" "}
      <div className="forecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="foreast-temperature">
        <span className="foreast-temperature-max">
          {Math.round(props.data.temp.max)}° /{" "}
        </span>{" "}
        <span className="foreast-temperature-min">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
