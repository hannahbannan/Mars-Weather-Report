import React, { useContext, useState } from "react";
import { DataContext } from "../../App"
import ZipSearch from "../ZipSearch/ZipSearch"
import WeatherCompDetails from "../WeatherCompDetails/WeatherCompDetails"

const WeatherComp = () => {

    const weatherDisplay = useContext(DataContext);
    // console.log(weatherDisplay);

    const [localWeather, setLocalWeather] = useState({
        main: {},
        weather: [{}]
      });

      const handleSubmit = async zipCode => {
        let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=9a7d32021e291767e04cd8f0d17d7840`;
        const res = await fetch(weatherUrl)
        // console.log(weatherUrl);
        const newData = await res.json();
        setLocalWeather(newData)
      }
    //   console.log(localWeather)

    return (
        <div>
            {localWeather.main.temp ? <WeatherCompDetails weather={weatherDisplay} localWeather={localWeather}/> : null}
            <ZipSearch handleSubmit={handleSubmit}/>
        </div>
    )
}

export default WeatherComp;