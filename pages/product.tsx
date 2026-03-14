import Head from 'next/head';
import styles from '../styles/Product.module.css';

export default function Product() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eco Retreat Experience - Ganarana</title>
        <meta name="description" content="Eco-conscious retreat experience" />
      </Head>
      
      <main className={styles.productLayout}>
        <section className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.placeholderCross}>✕</div>
          </div>
        </section>
        
        <section className={styles.detailsSection}>
          <h1 className={styles.productTitle}>Eco Retreat Experience</h1>
          <p className={styles.productPrice}>€450 / person</p>
          
          <div className={styles.description}>
            <p>
              Experience the ultimate connection with nature in our eco-conscious retreat. 
              Designed for those seeking tranquility and sustainable living, this experience 
              offers a unique blend of wellness and environmental mindfulness.
            </p>
            <br />
            <p>
              Our sanctuary provides a space to breathe, reflect, and rejuvenate away from 
              the hustle of daily life. Join us for a journey that nurtures both you and the planet.
            </p>
          </div>
          
          <button className={styles.addToCartButton}>ADD TO CART</button>
        </section>
      </main>
    </div>
  );
}
