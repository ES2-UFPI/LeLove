import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './FormularioLogin.css';

const FormularioLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate(); // Inicializa o useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do login enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor

    // Redireciona para a página de perfil após o envio do formulário
    navigate('/meu-perfil');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nome de usuário"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default FormularioLogin;
