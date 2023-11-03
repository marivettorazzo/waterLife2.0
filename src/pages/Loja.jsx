import CardsLoja from "../components/CardLoja/CardsLoja";
import "../styles/loja.scss";
const Loja = () => {
  let itensMenu = [{
    category : "Peixes",
    subCategorys : [
      {
        subNameCategorys :"Peixes de água salgada",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Peixes de água doce",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Corais",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Aquarios",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Algas",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Limpeza",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },
      {
        subNameCategorys :"Macro",
        itens: [
          {
          img : "/images/laranjinha.jpg",
          nameProduct : "Peixe do Alpes Mexicanos",
          qtdParcelaSemJuros : 10,
          qtdDescontPix :8,
          valueProduct : 180.00,
          id:12
        },
          {
          img : "/images/nemo.jpg",
          nameProduct : "Peixe Palhaço",
          qtdParcelaSemJuros : 6,
          qtdDescontPix :5,
          valueProduct : 120.00,
          id:13
        },
          {
          img : "/images/amarelo.jpg",
          nameProduct : "Peixe do afeganistão",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :10,
          valueProduct : 275.00,
          id:14
        },
          {
          img : "/images/peixeDoAfeganistao.jpg",
          nameProduct : "Beta laranja  do Himalaia",
          qtdParcelaSemJuros : 12,
          qtdDescontPix :7,
          valueProduct : 775.00,
          id:15
        },
        ]
      },

    ]
  }]
  return (
    <section>
      <div className="content-page-store">
      <section className="content-menu-vertical">
        <div className="content-backgroung-menu"></div>
        {itensMenu[0].subCategorys.map((item)=>{
          return(

            <div key={item.id} className="item-menu">
              {item.subNameCategorys}
            </div>
          )
        })}
      </section>
      <section className="content-card-product">
      
        <CardsLoja />
      </section>
      </div>
    </section>
  );
};

export default Loja;
