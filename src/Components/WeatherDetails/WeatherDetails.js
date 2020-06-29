import React from "react";
import "./WeatherDetails.css"


const WeatherDetails = ({day, index}) => {
    // console.log(day)

    let myDate = new Date(day.First_UTC);
    myDate = myDate.toString();
    let dateArr = myDate.split(" ");
    let shortDate = dateArr.splice(1, 2).join(" ");
    // console.log(shortDate)

    let shortTemp = day.AT.av;
    shortTemp = Math.round(shortTemp);
    // console.log(shortTemp)

    let shortHigh = day.AT.mx;
    shortHigh = Math.round(shortHigh)
    // console.log(shortHigh)

    let shortLow = day.AT.mn;
    shortLow = Math.round(shortLow);
    // console.log(shortLow)

    return (
        <div className={index}>
            <h4> {shortDate} </h4>
            <h2>{shortTemp} °C</h2>
            <h4>High: {shortHigh} °C</h4>
            <h4>Low: {shortLow} °C</h4>
            { index===0 ?
            <>
            <p>Wind Speed: {day.HWS.av} m/s</p>
            <p>Atmospheric Pressure: {day.PRE.av} Pa</p></> : null}
        </div>
    )
}

export default WeatherDetails;