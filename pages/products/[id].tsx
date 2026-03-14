import { useRouter } from 'next/router';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';
import { Product } from '../../types';
import styles from '../../styles/Product.module.css';
import Head from 'next/head';

// Mock data
const products: Product[] = [
  { id: 1, name: 'Pure Desi Ghee', price: 899, description: 'Traditional homemade clarified butter made from pure cow milk. Slow-cooked to perfection, our ghee is rich in flavor and aroma. Perfect for cooking, baking, or adding to your morning coffee. Free from additives and preservatives.', image: '/images/ghee.jpg' },
  { id: 2, name: 'Nariyal Naru', price: 249, description: 'Sweet coconut ladoos made with love using fresh grated coconut, jaggery, and cardamom. A traditional Bengali sweet that melts in your mouth. Perfect for festivals, celebrations, or as a healthy dessert.', image: '/images/naru.jpg' },
  { id: 3, name: 'Nimki', price: 179, description: 'Crunchy savory snack for tea time. Diamond-shaped fried crackers seasoned with ajwain and black pepper. Light, crispy, and irresistibly tasty. Perfect accompaniment to your evening chai.', image: '/images/nimki.jpg' },
  { id: 4, name: 'Homemade Mayonnaise', price: 199, description: 'Creamy eggless mayo made fresh daily using high-quality vegetable oil, mustard, and lemon juice. Smooth texture and tangy flavor perfect for sandwiches, burgers, and salads. No artificial preservatives.', image: '/images/mayo.jpg' },
  { id: 5, name: 'Soya Sauce', price: 159, description: 'Naturally fermented soy sauce for cooking. Aged to develop deep umami flavor, perfect for stir-fries, marinades, and dipping. Made using traditional brewing methods for authentic taste.', image: '/images/soya.jpg' },
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

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
        <title>{product.name} - Maatrika</title>
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
          <button onClick={() => dispatch(addToCart(product))} className={styles.addToCartButton}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
