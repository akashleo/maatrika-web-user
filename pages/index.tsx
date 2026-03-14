import Head from 'next/head';
import Link from 'next/link';
import { Product } from '../types';
import styles from '../styles/Home.module.css';
import { Bungee } from 'next/font/google';

const products: Product[] = [
  { id: 1, name: 'Pure Desi Ghee', price: 899, description: 'Traditional homemade clarified butter', image: '/images/ghee.jpg' },
  { id: 2, name: 'Nariyal Naru', price: 249, description: 'Sweet coconut ladoos made with love', image: '/images/naru.jpg' },
  { id: 3, name: 'Nimki', price: 179, description: 'Crunchy savory snack for tea time', image: '/images/nimki.jpg' },
  { id: 4, name: 'Homemade Mayonnaise', price: 199, description: 'Creamy eggless mayo made fresh', image: '/images/mayo.jpg' },
  { id: 5, name: 'Soya Sauce', price: 159, description: 'Fermented soy sauce for cooking', image: '/images/soya.jpg' },
];

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
      <div className={`${styles.mottoBanner} ${bungee.className}`}>
          <h2 className={styles.mottoText}>Reconnect with Nature. Find Your Balance.</h2>
          <p className={styles.mottoSubtext}>Eco-conscious retreats for mind, body & soul</p>
        </div>
    </>
  );
}
