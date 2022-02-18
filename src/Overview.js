import React from "react";

export default function Footer() {
  return (
    <div className="Overview">
      {" "}
      <div className="overview">
        <h2>Sydney</h2>
        <h5>
          Updated: Friday 1:42pm
          <br />
          Cloudy
        </h5>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <div>
              {" "}
              <span role="img" className="icon">
                {" "}
                ☁️{" "}
              </span>
              <strong>15°C</strong>
            </div>
          </div>
        </div>
        <div className="col-6">
          Humidity: 50%
          <br />
          Wind: 5 metres/sec
        </div>
      </div>
    </div>
  );
}
