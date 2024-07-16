import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import styled from 'styled-components';
import L from 'leaflet';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';
import './FormularioCadastro.css';

const StyledMapContainer = styled(MapContainer)`
  min-height: 400px; // Define o height mínimo como 400 pixels
`;

const FormularioCadastro = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    latitude: 5,
    longitude: 1,
  });

  const mapRef = useRef(null);
  const [position, setPosition] = useState([5, 1]);

  const navigate = useNavigate(); // Inicializa o useNavigate

  const updateLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
        setPosition([position.coords.latitude, position.coords.longitude]);
        mapRef.current.setView([position.coords.latitude, position.coords.longitude], 13);
      });
    } else {
      console.log("Geolocalização não é suportada neste navegador.");
    }
  }

  useEffect(() => {
    updateLocation(); 
  }, []);

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

  const handleRefreshLocation = (e) => {
    e.preventDefault();
    updateLocation();
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
      <div>
        <h3>Localização</h3>
        <button onClick={handleRefreshLocation}>Atualizar</button>
        <StyledMapContainer center={position} zoom={13} scrollWheelZoom={false} ref={mapRef}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A sua localização estimada.
            </Popup>
          </Marker>
        </StyledMapContainer>
      </div>
      <button type="submit">Cadastre-se</button>
    </form>
  );
};

export default FormularioCadastro;
