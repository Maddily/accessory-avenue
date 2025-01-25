import PropTypes from 'prop-types';
import styles from './FeaturedProduct.module.css';
import Stars from '../../../../components/Stars/Stars';
import AddToCart from '../AddToCart/AddToCart';

/**
 * Renders a product.
 *
 * @param {object} product - The data of a product
 * @returns {JSX.Element}
 */
export default function FeaturedProduct({ product }) {
  return (
    <article tabIndex={0} aria-label="product" className={styles.product}>
      <img className={styles.image} src={product.imageUrl} alt={product.title} />
      <h3 className={styles['product-title']}>{product.title}</h3>
      <div className={styles.rating}>
        <span aria-labelledby="product-rating" aria-label="star rating">
          <Stars rating={product.rating} title={product.title} />
        </span>
        <span id="product-rating" aria-label="rating">
          {product.rating}
        </span>
      </div>
      <div className={styles['card-footer']}>
        <p aria-label="price" className={styles.price}>
          ${product.price}
        </p>
        <AddToCart product={product} />
      </div>
    </article>
  );
}

FeaturedProduct.propTypes = {
  product: PropTypes.object,
};
