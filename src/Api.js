import logo from './logo.svg';
import './App.css';
import TabPanel from './TabPanel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


export default async function getData(latitude, longitude) {

  let apiKey = "df2469f49522faeb2e0819ede3518475";
  let url = "http://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude=minutely&appid="+apiKey+"&units=metric";

  let response = await fetch(url);
  let processedResponse = await response.json();

  return processedResponse;

}