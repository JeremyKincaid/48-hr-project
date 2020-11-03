import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Location from './components/Location/Location'
import Weather from './components/Weather/Weather'

function App() {
  return (
    <div className="App">
      <Location />
      <br/>
      <Weather />
    </div>
  );
}

export default App;
