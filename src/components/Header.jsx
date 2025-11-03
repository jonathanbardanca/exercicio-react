import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export const Header = () => {
  return (
    <nav>
      <ul className={styles.header}>
        <li>
          <NavLink className='styles.link' to="produtos"><button>Produtos</button></NavLink>
        </li>
        <li>
          <NavLink className='styles.link' to="contato"><button>Contato</button></NavLink>
        </li>
        <li>
          <NavLink className='styles.link' to="carrinho"><button>Carrinho</button></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;