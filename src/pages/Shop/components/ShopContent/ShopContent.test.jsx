import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShopContent from './ShopContent';
import Product from '../Product/Product';
import useShopContent from './useShopContent';

vi.mock('react-loader-spinner', () => ({
  ThreeDots: vi.fn(() => <div data-testid="loading-animation"></div>),
}));
vi.mock('./useShopContent', () => ({
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
Product.mockImplementation(() => <div data-testid="product"></div>);

describe('ShopContent', () => {
  beforeEach(() => {
    vi.mocked(useShopContent).mockReturnValue({
      loading: false,
      products: [
        { id: 1, name: 'product1' },
        { id: 2, name: 'product2' },
      ],
    });

    render(<ShopContent />);
  });

  it('renders loading component', () => {
    vi.mocked(useShopContent).mockReturnValueOnce({
      loading: true,
      products: [],
    });

    render(<ShopContent />);

    const loadingComponent = screen.getByTestId('loading-animation');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('renders a heading when not loading', () => {
    const heading = screen.getByRole('heading', { name: /our products/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders products when not loading', () => {
    const products = screen.getAllByTestId('product');
    expect(products.length).toBe(2);
  });
});
