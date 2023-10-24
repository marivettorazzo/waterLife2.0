"use client";

import "./cards.scss";
import { useState } from "react";
const pathsImagesCards = [
  { img: "./images/aquario.jpg" },
  { img: "./images/corais.jpg" },
  { img: "./images/limpeza.jpg" },
  { img: "./images/peixes.jpg" },
  { img: "./images/reff.jpg" },
  { img: "./images/substrato.jpg" },
];
export default function Cards() {
  let [userMaster] = useState(true);
  const create = (e) => {
    console.log(e, "criei um card");
  };
  const atualizar = (e) => {
    console.log(e, "atualizei um card");
  };
  const deletar = (e) => {
    console.log(e, "deletei um card");
  };

  return (
    <div>
      <div className="contentCreatButton">
        {userMaster && (
          <button className="create buttonsHome " onClick={create}>
            Criar Card
          </button>
        )}
      </div>
      <div className="contentCards">
        <div className="cards">
          {pathsImagesCards.map((item, i) => {
            return (
              <div key={i} className="internoCards">
                <img className="imageCard" src={item.img} />
                {userMaster && (
                  <button onClick={atualizar} className="alert buttonsHome">
                    Editar
                  </button>
                )}
                {userMaster && (
                  <button
                    onClick={deletar}
                    className="deleteOrCancel buttonsHome "
                  >
                    Deletar
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
