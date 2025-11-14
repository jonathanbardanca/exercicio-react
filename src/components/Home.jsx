import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Produtos from "./Produtos.jsx";
import Carrinho from "./Carrinho.jsx";
import Contato from "./Contato.jsx";
import Pagina404 from "./Pagina404.jsx";
import Produto from "./Produto.jsx";
import '../styles/App.css';


const Home = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  React.useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  React.useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem("cartItems");
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addToCart(e, produto) {
    e.preventDefault();
    e.stopPropagation();
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === produto.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...produto, quantidade: 1 }];
      }
    });
  }

  return (
    <div className="App">
        <Header setCartOpen={setCartOpen} />
        <div className="content">
          <Routes>
            <Route index element={<Produtos addToCart={addToCart} />} />
            <Route path="produtos" element={<Produtos addToCart={addToCart} />} />
            <Route path="produto/:id" element={<Produto addToCart={addToCart} />} />
            <Route path="contato" element={<Contato />} />
    
            <Route path="*" element={<Pagina404 />} />
          </Routes>
        </div>
        <Footer />

        <Carrinho
          cartItems={cartItems}
          setCartItems={setCartItems}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
    </div>
  );
};

export default Home;
