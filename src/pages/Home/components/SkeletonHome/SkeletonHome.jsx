import styles from './SkeletonHome.module.css';

/**
 * Create a skeleton UI to be displayed before the actual content.
 *
 * @returns {JSX.Element}
 */
export default function Skeletonhome() {
  return (
    <div className={styles.container}>
      <div className={styles['skeleton'] + ' ' + styles.hero}></div>
      <div className={styles['featured-products']}>
        <div
          className={
            styles['skeleton'] + ' ' + styles['featured-products-heading']
          }
        ></div>
        <div className={styles['featured-products-container']}>
          <div className={styles['skeleton'] + ' ' + styles.product}></div>
          <div className={styles['skeleton'] + ' ' + styles.product}></div>
          <div className={styles['skeleton'] + ' ' + styles.product}></div>
          <div className={styles['skeleton'] + ' ' + styles.product}></div>
        </div>
      </div>
      <div className={styles['skeleton'] + ' ' + styles.testimonials}></div>
      <div className={styles['skeleton'] + ' ' + styles['promo-banner']}></div>
    </div>
  );
}
