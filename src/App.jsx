import { useState } from 'react';
import useScreenResize from './hooks/useScreenWidth';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import './styles/normalize.css';
import './styles/App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  /**
   * If screen is resized to 500px in width or higher,
   * menuOpen is set to false (only if it's set to open).
   * This makes sure that if the screen is resized again
   * below 500px, the menu is collapsed.
   */
  useScreenResize(menuOpen, setMenuOpen);

  return (
    <>
      <Nav menuOpen={menuOpen} menuOpenSetter={(value) => setMenuOpen(value)} />
      {menuOpen && <Menu />}
      <Footer />
    </>
  );
}

export default App;
