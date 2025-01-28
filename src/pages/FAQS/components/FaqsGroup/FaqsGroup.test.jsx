import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FaqsGroup from './FaqsGroup';
import Question from '../Question/Question';

vi.mock('../Question/Question');
Question.mockImplementation(() => <div data-testId="question"></div>);

describe('FaqsGroup', () => {
  const questionsAndAnswers = [
    {
      question: 'q1',
      answer: 'a1',
    },
    {
      question: 'q2',
      answer: 'a2',
    },
  ];

  beforeEach(() => {
    render(
      <FaqsGroup groupName="group" questionsAndAnswers={questionsAndAnswers} />
    );
  });

  it('renders group heading', () => {
    const heading = screen.getByRole('heading', { name: 'group' });

    expect(heading).toBeInTheDocument();
  });

  it('renders Questions components', () => {
    const questionComponents = screen.getAllByTestId('question');

    expect(questionComponents.length).toEqual(2);
  });
});
