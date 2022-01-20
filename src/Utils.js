import logo from './logo.svg';
import './App.css';
import TabPanel from './TabPanel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment, { unix } from 'moment';
import parse from 'html-react-parser';


export function convertUtcToTime(timeUtc) {

  const unixTimestamp = timeUtc;
  const date = new Date(unixTimestamp * 1e3); 
  const hoursOne = date.getHours();
  const minutesOne = "0"+ date.getMinutes();

  const time = (hoursOne + ":" + minutesOne);

  let array = time.split(":");
  let hours = array[0];
  let minutes = array[1];

  let AmOrPm = hours >= 12 ? 'pm' : 'am'; 
  hours = (hours % 12) || 12;

  let finalTime = hours+":"+minutes+" "+AmOrPm;
  return finalTime;

}

export function convertUtcToDay(timeUtc) {

  const unixTimestamp = timeUtc;
  const date = new Date(unixTimestamp * 1e3);

  const options = {
    weekday: 'short',
    month: 'short',
    day:'numeric'
  }

  const completeDate = date.toLocaleDateString("en", options);
  return completeDate;

}

export function parseIcons(dayForecastData){
  for(let i=0; i<dayForecastData.length; i++){
    dayForecastData[i].icon = "http://openweathermap.org/img/wn/"+dayForecastData[i].icon+"@2x.png";
  }
  return dayForecastData;
}

export function convertFetchedData5DayRows(data){

  let numberOfDaysForecasted = data.length;
  let jsonObjects = [];

  for(let i=0; i<numberOfDaysForecasted; i++){
    let jsonObject = {
      id: i+1,
      col1: <img src={data[i].icon}/>,
      col2: data[i].date + " " +data[i].description,
      col3: data[i].maxTemperature,
      col4: data[i].minTemperature
    }
    jsonObjects.push(jsonObject);
  }

  console.log(jsonObjects);

  return jsonObjects;

}

export function convertFetchedDataToRows(data){

  let numberOfHoursForecasted = data.length;
  let jsonObjects = [];

  console.log('hello');

    for(let i =0; i<numberOfHoursForecasted; i++){
      if (i==0){
        let jsonObject = {
          id: 1,
          col1: data[0].temperature,
          col2: data[1].temperature,
          col3: data[2].temperature,
          col4: data[3].temperature
        }
        jsonObjects.push(jsonObject);
      }
      else if(i==1){
        let jsonObject = {
          id: 2,
          col1: data[0].humidity,
          col2: data[1].humidity,
          col3: data[2].humidity,
          col4: data[3].humidity
        }
        jsonObjects.push(jsonObject);
      }
      else if(i==2){
        let jsonObject = {
          id: 3,
          col1: "<img src=http://openweathermap.org/img/wn/"+data[0].icon+"@2x.png>",
          col2: data[1].icon,
          col3: data[2].icon,
          col4: data[3].icon
        }
        jsonObjects.push(jsonObject);
      }
      else if(i==3){
        let jsonObject = {
          id: 4,
          col1: data[0].time,
          col2: data[1].time,
          col3: data[2].time,
          col4: data[3].time
        }
        jsonObjects.push(jsonObject);
      }
    }

    console.log(jsonObjects);
    return jsonObjects;
}

export async function processDailyData(data){

  let dailyData = [];
  const dataToProcess = await data;
  console.log(dataToProcess);

  for(let i=0; i<6; i++){
    let dayForecast = {
      maxTemperature: dataToProcess.daily[i].temp.max+"°",
      minTemperature: dataToProcess.daily[i].temp.min+"°",
      humidity: dataToProcess.daily[i].humidity+"%",
      icon: dataToProcess.daily[i].weather[0].icon,
      date: convertUtcToDay(dataToProcess.daily[i].dt),
      description: dataToProcess.daily[i].weather[0].description
    }
    dailyData.push(dayForecast);
  }

  console.log(dailyData);

  return dailyData;

}


export async function processHourlyData(data) {

  let hourlyData = [];
  const dataToProcess = await data;
  
  for(let i=0; i<8; i++){
    
    let hourForecast = {
      temperature: dataToProcess.hourly[i].temp+"°",
      humidity: dataToProcess.hourly[i].humidity+"%",
      icon: dataToProcess.hourly[i].weather[0].icon,
      time: convertUtcToTime(dataToProcess.hourly[i].dt)
    };
    
    hourlyData.push(hourForecast);
  }

  return hourlyData;

}