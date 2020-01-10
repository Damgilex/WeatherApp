const api_key = "b6907d289e10d714a6e88b30761fae22";
const location = "Buenos Aires,ar";
const url_base_weather="https://openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
