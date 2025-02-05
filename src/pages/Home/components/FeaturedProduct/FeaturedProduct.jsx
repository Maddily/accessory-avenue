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
      <img
        className={styles.image}
        src={product.imageUrl}
        alt={product.title}
      />
      <h3 className={styles['product-title']}>{product.title}</h3>
      <div className={styles.rating}>
        <span aria-hidden="true">
          <Stars rating={product.rating} title={product.title} />
        </span>
        <span
          id={`rating-label-${product.id}`}
          className={styles['visually-hidden']}
        >
          the rating of {product.title} is {product.rating}
        </span>
        <span aria-labelledby={`rating-label-${product.id}`}>
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
