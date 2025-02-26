import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ProductsContext, DispatchCartContext } from './contexts';
import useCart from './hooks/useCart';
import useScreenResize from './hooks/useScreenResize';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { productsInCart, dispatchCartAction } = useCart();

  // If the screen is resized to 600px or wider, menuOpen is set to false (only if it's set to open).
  // This makes sure that if the screen is resized again below 600px, the menu is collapsed.
  useScreenResize(menuOpen, setMenuOpen);

  return (
    <>
      <Nav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        productsInCart={productsInCart}
      />
      <ProductsContext.Provider value={productsInCart}>
        <DispatchCartContext.Provider value={dispatchCartAction}>
          {menuOpen && <Menu />}
          <Outlet />
        </DispatchCartContext.Provider>
      </ProductsContext.Provider>
      <Footer />
    </>
  );
}

export default App;
