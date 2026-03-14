import Link from 'next/link';
import { useAppSelector } from '../store/hooks';
import styles from '../styles/Navbar.module.css';
import cartIcon from '../assets/shopping-cart.png';
import Image from 'next/image';

export default function Navbar() {
  const cartItems = useAppSelector(state => state.cart.cartItems);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>maatrika</div>
        </Link>
        
        <div className={styles.navRight}>
          <Link href="/about" className={styles.navLink}>OUR STORY</Link>
          <Link href="/cart" className={styles.cartLink}>
            <Image src={cartIcon} alt="Cart" width={24} height={24} style={{ backgroundImage: `url("../assets/shopping-cart.png")` }} />
            {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
