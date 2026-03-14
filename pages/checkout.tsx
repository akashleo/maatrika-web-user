import styles from '../styles/Checkout.module.css';
import Head from 'next/head';

const CheckoutPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed!');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkout - Ganarana</title>
      </Head>
      <h1 className={styles.title}>Checkout</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Shipping Information</h2>
          <input type="text" placeholder="Full Name" className={styles.input} required />
          <input type="text" placeholder="Address" className={styles.input} required />
          <div className={styles.row}>
            <input type="text" placeholder="City" className={styles.input} required />
            <input type="text" placeholder="Postal Code" className={styles.input} required />
          </div>
          <input type="text" placeholder="Country" className={styles.input} required />
        </div>
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Payment Information</h2>
          <input type="text" placeholder="Card Number" className={styles.input} required />
          <div className={styles.row}>
            <input type="text" placeholder="Expiry Date (MM/YY)" className={styles.input} required />
            <input type="text" placeholder="CVC" className={styles.input} required />
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>PLACE ORDER</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
