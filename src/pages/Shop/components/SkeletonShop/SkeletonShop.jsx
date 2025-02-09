import styles from './SkeletonShop.module.css';

/**
 * Create a skeleton UI to be displayed before the actual content.
 *
 * @returns {JSX.Element}
 */
export default function SkeletonShop() {
  return (
    <section className={styles['shop-content']}>
      <div className={styles['skeleton-heading']}></div>
      <div className={styles['products']}>
        {Array(14).fill(null).map((_, index) => (
          <div key={index} className={styles['skeleton-product']}></div>
        ))}
      </div>
    </section>
  );
}
