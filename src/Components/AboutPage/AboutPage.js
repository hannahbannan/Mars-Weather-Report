import React from "react";
import "./AboutPage.css"

const AboutPage = () => {
    return (<div className="About">
        <h2>ABOUT MARS WEATHER REPORT</h2>
        <div className="text-container">
            <p className="one">NASA’s InSight Mars lander takes continuous weather measurements (temperate, wind, pressure) on the surface of Mars at <strong>Elysium Planitia</strong>, a flat, smooth plane near Mar’s equator. </p>
            <a href="https://mars.nasa.gov/insight/">Click here</a> to learn more about NASA's Mars InSight Mission.
            <br />
            <br />
            <img src="https://res.cloudinary.com/hannahbannan/image/upload/v1593545887/Mars%20Project/mars_insight_u7y01k.jpg" alt="Mars Insight" className="insight"/>
            <br />
            <p>The InSight Mars lander takes measurements each <strong>sol</strong>. A sol is the Martian day. Martian days are almost the same as Earth’s days, at 24.66 hours. </p>
            <div className="grid-container">
                <p className="temp"><strong>Temperatures</strong> on Mars are measured in degrees Celsius. Mars is, on average, considerably colder than Earth. However, temperatures on Mars fluctuate and sometimes it actually has mild, human-friendly weather. The highest temperature ever recorded on Mars was a balmy 86 degrees. </p>

                <p className="pressure"><strong>Atmospheric pressure</strong> is measured in Pascals using an air pressure sensor. Atmospheric pressure on Mars is less than on Earth, making its atmosphere much “thinner”. For comparison, the average atmospheric pressure on Earth at sea level is around 101,325 Pascals. Mars’ atmospheric pressure averages about <strong>1%</strong> of the Earth’s pressure. </p>

                <p className="wind">The <strong>wind speed</strong> on Mars varies. Mars frequently experiences windstorms that sweep up red dust all over its surface.</p>

                <br />
                <img src="https://res.cloudinary.com/hannahbannan/image/upload/v1593547531/Mars%20Project/marsdust2_w5y2lx.jpg" className="dust" alt="dust storm"/>
                <br />
            </div>
            <p>Mars is considered the most promising planet for humans to inhabit in the future, because its atmosphere and climate are the most similar to Earth's. Technically, if humans were able to heat up the planet and create a thicker atmosphere, it would put us on track to be able to <strong>live and breathe</strong> on Mars one day. But this takes a LOT of work, money, and time - plus technology we haven't invented yet!</p>

            <p><a href="https://www.nasa.gov/press-release/goddard/2018/mars-terraforming">Click here</a>to learn more about <strong>terraforming</strong> - the theory behind a possible future inhabitation of Mars.</p>
            <img src="https://res.cloudinary.com/hannahbannan/image/upload/v1593547200/Mars%20Project/2020_rover_zitx9p.jpg" className="rover" alt="2020 Mars Rover"/>
        </div>
    </div>)

}

export default AboutPage;