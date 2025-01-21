import styles from './ShopContent.module.css';
import Product from '../Product/Product';
import useShopContent from './useShopContent';
import { ThreeDots } from 'react-loader-spinner';

/**
 * Renders shopping data: a heading and products
 *
 * @returns {JSX.Element}
 */
export default function ShopContent() {
  const { loading, products } = useShopContent();

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
    <section className={styles['shop-content']}>
      <h1 className={styles.heading}>our products</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <Product
            key={product.id}
            imageUrl={product.thumbnail}
            title={product.title}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
