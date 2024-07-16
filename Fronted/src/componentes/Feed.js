import React from "react";

/* onClick={handleEditProfileClick}*/


import { useNavigate } from "react-router-dom";
import "./normalize.css";
import "./Feed.css";

function Feed() {
  const navigate = useNavigate();

  const handleEditProfileClick = () => {
    navigate("/editar-perfil");
  };

  return (
    <div>
      <main>
        <div className="lateralEsquerda">
          <div className="lateralHome">
            <div className="buttonsHome">
              <button className="bInical">
                <img src="Leloves.png" alt="Icon" width="30" height="30" />
              </button>
              <button className="bConfig">Config</button>
            </div>
          </div>

          <div className="upgrade">
            <ul>
              <li>
                <button>Mensagens</button>
              </li>
              <li>
                <button>Matches</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="lateralDireita">
          <div className="meuPerfil">
            <div className="imagens"></div>

            <div className="info">
              <h1 className="infos">Infos do usuario</h1>
              <button className="desLike" >Curtir</button> {/* onClick={handleEditProfileClick}*/}
              <button className="desLike" >Passar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
