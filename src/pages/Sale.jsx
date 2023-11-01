"use client";
import  { useState } from 'react';
import '../styles/sale.scss';
import ButtonsSales from '../components/botoesSales/ButtonsSales';


const Sale = () => {
  let [userMaster] = useState(true);
  
  const calcDescProductSale = (valueProduct,valueDesc) => {
    let result = (valueProduct * valueDesc /100).toString().replace('.',',');
     return  parseInt(result);
  };
 
  const calcValueafterDesc = (valueProduct,valueDesc) => {
     return  valueProduct - valueDesc;
  };
  const create = (e) => {
    console.log(e, "criei um card");
  };
 
  const mock = [
    {
    img : "/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : "07/11/2023",
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275.00,
    id:12
  },
    {
    img : "/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : "07/11/2023",
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275.00,
    id:13
  },
    {
    img : "/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : "07/11/2023",
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275.00,
    id:14
  },
    {
    img : "/images/amarelo.jpg",
    nameProduct : "Peixe do afeganistão",
    validDate : "07/11/2023",
    qtdParcelaSemJuros : 12,
    qtdDescontPix :10,
    valueProduct : 275.00,
    id:15
  },
]
  return (
    <div className="contentPromo">
      <div className="contentCreatButton">
          {userMaster && (
            <button className="create buttonsHome" onClick={create}>
              Criar Promoção
            </button>
          )}
        </div>
      <h1 className="title">IMPERDÍVEiS DA SEMANA!</h1>
        {
          mock.map((item)=>{
            return(
              <div className="contentCardPromos" key={item.id}>
                  <figure>
                  <img
                      className="img-fluid"
                      src={item.img}
                      alt={item.nameProduct}
                    />
                  </figure>
                  <div className='infosCardContent'>
                    <div>
                      <h3>{item.nameProduct}</h3>
                      <br/>
                      <p>PROMOCÃO ATÉ</p>
                      <p>{item.validDate}</p>
                      <p>{item.qtdParcelaSemJuros} X SEM JUROS</p>
                      <p>DESCONTO : {item.qtdDescontPix}% NO PIX</p>
                    </div>
                    <div>
                      <p> SAI DE R${item.valueProduct},00</p>
                      <p>POR : R${calcValueafterDesc(item.valueProduct, calcDescProductSale(item.valueProduct,item.qtdDescontPix))}</p>
                      <p>VOCÊ ECONOMIZA R$ {calcDescProductSale(item.valueProduct,item.qtdDescontPix)}</p>
                      <div className="contentButtons">
                        <ButtonsSales/>
                      </div>
                    </div>

                  </div>
              </div>

            )
          })
        }
      </div>
  )
}

export default Sale;