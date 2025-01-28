import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FaqsContent from './FaqsContent';
import FaqsGroup from '../FaqsGroup/FaqsGroup';
import useLoading from '../../../../hooks/useLoading';

vi.mock('../../../../hooks/useLoading', () => ({
  __esModule: true,
  default: vi.fn(),
}));

vi.mock('react-loader-spinner', () => ({
  ThreeDots: vi.fn(() => <div data-testid="loading-animation"></div>),
}));

vi.mock('../FaqsGroup/FaqsGroup');
FaqsGroup.mockImplementation(() => <div data-testId="group"></div>);

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

  it('renders loading component', () => {
    vi.mocked(useLoading).mockReturnValueOnce({
      loading: true,
    });

    render(<FaqsContent />);

    const loadingComponent = screen.getByTestId('loading-animation');
    expect(loadingComponent).toBeInTheDocument();
  });

  it('does not render loading component when loading is false', () => {
    const loadingComponent = screen.queryByTestId('loading-animation');
    expect(loadingComponent).toBeNull();
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
