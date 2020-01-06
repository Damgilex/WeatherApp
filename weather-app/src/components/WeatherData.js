import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTremperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY, 
} from './../constants/weathers';

//Componente para los datos del clima
const WeatherData = ()=>(
    <div>
        <WeatherTremperature 
            temperature={20} 
            />
        
        <WeatherExtraInfo 
            humidity = {80} 
            wind={"10m/s"} />
    </div>

);

export default WeatherData;