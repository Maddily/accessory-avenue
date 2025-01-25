import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import styles from './FeaturedProducts.module.css';

const products = [
  {
    id: 100,
    title: 'Apple Airpods',
    price: 129.99,
    rating: 4.38,
    imageUrl:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png',
  },
  {
    id: 102,
    title: 'Apple Airpower Wireless Charger',
    price: 79.99,
    rating: 4.51,
    imageUrl:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png',
  },
  {
    id: 107,
    title: 'Beats Flex Wireless Earphones',
    price: 49.99,
    rating: 4.17,
    imageUrl:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Beats%20Flex%20Wireless%20Earphones/thumbnail.png',
  },
  {
    id: 112,
    title: 'TV Studio Camera Pedestal',
    price: 499.99,
    rating: 4.05,
    imageUrl:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/TV%20Studio%20Camera%20Pedestal/thumbnail.png',
  },
];

/**
 * Renders product cards.
 *
 * @returns {JSX.Element}
 */
export default function FeaturedProducts() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>featured products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
