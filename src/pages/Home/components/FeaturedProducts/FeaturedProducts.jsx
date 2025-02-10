import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';
import styles from './FeaturedProducts.module.css';
import appleAirpodsImage from '../../../../assets/images/apple-airpods.png';
import appleAirpowerWirelessChargerImage from '../../../../assets/images/apple-airpower-wireless-charger.png';
import beatsFlexWirelessEarphonesImage from '../../../../assets/images/beats-flex-wireless-earphones.png';
import tvStudioCameraPedestalImage from '../../../../assets/images/tv-studio-camera-pedestal.png';

const products = [
  {
    id: 100,
    title: 'Apple Airpods',
    price: 129.99,
    rating: 4.38,
    imageUrl: appleAirpodsImage,
  },
  {
    id: 102,
    title: 'Apple Airpower Wireless Charger',
    price: 79.99,
    rating: 4.51,
    imageUrl: appleAirpowerWirelessChargerImage,
  },
  {
    id: 107,
    title: 'Beats Flex Wireless Earphones',
    price: 49.99,
    rating: 4.17,
    imageUrl: beatsFlexWirelessEarphonesImage,
  },
  {
    id: 112,
    title: 'TV Studio Camera Pedestal',
    price: 499.99,
    rating: 4.05,
    imageUrl: tvStudioCameraPedestalImage,
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
