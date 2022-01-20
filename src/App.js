import logo from './logo.svg';
import './App.css';
import TabPanel from './TabPanel';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import getData from './Api';
import processData, { processDailyData } from './Utils';
import processHourlyData from './Utils';



function App() {

  return (
    <div className="App">
      <TabPanel/>
    </div>
  );
}

export default App;
