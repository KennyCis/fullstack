import { useState, useEffect } from 'react'


const App = () => {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    const API_URL = 'http://localhost:8080/api/hola';
    fetch('http://localhost:8080/api/hola')
      .then(response => response.text())
      .then(data => setMensaje(data))
      .catch(error => setMensaje('Error de conexión'));
  }, [])

  return (
    <div className="container">
      <h1>Inicilited Proyect</h1>
      <h2>{mensaje}</h2>
    </div>
  )
}

export default App