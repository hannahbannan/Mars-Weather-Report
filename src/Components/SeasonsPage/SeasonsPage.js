import React, { useContext } from "react";
import { DataContext } from "../../App"

const SeasonsPage = ({ weatherData }) => {
    const weatherDisplay = useContext(DataContext);
    // console.log(weatherDisplay)
    if (weatherDisplay) {
        let currentDay = weatherDisplay.sol_keys[6];
        let seasonName = weatherDisplay[currentDay].Season.toUpperCase();
    return (
    <div className="season">
        <h2>{seasonName}</h2>
        <p>In the southern hemisphere (where Elysium Planitia is located), summers are hot and quick, whereas winters are long and cold. At the height of southern summer, temperatures can reach 20°C (68°F) by day but drop to –80°C (–112°F) at night. Because the atmospheric pressure is much lower on Mars, you wouldn’t “feel” the temperature as much as you would on Earth. </p>
        <p>There is little ‘weather’ on Mars. Apart from the varying sizes of the polar ice caps, more common dust storms in late summer and the changing temperature, there is little to indicate the passing of the seasons.</p>
    </div>
    )
}  else {
    return (<h2>Loading...</h2>)
}
}

export default SeasonsPage;