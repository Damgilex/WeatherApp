import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

//Contiene los componentes del lugar y datos de clima.
const WeatherLocation = () =>(
    <div>
        <Location city={'Buenos Aires'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;