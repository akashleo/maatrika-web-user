import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ganarana</title>
        <meta name="description" content="Learn about our eco-conscious retreat" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Our Story</h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>

        <section className={styles.missionSection}>
          <div className={styles.missionImage}>
            <div className={styles.placeholder}>✕</div>
          </div>
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💚</div>
              <h3 className={styles.valueTitle}>Wellness</h3>
              <p className={styles.valueText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Community</h3>
              <p className={styles.valueText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✨</div>
              <h3 className={styles.valueTitle}>Authenticity</h3>
              <p className={styles.valueText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.teamSectionTitle}>Meet Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.teamName}>Jane Doe</h3>
              <p className={styles.teamRole}>Founder & Director</p>
              <p className={styles.teamBio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </div>
            
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.teamName}>John Smith</h3>
              <p className={styles.teamRole}>Wellness Coordinator</p>
              <p className={styles.teamBio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </div>
            
            <div className={styles.teamCard}>
              <div className={styles.teamImage}>
                <div className={styles.placeholder}>✕</div>
              </div>
              <h3 className={styles.teamName}>Maria Garcia</h3>
              <p className={styles.teamRole}>Retreat Facilitator</p>
              <p className={styles.teamBio}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <div className={styles.locationContent}>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className={styles.text}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div className={styles.locationImage}>
            <div className={styles.placeholder}>✕</div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
