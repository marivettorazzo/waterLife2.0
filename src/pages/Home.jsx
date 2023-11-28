import Carouselcliente from "../components/CarouselCliente/CarouselCliente.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Maps from "../components/Maps/Maps.jsx";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div id="home">
      <h1>TUDO PARA O SEU REEF!</h1>
      
      <Carouselcliente />
      <Cards />
      <Maps />
    </div>
  );
};

export default Home;
