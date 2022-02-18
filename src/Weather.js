import React from "react";

import Search from "./Search";
import Overview from "./Overview";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Overview />
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
