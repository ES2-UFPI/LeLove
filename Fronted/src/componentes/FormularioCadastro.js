import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './FormularioCadastro.css';

const FormularioCadastro = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
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
    console.log('Dados do formulário enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor

    // Redireciona para a página de perfil após o envio do formulário
    navigate('/meu-perfil');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Nome completo"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
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
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
      <button type="submit">Cadastre-se</button>
    </form>
  );
};

export default FormularioCadastro;
