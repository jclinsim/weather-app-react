import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />

        <footer>
          <a href="https://github.com/jclinsim/weather-app-react">
            Coded by Johanna Lingard
          </a>
        </footer>
      </div>
    </div>
  );
}
