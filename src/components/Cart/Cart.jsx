import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCart } from '@mdi/js';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';

/**
 * Renders a cart icon that links to the cart page
 * and displays the number of items in the cart.
 *
 * @param {number} noOfProductsInCart - The number of products added to the cart.
 * @returns {JSX.Element}
 */
export default function Cart({ noOfProductsInCart }) {
  return (
    <Link
      aria-label={`cart button. There are ${noOfProductsInCart} items added to the cart`}
      to="/cart"
      className={styles.cart}
    >
      <Icon title="Go to cart" color="#fff" path={mdiCart} size={1.2} />
      <span
        aria-label="number of items in cart"
        className={styles['cart-number']}
      >
        {noOfProductsInCart}
      </span>
    </Link>
  );
}

Cart.propTypes = {
  noOfProductsInCart: PropTypes.number,
};
