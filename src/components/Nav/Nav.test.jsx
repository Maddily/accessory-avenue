import { vi, describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import NavButton from '../NavButton/NavButton';
import Cart from '../Cart/Cart';

vi.mock('../NavButton/NavButton');
vi.mock('../Cart/Cart');

NavButton.mockImplementation(() => <button data-testid='navButton'>Nav button</button>);
Cart.mockImplementation(() => <button data-testid='cart'>Cart</button>);

describe('Nav', () => {
  it('renders a logo', () => {
    render(
      <BrowserRouter>
        <Nav menuOpenSetter={vi.fn()} />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const logo = within(headerNav).queryByRole('img', {
      name: 'logo',
    });

    expect(logo).toBeTruthy();
  });

  it('renders nav buttons', () => {
    render(
      <BrowserRouter>
        <Nav menuOpenSetter={vi.fn()} />
      </BrowserRouter>
    );

    const navButtons = screen.queryAllByTestId('navButton');

    expect(navButtons.length).toBeGreaterThan(0);
  });

  it('renders a menu button in place of close menu button when the menu is collapsed', () => {
    render(
      <BrowserRouter>
        <Nav menuOpen={false} menuOpenSetter={vi.fn()} />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const menuButton = within(headerNav).queryByLabelText(/menu/i);
    const closeButton = within(headerNav).queryByLabelText(/close menu/i);

    expect(menuButton).toBeTruthy();
    expect(closeButton).toBeNull();
  });

  it('renders a close menu button in place of menu button when the menu is open', () => {
    render(
      <BrowserRouter>
        <Nav menuOpen={true} menuOpenSetter={vi.fn()} />
      </BrowserRouter>
    );

    const headerNav = screen.getByRole('navigation', {
      name: 'header navigation',
    });
    const menuButton = within(headerNav).queryByLabelText(/^menu$/i);
    const closeButton = within(headerNav).getByLabelText(/close menu/i);

    expect(menuButton).toBeNull();
    expect(closeButton).toBeTruthy();
  });

  it('renders a cart button', () => {
    render(
      <BrowserRouter>
        <Nav menuOpenSetter={vi.fn()} />
      </BrowserRouter>
    );

    const cartButton = screen.getByTestId('cart');

    expect(cartButton).toBeInTheDocument();
  });
});
