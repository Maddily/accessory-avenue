import styles from './SkeletonHome.module.css';

/**
 * Create a skeleton UI to be displayed before the actual content.
 *
 * @returns {JSX.Element}
 */
export default function Skeletonhome() {
  return (
    <div className={styles.container}>
      <div
        aria-label="skeleton-hero"
        className={styles['skeleton'] + ' ' + styles.hero}
      ></div>
      <div className={styles['featured-products']}>
        <div
          aria-label="skeleton-featured-products-heading"
          className={
            styles['skeleton'] + ' ' + styles['featured-products-heading']
          }
        ></div>
        <div className={styles['featured-products-container']}>
          <div
            aria-label="skeleton-product"
            className={styles['skeleton'] + ' ' + styles.product}
          ></div>
          <div
            aria-label="skeleton-product"
            className={styles['skeleton'] + ' ' + styles.product}
          ></div>
          <div
            aria-label="skeleton-product"
            className={styles['skeleton'] + ' ' + styles.product}
          ></div>
          <div
            aria-label="skeleton-product"
            className={styles['skeleton'] + ' ' + styles.product}
          ></div>
        </div>
      </div>
      <div
        aria-label="skeleton-testimonials"
        className={styles['skeleton'] + ' ' + styles.testimonials}
      ></div>
      <div
        aria-label="skeleton-promo-banner"
        className={styles['skeleton'] + ' ' + styles['promo-banner']}
      ></div>
    </div>
  );
}
