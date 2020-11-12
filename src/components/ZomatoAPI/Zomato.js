import React, { useState, useEffect } from 'react'; 
import '../../App'; 

const Zomato = (props) => {

    const [restaurants, setRestaurants] = useState([]); 
    
    const userkey = 'e73b9594082798295a039fb4972ea346'; 

    const url = 'https://developers.zomato.com/api/v2.1/geocode'

    const fetchData = () => {
        async function f() {
            if(props.latitude && props.longitude) {
                const apiURL = url + '?lat=' + props.latitude + '&lon=' + props.longitude
                const response = await fetch (apiURL, {
                    headers: {
                        'user-key': userkey
                    }
                });
                const res = await response.json(); 
                console.log(res); 
                setRestaurants(res.nearby_restaurants); 
            }                    
        }
        f(); 
    }

    useEffect(fetchData, [props.latitude, props.longitude]); //the array with the props in them makes sure that the useEffect fires off only when those are accurate and working 



    return (
        <div>
            <p>
                {restaurants.map(r => <p> {r.restaurant.name} </p> )}     
            </p>
        </div>
    )
}

export default Zomato; 