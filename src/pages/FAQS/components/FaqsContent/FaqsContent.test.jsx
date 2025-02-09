import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FaqsContent from './FaqsContent';
import FaqsGroup from '../FaqsGroup/FaqsGroup';
import SkeletonFaq from '../SkeletonFaq/SkeletonFaq';
import useLoading from '../../../../hooks/useLoading';

vi.mock('../../../../hooks/useLoading', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('../FaqsGroup/FaqsGroup');
vi.mock('../SkeletonFaq/SkeletonFaq');

FaqsGroup.mockImplementation(() => <div data-testid="group"></div>);
SkeletonFaq.mockImplementation(() => <div data-testid="skeleton"></div>);

describe('FaqsContent', () => {
  const faqGroups = [
    {
      g1: [
        {
          question: 'q1',
          answer: 'a1',
        },
        {
          question: 'q2',
          answer: 'a2',
        },
      ],
    },
    {
      g2: [
        {
          question: 'q3',
          answer: 'a3',
        },
        {
          question: 'q4',
          answer: 'a4',
        },
      ],
    },
  ];

  beforeEach(() => {
    vi.mocked(useLoading).mockReturnValue({
      loading: false,
    });

    render(<FaqsContent faqGroups={faqGroups} />);
  });

  it('renders skeleton UI', () => {
    vi.mocked(useLoading).mockReturnValueOnce({
      loading: true,
    });

    render(<FaqsContent />);

    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toBeInTheDocument();
  });

  it('does not render skeleton UI when loading is false', () => {
    const skeleton = screen.queryByTestId('skeleton');
    expect(skeleton).toBeNull();
  });

  it('renders FAQS heading', () => {
    const heading = screen.getByRole('heading', {
      name: /frequently asked questions/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders FaqsGroup components', () => {
    const faqsGroupComponents = screen.getAllByTestId('group');

    expect(faqsGroupComponents.length).toEqual(2);
  });
});
