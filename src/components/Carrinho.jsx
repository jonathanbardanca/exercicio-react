import React from "react";
import styles from "../styles/Carrinho.module.css";

const Carrinho = ({
  cartItems,
  setCartItems,
  cartOpen = false,
  setCartOpen = () => {},
}) => {
  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function addQuantidade(id) {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function subtractQuantidade(id) {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: Math.max(1, item.quantidade - 1) }
            : item
        )
    );
  }


    const subtotal = cartItems.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  
  if (cartItems.length === 0) {
    return (
      <div className={`${styles.cart} ${cartOpen ? styles.active : ""}`}>
        Seu carrinho está vazio.
      </div>
    );
  }

  return (
    <div className={`${styles.cart} ${cartOpen ? styles.active : ""}`}>
      <div className={styles.cartHeaderTop}>
        <h1>Seu Carrinho</h1>
        <button
          onClick={() => setCartOpen(false)}
          className={styles.closeButton}
        >
          Fechar
        </button>
      </div>

      <div className={styles.cartBody}>
        <div className={styles.cartHeader}>
          <span className={styles.item1}>Produto</span>
          <span className={styles.item2}>Quantidade</span>
          <span className={styles.item3}>Total</span>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItems}>
            <div className={styles.itemProduto}>
              <img src={item.fotos[0].src} alt={item.fotos[0].titulo} />

              <div>
                <h2>{item.nome}</h2>
                <span>R$ {item.preco}</span>
              </div>
            </div>

            <div className={styles.itemInfo}>
              <span className={styles.item2}>
                <span className={styles.btnSub} onClick={() => subtractQuantidade(item.id)}>-</span>
                {item.quantidade}
                <span className={styles.btnAdd} onClick={() => addQuantidade(item.id)}>+</span>
              </span>
              <span className={styles.item3}>
                R$ {(item.preco * item.quantidade).toFixed(2)}
              </span>
              <span
                role="button"
                tabIndex={0}
                onClick={() => removeFromCart(item.id)}
                className={styles.removeButton}
              >
                X
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cartFooter}>
        <p>
          Subtotal: <span>R$ {subtotal.toFixed(2)}</span>
        </p>
        <button className={styles.checkoutButton}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Carrinho;
