import "swiper/swiper.min.css";
// import "boxicons";
import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Routers from "./config/Routers";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <Footer />
      <Routes>
        <Route
          render={(props) => (
            <>
              <Header {...props} />
              <Routers />
              <Footer />
            </>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
