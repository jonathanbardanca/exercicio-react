import React from 'react';
import styles from '../styles/Contato.module.css';
import foto from '../../img/contato.jpg';
import Head from './Head.jsx';

export const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato conosco" />
      <img src={foto} alt="maquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>emailqualquer@email.com</li>
          <li>9999-9999</li>
          <li>Rua maravilhosa 2040, SC - Florianopolis</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato;