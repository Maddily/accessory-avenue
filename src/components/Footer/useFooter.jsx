import { mdiMapMarker, mdiPhone, mdiEmail } from '@mdi/js';
import VisaIcon from '../../assets/images/visa.svg';
import MasterCard from '../../assets/images/mastercard.svg';
import PayPal from '../../assets/images/paypal.svg';
import ApplePay from '../../assets/images/apple-pay.svg';
import GooglePay from '../../assets/images/google-pay.svg';
import ContactDetail from '../ContactDetail/ContactDetail';
import FooterLink from '../FooterLink/FooterLink';
import styles from './Footer.module.css';

/**
 * Creates arrays of footer data and returns combined data
 * in the form of an array of three objects that represent
 * three footer sections.
 *
 * @returns the content of three footer sections,
 * each one having a heading and JSX to be rendered.
 */
export default function useFooter() {
  const contactDetails = [
    {
      iconPath: mdiMapMarker,
      label: 'address',
      data: '1234 Elm Street, Suite 567. Silicon Bay, CA 90210',
    },
    {
      iconPath: mdiPhone,
      label: 'phone',
      data: '(555) 123-4567',
    },
    {
      iconPath: mdiEmail,
      label: 'email',
      data: 'support@accessoryavenue.com',
    },
  ];

  const links = [
    {
      value: 'home',
      path: '/',
    },
    {
      value: 'shop',
      path: '/shop',
    },
    {
      value: 'faqs',
      path: '/faqs',
    },
  ];

  const paymentIcons = [
    {
      src: VisaIcon,
      alt: 'Visa icon',
    },
    {
      src: MasterCard,
      alt: 'MasterCard icon',
    },
    {
      src: PayPal,
      alt: 'PayPal icon',
    },
    {
      src: ApplePay,
      alt: 'Apple Pay icon',
    },
    {
      src: GooglePay,
      alt: 'Google Pay icon',
    },
  ];

  const footerSections = [
    {
      heading: 'accessory avenue',
      data: contactDetails.map((contactDetail) => (
        <ContactDetail
          key={contactDetail.label}
          iconPath={contactDetail.iconPath}
          label={contactDetail.label}
          data={contactDetail.data}
        />
      )),
    },
    {
      heading: 'sitemap',
      data: (
        <ul className={styles['footer-link-list']}>
          {links.map((link) => (
            <li key={link.value}>
              <FooterLink value={link.value} path={link.path} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      heading: 'payment methods',
      data: (
        <div className={styles['payment-icons-container']}>
          {paymentIcons.map((paymentIcon) => (
            <img
              key={paymentIcon.alt}
              className={styles['payment-icon']}
              src={paymentIcon.src}
              alt={paymentIcon.alt}
            />
          ))}
        </div>
      ),
    },
  ];

  return { footerSections };
}
