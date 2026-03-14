import React from 'react';
import styles from '../styles/Checkout.module.css';

const CheckoutPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Order placed!');
  };

  return (
    <div className={styles.container}>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formSection}>
          <h2>Shipping Information</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <div className={styles.formSection}>
          <h2>Payment Information</h2>
          <input type="text" placeholder="Card Number" required />
          <input type="text" placeholder="Expiry Date (MM/YY)" required />
          <input type="text" placeholder="CVC" required />
        </div>
        <button type="submit" className={styles.submitButton}>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
