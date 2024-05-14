import styles from '../../styles/components/Footer.module.css';
import { FaInstagram, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftConatiner}>
        <div className={styles.logo}>
          <h1>
            Mind<span>hub</span>
          </h1>
        </div>

        <p className={styles.description}>
          Give your users the opportunity to share their thoughts about your
          product and make them happier with us.
        </p>
        <p className={styles.copyright}>&copy; 2024. All rights reserved.</p>
      </div>

      <div className={styles.newsletterContainer}>
        <p className={styles.newsletterHeader}>Sign up to the newsletter</p>
        <p className={styles.newsletterDescription}>
          Stay up to date with our latest news and updates.
        </p>

        <div className={styles.inputContainer}>
          <input type='email' placeholder='example@gmail.com' />
          <button>Subscribe</button>
        </div>

        <div className={styles.socialMediaContainer}>
          <button className={styles.socialMediaIcon}>
            <FaInstagram />
          </button>

          <button className={styles.socialMediaIcon}>
            <FaXTwitter />
          </button>

          <button className={styles.socialMediaIcon}>
            <FaTelegramPlane />
          </button>

          <button className={styles.socialMediaIcon}>
            <FaTiktok />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
