// funcion para llamar a la api
async function api(nombreCiudad) {
  const ciudad_sin_espacios = encodeURIComponent(nombreCiudad);
  const API_KEY = "7c7e59e0796f9aea6eae432b4519542a";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad_sin_espacios}&appid=${API_KEY}&units=metric&lang=es`

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

