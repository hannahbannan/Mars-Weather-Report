import React, { useContext, useState } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherComp from "../WeatherComp/WeatherComp";
import { DataContext } from "../../App";
import "./ReportPage.css";

const ReportPage = () => {
  const [celsius, setCelsius] = useState(true);

  const handleToggle = (e) => {
    setCelsius(!celsius);
  };

  const weatherDisplay = useContext(DataContext);

  if (!weatherDisplay) {
    return <h2>Loading...</h2>;
  } else if (!weatherDisplay.sol_keys[0]) {
    return (
      <div className="no-transmit">
        <h3>
          Looks like the Mars Insight Lander is having some difficulty
          transmitting down to Earth.
        </h3>
        <h4 className="check-back">
          Check back tomorrow for a weather report!
        </h4>
        <h4 className="check-back">
          You'll be able to see temperatures on Mars & compare the Mars weather
          to your own neighborhood.
        </h4>
      </div>
    );
  } else {
    const display = Object.values(weatherDisplay).splice(0, 5).reverse();
    return (
      <div className="report-page">
        <div className="weather-container">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" onClick={handleToggle}></span>
          </label>

          {display.map((day, index) => (
            <WeatherDetails
              day={day}
              key={index}
              index={index}
              handleToggle={handleToggle}
              celsius={celsius}
            />
          ))}
        </div>
        <WeatherComp handleToggle={handleToggle} celsius={celsius} />
      </div>
    );
  }
};

export default ReportPage;
