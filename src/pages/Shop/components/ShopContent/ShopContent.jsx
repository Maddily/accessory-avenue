import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './ShopContent.module.css';
import Product from '../Product/Product';
import { ThreeDots } from 'react-loader-spinner';

/**
 * Renders shopping data: a heading and products
 *
 * @returns {JSX.Element}
 */
export default function ShopContent() {
  const [loading, setLoading] = useState(true);
  const { products } = useLoaderData();

  // Set loading state to false two seconds after the component is mounted
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

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
    <div className={styles['shop-content']}>
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
    </div>
  );
}
