import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkeletonCart from './SkeletonCart';

describe('SkeletonCart', () => {
  beforeEach(() => {
    render(<SkeletonCart itemsCount={2} />);
  });

  it('renders a skeleton heading', () => {
    const heading = screen.getByLabelText('skeleton-heading');

    expect(heading).toBeInTheDocument();
  });

  it('renders skeleton items the same number as the given itemsCount', () => {
    const items = screen.getAllByLabelText('skeleton-item');

    expect(items.length).toEqual(2);
  });

  it('renders a skeleton cart footer', () => {
    const footer = screen.getByLabelText('skeleton-footer');

    expect(footer).toBeInTheDocument();
  });
});
