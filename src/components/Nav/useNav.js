import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * When the location changes, i.e. when the route changes,
 * the menu is closed, if it's open.
 *
 * @param {function} setMenuOpen - Sets menuOpen state.
 */
export default function useNav(setMenuOpen) {
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location, setMenuOpen]);
}
