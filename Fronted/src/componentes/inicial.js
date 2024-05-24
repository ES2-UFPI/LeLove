import React from "react";
import "normalize.css";
import "./inicial.css";
import logo from "../img/Lelove.png";

function Inicial() {// Renomeie a função para começar com letra maiúscula

  // const handleButtonClick = () => {
  //   // Função para manipular o clique no botão
  //   window.open({FormularioCadastro}, "_blank"); // Abre o link em uma nova aba
  // };

  return (
    <body>
      <header>
        <nav>
          <div class="Logo">
            <figure>
              <img src={logo} alt="Logo da Lelove" width="75" />
            </figure>
          </div>

          <button class="buttons">Entrar</button>
        </nav>
      </header>

      <main>
        <section>
          <div>
            <div>
              <h1>Deslize para a direita</h1>
              <div class="buttons">
                 <button id="criar">Criar uma conta</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>todos os modelos são do CANVA</p>
      </footer>
    </body>
  );
}

export default Inicial; // Exporte o componente com a primeira letra maiúscula
