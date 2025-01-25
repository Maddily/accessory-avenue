import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

/**
 * Renders error page.
 *
 * @returns {JSX.Element}
 */
export default function ErrorPage() {
  return (
    <div className={styles['error-container']}>
      <h1 className={styles.code}>404</h1>
      <p>Something went wrong!</p>
      <Link className={styles['home-link']} to="/">
        Back to Homepage
      </Link>
    </div>
  );
}
