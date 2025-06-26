import React from "react";
import "./InputButton.css";
import { useState } from "react";

function InputButton ({onBuscar}) {
  const [ciudad, setCiudad] = useState("")

  const manejarSubmit = (event) => {
    event.preventDefault()
    if (ciudad.trim() !== "") {
      onBuscar(ciudad.trim())
      setCiudad("")
    } else {
      alert("Por favor, ingrese una ciudad válida.")
    }
  }

  return (
    <div className="input-button">
      <form onSubmit={manejarSubmit}>
        <input type="text" placeholder="Ingrese la ciudad..." value={ciudad} onChange={(event) => setCiudad(event.target.value)} className="input"/>
        <button  type="submit" className="button">Buscar</button>
      </form>
    </div>
  )
}
export default InputButton
