import styles from '../styles/Footer.module.css';
import { Bungee } from 'next/font/google';

const bungee = Bungee({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${bungee.className}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logo}>
            <div className={styles.logoText}>MAATRIKA</div>
          </div>
        </div>
        
        <div className={styles.centerSection}>
          <h3 className={styles.heading}>join our tribe</h3>
          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="your email" 
              className={styles.input}
            />
            <button className={styles.button}>SUBSCRIBE</button>
          </div>
        </div>
        
        <div className={styles.rightSection}>
          <h3 className={styles.heading}>connect</h3>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>INSTAGRAM</a>
            <a href="#" className={styles.socialLink}>FACEBOOK</a>
            <a href="#" className={styles.socialLink}>PINTEREST</a>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>© 2024 MAATRIKA IBIZA</p>
        <p>SITE BY VISUAL STUDIO</p>
      </div>
    </footer>
  );
}
