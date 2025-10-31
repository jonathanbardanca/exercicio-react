//formularios com validacao, animacoes simples, hooks, rotas, consumo de API, local storage

// formulario de login com os campos nome, email, senha, cep, rua, numero, bairro, cidade, estado em componentes, e validacao - enviar para tela de produtos
//carregar 2 segundos antes de ir para produtos

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

// botao para adicionar produtos ao carrinho
// carrinho deve ser salvo no local storage
// pagina de carrinho deve mostrar os produtos adicionados, com a quantidade e o valor total
// botao para remover produtos do carrinho
//head

import React from "react";
import Form from "./pages/form/form.jsx";
import Produto from "./pages/produto/produto.jsx";

const App = () => {

  return (
    <>
      <Form />
      <Produto />
    </>
  );
};

export default App;
