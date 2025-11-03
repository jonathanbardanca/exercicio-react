import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Carrinho from "./Carrinho.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Produtos from "./Produtos.jsx";
import Contato from "./Contato.jsx";
import Pagina404 from "./Pagina404.jsx";

const Home = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/produtos" end element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Home;
