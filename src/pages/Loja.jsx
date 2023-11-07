
import mock from "../assets/models/mock.js";
import "../styles/loja.scss";
import ButtonsSales from '../components/botoesSales/ButtonsSales';

import { useState } from "react";
const Loja = () => {
  let [dataMock] = useState (mock);
  let [resultSearch, setresultSearch] = useState (dataMock[0].categorys[0]);
  const getidMenu =(id,e)=>{
    resultSearch = null;
   e;
    resultSearch =  dataMock[0].categorys.find((showItens) => showItens.idCategory == id);
    return resultSearch;
  }
  
  
  return (
    <section>
      <div className="content-page-store">
        <section className="content-menu-vertical">
          <div className="content-backgroung-menu"></div>
          {dataMock[0].categorys.map((item) => {
            return (
              <button
              onClick={(e) => setresultSearch(getidMenu(item.idCategory,e))}
              className="item-menu" key={item.idCategory}  
              >
              {item.subNameCategorys}
              </button>
            );
          })}
        </section>
        <section className="content-card-product">
          {
            resultSearch.itens.map((itemOfMenu)=>{
              return(
                <div key={itemOfMenu.id}>
                 <div className="contentCardLoja" >
                  <img src={itemOfMenu.img} alt={itemOfMenu.nameProduct}/>
                  <div className="infosCardLoja">
                    <p>{itemOfMenu.qtdParcelas}x R$ {itemOfMenu.valueProduct} - no cartão</p>
                    <p>ou</p>
                    <p>{itemOfMenu.descPix} de Desconto no PIX</p>
                    <ButtonsSales />
                    </div>
                  </div>
                </div>
                )
              })
            } 
        </section>
      </div>
     
    </section>
  );
};

export default Loja;
