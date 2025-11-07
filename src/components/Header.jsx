import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/Home/produtos">Produtos</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/Home/contato">Contato</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/Home/carrinho">Carrinho</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;