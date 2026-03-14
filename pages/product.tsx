import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Product.module.css';

export default function Product() {
  return (
    <>
      <Head>
        <title>Product - Ganarana</title>
        <meta name="description" content="Eco-conscious retreat experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.productHero}>
          <div className={styles.productImages}>
            <div className={styles.mainImage}>
              <div className={styles.placeholder}>✕</div>
            </div>
            <div className={styles.thumbnails}>
              <div className={styles.thumbnail}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <div className={styles.thumbnail}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <div className={styles.thumbnail}>
                <div className={styles.placeholder}>✕</div>
              </div>
            </div>
          </div>
          
          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>Eco Retreat Experience</h1>
            <p className={styles.productPrice}>€450 / person</p>
            
            <div className={styles.productDescription}>
              <h2 className={styles.sectionTitle}>Description</h2>
              <p className={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className={styles.descriptionText}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className={styles.productFeatures}>
              <h2 className={styles.sectionTitle}>What's Included</h2>
              <ul className={styles.featuresList}>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Ut labore et dolore magna aliqua</li>
                <li>Quis nostrud exercitation ullamco</li>
              </ul>
            </div>
            
            <button className={styles.bookButton}>BOOK NOW</button>
          </div>
        </section>
        
        <section className={styles.detailsSection}>
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Duration</h3>
            <p className={styles.detailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Location</h3>
            <p className={styles.detailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          
          <div className={styles.detailCard}>
            <h3 className={styles.detailTitle}>Accommodation</h3>
            <p className={styles.detailText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </section>
        
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>You May Also Like</h2>
          <div className={styles.relatedGrid}>
            <div className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.relatedCardTitle}>Yoga Retreat</h3>
              <p className={styles.relatedCardPrice}>€350 / person</p>
            </div>
            
            <div className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.relatedCardTitle}>Meditation Workshop</h3>
              <p className={styles.relatedCardPrice}>€280 / person</p>
            </div>
            
            <div className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.relatedCardTitle}>Nature Immersion</h3>
              <p className={styles.relatedCardPrice}>€420 / person</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
