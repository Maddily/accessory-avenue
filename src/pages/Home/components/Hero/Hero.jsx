import { Link } from 'react-router-dom';
import heroImage from '../../../../assets/images/hero.png';
import styles from './Hero.module.css';

/**
 * Renders a hero.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
  return (
    <section className={styles['hero-container']}>
      <article className={styles['hero-text']}>
        <h1 className={styles['hero-heading']}>upgrade your everyday tech</h1>
        <p>
          Premium accessories designed to complement your devices with style and
          functionality.
        </p>
        <Link to='/' className={styles.cta} type="button">
          shop now
        </Link>
      </article>
      <img
        className={styles['hero-image']}
        src={heroImage}
        alt="phone with accessories"
      />
    </section>
  );
}
