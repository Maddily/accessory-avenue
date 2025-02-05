import useFooter from './useFooter';
import styles from './Footer.module.css';

/**
 * Renders the footer.
 *
 * @returns {JSX.Element}
 */
export default function Footer() {
  const { footerSections } = useFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        {footerSections.map((footerSection) => (
          <div className={styles['footer-section']} key={footerSection.heading}>
            <h3 className={styles['footer-heading']}>
              {footerSection.heading}
            </h3>
            {footerSection.data}
          </div>
        ))}
      </div>
      <p aria-label="copyright statement" className={styles.copyright}>
        &#169; {new Date().getFullYear()} The Accessory Avenue. All rights
        reserved.
      </p>
    </footer>
  );
}
