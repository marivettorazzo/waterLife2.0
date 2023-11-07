
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App.jsx";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home";
import carrinho from "../src/pages/Carrinho";
import loja from "../src/pages/loja";
import promocao from "../src/pages/promocao";
import sobre from "../src/pages/Sobre/index.js";
import Header from "../src/components/Header/header.jsx";
import Footer from "../src/components/Footer/footer.jsx";
const layout = () => {
  // eslint-disable-next-line react/no-deprecated
  ReactDOM.render(
    <Router>
      <App>
        <Switch>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/sale" component={promocao} />
          <Route path="/sobre-water-life" component={sobre} />
          <Route path="/loja" component={loja} />
          <Route path="/carrinho" component={carrinho} />
          <Footer />
        </Switch>
      </App>
    </Router>,
    document.getElementById("root")
  );
};

export default layout;
