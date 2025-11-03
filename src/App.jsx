//formularios com validacao, animacoes simples, hooks, rotas, consumo de API, local storage

// formulario de login com os campos nome, email, senha, cep, rua, numero, bairro, cidade, estado em componentes, e validacao - enviar para tela de Homes
//carregar 2 segundos antes de ir para Homes

// Utilize a API abaixo para puxar a lista de Home
// https://ranekapi.origamid.dev/json/api/Home
// Cada Home possui o id, o mesmo pode ser passado na api para retornar os dados desse Home específico
// https://ranekapi.origamid.dev/json/api/Home/notebook

// botao para adicionar Homes ao carrinho
// carrinho deve ser salvo no local storage
// pagina de carrinho deve mostrar os Homes adicionados, com a quantidade e o valor total
// botao para remover Homes do carrinho
//head

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form.jsx";
import Home from "./components/Home.jsx";
import Pagina404 from "./components/Pagina404.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="Home" element={<Home />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
