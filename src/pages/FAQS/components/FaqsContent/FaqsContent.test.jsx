import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FaqsContent from './FaqsContent';
import FaqsGroup from '../FaqsGroup/FaqsGroup';

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
    render(<FaqsContent faqGroups={faqGroups} />);
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
