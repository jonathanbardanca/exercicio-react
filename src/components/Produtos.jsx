import React from 'react';
import Head from './Head.jsx';
import styles from '../styles/Produtos.module.css';
import { Link } from 'react-router-dom';

export const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
        const json = await response.json();
        setProdutos(json);
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProdutos();
  }, []);

  if (loading) return <div className="loading"></div>;
  if (!produtos) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title="Produtos" description="Página de produtos" />

      {produtos.map((produto) => (
        <Link to={`/Home/produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  )
}

export default Produtos;