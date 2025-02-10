import PropTypes from 'prop-types';
import styles from './SkeletonCart.module.css';

/**
 * Create a skeleton UI to be displayed before the actual content.
 *
 * @returns {JSX.Element}
 */
export default function SkeletonCart({ itemsCount }) {
  return (
    <div className={styles.container}>
      <div
        aria-label="skeleton-heading"
        className={styles.heading + ' ' + styles.skeleton}
      ></div>
      {Array(itemsCount)
        .fill(null)
        .map((_, index) => (
          <div
            aria-label="skeleton-item"
            key={index}
            className={styles.item + ' ' + styles.skeleton}
          ></div>
        ))}
      <div
        aria-label="skeleton-footer"
        className={styles.footer + ' ' + styles.skeleton}
      ></div>
    </div>
  );
}

SkeletonCart.propTypes = {
  itemsCount: PropTypes.number,
};
