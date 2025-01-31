import ProductQuantity from '../ProductQuantity/ProductQuantity';
import { useOutletContext } from 'react-router-dom';
import useProduct from '../../../Shop/components/Product/useProduct';
import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

export default function CartItem({ productInCart }) {
  const [productsInCart, updateProductsInCart] = useOutletContext();
  const currentQuantity = productInCart.quantity;
  const { quantity, updateQuantity } = useProduct({
    ...productInCart,
    productsInCart,
    updateProductsInCart,
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
        <p className={styles['product-price']}>${productInCart.price}</p>
      </td>
      <td className={styles['total1-data']}>
        ${productInCart.quantity * productInCart.price}
      </td>
      <td className={styles['quantity-data']}>
        <ProductQuantity
          id={productInCart.id}
          title={productInCart.title}
          updateQuantity={updateQuantity}
          productsInCart={productsInCart}
          updateProductsInCart={updateProductsInCart}
          quantity={quantity}
        />
      </td>
      <td className={styles['total2-data']}>
        ${productInCart.quantity * productInCart.price}
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  productInCart: PropTypes.object,
};
