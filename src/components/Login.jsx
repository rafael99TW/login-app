import React, { useState, useEffect } from 'react';

const Login = ({ setMensaje }) => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const handleUsuarioChange = (e) => setUsuario(e.target.value);
  const handleContraseñaChange = (e) => setContraseña(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioValido = usuarios.find(
      (user) => user.email === usuario && user.username === contraseña
    );

    if (usuarioValido) {
      setMensaje(`Bienvenido, ${usuarioValido.name}!`);
    } else {
      setMensaje('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="usuario">Email:</label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={handleUsuarioChange}
        required
      />

      <label htmlFor="contraseña">Contraseña (Username):</label>
      <input
        type="password"
        id="contraseña"
        value={contraseña}
        onChange={handleContraseñaChange}
        required
      />

      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
