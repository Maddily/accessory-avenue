import useProduct from '../../../../hooks/useProduct';
import PropTypes from 'prop-types';
import Stars from '../../../../components/Stars/Stars';
import QuantityInCart from '../QuantityInCart/QuantityInCart';
import ProductQuantity from '../ProductQuantity/ProductQuantity';
import styles from './Product.module.css';

/**
 * Renders a product's details.
 *
 * @param {object} props - product data.
 * @returns {JSX.Element}
 */
export default function Product(props) {
  const { quantity, updateQuantity, addToCartHandler, removeFromCart } =
    useProduct(props);
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
          <span
            id={`rating-label-${title}`}
            className={styles['visually-hidden']}
          >
            the rating of {title} is {rating}
          </span>
          <span id="product-rating" aria-labelledby={`rating-label-${title}`}>
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
      <QuantityInCart id={props.id} removeFromCart={removeFromCart} />
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
