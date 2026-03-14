import Head from 'next/head';
import Link from 'next/link';
import { Product } from '../types';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 100, description: 'This is product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, description: 'This is product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 300, description: 'This is product 3', image: 'https://via.placeholder.com/150' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ganarana - Reconnect with Nature</title>
        <meta name="description" content="Eco-conscious retreat in Ibiza" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Our Products</h1>
        <div className={styles.grid}>
          {products.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <div className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </>
  );
}
