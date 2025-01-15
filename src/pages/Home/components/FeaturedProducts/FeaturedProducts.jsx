import Stars from '../../../../components/Stars/Stars';
import styles from './FeaturedProducts.module.css';
import AddToCart from '../../../../components/AddToCart/AddToCart';

const products = [
  {
    id: 1,
    title: 'Apple Airpods',
    price: 129.99,
    rating: 4.38,
    image:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png',
  },
  {
    id: 2,
    title: 'Apple Airpower Wireless Charger',
    price: 79.99,
    rating: 4.51,
    image:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpower%20Wireless%20Charger/thumbnail.png',
  },
  {
    id: 3,
    title: 'Beats Flex Wireless Earphones',
    price: 49.99,
    rating: 4.17,
    image:
      'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20HomePod%20Mini%20Cosmic%20Grey/thumbnail.png',
  },
  {
    id: 4,
    title: 'TV Studio Camera Pedestal',
    price: 499.99,
    rating: 4.05,
    image:
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
        {products.map((product) => {
          return (
            <div className={styles.product} key={product.id}>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
              />
              <h3 className={styles['product-title']}>{product.title}</h3>
              <div className={styles.rating}>
                <span>
                  <Stars rating={product.rating} title={product.title} />
                </span>
                <span>{product.rating}</span>
              </div>
              <div className={styles['card-footer']}>
                <p className={styles.price}>${product.price}</p>
                <AddToCart />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
