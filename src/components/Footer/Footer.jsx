import Icon from '@mdi/react';
import { mdiMapMarker, mdiPhone, mdiEmail } from '@mdi/js';
import FooterLink from '../FooterLink/FooterLink';
import VisaIcon from '../../assets/images/visa.svg';
import MasterCard from '../../assets/images/mastercard.svg';
import PayPal from '../../assets/images/paypal.svg';
import ApplePay from '../../assets/images/apple-pay.svg';
import GooglePay from '../../assets/images/google-pay.svg';
import styles from './Footer.module.css';

/**
 * Renders a footer.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-section']}>
          <h3 className={styles['footer-heading']}>the accessory avenue</h3>
          <div className={styles['contact-icon-and-p']}>
            <Icon path={mdiMapMarker} size={0.7} />
            <p aria-label='address'>
              1234 Elm Street, Suite 567
              <br />
              Silicon Bay, CA 90210
            </p>
          </div>
          <div className={styles['contact-icon-and-p']}>
            <Icon path={mdiPhone} size={0.7} />
            <p aria-label='phone'>(555) 123-4567</p>
          </div>
          <div className={styles['contact-icon-and-p']}>
            <Icon path={mdiEmail} size={0.7} />
            <p aria-label='email'>support@accessoryavenue.com</p>
          </div>
        </div>

        <div className={styles['footer-section']}>
          <h3 className={styles['footer-heading']}>sitemap</h3>
          <ul className={styles['footer-link-list']}>
            <li>
              <FooterLink value="home" path="/" />
            </li>
            <li>
              <FooterLink value="shop" path="/shop" />
            </li>
          </ul>
        </div>

        <div className={styles['footer-section']}>
          <h3 className={styles['footer-heading']}>payment methods</h3>
          <div className={styles['payment-icons-container']}>
            <img
              className={styles['payment-icon']}
              src={VisaIcon}
              alt="Visa icon"
            />
            <img
              className={styles['payment-icon']}
              src={MasterCard}
              alt="MasterCard icon"
            />
            <img
              className={styles['payment-icon']}
              src={PayPal}
              alt="PayPal icon"
            />
            <img
              className={styles['payment-icon']}
              src={ApplePay}
              alt="Apple Pay icon"
            />
            <img
              className={styles['payment-icon']}
              src={GooglePay}
              alt="Google Pay icon"
            />
          </div>
        </div>
      </div>
      <p aria-label='copyright statement' className={styles.copyright}>&#169; {new Date().getFullYear()} The Accessory Avenue. All rights reserved.</p>
    </footer>
  );
}
