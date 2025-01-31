import useProductQuantity from './useProductQuantity';
import Icon from '@mdi/react';
import { mdilMinusCircle, mdilPlusCircle, mdilDelete } from '@mdi/light-js';
import PropTypes from 'prop-types';
import styles from './ProductQuantity.module.css';

export default function ProductQuantity({
  id,
  title,
  updateQuantity,
  productsInCart,
  updateProductsInCart,
  quantity,
}) {
  const { deleteProduct } = useProductQuantity(
    id,
    productsInCart,
    updateProductsInCart
  );

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
          aria-label="decrease"
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
          aria-label="increase"
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
}

ProductQuantity.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  updateQuantity: PropTypes.func,
  productsInCart: PropTypes.array,
  updateProductsInCart: PropTypes.func,
  quantity: PropTypes.number,
};
