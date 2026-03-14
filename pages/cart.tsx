import { useCart } from '../context/CartContext';
import styles from '../styles/Cart.module.css';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                </div>
                <div className={styles.itemActions}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className={styles.quantityInput}
                  />
                  <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Remove</button>
                </div>
                <p className={styles.itemTotal}>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2>Total: ${total.toFixed(2)}</h2>
            <Link href="/checkout" passHref>
              <button className={styles.checkoutButton}>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
