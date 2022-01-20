import './App.css';
import React, { useState, useEffect } from 'react';
import getData from './Api';
import {parseIcons, processDailyData} from './Utils';


function NextFiveDaysForecast(props) {

  const [dailyForecast, setDailyForecast] = useState([]);

  const fetchData = async () => {

    const dataResponse = await getData(props.latitude, props.longitude);
    const dayForecast = await processDailyData(dataResponse);
    parseIcons(dayForecast);
    setDailyForecast(dayForecast);
  }

  useEffect(() => {
  
    fetchData();

  }
  , []);

// Mock data, don't consider it
//   let dayForecastData = [
//     {minTemperature: 27.4, maxTemperature: 30.0, humidity: 68, icon: "10d", date: "Fri, Nov 1", description:"Clear throughout the day"},
//   {minTemperature: 28.0, maxTemperature: 31.0, humidity : 66, icon:"10d", date:"Sat, Nov 2",description:"Clear throughout the day"},
// {minTemperature: 30.0, maxTemperature:32.0, humidity: 90, icon:"10d", date: "Sun, Nov 3", description:"Clear throughout the day"},
// {minTemperature: 23.0, maxTemperature: 28.0, humidity:100, icon:"10d", date:"Mon, Nov 4", description:"Clear throughout the day"},
// {minTemperature: 24.0, maxTemperature:27.0, humidity:90, icon:"10d", date:"Tue, Nov 5", description:"Clear throughout the day"},
// {minTemperature: 29.0, maxTemperature: 31.0, humidity:100, icon:"10d", date:"Wed, Nov 6", description:"Clear throughout the day"}
// ];


  const listDays = dailyForecast.map((day)=>
  <div className="full-width">
    <div className="list-no-bullet align-items-center">
      <li className="zero-margin-left">
        <img src={day.icon}/>
      </li>
      <li className="text-center">{day.date}<br/>
        <div className="day-description-text">{day.description}</div>
      </li>
      <li class="font-16">{day.maxTemperature}</li>
      <li class="font-16">{day.minTemperature}</li>
    </div><br/>
    <hr className="separator-line-with-margin"/>
  </div>

  );

  return (
    <div className="text-center flex-wrap"> 
        {listDays}
    </div>
  );
}

export default NextFiveDaysForecast;
