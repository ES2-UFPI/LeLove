// src/componentes/FormularioCadastro.js
import React, { useState } from 'react';
import './FormularioCadastro.css';

const FormularioCadastro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nome de usuário:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default FormularioCadastro;
