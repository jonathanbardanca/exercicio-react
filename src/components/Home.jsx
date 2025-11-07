import React from "react";
import { Routes, Route } from "react-router-dom";
import Carrinho from "./Carrinho.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Produtos from "./Produtos.jsx";
import Contato from "./Contato.jsx";
import Pagina404 from "./Pagina404.jsx";
import Produto from "./Produto.jsx";
import '../styles/App.css';


const Home = () => {
  return (
    <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route index element={<Produtos />} />
            <Route path="produtos" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
            <Route path="carrinho" element={<Carrinho />} />
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
};

export default Home;
