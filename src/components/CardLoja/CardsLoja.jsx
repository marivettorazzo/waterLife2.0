import ButtonsSales from '../botoesSales/ButtonsSales'
import "./CardLoja.scss";
const CardsLoja = (qtdParcelas,valueProduct, descPix) => {
  return (
    <div className="contentCardLoja">
      <img src="./images/nemo.jpg" alt="" />
      <div className="infosCardLoja">
        <p>{qtdParcelas}x R$ {valueProduct} - no cartão</p>
        <p>ou</p>
        <p>{descPix} de Desconto no PIX</p>
        <ButtonsSales changeClassButtons={false} />
      </div>
    </div>
  );
};

export default CardsLoja;
