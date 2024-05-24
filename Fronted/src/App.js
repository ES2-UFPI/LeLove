// src/App.js
import React from "react";
// import FormularioCadastro from "./componentes/FormularioCadastro";
import "normalize.css";
import Inicial from "./componentes/inicial"; // Importe o componente com a primeira letra maiúscula

const App = () => {
  return (
    <Inicial />
    // <div className="App">
    //   <h1>Formulário de Cadastro</h1>
    //   <FormularioCadastro />
    // </div>
  );
};

//  function App() {
//    return (
//      <div className="App">
//        {/* <Inicial /> */}
//        <h1>Formulário de Cadastro</h1>
//        <FormularioCadastro />
//      </div>
//    );
//  }

export default App;
