import React, { useContext } from "react";
import { DataContext } from "../../App";
import "./SeasonsPage.css";

const SeasonsPage = ({ weatherData }) => {
  const weatherDisplay = useContext(DataContext);

  if (!weatherDisplay) {
    return <h2>Loading...</h2>;
  } else if (!weatherDisplay.sol_keys[0]) {
    return (
      <div className="no-transmit">
        <h3>The Mars InSight Lander is currently down. </h3>
        <h4 className="check-back">Check back tomorrow for a seasons report!</h4>
      </div>
    );
  } else {
    let currentDay = weatherDisplay.sol_keys[3];
    let seasonName = weatherDisplay[currentDay].Season.toUpperCase();
    return (
      <div className="season">
        <h2>{seasonName}</h2>
        <br />
        <p>
          In the southern hemisphere (where Elysium Planitia is located),
          summers are hot and quick, whereas winters are long and cold. At the
          height of southern summer, temperatures can reach 20°C (68°F) by day
          but drop to –80°C (–112°F) at night. Because the atmospheric pressure
          is much lower on Mars, you wouldn’t “feel” the temperature as much as
          you would on Earth.{" "}
        </p>
        <p>
          There isn't much "weather" on Mars. Apart from the varying sizes of
          the polar ice caps,dust storms that are common in late summer, and the
          changing temperature, there is little to indicate the passing of the
          seasons.
        </p>
      </div>
    );
  }
};

export default SeasonsPage;
