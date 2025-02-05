import Icon from '@mdi/react';
import { mdiFormatQuoteOpen } from '@mdi/js';
import styles from './Testimonial.module.css';
import PropTypes from 'prop-types';

/**
 * Renders a customer's review.
 *
 * @param {string} review - A customer's review
 * @param {string} customerName - The name of a customer
 * @returns {JSX.Element}
 */
export default function Testimonial({ review, customerName }) {
  return (
    <article aria-label="testimonial" className={styles.container}>
      <Icon aria-hidden="true" path={mdiFormatQuoteOpen} size={1} />
      <p aria-label="review">
        <q>{review}</q>
      </p>
      <p aria-label="customer name" className={styles['customer-name']}>
        — {customerName}
      </p>
    </article>
  );
}

Testimonial.propTypes = {
  review: PropTypes.string,
  customerName: PropTypes.string,
};
