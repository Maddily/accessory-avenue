import styles from './QuantityInCart.module.css';
import PropTypes from 'prop-types';

/**
 * Renders the quantity of the product in the cart
 * and a button to remove the product from the cart.
 *
 * @param {number} id - The id of the product.
 * @param {number} quantityInCart - The quantity of the product added to the cart.
 * @param {function} removeFromCart - Removes the product from the cart.
 * @returns {JSX.Element}
 */
export default function QuantityInCart({ id, quantityInCart, removeFromCart }) {
  return (
    quantityInCart > 0 && (
      <p aria-label="quantity in cart" className={styles['quantity-in-cart']}>
        {quantityInCart} in cart <span style={{ fontWeight: 'normal' }}>-</span>{' '}
        <button onClick={() => removeFromCart(id)} className={styles.remove}>
          Remove
        </button>
      </p>
    )
  );
}

QuantityInCart.propTypes = {
  id: PropTypes.number,
  quantityInCart: PropTypes.number,
  removeFromCart: PropTypes.func,
};
