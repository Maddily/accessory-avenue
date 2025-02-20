import ProductQuantity from '../ProductQuantity/ProductQuantity';
import { useOutletContext } from 'react-router-dom';
import useProduct from '../../../../hooks/useProduct';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

/**
 * Renders cart item image, title, price and quantity.
 *
 * @param {object} productInCart - The data of a product added to the cart.
 * @returns {JSX.Element}
 */
export default function CartItem({ productInCart }) {
  const [productsInCart, dispatchCartAction] = useOutletContext();
  const currentQuantity = productInCart.quantity;
  const { quantity, updateQuantity } = useProduct({
    ...productInCart,
    productsInCart,
    dispatchCartAction,
    currentQuantity,
  });

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
        <p aria-label='product price' className={styles['product-price']}>${productInCart.price}</p>
      </td>
      <td aria-label='total price' className={styles['total1-data']}>
        ${(productInCart.quantity * productInCart.price).toFixed(2)}
      </td>
      <td className={styles['quantity-data']}>
        <ProductQuantity
          id={productInCart.id}
          title={productInCart.title}
          updateQuantity={updateQuantity}
          dispatchCartAction={dispatchCartAction}
          quantity={quantity}
        />
      </td>
      <td aria-label='total price' className={styles['total2-data']}>
        ${(productInCart.quantity * productInCart.price).toFixed(2)}
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  productInCart: PropTypes.object,
};
