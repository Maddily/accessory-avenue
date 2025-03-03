import { vi, describe, it, expect, beforeEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavButton from '../NavButton/NavButton';

vi.mock('../NavButton/NavButton');

NavButton.mockImplementation(() => (
  <button data-testid="navButton">Nav button</button>
));

describe('Nav', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Nav setMenuOpen={vi.fn()} productsInCart={[{ id: 1 }, { id: 2 }]} />
      </BrowserRouter>
    );
  });

  it('renders a logo', () => {
    const logo = screen.queryByRole('img', {
      name: 'logo',
    });

    expect(logo).toBeInTheDocument();
  });

  it('redirects to home when the logo is clicked', () => {
    const logo = screen.getByRole('link', {
      name: /go to home page/i,
    });

    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders nav buttons', () => {
    const navButtons = screen.queryAllByTestId('navButton');

    expect(navButtons.length).toBeGreaterThan(0);
  });

  it('renders a menu button in place of close menu button when the menu is collapsed', () => {
    cleanup();

    render(
      <BrowserRouter>
        <Nav
          menuOpen={false}
          setMenuOpen={vi.fn()}
          productsInCart={[{ id: 1 }, { id: 2 }]}
        />
      </BrowserRouter>
    );

    const menuButton = screen.getByRole('button', { name: /^menu$/i });
    const closeButton = screen.queryByRole('button', { name: /close menu/i });

    expect(menuButton).toBeInTheDocument();
    expect(closeButton).toBeNull();
  });

  it('renders a close menu button in place of menu button when the menu is open', () => {
    cleanup();

    render(
      <BrowserRouter>
        <Nav
          menuOpen={true}
          setMenuOpen={vi.fn()}
          productsInCart={[{ id: 1 }, { id: 2 }]}
        />
      </BrowserRouter>
    );

    const menuButton = screen.queryByRole('button', { name: /^menu$/i });
    const closeButton = screen.getByRole('button', { name: /close menu/i });

    expect(menuButton).toBeNull();
    expect(closeButton).toBeInTheDocument();
  });
});
