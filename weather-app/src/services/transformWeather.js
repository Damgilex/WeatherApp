import convert from 'convert-units';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY, 
} from './../constants/weathers';

const getTemp = kelvin => {
    //En caso de que la api regrese el valor enKelvin(K), fahrenheit(F) se puede hacer la conversion
    return Number(convert(kelvin).from("C").to("C").toFixed(2));//importar libreria convert(descargar si no se tiene instalada)
}

const getWeatherState = weather_data =>{
    return SUN;
}

const transformWeather = weather_data => {
    const{humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`,
    }

    return data;
}

export default transformWeather;