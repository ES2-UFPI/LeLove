import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Feed from "./componentes/Feed"; // Importe o componente EditPerfil
import PaginaInicial from "./componentes/inicial";
import FormularioCadastro from "./componentes/FormularioCadastro";
import FormularioLogin from "./componentes/FormularioLogin"; // Importa o componente FormularioLogin
import MeuPerfil from "./componentes/MeuPerfil";
import EditPerfil from "./componentes/EditPerfil"; // Importe o componente EditPerfil



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<FormularioCadastro />} />
        <Route path="/login" element={<FormularioLogin />} /> {/* Nova rota */}
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/editar-perfil" element={<EditPerfil />} /> {/* Nova rota */}
      </Routes>
    </Router>
  );
}

export default App;
