import './App.css';
import getData from './Api';
import React, { useState, useEffect } from 'react';
import {processHourlyData, parseIcons} from './Utils'

function NextHoursForecast(props) {


  const [hourlyForecast, setHourlyForecast] = useState([]);
 
  const fetchData = async () => {
    
    const dataResponse = await getData(props.latitude, props.longitude);
    const hourForecast = await processHourlyData(dataResponse);
    parseIcons(hourForecast);
    setHourlyForecast(hourForecast);
      
  }

  useEffect(() => {
  
    fetchData();
  }
  , []);

  
  const listItems = hourlyForecast.map((hourData)=>
  <div>
    <div className="list-no-bullet">
      <ul>
        <li>{hourData.temperature}</li>
        <li className="humidity-color">{hourData.humidity}</li>
        <li><img src={hourData.icon}/></li>
        <li>{hourData.time}</li>
      </ul>
    </div>
  </div>  
  );

  return (
    <div className="text-center flex-wrap"> 
      {listItems}
    </div>
  );
}

export default NextHoursForecast;
