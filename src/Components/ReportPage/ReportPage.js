import React, { useContext } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails"
import { DataContext } from "../../App"

const ReportPage = () => {
 const weatherDisplay = useContext(DataContext);

    if (!weatherDisplay) {
        return <h2>Loading...</h2>
    } else {
        // console.log(weatherDisplay)
        const display = Object.values(weatherDisplay).splice(0,7).reverse();
        // console.log(display)
        
     
        return (
            <div className="report-page">  
                <div className="weather-container">
                    {display.map((day, index) => (
                        <WeatherDetails day={day} key={index} index={index} />
                ))}
             
                </div>
            </div>  
    )}
   
}

export default ReportPage;