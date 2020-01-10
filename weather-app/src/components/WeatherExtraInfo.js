import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity,wind})=>(
<div className="weatherExtraInfoCont">
    <span className="estraInfoText">{`Humedad: ${humidity} % - `}</span>
    <span className="estraInfoText">{`Vientos: ${wind}`}</span>
</div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;