import * as React from 'react';
import NextHoursForecast from './NextHoursForecast';


export default function NextFiveDaysCard(props) {
  return (
    <div className="white-background">
      <div class="card">
        <h1 className="card-title">Next hours</h1>
        <hr className="separator-line"/>
        <NextHoursForecast latitude={props.latitude} longitude={props.longitude}/>
      </div>
    </div>
  );
}
