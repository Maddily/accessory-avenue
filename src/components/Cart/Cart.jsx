import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

/**
 * Renders a cart icon that links to the cart page
 * and displays the number of items in the cart.
 *
 * @returns {JSX.Element}
 */
export default function Cart() {
  return (
    <Link aria-label='cart' to="/" className={styles.cart}>
      <ShoppingCart />
      {/* Refactor so the number is displayed only if higher than 0 */}
      <span className={styles['cart-number']}>0</span>
    </Link>
  );
}
