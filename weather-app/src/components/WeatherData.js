import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTremperature from './WeatherTemperature';
import PropTypes from 'prop-types'

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY, 
} from './../constants/weathers';

import './styles.css';

//Componente para los datos del clima
const WeatherData = ({data:{temperature, weatherState, humidity, wind}})=>(
    <div className="weatherDataCont">
    <WeatherTremperature 
        temperature={temperature} 
        weatherState={weatherState}/>
    
    <WeatherExtraInfo 
        humidity = {humidity} 
        wind={wind} />
    </div>);

    WeatherData.propTypes={
       data: PropTypes.shape({
           temperature:PropTypes.number.isRequired,
           weatherState:PropTypes.string.isRequired,
           humidity:PropTypes.number.isRequired,
           wind:PropTypes.string.isRequired,
       }),//Coma para agregar mas validaciones si se necesita
    }

export default WeatherData;