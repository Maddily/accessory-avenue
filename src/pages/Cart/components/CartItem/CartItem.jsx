import { memo } from 'react';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import useProduct from '../../../../hooks/useProduct';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

/**
 * Renders cart item image, title, price and quantity.
 *
 * @param {object} productInCart - The data of a product added to the cart.
 * @returns {JSX.Element}
 */
const CartItem = memo(function CartItem({ productInCart }) {
  const currentQuantity = productInCart.quantity;
  const { quantity, updateQuantity } = useProduct({
    ...productInCart,
    currentQuantity,
  });
  const total = (productInCart.quantity * productInCart.price).toFixed(2);

  return (
    <tr key={productInCart.id} className={styles['cart-item']}>
      <td className={styles['product-image']}>
        <img
          src={productInCart.imageUrl}
          alt={productInCart.title + ' image'}
        />
      </td>
      <td className={styles['product-details']}>
        <h2 className={styles['product-title']}>{productInCart.title}</h2>
        <p aria-label="product price" className={styles['product-price']}>
          ${productInCart.price}
        </p>
      </td>
      <td aria-label="total price" className={styles['total1-data']}>
        ${total}
      </td>
      <td className={styles['quantity-data']}>
        <ProductQuantity
          id={productInCart.id}
          title={productInCart.title}
          updateQuantity={updateQuantity}
          quantity={quantity}
        />
      </td>
      <td aria-label="total price" className={styles['total2-data']}>
        ${total}
      </td>
    </tr>
  );
}, arePropsEqual);

CartItem.propTypes = {
  productInCart: PropTypes.object,
};

/**
 * Returns true if the quantity of the old productInCart prop
 * equals the quantity of the new productInCart prop, else false.
 */
function arePropsEqual(oldProps, newProps) {
  return oldProps.productInCart.quantity === newProps.productInCart.quantity;
}

export default CartItem;
