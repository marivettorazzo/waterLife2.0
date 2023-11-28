import "./App.scss";
// Reaproveitamento de estruturas
import { Outlet } from "react-router";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
// Mariana Vettorazzo
