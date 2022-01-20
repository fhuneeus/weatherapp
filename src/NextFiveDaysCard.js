import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import NextHoursForecast from './NextHoursForecast';
import NextFiveDaysForecast from './NextFiveDaysForecast';


export default function NextFiveDaysCard(props) {
  return (
    <div className="white-background">
      <div class="card">
        <h1 className="card-title">Next 5 days</h1>
        <hr className="separator-line"/>
        <NextFiveDaysForecast latitude={props.latitude} longitude={props.longitude}/>
      </div>
    </div>
  );
}
