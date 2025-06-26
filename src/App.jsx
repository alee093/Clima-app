import { useState } from 'react'
import React from 'react'
import InputButton from '../Components/InputButton/InputButton.jsx'
import api from '../Components/Api/api.jsx'
import SectionClima from '../Components/SectionClima/SectionClima.jsx'
import './App.css'
import Loader from '../Components/Loader/Loader.jsx'

function App() {
  const [ciudad, setCiudad] = useState('')
  const [datosClima, setDatosClima] = useState(null)
  const [loading, setLoading] = useState(false)

async function manejarBusqueda(nombreCiudad) {
  setCiudad(nombreCiudad)
  setLoading(true)
  setDatosClima(null)
  const datos = await api(nombreCiudad)
  console.log(datos)
  setDatosClima(datos)
  setLoading(false)
  }
  return(
    <div className='contenedor'>
      {!datosClima && !loading && <h1 className="titulo">Binevenido 🌤️</h1>}
      {loading && <Loader/>}
      {datosClima && <SectionClima datosClima={datosClima} />}
      <InputButton onBuscar = {manejarBusqueda} />
    </div>
  )
}

export default App
