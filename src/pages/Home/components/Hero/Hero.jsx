import { Link } from 'react-router-dom';
import heroImage500Png from '../../../../assets/images/hero-500.png';
import heroImage600Png from '../../../../assets/images/hero-600.png';
import heroImage800Png from '../../../../assets/images/hero-800.png';
import heroImage1000Png from '../../../../assets/images/hero-1000.png';
import heroImage500 from '../../../../assets/images/hero-500.webp';
import heroImage600 from '../../../../assets/images/hero-600.webp';
import heroImage800 from '../../../../assets/images/hero-800.webp';
import heroImage1000 from '../../../../assets/images/hero-1000.webp';
import styles from './Hero.module.css';

/**
 * Renders a hero.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
  return (
    <section aria-label="hero" className={styles['hero-container']}>
      <article className={styles['hero-text']}>
        <h1 className={styles['hero-heading']}>upgrade your everyday tech</h1>
        <p aria-label="hero paragraph">
          Premium accessories designed to complement your devices with style and
          functionality.
        </p>
        <Link to="/shop" className={styles.cta} type="button">
          shop now
        </Link>
      </article>
      <picture>
        <source srcSet={heroImage1000} type="image/webp"  media="(min-width: 1000px)" />
        <source srcSet={heroImage800} type="image/webp"  media="(min-width: 800px)" />
        <source srcSet={heroImage600} type="image/webp"  media="(min-width: 600px)" />
        <source srcSet={heroImage500} type="image/webp" />

        {/* A fallback for browsers that don't support WebP format */}
        <source srcSet={heroImage1000Png} media="(min-width: 1000px)" />
        <source srcSet={heroImage800Png} media="(min-width: 800px)" />
        <source srcSet={heroImage600Png} media="(min-width: 600px)" />
        <img
          className={styles['hero-image']}
          src={heroImage500Png}
          alt="phone with accessories"
        />
      </picture>
    </section>
  );
}
