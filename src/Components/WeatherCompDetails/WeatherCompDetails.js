import React, { useContext } from "react";
import { DataContext } from "../../App"
import "./WeatherCompDetails.css"

const WeatherCompDetails = ({localWeather}) => {

    let weatherDisplay = useContext(DataContext);
    console.log(weatherDisplay)
    if (!weatherDisplay.sol_keys) {
        return (<p> </p>)
    } else {
    
       
    weatherDisplay =  Object.values(weatherDisplay).splice(0,5).reverse();
    
    let marsWeather = Math.round((weatherDisplay[2].AT.av)*1.8+32)

    let localCity= localWeather.name;

    let localWeath = Math.round(localWeather.main.temp);

    let compWeather = () => {
        if (marsWeather < localWeath) {
            return (<h3>Today it is <span className="em">{(localWeath-marsWeather)} degrees Fahrenheit</span> colder on Mars than it is in {localCity} <span className="em">({localWeath}°F)</span>.</h3>)
        } else if (marsWeather>localWeath) {
            return (<h3>Today it is <span className="em">{(marsWeather-localWeath)} degrees Fahrenheit</span>  warmer on Mars than it is in {localCity} <span className="em">({localWeath}°F)</span>.</h3>)
        } else if (marsWeather===localWeath) {
            return (<h3>Mars and {localCity} are the same temperature today!</h3>)
        } else {
            return (<p>Nothing to see here...</p>)
        }
    }

    return (
        <div className="comp">
            {localWeather.main.temp ? compWeather() : null}
        </div>

    )}
}

export default WeatherCompDetails;