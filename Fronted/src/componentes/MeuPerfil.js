import React from "react";
import "./normalize.css";
import "./meuPerfil.css";

function MeuPerfil() {
  //   const handleButtonClick = () => {
  //     // Função para manipular o clique no botão
  //     window.open(<Inicial />, "_blank"); // Abre o link em uma nova aba
  //   };

  return (
    <body>
      <main>
        <div class="lateralEsquerda">
          <div class="lateralHome">
            <div class="buttonsHome">
              <button class="bInical">
                <img src="Leloves.png" alt="Icon" width="30" height="30" />
              </button>
              <button class="bConfig">Config</button>
            </div>
          </div>

          <div class="upgrade">
            <ul>
              <li>
                <button>Platinum</button>
              </li>
              <li>
                <button>Glod</button>
              </li>
              <li>
                <button>Plus</button>
              </li>
              <li>Alguma informação</li>
            </ul>
          </div>
        </div>

        <div class="lateralDireita">
          <div class="meuPerfil">
            <div class="imagens"></div>

            <div class="info">
              <h1 class="infos">Infos do usuario</h1>
              <button class="editar">Editar perfil</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}

export default MeuPerfil;
