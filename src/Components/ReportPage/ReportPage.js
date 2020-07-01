import React, { useContext, useState } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails"
import WeatherComp from "../WeatherComp/WeatherComp"
import { DataContext } from "../../App"
import "./ReportPage.css"



const ReportPage = () => {

    const [celsius, setCelsius] = useState(true);

    const handleToggle = (e) => {
        setCelsius(!celsius)
    }

    const weatherDisplay = useContext(DataContext);

    if (!weatherDisplay) {
        return <h2>Loading...</h2>
    } else {
        const display = Object.values(weatherDisplay).splice(0,7).reverse();
     
        return (
            <div className="report-page">  
                <div className="weather-container">
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round" onClick={handleToggle}></span>
                    </label>
                    {display.map((day, index) => (
                        <WeatherDetails day={day} key={index} index={index} handleToggle={handleToggle} celsius={celsius}/>
                ))}
                </div>
                <WeatherComp handleToggle={handleToggle} celsius={celsius}/>
            </div>  
    )}
   
}

export default ReportPage;