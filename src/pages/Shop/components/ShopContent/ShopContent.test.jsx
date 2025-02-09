import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ShopContent from './ShopContent';
import Product from '../Product/Product';
import useShopContent from './useShopContent';
import SkeletonShop from '../SkeletonShop/SkeletonShop';
import useLoading from '../../../../hooks/useLoading';

vi.mock('./useShopContent', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('../../../../hooks/useLoading', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(() => [
    [
      { id: 1, name: 'product1' },
      { id: 2, name: 'product2' },
    ],
    vi.fn(),
  ]),
}));

vi.mock('../Product/Product');
vi.mock('../SkeletonShop/SkeletonShop');

Product.mockImplementation(() => <div data-testid="product"></div>);
SkeletonShop.mockImplementation(() => <div data-testid="skeleton"></div>);

describe('ShopContent', () => {
  beforeEach(() => {
    vi.mocked(useLoading).mockReturnValue({
      loading: false,
    });

    vi.mocked(useShopContent).mockReturnValue({
      products: [
        { id: 1, name: 'product1' },
        { id: 2, name: 'product2' },
      ],
    });

    render(<ShopContent />);
  });

  it('renders skeleton UI', () => {
    vi.mocked(useLoading).mockReturnValueOnce({
      loading: true,
    });

    render(<ShopContent />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('renders a heading when not loading', () => {
    const heading = screen.getByRole('heading', { name: /our products/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders products when not loading', () => {
    const products = screen.getAllByTestId('product');
    expect(products.length).toBe(2);
  });

  it('renders a message when there are no products', () => {
    vi.mocked(useShopContent).mockReturnValueOnce({
      products: [],
    });

    cleanup();
    render(<ShopContent />);

    const heading = screen.getByRole('heading', {
      name: /No products are in stock at the moment./i,
    });

    expect(heading).toBeInTheDocument();
  });
});
