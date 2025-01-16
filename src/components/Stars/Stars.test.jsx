import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Stars from './Stars';

describe('Stars', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Stars rating={4.38} title="TV Studio Camera Pedestal" />
      </BrowserRouter>
    );
  });

  it('renders five star icons', () => {
    const starIcons = screen.getAllByRole('presentation', { name: /star/ });

    expect(starIcons.length).toEqual(5);
  });

  it('renders the stars filled according to the given rating', () => {
    const starIcons = screen.getAllByLabelText('star');
    const halfStarIcons = screen.getAllByLabelText('star half');
    const emptyStarIcons = screen.queryAllByLabelText('empty star');

    expect(starIcons.length).toEqual(4);
    expect(halfStarIcons.length).toEqual(1);
    expect(emptyStarIcons.length).toEqual(0);
  });
});
