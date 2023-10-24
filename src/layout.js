import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

import Home from "./pages/Home/Home.js";

const layout = () => {
  return (
    <div>
      {" "}
      <Header />
      <Home/>
      <Footer />
    </div>
  );
};

export default layout;
