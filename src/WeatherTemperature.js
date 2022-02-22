import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">
        {Math.round(props.celsius)}
        <small className="unit">°C</small>
      </span>
    </div>
  );
}
