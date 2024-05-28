import React from "react";

import { useNavigate } from "react-router-dom";
import "./normalize.css";
import "./inicial.css";
import logo from "../img/Lelove.png";

function Inicial() {
  const navigate = useNavigate();

  const handleCreateAccountClick = () => {
    navigate("/cadastro");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="inicial-container">
      <header>
        <nav>
          <div className="Logo">
            <figure>
              <img src={logo} alt="Logo da Lelove" width="75" />
            </figure>
          </div>
          <button className="buttons" onClick={handleLoginClick}>Entrar</button>
        </nav>
      </header>

      <main>
        <section className="centralized-section">
          <h1>Deslize para a direita</h1>
          <div className="buttons">
            <button id="criar" onClick={handleCreateAccountClick}>
              Criar uma conta
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>todos os modelos são do CANVA</p>
      </footer>
    </div>
  );
}

export default Inicial;
