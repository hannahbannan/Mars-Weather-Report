import React from "react";
import "./WeatherDetails.css"


const WeatherDetails = ({day, index, handleToggle, celsius}) => {
    // console.log(handleToggle)
   

    let myDate = new Date(day.First_UTC);
    myDate = myDate.toString();
    let dateArr = myDate.split(" ");
    let shortDate = dateArr.splice(1, 2).join(" ");

    let shortTemp = Math.round(day.AT.av);
    let fahrenheitTemp = Math.round(day.AT.av*1.8+32)

    let shortHigh = Math.round(day.AT.mx);
    let fahrenheitHigh = Math.round(day.AT.mx*1.8+32)

    let shortLow = Math.round(day.AT.mn);
    let fahrenheitLow = Math.round(day.AT.mn*1.8+32)
    

    return (
        <div className={index}>
            <h4> {shortDate} </h4>
            { celsius ?   
            <>          
            <h2 className="degree">{shortTemp} °C</h2> 
            <h4>High: {shortHigh} °C</h4>
            <h4>Low: {shortLow} °C</h4>
            </>
            : 
            <>
            <h2 className="degree">{fahrenheitTemp} °F</h2>
            <h4>High: {fahrenheitHigh} °F</h4>
            <h4>Low: {fahrenheitLow} °F</h4>
            </>
            }
            {/* { index===0 ?
            <>
            <p>Wind Speed: {day.HWS.av} m/s</p>
            <p>Atmospheric Pressure: {day.PRE.av} Pa</p></> : null} */}
        </div>
    )
}

export default WeatherDetails;


