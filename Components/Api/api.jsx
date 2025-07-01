// funcion para llamar a la api
const api = async (nombreCiudad) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${nombreCiudad}&appid=${API_KEY}&units=metric&lang=es`

  try {
    const respuesta = await fetch(URL);

    if (!respuesta.ok) {
      throw new Error("Ciudad no encontrada");
    }
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Error en la API:", error);
    return null;
  }
}
export default api

