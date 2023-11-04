// import CardsLoja from "../components/CardLoja/CardsLoja";
import "../styles/loja.scss";
const Loja = () => {
  let resultSearch;
  let itensMenu = [
    {
      categorys: [
        {
          idCategory: 1,
          subNameCategorys: "Peixes de água salgada",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 2,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 3,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 4,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 5,
            },
          ],
        },
        {
          idCategory: 6,
          subNameCategorys: "Peixes de água doce",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 7,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 8,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 9,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 10,
            },
          ],
        },
        {
          idCategory: 11,
          subNameCategorys: "Corais",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 12,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 13,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 14,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 15,
            },
          ],
        },
        {
          idCategory: 16,
          subNameCategorys: "Aquarios",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 17,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 18,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 19,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 20,
            },
          ],
        },
        {
          idCategory: 21,
          subNameCategorys: "Algas",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id:22,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 23,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 24,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 25,
            },
          ],
        },
        {
          idCategory: 26,
          subNameCategorys: "Limpeza",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 27,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 28,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 29,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 30,
            },
          ],
        },
        {
          idCategory: 31,
          subNameCategorys: "Macro",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 32,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 33,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 34,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 35,
            },
          ],
        },
      ],
    },
  ];
  const getMenuItens = (id) => {
    for (let i of itensMenu[0].categorys)
      if (i.idCategory == id) {
        resultSearch = itensMenu[0].categorys[i]?.itens;
        console.log(resultSearch, "Aqui o array")
      }
  };

  return (
    <section>
      <div className="content-page-store">
        <section className="content-menu-vertical">
          <div className="content-backgroung-menu"></div>
          {itensMenu[0].categorys.map((item) => {
            return (
              <button

                className="item-menu" key={item.idCategoryd}
                onClick={getMenuItens(item.idCategory)}
              >
              {item.subNameCategorys}
              </button>
            );
          })}
        </section>
        <section className="content-card-product">
          {/* {resultSearch.map((itemOfValue) => {
            return (
              <CardsLoja
                key={itemOfValue.id}
                qtdParcelas={itemOfValue.qtdParcelaSemJuros}
                valueProduct={itemOfValue.valueProduct}
                descPix={itemOfValue.qtdDescontPix}
              />
            );
          })} */ <p>oi</p>}
        </section>
      </div>
    </section>
  );
};

export default Loja;
