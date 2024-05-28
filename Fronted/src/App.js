import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./componentes/normalize.css";
import PaginaInicial from "./componentes/inicial"; // Importe o componente com a primeira letra maiúscula
import EditPerfil from "./componentes/EditPerfil";
import FormularioCadastro from "./componentes/FormularioCadastro";
import MeuPerfil from "./componentes/MeuPerfil";

function App() {
  return <MeuPerfil />;
}

export default App;
