import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-8">
          <div>
            <div>
              <div className="row">
                <div className="col-3">
                  <img src={props.data.icon} alt={props.data.description} />
                </div>
                <div className="col-4">
                  <br />
                  <br />
                  <WeatherTemperature
                    celsius={props.data.temperature}
                    className="float-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
