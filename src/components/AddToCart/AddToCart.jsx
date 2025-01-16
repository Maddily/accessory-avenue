import styles from './AddToCart.module.css';

/**
 * Renders a cart button.
 *
 * @returns {JSX.Element}
 */
export default function AddToCart() {
  return (
    <button type='button' className={styles.cart}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <title>Add to cart</title>
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        Add to cart
      </svg>
    </button>
  );
}
