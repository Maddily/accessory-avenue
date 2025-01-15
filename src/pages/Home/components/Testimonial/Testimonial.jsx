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
    <div className={styles.container}>
      <Icon path={mdiFormatQuoteOpen} size={1} />
      <q>{review}</q>
      <p className={styles['customer-name']}>— {customerName}</p>
    </div>
  );
}

Testimonial.propTypes = {
  review: PropTypes.string,
  customerName: PropTypes.string,
};
