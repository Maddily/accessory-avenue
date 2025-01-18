import { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdilMinusCircle, mdilPlusCircle } from '@mdi/light-js';
import Stars from '../../../../components/Stars/Stars';
import styles from './Product.module.css';

/**
 * Renders a product's details.
 *
 * @param {string} imageUrl - The image url of a product
 * @param {string} title - The title of a product
 * @param {number} rating - The rating of the product
 * @param {number} price - The price of the product
 * @returns {JSX.Element}
 */
export default function Product({ imageUrl, title, rating, price }) {
  const [count, setCount] = useState(0);

  function stepHandler(e) {
    if (e.type === 'change') {
      const value = e.target.value;

      if (value >= 0) {
        setCount(value);
      } else {
        setCount(0);
      }

      return;
    }

    const step = e.target.closest('button')?.dataset.step;

    step === 'down' && count > 0 && setCount((count) => count - 1);

    step === 'up' && setCount((count) => count + 1);
  }

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
      <div className={styles['input-container']}>
        <label htmlFor="product-count" className={styles['visually-hidden']}>
          Product count
        </label>
        <button
          className={styles['step-down-button']}
          type="button"
          onClick={stepHandler}
          data-step="down"
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
          name="product count"
          id="product-count"
          min={0}
          value={count}
          onChange={stepHandler}
        />
        <button
          className={styles['step-up-button']}
          type="button"
          onClick={stepHandler}
          data-step="up"
        >
          <Icon
            title="Increase"
            className={styles['plus']}
            path={mdilPlusCircle}
            size={1}
          />
        </button>
      </div>
      <button className={styles['add-to-cart']} type="button">
        Add to cart
      </button>
    </article>
  );
}

Product.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
};
