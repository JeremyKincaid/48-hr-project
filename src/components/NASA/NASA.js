import React, { useState } from 'react';
import './NASA.css';

const NASA = (props) => {

    const baseURL = "https://api.nasa.gov/planetary/earth/imagery?";
    const key = "KZ8AmOvgxCYxhCHhVahPoTwZHYmevTMkTMXmhJLk";
    let builtURL = baseURL + 'lon=' + props.longitude + '&lat=' + props.latitude + '&api_key=' + key;

    return(
        <div>
            <img className="satImg"src= {builtURL} alt="satellite" />
        </div>
    )
}

export default NASA;




//ignore this
// style={{ background : `url(${builtURL}) no-repeat fixed center` }}