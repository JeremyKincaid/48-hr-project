
import React, { useState, Component, useEffect } from 'react';

import './App.css';
import Zomato from './components/ZomatoAPI/Zomato'; 

import Weather from './components/Weather/Weather';
import NASA from './components/NASA/NASA';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  let coords;

  // options object to pass to getCurrentPosition()
  var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
  }

  // function to be fired off when getCurrentPosition succeeds
  function success(pos) {
      coords = pos.coords;

      console.log('Your current position is:');
      console.log(`Latitude : ${coords.latitude}`);
      console.log(`Longitude: ${coords.longitude}`);
      console.log(`More or less ${coords.accuracy} meters.`);
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
  }

  // function to be fired off if getCurrentPosition fails
  function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // method to retreive geolocation info upon user's approval
  navigator.geolocation.getCurrentPosition(success, error, options);

  return (

    <div className="App">

    </div>

      <div>
          <h3>Your GPS coordinates are { latitude }, { longitude }</h3>
          <NASA latitude={latitude} longitude={longitude} />
          <br />
          <Weather latitude={latitude} longitude={longitude} />
          <br />
          <Zomato />
      </div>
</div>

  );
}

export default App;
