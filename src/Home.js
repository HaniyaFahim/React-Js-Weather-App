import React, {useState} from 'react';
import {useLazyQuery} from '@apollo/client'
import {weather2000} from './GraphQL/Queries'

function Home() {
    const [citySearched, setCitySearch] = useState("");
    const [getWeather,{Loading,error,data}] =useLazyQuery(weather2000,{
        variables:{name:citySearched}
    })
    if(error) return <h1>Error Found!</h1>
    if(data){
        console.log(data)
    }
  return (
   <>
   <div className='App'>

<h1>Search Weather</h1>
<input type="text" placeholder="Enter City Name" onChange={(event) => {setCitySearch(event.target.value)}}/>
<button onClick={()=> getWeather()}>Search</button>
<div className='weather'>
    { data && (<>
<h1>{data.getCityByName.name}</h1>
<h1>{data.getCityByName.weather.temperature.actual}</h1>
<h1>Description:{data.getCityByName.weather.summary.description}</h1>
</>
)}
</div>

   </div>
   </>
  );
}

export default Home;

// https://youtu.be/gAbIQx26wSI
// Crash course on graphqk
// https://youtu.be/E3NHd-PkLrQ
