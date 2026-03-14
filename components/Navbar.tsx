import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <Link href="/" className={styles.navLink}>OUR STORY</Link>
          <Link href="/about" className={styles.navLink}>RETREATS</Link>
        </div>
        
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>maatrika</div>
        </Link>
        
        <div className={styles.navRight}>
          <Link href="/about" className={styles.navLink}>PRIVATE HIRE</Link>
          <Link href="/about" className={styles.navLink}>CONTACT</Link>
          <Link href="/cart" className={styles.cartLink}>
            Cart
            {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
