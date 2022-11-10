import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahreit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={convertToFahreit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    return (
      <span className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            {" "}
            °C{" "}
          </a>
          |°F
        </span>
      </span>
    );
  }
}
