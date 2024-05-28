import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaInicial from "./componentes/inicial";
import FormularioCadastro from "./componentes/FormularioCadastro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/cadastro" element={<FormularioCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
