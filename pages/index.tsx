import Head from 'next/head';
import Link from 'next/link';
import { Product } from '../types';
import styles from '../styles/Home.module.css';

const products: Product[] = [
  { id: 1, name: 'Eco Retreat Experience', price: 450, description: 'A soulful journey into nature', image: '/images/retreat.jpg' },
  { id: 2, name: 'Yoga & Meditation', price: 350, description: 'Find your inner peace', image: '/images/yoga.jpg' },
  { id: 3, name: 'Nature Immersion', price: 420, description: 'Connect with the elements', image: '/images/nature.jpg' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Maatrika home of the food</title>
        <meta name="description" content="Homemade food products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Our Products</h1>
        <div className={styles.grid}>
          {products.map(product => (
            <Link href={`/product`} key={product.id}>
              <div className={styles.card}>
                <div className={styles.productImagePlaceholder}>
                  <div className={styles.placeholderCross}>✕</div>
                </div>
                <h2 className={styles.productName}>{product.name}</h2>
                <p className={styles.productPrice}>€{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <div className={styles.mottoBanner}>
          <h2 className={styles.mottoText}>Reconnect with Nature. Find Your Balance.</h2>
          <p className={styles.mottoSubtext}>Eco-conscious retreats for mind, body & soul</p>
        </div>
    </>
  );
}
