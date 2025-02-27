import styles from './ShopContent.module.css';
import Product from '../Product/Product';
import useShopContent from './useShopContent';
import useLoading from '../../../../hooks/useLoading';
import SkeletonShop from '../SkeletonShop/SkeletonShop';

/**
 * Renders shopping data: a heading and products
 *
 * @returns {JSX.Element}
 */
export default function ShopContent() {
  const { products } = useShopContent();
  const { loading } = useLoading();

  if (loading) return <SkeletonShop />;

  return (
    <section className={styles['shop-content']}>
      {products.length === 0 ? (
        <h1 className={styles.heading}>
          No products are in stock at the moment.
        </h1>
      ) : (
        <>
          <h1 className={styles.heading}>our products</h1>
          <div className={styles.products}>
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imageUrl={product.thumbnail}
                title={product.title}
                rating={product.rating}
                price={product.price}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
