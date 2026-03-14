import { useRouter } from 'next/router';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import styles from '../../styles/Product.module.css';

// Mock data - in a real app, you'd fetch this from a database
const products: Product[] = [
  { id: 1, name: 'Product 1', price: 100, description: 'This is a detailed description of product 1.', image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Product 2', price: 200, description: 'This is a detailed description of product 2.', image: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Product 3', price: 300, description: 'This is a detailed description of product 3.', image: 'https://via.placeholder.com/400' },
];

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.productLayout}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h1>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)} className={styles.addToCartButton}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
