import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../services/transformWeather';
import {api_weather} from './../constants/api_url';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY, 
} from './../constants/weathers';

const data = {
    temperature: 20,
    weatherState: RAIN,
    humidity: 80,
    wind: "10m/s",
}


//Contiene los componentes del lugar y datos de clima.
class WeatherLocation extends Component{
    
    constructor(){
        super();
        this.state={
            city:'Buenos Aires',
            data: data,
        };
    }

   

    handleUpdateClick=()=>{
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data=> {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data:newWeather
            });
        });

    }
    
    render(){
        const{city, data} = this.state;
        return(
            <div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        )
    }
}

export default WeatherLocation;