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
      <div className={styles.heading + ' ' + styles.skeleton}></div>
      {Array(itemsCount)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={styles.item + ' ' + styles.skeleton}
          ></div>
        ))}
      <div className={styles.footer + ' ' + styles.skeleton}></div>
    </div>
  );
}

SkeletonCart.propTypes = {
  itemsCount: PropTypes.number,
};
