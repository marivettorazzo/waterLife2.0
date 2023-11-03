import ButtonsSales from '../botoesSales/ButtonsSales'
import "./CardLoja.scss";
const CardsLoja = () => {
  return (
    <div className="contentCardLoja">
      <img src="./images/nemo.jpg" alt="" />
      <div className="infosCardLoja">
        <p>5x R$ 150,00 - no cartão</p>
        <p>ou</p>
        <p>5% de Desconto no PIX</p>
        <ButtonsSales changeClassButtons={false} />
      </div>
    </div>
  );
};

export default CardsLoja;
