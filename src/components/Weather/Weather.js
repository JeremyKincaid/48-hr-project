import React from 'react';
import Location from '../Location/Location';
import './Weather.css';
// import Weather from './Weather' should be added to location file
// in Location.js div section include <Weather/>

const api = {
    key: '{WEATHER_KEY}',
    base: 'http://api.openweathermap.org/data/2.5/'
}

const Weather = (props) => {



    return(
        <div>
            <div>{props.latitude}, {props.longitude}</div>

        </div>
    )

}
        





export default Weather