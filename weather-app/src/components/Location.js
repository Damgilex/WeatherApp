import React from 'react';
import PropTypes from 'prop-types';
//Componente para los datos del lugar
const Location = (props) => {
    //Destructuring. Cuando se quiere asignar el valor de una propiedad a una variable del mismo nombre
    //const city = props.city;
    const {city} = props;
    return <div className="locationCont"><h1>{city}</h1></div>;
};

Location.propTypes = {
    city:PropTypes.string.isRequired,
}

export default Location;

