import React, { useState } from 'react';
import Login from './components/Login';
import Mensaje from './components/Mensaje';
import './App.css'; // Asegúrate de que el CSS esté importado

function App() {
  const [mensaje, setMensaje] = useState('');

  return (
    <div>
      <h1>Aplicación de Login</h1>
      <div className="container"> {/* Añadir clase container */}
        <Login setMensaje={setMensaje} />
        {mensaje && <Mensaje mensaje={mensaje} />}
      </div>
    </div>
  );
}

export default App;
