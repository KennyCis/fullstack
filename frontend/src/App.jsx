import { useState, useEffect } from 'react'

const App = () => {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    // Si la variable de entorno no existe (ej. olvidaste crear el .env), 
    // usa localhost como plan de rescate (fallback).
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api/hola';
    
    fetch(API_URL)
      .then(response => response.text())
      .then(data => setMensaje(data))
      .catch(error => {
        console.error("Error al conectar con:", API_URL);
        setMensaje('Error de conexión');
      });
  }, [])

  return (
    <div className="container">
      <h1>Sistem Fullstack UCE - Version 2.0</h1>
      <h2>{mensaje}</h2>
    </div>
  )
}

export default App