import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-3">
          Sat
          <br />
          15|<strong>18</strong>
        </div>

        <div className="col-3">
          Sun
          <br />
          18|<strong>22</strong>
        </div>

        <div className="col-3">
          Mon
          <br />
          19|<strong>23</strong>
        </div>

        <div className="col-3">
          Tues
          <br />
          17|<strong>21</strong>
        </div>
      </div>
      <br />
      <small>
        <a href="https://github.com/jclinsim/weather-app-react">
          Coded by Johanna Lingard
        </a>
      </small>
    </div>
  );
}
