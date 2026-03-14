import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/cartSlice';
import styles from '../styles/Cart.module.css';
import Link from 'next/link';
import Head from 'next/head';

const CartPage = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const dispatch = useAppDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Your Cart - Ganarana</title>
      </Head>
      <h1 className={styles.title}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty.</p>
          <Link href="/" className={styles.continueShopping}>Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemImagePlaceholder}>
                  <div className={styles.placeholderCross}>✕</div>
                </div>
                <div className={styles.itemDetails}>
                  <h2 className={styles.itemName}>{item.name}</h2>
                  <p className={styles.itemPrice}>€{item.price}</p>
                </div>
                <div className={styles.itemActions}>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => dispatch(updateQuantity({ productId: item.id, quantity: parseInt(e.target.value) }))}
                    className={styles.quantityInput}
                  />
                  <button onClick={() => dispatch(removeFromCart(item.id))} className={styles.removeButton}>Remove</button>
                </div>
                <p className={styles.itemTotal}>€{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h2 className={styles.totalPrice}>Total: €{total.toFixed(2)}</h2>
            <Link href="/checkout" passHref>
              <button className={styles.checkoutButton}>PROCEED TO CHECKOUT</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
