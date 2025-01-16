import { Link } from 'react-router-dom';
import styles from './PromoBanner.module.css';

/**
 * Renders a promotional banner.
 *
 * @returns {JSX.Element}
 */
export default function PromoBanner() {
  return (
    <article aria-label='promotional banner' className={styles.promo}>
      <h2 className={styles['promo-heading']}>
        Free Shipping on Orders Over $50!
      </h2>
      <Link to="/shop" className={styles.cta} type="button">
        <span className={styles.underline}>shop now</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="10"
          viewBox="0 0 46 16"
        >
          <path
            fill='#fff'
            id="Path_10"
            data-name="Path 10"
            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
            transform="translate(30)"
          ></path>
        </svg>
      </Link>
    </article>
  );
}
