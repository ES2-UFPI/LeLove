import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicial from "./componentes/inicial";
import FormularioCadastro from "./componentes/FormularioCadastro";
import MeuPerfil from "./componentes/MeuPerfil";
import EditPerfil from "./componentes/EditPerfil"; // Importe o componente EditPerfil

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<FormularioCadastro />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/editar-perfil" element={<EditPerfil />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
