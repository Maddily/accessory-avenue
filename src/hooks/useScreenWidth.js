import { useEffect } from 'react';

/**
 * A hook responsible for setting menuOpen state to false
 * if it's open when the screen is resized to 500px or higher.
 *
 * @param {boolean} menuOpen - Indicates if the dropdown menu is open
 * @param {function(boolean)} setMenuOpen - Sets menuOpen state
 */
export default function useScreenResize(menuOpen, setMenuOpen) {
  useEffect(() => {
    function handleResize() {
      window.innerWidth >= 500 && menuOpen && setMenuOpen(false);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen, setMenuOpen]);
}
