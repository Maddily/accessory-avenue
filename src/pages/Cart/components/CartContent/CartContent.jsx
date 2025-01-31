import { useOutletContext } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import useLoading from '../../../../hooks/useLoading';
import { ThreeDots } from 'react-loader-spinner';
import styles from './CartContent.module.css';

export default function CartContent() {
  const { loading } = useLoading();
  const [productsInCart] = useOutletContext();

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
    <section className={styles.cart} aria-label="cart">
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
            <CartItem key={productInCart.id} productInCart={productInCart} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
