import ButtonsSales from '../botoesSales/ButtonsSales';
import PropTypes from 'prop-types';
import "./CardLoja.scss";

const CardsLoja =({props}) => {
  return (
    <div className="contentCardLoja" >
      <img src="./images/nemo.jpg" alt="" />
      <div className="infosCardLoja">
        <p>{props.qtdParcelas}x R$ {props.valueProduct} - no cartão</p>
        <p>ou</p>
        <p>{props.descPix} de Desconto no PIX</p>
        <ButtonsSales changeClassButtons={false} />
      </div>
    </div>
  );
};
CardsLoja.propTypes = {
 
  valueProduct : PropTypes.number.isRequired,
  qtdParcelas : PropTypes.string.isRequired,
  descPix :PropTypes.number.isRequired
}

export default CardsLoja;
