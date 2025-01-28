import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Question from './Question';

const { question, answer } = {
  question: 'q',
  answer: 'a',
};

describe('Question', () => {
  let user, expand;

  beforeEach(() => {
    user = userEvent.setup();

    render(<Question question={question} answer={answer} />);

    expand = screen.getByRole('button', { name: /expand/i });
  });

  it('renders the question as a heading', () => {
    const question = screen.getByRole('heading', { name: /q/ });

    expect(question).toBeInTheDocument();
  });

  it('renders expand button', () => {
    expect(expand).toBeInTheDocument();
  });

  it('renders the answer when the expand button is clicked', async () => {
    await user.click(expand);

    const answer = screen.getByRole('paragraph', { name: /answer/i });

    expect(answer).toBeInTheDocument();
    expect(answer).toHaveClass(/visible/);
  });

  it('renders hide button in place of the expand button when the expand button is clicked', async () => {
    await user.click(expand);

    const hide = screen.getByRole('button', { name: /hide/i });

    expect(hide).toBeInTheDocument();
    expect(expand).not.toBeInTheDocument();
  });

  it('renders expand button in place of the hide button when clicked', async () => {
    await user.click(expand);

    const hide = screen.getByRole('button', { name: /hide/i });
    await user.click(hide);

    expect(hide).not.toBeInTheDocument();

    expand = screen.getByRole('button', { name: /expand/i });
    expect(expand).toBeInTheDocument();

    const answer = screen.getByRole('paragraph', { name: /answer/i });
    expect(answer).not.toHaveClass(/visible/);
  })
});
