import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import SkeletonFaq from './SkeletonFaq';

describe('SkeletonFaq', () => {
  beforeEach(() => {
    render(<SkeletonFaq />);
  });

  it('renders a skeleton heading', () => {
    const heading = screen.getByLabelText('skeleton-heading');

    expect(heading).toBeInTheDocument();
  });

  it('renders six skeleton groups', () => {
    const groups = screen.getAllByLabelText('skeleton-group');

    expect(groups.length).toEqual(6);
  });
});
