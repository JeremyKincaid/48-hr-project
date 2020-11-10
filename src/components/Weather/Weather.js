import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather= (props) => {

    const [nameOfLoc, setNameOfLoc] = useState('')
    const [temp, setTemp] = useState('');
    const [humidty, setHumidity] = useState('');
    const [icon, setIcon] = useState('');
    const [forecast, setForecast] = useState('')

    useEffect(() => {
        if(props.latitude && props.longitude) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&units=imperial&appid=a4e08e5aa1e2b68aa9a919ac5e2043ca`
            )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                setNameOfLoc(data.name);
                setIcon(data.weather[0].icon);
                setTemp(Math.round(data.main.temp));
                setHumidity(data.main.humidity);
                setForecast(data.weather[0].description);
            })
        }
        }, [props.latitude, props.longitude])

    return (
        <div className = "Weather">
            <h3>Weather for Today</h3>
            <h4>Location: {nameOfLoc} County</h4>
            <img src = {'http://openweathermap.org/img/wn/' + icon + '@2x.png'} alt= 'weatherimage'/>
            <h4>Temperature: {temp}°F </h4>
            <h4>Humidity: {humidty}</h4>
            <h4>Looks Like: {forecast}</h4>
        </div>
    )
}
export default Weather;
