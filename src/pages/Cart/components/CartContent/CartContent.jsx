import { useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import useLoading from '../../../../hooks/useLoading';
import { ThreeDots } from 'react-loader-spinner';
import CartFooter from '../CartFooter/CartFooter';
import { useCartContent } from './useCartContent';
import { Link } from 'react-router-dom';
import styles from './CartContent.module.css';

/**
 * Renders the cart heading and cart items.
 * If the cart is empty, an appropriate message is rendered
 * along with a button to the home page.
 *
 * @returns {JSX.Element}
 */
export default function CartContent() {
  const { loading } = useLoading();
  const [productsInCart] = useOutletContext();
  const total = useCartContent(productsInCart);

  if (loading)
    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#5a9592"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
      />
    );

  return (
    <section className={styles['cart-container']}>
      <article className={styles.cart} aria-label="cart">
        {productsInCart.length === 0 ? (
          <div className={styles['empty-cart']}>
            <h2 className={styles['empty-cart-heading']}>Your cart is empty</h2>
            <Link className={styles['home-link']} to="/">
              Back to Homepage
            </Link>
          </div>
        ) : (
          <>
            <h1 className={styles.heading}>your cart</h1>
            <table className={styles['cart-items']}>
              <caption className={styles['visually-hidden']}>your cart</caption>
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    product
                  </th>
                  <th scope="col" className={styles.total1}>
                    total
                  </th>
                  <th scope="col" className={styles['quantity-heading']}>
                    quantity
                  </th>
                  <th scope="col" className={styles.total2}>
                    total
                  </th>
                </tr>
              </thead>
              <tbody>
                {productsInCart.map((productInCart) => (
                  <CartItem
                    key={productInCart.id}
                    productInCart={productInCart}
                  />
                ))}
              </tbody>
            </table>
          </>
        )}
      </article>
      {productsInCart.length > 0 && <CartFooter total={total} />}
    </section>
  );
}
