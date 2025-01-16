import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';
import MenuButton from '../MenuButton/MenuButton';

vi.mock('../MenuButton/MenuButton');
MenuButton.mockImplementation(() => (
  <button data-testid="menuButton">Menu Button</button>
));

describe('Menu', () => {
  it('renders navigation menu buttons', () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    );

    const menuButtons = screen.queryAllByTestId('menuButton');

    expect(menuButtons.length).toBeGreaterThan(0);
  });
});
