import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicial from "./componentes/inicial";
import FormularioCadastro from "./componentes/FormularioCadastro";
import MeuPerfil from "./componentes/MeuPerfil"; // Importe o componente MeuPerfil

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<FormularioCadastro />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
