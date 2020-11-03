import React from 'react'; 


const Zomato = (props) => {
    
    const userkey = 'e73b9594082798295a039fb4972ea346'; 
    const url = 'https://developers.zomato.com/api/v2.1/locations/'
    const apiURL = url + '?lat=' + props.latitude + '?lon=' + props.longitude + 'user-key' + userkey

    const fetchData = async () => {
        const response = await fetch(apiURL, [{
            method: 'GET'
        }])
        .then(response => response.json())
        .then(data => console.log(data)) 

        return response; 
    }


    return (
        <div>
            <p>
                {fetchData()}
            </p>
        </div>
    )
}

export default Zomato; 