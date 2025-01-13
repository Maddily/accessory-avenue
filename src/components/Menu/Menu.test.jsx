import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

describe('Menu', () => {
  it('renders navigation menu buttons', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const menuNav = screen.getByRole('navigation', {
      name: 'menu navigation',
    });
    const homeButton = screen.getByRole('link', { name: 'home' });

    expect(menuNav).toContainElement(homeButton);
  });
});
