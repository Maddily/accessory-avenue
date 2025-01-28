import Hero from '../Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Testimonials from '../Testimonials/Testimonials';
import PromoBanner from '../PromoBanner/PromoBanner';
import useLoading from '../../../../hooks/useLoading';
import { ThreeDots } from 'react-loader-spinner';

/**
 * Renders components associated with home page.
 *
 * @returns {JSX.Element}
 */
export default function HomeContent() {
  const { loading } = useLoading();

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
    <>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <PromoBanner />
    </>
  );
}
