import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import styles from '../../styles/Product.module.css';
import Head from 'next/head';

// Mock data
const products: Product[] = [
  { id: 1, name: 'Eco Retreat Experience', price: 450, description: 'A soulful journey into nature. Experience the ultimate connection with nature in our eco-conscious retreat. Designed for those seeking tranquility and sustainable living, this experience offers a unique blend of wellness and environmental mindfulness.', image: '/images/retreat.jpg' },
  { id: 2, name: 'Yoga & Meditation', price: 350, description: 'Find your inner peace with our expert-led yoga and meditation sessions in the heart of nature.', image: '/images/yoga.jpg' },
  { id: 3, name: 'Nature Immersion', price: 420, description: 'Connect with the elements and rediscover your primitive self through guided nature walks and forest bathing.', image: '/images/nature.jpg' },
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.container}>
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{product.name} - Ganarana</title>
      </Head>
      <div className={styles.productLayout}>
        <section className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderCross}>✕</div>
          </div>
        </section>
        
        <div className={styles.detailsSection}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productPrice}>€{product.price}</p>
          <div className={styles.description}>
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
