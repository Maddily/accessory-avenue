import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useCart from './hooks/useCart';
import useScreenResize from './hooks/useScreenResize';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import { useCallback } from 'react';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { productsInCart, updateProductsInCart } = useCart();

  /**
   * If screen is resized to 500px in width or higher,
   * menuOpen is set to false (only if it's set to open).
   * This makes sure that if the screen is resized again
   * below 500px, the menu is collapsed.
   */
  useScreenResize(menuOpen, setMenuOpen);

  return (
    <>
      <Nav
        menuOpen={menuOpen}
        menuOpenSetter={useCallback((value) => setMenuOpen(value), [])}
        productsInCart={productsInCart}
      />
      {menuOpen && <Menu />}
      <Outlet
        context={[productsInCart, updateProductsInCart]}
      />
      <Footer />
    </>
  );
}

export default App;
