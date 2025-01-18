import Hero from '../Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Testimonials from '../Testimonials/Testimonials';
import PromoBanner from '../PromoBanner/PromoBanner';

/**
 * Renders components associated with home page.
 *
 * @returns {JSX.Element}
 */
export default function HomeContent() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <PromoBanner />
    </>
  );
}
