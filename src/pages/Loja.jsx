import CardsLoja from "../components/CardLoja/CardsLoja";
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
          idCategory: 2,
          subNameCategorys: "Peixes de água doce",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
        {
          idCategory: 3,
          subNameCategorys: "Corais",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
        {
          idCategory: 4,
          subNameCategorys: "Aquarios",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
        {
          idCategory: 5,
          subNameCategorys: "Algas",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
        {
          idCategory: 6,
          subNameCategorys: "Limpeza",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
        {
          idCategory: 7,
          subNameCategorys: "Macro",
          itens: [
            {
              img: "/images/laranjinha.jpg",
              nameProduct: "Peixe do Alpes Mexicanos",
              qtdParcelaSemJuros: 10,
              qtdDescontPix: 8,
              valueProduct: 180.0,
              id: 1,
            },
            {
              img: "/images/nemo.jpg",
              nameProduct: "Peixe Palhaço",
              qtdParcelaSemJuros: 6,
              qtdDescontPix: 5,
              valueProduct: 120.0,
              id: 2,
            },
            {
              img: "/images/amarelo.jpg",
              nameProduct: "Peixe do afeganistão",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 10,
              valueProduct: 275.0,
              id: 3,
            },
            {
              img: "/images/peixeDoAfeganistao.jpg",
              nameProduct: "Beta laranja  do Himalaia",
              qtdParcelaSemJuros: 12,
              qtdDescontPix: 7,
              valueProduct: 775.0,
              id: 4,
            },
          ],
        },
      ],
    },
  ];
  const getMenuItens = (id) => {
    for (let i of itensMenu[0].categorys)
      if (i.idCategory == id) {
        resultSearch = itensMenu[0].categorys[i];
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
                key={item.id}
                className="item-menu"
                onClick={getMenuItens(item.idCategory)}
              >
                idCategory :{item.subNameCategorys}
              </button>
            );
          })}
        </section>
        <section className="content-card-product">
          {resultSearch.map((itemOfValue) => {
            return (
              <CardsLoja
                key={itemOfValue.id}
                qtdParcelas={itemOfValue.qtdParcelaSemJuros}
                valueProduct={itemOfValue.valueProduct}
                descPix={itemOfValue.qtdDescontPix}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Loja;
