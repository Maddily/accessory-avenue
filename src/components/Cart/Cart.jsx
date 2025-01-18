import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import styles from './Cart.module.css';

/**
 * Renders a cart icon that links to the cart page
 * and displays the number of items in the cart.
 *
 * @returns {JSX.Element}
 */
export default function Cart({ path }) {
  return (
    <Link aria-label="cart" to={path} className={styles.cart}>
      <Icon title='Go to cart' color='#fff' path={mdiCart} size={1.2} />
      {/* Refactor so the number is displayed only if higher than 0 */}
      <span aria-label='number of items in cart' className={styles['cart-number']}>0</span>
    </Link>
  );
}

Cart.propTypes = {
  path: PropTypes.string,
};
