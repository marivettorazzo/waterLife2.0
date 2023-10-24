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

  return (
    <div className="contentCardcard">
      {userMaster && <button className="create buttonsHome">Criar Card</button>}
      <div className="contentCards">
        <div className="cards">
          {pathsImagesCards.map((item, i) => {
            return (
              <div key={i} className="internoCards">
                <img className="imageCard" src={item.img} />
                {userMaster && <button className="alert buttonsHome">Editar</button>}
                {userMaster && <button className="deleteOrCancel buttonsHome ">Deletar</button>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
