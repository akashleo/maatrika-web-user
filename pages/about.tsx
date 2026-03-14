import Head from 'next/head';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ganarana</title>
        <meta name="description" content="Learn about our eco-conscious retreat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Story</h1>
            <p className={styles.heroSubtitle}>
              Connecting humanity with nature through conscious living and sustainable practices.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionImage}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderCross}>✕</div>
            </div>
          </div>
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              At Ganarana, we believe in the transformative power of nature. Our mission is to provide a sanctuary where guests can disconnect from the digital world and reconnect with their true selves.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2 className={styles.valuesSectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌍</div>
              <h3 className={styles.valueTitle}>Sustainability</h3>
              <p className={styles.valueText}>
                Every aspect of our retreat is designed with the planet in mind, from renewable energy to zero-waste practices.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💚</div>
              <h3 className={styles.valueTitle}>Wellness</h3>
              <p className={styles.valueText}>
                Holistic health is at the core of everything we do, nurturing the body, mind, and spirit.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
