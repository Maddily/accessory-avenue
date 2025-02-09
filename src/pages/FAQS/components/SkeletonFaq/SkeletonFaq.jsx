import styles from './SkeletonFaq.module.css';

/**
 * Create a skeleton UI to be displayed before the actual content.
 *
 * @returns {JSX.Element}
 */
export default function SkeletonFaq() {
  return (
    <div className={styles.container}>
      <div className={styles.heading + ' ' + styles.skeleton}></div>
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <div key={index} className={styles['skeleton-group']}>
            <div
              className={styles['skeleton-title'] + ' ' + styles.skeleton}
            ></div>
            <div
              className={styles['skeleton-item'] + ' ' + styles.skeleton}
            ></div>
            <div
              className={styles['skeleton-item'] + ' ' + styles.skeleton}
            ></div>
          </div>
        ))}
    </div>
  );
}
