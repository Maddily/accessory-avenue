import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeContent from './HomeContent';
import Hero from '../Hero/Hero';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Testimonials from '../Testimonials/Testimonials';
import PromoBanner from '../PromoBanner/PromoBanner';
import Skeletonhome from '../SkeletonHome/SkeletonHome';
import useLoading from '../../../../hooks/useLoading';

vi.mock('../../../../hooks/useLoading', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('../Hero/Hero');
vi.mock('../FeaturedProducts/FeaturedProducts');
vi.mock('../Testimonials/Testimonials');
vi.mock('../PromoBanner/PromoBanner');
vi.mock('../SkeletonHome/SkeletonHome');

Hero.mockImplementation(() => <div data-testid="hero"></div>);
FeaturedProducts.mockImplementation(() => (
  <div data-testid="featured-products"></div>
));
Testimonials.mockImplementation(() => <div data-testid="testimonials"></div>);
PromoBanner.mockImplementation(() => <div data-testid="promo-banner"></div>);
Skeletonhome.mockImplementation(() => <div data-testid="skeleton"></div>);

describe('HomeContent', () => {
  beforeEach(() => {
    vi.mocked(useLoading).mockReturnValue({
      loading: false,
    });

    render(<HomeContent />);
  });

  it('renders skeleton UI', () => {
    vi.mocked(useLoading).mockReturnValueOnce({
      loading: true,
    });

    render(<HomeContent />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders all child components when loading state is false', () => {
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('featured-products')).toBeInTheDocument();
    expect(screen.getByTestId('testimonials')).toBeInTheDocument();
    expect(screen.getByTestId('promo-banner')).toBeInTheDocument();
  });
});
