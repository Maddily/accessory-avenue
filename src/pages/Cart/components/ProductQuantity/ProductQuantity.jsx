import { memo } from 'react';
import useProductQuantity from './useProductQuantity';
import Icon from '@mdi/react';
import { mdilMinusCircle, mdilPlusCircle, mdilDelete } from '@mdi/light-js';
import PropTypes from 'prop-types';
import styles from './ProductQuantity.module.css';

/**
 * Renders an input field for quantity input along
 * with two buttons to decrease/increase the quantity,
 * and a button to delete the product from the cart.
 *
 * @param {number} id - The id of a product.
 * @param {string} title - The title of a product.
 * @param {function} updateQuantity - A function to update the quantity.
 * @param {number} quantity - The quantity of the product added to the cart.
 * @returns {JSX.Element}
 */
const ProductQuantity = memo(function ProductQuantity({
  id,
  title,
  updateQuantity,
  quantity,
}) {
  const { deleteProduct } = useProductQuantity(id);

  return (
    <div className={styles['quantity-container']}>
      <div className={styles['input-container']}>
        <label htmlFor={title} className={styles['visually-hidden']}>
          product quantity
        </label>
        <button
          className={styles['step-down-button']}
          type="button"
          onClick={updateQuantity}
          data-step="down"
          aria-label={'decrease quantity of ' + title}
          data-productid={id}
        >
          <Icon
            title={'decrease quantity of ' + title}
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
          aria-label={'increase quantity of ' + title}
          data-productid={id}
        >
          <Icon
            title={'increase quantity of ' + title}
            className={styles['plus']}
            path={mdilPlusCircle}
            size={1}
          />
        </button>
      </div>
      <button className={styles.delete} onClick={deleteProduct}>
        <Icon path={mdilDelete} size={0.95} title={'delete' + ' ' + title} />
      </button>
    </div>
  );
});

ProductQuantity.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  updateQuantity: PropTypes.func,
  quantity: PropTypes.number,
};
export default ProductQuantity;
