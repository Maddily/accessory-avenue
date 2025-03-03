import { memo } from 'react';
import styles from './CartFooter.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MemoizedLink = memo(Link);

/**
 * Renders the estimated total and check out button.
 *
 * @param {string} total - The total price of all items added to the cart.
 * @returns {JSX.Element}
 */
export default function CartFooter({ total }) {
  return (
    <div className={styles['cart-footer']}>
      <p className={styles['estimated-total']} aria-label="estimated total">
        Estimated total: <span className={styles.total}>${total}</span>
      </p>
      <p
        className={styles.note}
        aria-label="taxes, disacount and shipping note"
      >
        Taxes, Discounts and shipping calculated at checkout
      </p>
      <MemoizedLink className={styles.checkout} to="#">
        Check out
      </MemoizedLink>
    </div>
  );
}

CartFooter.propTypes = {
  total: PropTypes.string,
};
