import React from "react";
import "./SectionClima.css"

const SectionClima = ({datosClima}) => {
  const ciudad = datosClima.name
  const pais = datosClima.sys.country
  const temperatura = datosClima.main.temp
  const sensacion = datosClima.main.feels_like
  const humedad = datosClima.main.humidity
  const descripcion = datosClima.weather[0].description
  const icono = datosClima.weather[0].icon

  return(
    <div className="section-clima">
      <div className="titulo-temp">
        <h2 className="titulo"> <i className="bi bi-geo-alt"></i> {ciudad}, {pais}</h2>
        <p><i className="bi bi-thermometer"></i> Temperatura: {temperatura} °C</p>
        <p><i className="bi bi-thermometer-high"></i> Sensación térmica: {sensacion} °C</p>
        <p><i className="bi bi-droplet-half"></i> Humedad: {humedad}%</p>
      </div>
      <div className="descripcion-icono">
        <p className="descripcion">Descripción: {descripcion}</p>
        <img src={`https://openweathermap.org/img/w/${icono}.png`} alt="Icono del clima" className="icono" />
      </div>
    </div>
  )
}
export default SectionClima