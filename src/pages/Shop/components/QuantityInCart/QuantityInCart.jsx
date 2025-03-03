import { useContext } from 'react';
import { ProductsContext } from '../../../../contexts';
import styles from './QuantityInCart.module.css';
import PropTypes from 'prop-types';

/**
 * Renders the quantity of the product in the cart
 * and a button to remove the product from the cart.
 *
 * @param {number} id - The id of the product.
 * @param {function} removeFromCart - Removes the product from the cart.
 * @returns {JSX.Element}
 */
export default function QuantityInCart({ id, removeFromCart }) {
  const productsInCart = useContext(ProductsContext);

  const quantityInCart =
    productsInCart.find((productInCart) => productInCart.id === id)?.quantity ||
    0;

  return (
    quantityInCart > 0 && (
      <p aria-label="quantity in cart" className={styles['quantity-in-cart']}>
        {quantityInCart} in cart <span style={{ fontWeight: 'normal' }}>-</span>{' '}
        <button
          aria-label="remove from cart"
          onClick={() => removeFromCart(id)}
          className={styles.remove}
        >
          Remove
        </button>
      </p>
    )
  );
}

QuantityInCart.propTypes = {
  id: PropTypes.number,
  removeFromCart: PropTypes.func,
};
