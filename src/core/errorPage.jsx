import "../styles/error.scss";
const errorPage = () => {
  return (
    <div className="errorClass">
      <div className="informationsNotFound">
        <h1>404 - NADA POR AQUI!</h1>
        <p>Oh! Parece que a maré te arrastou para um lugar inesperado.</p>
        <a href="/" aria-details="Para voltar a página príncipal">Clique aqui para pegar bote de volta à terra firme.</a>
      </div>
    </div>
  );
};

export default errorPage;
