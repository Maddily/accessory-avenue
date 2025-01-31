import useProduct from './useProduct';
import PropTypes from 'prop-types';
import Stars from '../../../../components/Stars/Stars';
import QuantityInCart from '../QuantityInCart/QuantityInCart';
import ProductQuantity from '../../../../components/ProductQuantity/ProductQuantity';
import styles from './Product.module.css';

/**
 * Renders a product's details.
 *
 * @param {object} props - product and cart data.
 * @returns {JSX.Element}
 */
export default function Product(props) {
  const {
    quantity,
    updateQuantity,
    addToCartHandler,
    removeFromCart,
    quantityInCart,
  } = useProduct(props);
  const { imageUrl, title, rating, price } = props;

  return (
    <article className={styles.product}>
      <img className={styles.image} src={imageUrl} alt="product image" />
      <div className={styles['card-body']}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rating}>
          <span aria-labelledby="product-rating" aria-label="star rating">
            <Stars rating={rating} title={title} />
          </span>
          <span id="product-rating" aria-label="rating">
            {rating}
          </span>
        </div>
        <p aria-label="price" className={styles.price}>
          ${price}
        </p>
      </div>
      <ProductQuantity
        title={title}
        updateQuantity={updateQuantity}
        quantity={quantity}
      />
      <button
        type="button"
        className={styles['add-to-cart']}
        onClick={addToCartHandler}
        disabled={!quantity}
      >
        Add to cart
      </button>
      <QuantityInCart
        id={props.id}
        quantityInCart={quantityInCart}
        removeFromCart={removeFromCart}
      />
    </article>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};
