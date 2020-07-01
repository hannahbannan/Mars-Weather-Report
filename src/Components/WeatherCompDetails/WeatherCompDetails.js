import React, { useContext } from "react";
import { DataContext } from "../../App"
import "./WeatherCompDetails.css"

const WeatherCompDetails = ({localWeather}) => {

    let weatherDisplay = useContext(DataContext);
    weatherDisplay =  Object.values(weatherDisplay).splice(0,7).reverse()
    
    let marsWeather = Math.round((weatherDisplay[0].AT.av)*1.8+32)
    console.log(marsWeather)

    let localCity= localWeather.name;
    console.log(localCity)

    let localWeath = Math.round(localWeather.main.temp);
    console.log(localWeath);

    let compWeather = () => {
        if (marsWeather < localWeath) {
            return (<h3>Today it is <span className="em">{(localWeath-marsWeather)} degrees</span>  colder on Mars than it is in {localCity} <span className="em">({localWeath}°F)</span>.</h3>)
        } else if (marsWeather>localWeath) {
            return (<h3>Today it is warmer on Mars than it is in {localCity}.</h3>)
        } else {
            return (<h3>Mars and {localCity} are the same temperature today!</h3>)
        } 
    }

    return (
        <div className="comp">
            {compWeather()}
        </div>

    )
}

export default WeatherCompDetails;