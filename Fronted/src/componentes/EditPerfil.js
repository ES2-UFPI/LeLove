import React from "react";
import "./normalize.css";
import "./EditPerfil.css";

function EditPerfil() {
  return (
    <div className="edit-perfil">
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
                <button>Platinum</button>
              </li>
              <li>
                <button>Gold</button>
              </li>
              <li>
                <button>Plus</button>
              </li>
              <li>Alguma informação</li>
            </ul>
          </div>
        </div>

        <div className="lateralDireita">
          <div className="meuPerfil">
            <div className="outer-container">
              <div className="inner-container">
                <div className="scrollable-content">
                  <div className="form-container">
                    <form id="userProfileForm">
                      <label htmlFor="description">Descrição:</label>
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Digite sua descrição aqui..."
                      ></textarea>

                      <label htmlFor="interests">Interesses:</label>
                      <input
                        type="text"
                        id="interests"
                        name="interests"
                        placeholder="Seus interesses"
                      />

                      <label htmlFor="height">Altura:</label>
                      <input
                        type="text"
                        id="height"
                        name="height"
                        placeholder="Sua altura"
                      />

                      <label htmlFor="intentions">Intenção:</label>
                      <input
                        type="text"
                        id="intentions"
                        name="intentions"
                        placeholder="Sua intenção"
                      />

                      <label htmlFor="relationshipType">
                        Tipo de Relacionamento:
                      </label>
                      <input
                        type="text"
                        id="relationshipType"
                        name="relationshipType"
                        placeholder="Tipo de relacionamento"
                      />

                      <label htmlFor="languages">Idiomas que falo:</label>
                      <input
                        type="text"
                        id="languages"
                        name="languages"
                        placeholder="Idiomas que você fala"
                      />

                      <label htmlFor="aboutMe">Mais sobre mim:</label>
                      <textarea
                        id="aboutMe"
                        name="aboutMe"
                        placeholder="Signo, formação, linguagem de amor"
                      ></textarea>

                      <label htmlFor="lifestyle">Estilo de vida:</label>
                      <textarea
                        id="lifestyle"
                        name="lifestyle"
                        placeholder="Pets, bebida, você fuma?"
                      ></textarea>

                      <label htmlFor="jobTitle">Cargo:</label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        placeholder="Seu cargo"
                      />

                      <label htmlFor="company">Empresa:</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Sua empresa"
                      />

                      <label htmlFor="education">Escolaridade:</label>
                      <input
                        type="text"
                        id="education"
                        name="education"
                        placeholder="Sua escolaridade"
                      />

                      <label htmlFor="livingIn">Morando em:</label>
                      <input
                        type="text"
                        id="livingIn"
                        name="livingIn"
                        placeholder="Onde você mora"
                      />

                      <label htmlFor="gender">Gênero:</label>
                      <select id="gender" name="gender">
                        <option value="male">Masculino</option>
                        <option value="female">Feminino</option>
                        <option value="other">Outro</option>
                        <option value="preferNotToSay">
                          Prefiro não dizer
                        </option>
                      </select>

                      <label htmlFor="sexualOrientation">
                        Orientação Sexual:
                      </label>
                      <select id="sexualOrientation" name="sexualOrientation">
                        <option value="heterosexual">Heterossexual</option>
                        <option value="homosexual">Homossexual</option>
                        <option value="bisexual">Bissexual</option>
                        <option value="asexual">Assexual</option>
                        <option value="other">Outro</option>
                        <option value="preferNotToSay">
                          Prefiro não dizer
                        </option>
                      </select>

                      {/* <button
                        type="button"
                        onClick={() => alert("Form submitted")}
                      >
                        Enviar
                      </button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay">
              <button
                type="button"
                className="editar"
                onClick={() => alert("Enviado")}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default EditPerfil;
