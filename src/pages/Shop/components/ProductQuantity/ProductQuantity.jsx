import Icon from '@mdi/react';
import { mdilMinusCircle, mdilPlusCircle } from '@mdi/light-js';
import PropTypes from 'prop-types';
import styles from './ProductQuantity.module.css';

/**
 * Renders an input field for quantity input along
 * with two buttons to decrease/increase the quantity.
 *
 * @param {number} id - The id of a product.
 * @param {string} title - The title of a product
 * @param {function} updateQuantity - Updates the quantity of a product.
 * @param {number} quantity - The quantity of a product.
 * @returns {JSX.Element}
 */
export default function ProductQuantity({
  id,
  title,
  updateQuantity,
  quantity,
}) {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={title} className={styles['visually-hidden']}>
        product quantity
      </label>
      <button
        className={styles['step-down-button']}
        type="button"
        onClick={updateQuantity}
        data-step="down"
        aria-label="decrease"
        data-productid={id}
      >
        <Icon
          title="Decrease"
          className={styles['minus']}
          path={mdilMinusCircle}
          size={1}
        />
      </button>
      <input
        className={styles.input}
        type="number"
        name="product quantity"
        id={title}
        min={0}
        value={quantity}
        onChange={updateQuantity}
        data-productid={id}
      />
      <button
        className={styles['step-up-button']}
        type="button"
        onClick={updateQuantity}
        data-step="up"
        aria-label="increase"
        data-productid={id}
      >
        <Icon
          title="Increase"
          className={styles['plus']}
          path={mdilPlusCircle}
          size={1}
        />
      </button>
    </div>
  );
}

ProductQuantity.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  updateQuantity: PropTypes.func,
  quantity: PropTypes.number,
};
